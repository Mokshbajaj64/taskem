import express, { Request, Response, Router } from 'express';
import isAuthenticated from '../middlewares/isAuthenticated';
import Project, { ProjectModel } from '../models/project.model';
import { body, validationResult } from 'express-validator';

const router: Router = express.Router();

//create a project
router.post(
  '/',
  body('name')
    .trim()
    .exists()
    .withMessage('Project name is required')
    .isLength({
      min: 1,
      max: 50,
    })
    .withMessage('Project name must be between 1 and 50 characters'),
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const userId = res?.locals?.userId;
      const data: ProjectModel = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.json({
          error: errors.array()[0].msg,
        });
      } else {
        const project = await Project.create({
          name: data?.name,
          description: data?.description,
          color: data?.color,
          userId: userId,
        });
        const projects = await Project.find({
          userId: userId,
        });
        res.json(projects);
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//delete a project
router.delete(
  '/:projectId',
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const userId = res?.locals?.userId;
      const projectId = req?.params?.projectId;
      const project = await Project.findOne({
        _id: projectId,
        userId: userId,
      });
      if (project === null) {
        res.json({
          error: 'Project not found',
        });
      } else {
        await Project.findByIdAndDelete(projectId);
        const projects = await Project.find({
          userId: userId,
        });
        res.json(projects);
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//get projects
router.get('/', isAuthenticated, async (req: Request, res: Response) => {
  try {
    const userId = res?.locals?.userId;
    const projects = await Project.find({
      userId: userId,
    });
    res.json(projects);
  } catch (error: any) {
    res.json({
      error: error.message,
    });
  }
});

//update project
router.put(
  '/:projectId',
  body('name')
    .trim()
    .exists()
    .withMessage('Project name is required')
    .isLength({
      min: 1,
      max: 50,
    })
    .withMessage('Project name must be between 1 and 50 characters'),
  isAuthenticated,
  async (req: Request, res: Response) => {
    const data: ProjectModel = req.body;
    try {
      const userId = res?.locals?.userId;
      const projectId = req?.params?.projectId;
      const project = await Project.findOne({
        _id: projectId,
        userId: userId,
      });
      if (project === null) {
        res.json({
          error: 'Project not found',
        });
      } else {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          res.json({
            error: errors.array()[0].msg,
          });
        } else {
          await Project.findByIdAndUpdate(projectId, {
            name: data?.name,
            description: data?.description,
            color: data?.color,
          });
          const projects = await Project.find({
            userId: userId,
          });
          res.json(projects);
        }
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//get a single project
router.get("/:projectId",isAuthenticated,async(req:Request,res:Response) => {
  try {
      const userId = res?.locals?.userId;
      const projectId = req?.params?.projectId;
      const project = await Project.findOne({
        _id: projectId,
        userId: userId,
      });
      if (project === null) {
        res.json({
          error: 'Project not found',
        });
      } else {
        res.json(project)
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
})

export default router;
