import User from '../models/user.model';
import ProjectTasks, { ProjectTaskModel } from '../models/projecttasks.model';
import { omit } from 'lodash';
import { body, validationResult } from 'express-validator';
import express, { Request, Response, Router } from 'express';
import isAuthenticated from '../middlewares/isAuthenticated';
import Project from '../models/project.model';
const router: Router = express.Router();

//create a projecttask
router.post(
  '/:projectId',
  body('title')
    .trim()
    .exists()
    .withMessage('Title is required')
    .isLength({
      min: 1,
      max: 100,
    })
    .withMessage('Title must be between 1 and 100 characters'),
  isAuthenticated,
  async (req: Request, res: Response) => {
    const { projectId } = req.params;
    try {
      const project = await Project.findById(projectId);
      if (project === null) {
        res.json({
          error: 'Project not found',
        });
      } else {
        const userId = res?.locals?.userId;
        const data: ProjectTaskModel = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          res.json({
            error: errors.array()[0].msg,
          });
        } else {
          const task = await ProjectTasks.create({
            title: data?.title,
            description: data?.description,
            userId: userId,
            projectId: projectId,
          });
          const tasks = await ProjectTasks.find({
            userId: userId,
            projectId: projectId,
            completed: false,
          });
          res.json(tasks);
        }
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

router.get(
  '/:projectId',
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const { projectId } = req.params;
      const userId = res?.locals?.userId;
      const tasks = await ProjectTasks.find({
        userId: userId,
        projectId: projectId,
        completed: false,
      });
      res.json(tasks);
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//delete a task
router.delete(
  '/:projectId/:taskId',
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const { projectId, taskId } = req.params;
      const userId = res?.locals?.userId;
      const task = await ProjectTasks.findOne({
        userId: userId,
        projectId: projectId,
        completed: false,
        _id: taskId,
      });
      if (task === null) {
        res.json({
          error: 'Task not found',
        });
      } else {
        await ProjectTasks.findByIdAndDelete(taskId);
        const tasks = await ProjectTasks.find({
          userId: userId,
          projectId: projectId,
          completed: false,
        });
        res.json(tasks);
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//update a task
router.put(
  '/:projectId/:taskId',
  body('title')
    .trim()
    .exists()
    .withMessage('Title is required')
    .isLength({
      min: 1,
      max: 100,
    })
    .withMessage('Title must be between 1 and 100 characters'),
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const data: ProjectTaskModel = req.body;
      const { projectId, taskId } = req.params;
      const userId = res?.locals?.userId;
      const task = await ProjectTasks.findOne({
        userId: userId,
        projectId: projectId,
        completed: false,
        _id: taskId,
      });
      if (task === null) {
        res.json({
          error: 'Task not found',
        });
      } else {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          res.json({
            error: errors.array()[0].msg,
          });
        } else {
          await ProjectTasks.findByIdAndUpdate(taskId, {
            title: data?.title,
            description: data?.description,
          });
          const tasks = await ProjectTasks.find({
            userId: userId,
            projectId: projectId,
            completed: false,
          });
          res.json(tasks);
        }
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//complete a task
router.put(
  '/:projectId/:taskId/complete',
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const data: ProjectTaskModel = req.body;
      const { projectId, taskId } = req.params;
      const userId = res?.locals?.userId;
      const task = await ProjectTasks.findOne({
        userId: userId,
        projectId: projectId,
        completed: false,
        _id: taskId,
      });
      if (task === null) {
        res.json({
          error: 'Task not found',
        });
      } else {
        await ProjectTasks.findByIdAndUpdate(taskId, {
          completed: true,
        });
        const tasks = await ProjectTasks.find({
          userId: userId,
          projectId: projectId,
          completed: false,
        });
        res.json(tasks);
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//search project tasks
router.get(
  '/:projectId/s/:search',
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const searchboi = new RegExp(req.params.search, 'i');
      const { projectId } = req.params;
      const userId = res?.locals?.userId;
      const tasks = await ProjectTasks.find({
        userId: userId,
        title: searchboi,
        completed: false,
        projectId: projectId,
      });
      res.json(tasks);
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//filter project tasks by time
router.get(
  '/:projectId/f/time',
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const { projectId } = req.params;
      const userId = res?.locals?.userId;
      const tasks = await ProjectTasks.find({
        userId: userId,
        projectId: projectId,
        completed: false,
      }).sort({
        createdAt: -1,
      });
      res.json(tasks);
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//filter project tasks by title
router.get(
  '/:projectId/f/title',
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const { projectId } = req.params;
      const userId = res?.locals?.userId;
      const tasks = await ProjectTasks.find({
        userId: userId,
        projectId: projectId,
        completed: false,
      }).sort({
        title: -1,
      });
      res.json(tasks);
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

export default router;
