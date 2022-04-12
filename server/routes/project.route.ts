import express, { Request, Response, Router } from 'express';
import isAuthenticated from '../middlewares/isAuthenticated';
import Project, { ProjectModel } from '../models/project.model';
import { body, validationResult } from 'express-validator';

const router: Router = express.Router();

//create a project
router.post(
  '/',
  body('title').exists().withMessage('Title is required'),
  isAuthenticated,
  async (req: Request, res: Response) => {
    const userId = res?.locals?.userId;
    const data: ProjectModel = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(403).json({
        error: errors.array()[0].msg,
      });
    } else {
      await Project.create({
        title: data?.title?.trim(),
        description: data?.description?.trim(),
        color: data?.color?.trim(),
        userId: userId,
      })
        .then((data) => {
          res.status(201).json(data);
        })
        .catch((err) => {
          res.status(500).json({
            error: err.message,
          });
        });
    }
  }
);

//delete a project
router.delete(
  '/:projectId',
  isAuthenticated,
  async (req: Request, res: Response) => {
    const userId = res?.locals?.userId;
    const projectId = req.params.projectId;
    await Project.findById(projectId).then(async (data) => {
      await Project.findOneAndDelete({
        userId: userId,
      }).then(() => {
        res.status(200).json('Project deleted');
      });
      res.status(403).json({
        error: 'You cant delete other projects',
      });
    });
  }
);

export default router;
