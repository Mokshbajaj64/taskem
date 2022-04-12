import express, { Request, Response, Router } from 'express';
import isAuthenticated from '../middlewares/isAuthenticated';
import Tag, { TagModel } from '../models/tag.model';
import { body, validationResult } from 'express-validator';

const router: Router = express.Router();

//create a tag
router.post(
  '/',
  body('name')
    .trim()
    .exists()
    .withMessage('Tag name is required')
    .isLength({
      min: 1,
      max: 50,
    })
    .withMessage('Tag name must be between 1 and 50 characters'),
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const userId = res?.locals?.userId;
      const data: TagModel = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.json({
          error: errors.array()[0].msg,
        });
      } else {
        const tag = await Tag.create({
          name: data?.name,
          description: data?.description,
          color: data?.color,
          userId: userId,
        });
        res.json(tag);
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//delete a tag
router.delete(
  '/:tagId',
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const userId = res?.locals?.userId;
      const tagId = req?.params?.tagId;
      const tag = await Tag.findOne({
        _id: tagId,
        userId: userId,
      });
      if (tag === null) {
        res.json({
          error: 'Tag not found',
        });
      } else {
        await Tag.findByIdAndDelete(tagId);
        res.json('Tag deleted');
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//get a tag
router.get('/', isAuthenticated, async (req: Request, res: Response) => {
  try {
    const userId = res?.locals?.userId;
    const tags = await Tag.find({
      userId: userId,
    });
    res.json(tags);
  } catch (error: any) {
    res.json({
      error: error.message,
    });
  }
});

//update tag
router.put(
  '/:tagId',
  body('name')
    .trim()
    .exists()
    .withMessage('Tag name is required')
    .isLength({
      min: 1,
      max: 50,
    })
    .withMessage('Tag name must be between 1 and 50 characters'),
  isAuthenticated,
  async (req: Request, res: Response) => {
    const data: TagModel = req.body;
    try {
      const userId = res?.locals?.userId;
      const tagId = req?.params?.tagId;
      const tag = await Tag.findOne({
        _id: tagId,
        userId: userId,
      });
      if (tag === null) {
        res.json({
          error: 'Tag not found',
        });
      } else {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          res.json({
            error: errors.array()[0].msg,
          });
        } else {
          await Tag.findByIdAndUpdate(tagId, {
            name: data?.name,
            description: data?.description,
            color: data?.color,
          });
          const tagboi = await Tag.findById(tagId);
          res.json(tagboi);
        }
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

export default router;
