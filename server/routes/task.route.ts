import express, { Request, Response, Router } from 'express';
import { body, validationResult } from 'express-validator';
import isAuthenticated from '../middlewares/isAuthenticated';
import Task, { TaskModel } from '../models/task.model';

const router: Router = express.Router();

//create a todaytask
router.post(
  '/today',
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
      const userId = res?.locals?.userId;
      const data: TaskModel = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.json({
          error: errors.array()[0].msg,
        });
      } else {
        const task = await Task.create({
          title: data?.title,
          description: data?.description,
          userId: userId,
          isTodayTask: true,
          isInboxTask: false,
          isWeeklyTask: false,
        });
        res.json(task);
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//get all todaytasks
router.get('/today', isAuthenticated, async (req: Request, res: Response) => {
  try {
    const userId = res?.locals?.userId;
    const tasks = await Task.find({
      userId: userId,
      isTodayTask: true,
      completed: false,
    });
    res.json(tasks);
  } catch (error: any) {
    res.json({
      error: error.message,
    });
  }
});

//delete a todaytask
router.delete(
  '/today/:id',
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const userId = res?.locals?.userId;
      const task = await Task.findOne({
        _id: req?.params?.id,
        userId: userId,
        isTodayTask: true,
      });
      if (task === null) {
        res.json({
          error: 'Task not found',
        });
      } else {
        await Task.findByIdAndDelete(req?.params?.id);
        res.json('Task deleted');
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//update a todaytask
router.put(
  '/today/:id',
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
      const data: TaskModel = req.body;
      const userId = res?.locals?.userId;
      const task = await Task.findOne({
        _id: req?.params?.id,
        userId: userId,
        isTodayTask: true,
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
          await Task.findByIdAndUpdate(req?.params?.id, {
            title: data?.title,
            description: data?.description,
          });
          const updatedTask = await Task.findOne({
            _id: req?.params?.id,
            userId: userId,
            isTodayTask: true,
          });
          res.json(updatedTask);
        }
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//complete a todaytask
router.put(
  '/today/complete/:id',
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const userId = res?.locals?.userId;
      const task = await Task.findOne({
        _id: req?.params?.id,
        userId: userId,
        isTodayTask: true,
        completed: false,
      });
      if (task === null) {
        res.json({
          error: 'Task not found',
        });
      } else {
        await Task.findByIdAndUpdate(req?.params?.id, {
          completed: true,
        });
        const tasksboi = await Task.findById(req?.params?.id)
        res.json(tasksboi)
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//create a inboxtask
router.post(
  '/inbox',
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
      const userId = res?.locals?.userId;
      const data: TaskModel = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.json({
          error: errors.array()[0].msg,
        });
      } else {
        const task = await Task.create({
          title: data?.title,
          description: data?.description,
          userId: userId,
          isTodayTask: false,
          isInboxTask: true,
          isWeeklyTask: false,
        });
        res.json(task);
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//get all inboxtasks
router.get('/inbox', isAuthenticated, async (req: Request, res: Response) => {
  try {
    const userId = res?.locals?.userId;
    const tasks = await Task.find({
      userId: userId,
      isInboxTask: true,
      completed: false
    });
    res.json(tasks);
  } catch (error: any) {
    res.json({
      error: error.message,
    });
  }
});

//delete a inboxtask
router.delete(
  '/inbox/:id',
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const userId = res?.locals?.userId;
      const task = await Task.findOne({
        _id: req?.params?.id,
        userId: userId,
        isInboxTask: true,
      });
      if (task === null) {
        res.json({
          error: 'Task not found',
        });
      } else {
        await Task.findByIdAndDelete(req?.params?.id);
        res.json('Task deleted');
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//update a inboxtask
router.put(
  '/inbox/:id',
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
      const data: TaskModel = req.body;
      const userId = res?.locals?.userId;
      const task = await Task.findOne({
        _id: req?.params?.id,
        userId: userId,
        isInboxTask: true,
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
          await Task.findByIdAndUpdate(req?.params?.id, {
            title: data?.title,
            description: data?.description,
          });
          const updatedTask = await Task.findOne({
            _id: req?.params?.id,
            userId: userId,
            isInboxTask: true,
          });
          res.json(updatedTask);
        }
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//complete a inboxtask
router.put(
  '/inbox/complete/:id',
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const userId = res?.locals?.userId;
      const task = await Task.findOne({
        _id: req?.params?.id,
        userId: userId,
        isInboxTask: true,
        completed: false,
      });
      if (task === null) {
        res.json({
          error: 'Task not found',
        });
      } else {
        await Task.findByIdAndUpdate(req?.params?.id, {
          completed: true,
        });
        const tasksboi = await Task.findById(req?.params?.id)
        res.json(tasksboi)
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);


//create a weeklytask
router.post(
  '/weekly',
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
      const userId = res?.locals?.userId;
      const data: TaskModel = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.json({
          error: errors.array()[0].msg,
        });
      } else {
        const task = await Task.create({
          title: data?.title,
          description: data?.description,
          userId: userId,
          isTodayTask: false,
          isInboxTask: false,
          isWeeklyTask: true,
        });
        res.json(task);
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//get all weeklytasks
router.get('/weekly', isAuthenticated, async (req: Request, res: Response) => {
  try {
    const userId = res?.locals?.userId;
    const tasks = await Task.find({
      userId: userId,
      isWeeklyTask: true,
      completed: false
    });
    res.json(tasks);
  } catch (error: any) {
    res.json({
      error: error.message,
    });
  }
});

//delete a weeklytask
router.delete(
  '/weekly/:id',
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const userId = res?.locals?.userId;
      const task = await Task.findOne({
        _id: req?.params?.id,
        userId: userId,
        isWeeklyTask: true,
      });
      if (task === null) {
        res.json({
          error: 'Task not found',
        });
      } else {
        await Task.findByIdAndDelete(req?.params?.id);
        res.json('Task deleted');
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//update a weeklytask
router.put(
  '/weekly/:id',
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
      const data: TaskModel = req.body;
      const userId = res?.locals?.userId;
      const task = await Task.findOne({
        _id: req?.params?.id,
        userId: userId,
        isWeeklyTask: true,
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
          await Task.findByIdAndUpdate(req?.params?.id, {
            title: data?.title,
            description: data?.description,
          });
          const updatedTask = await Task.findOne({
            _id: req?.params?.id,
            userId: userId,
            isWeeklyTask: true,
          });
          res.json(updatedTask);
        }
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//complete a weeklytask
router.put(
  '/weekly/complete/:id',
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const userId = res?.locals?.userId;
      const task = await Task.findOne({
        _id: req?.params?.id,
        userId: userId,
        isWeeklyTask: true,
        completed: false,
      });
      if (task === null) {
        res.json({
          error: 'Task not found',
        });
      } else {
        await Task.findByIdAndUpdate(req?.params?.id, {
          completed: true,
        });
        const tasksboi = await Task.findById(req?.params?.id)
        res.json(tasksboi)
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

export default router;
