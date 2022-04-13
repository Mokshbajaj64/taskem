import express, { Request, Response, Router } from 'express';
import { body, validationResult } from 'express-validator';
import User, { UserModel } from '../models/user.model';
import { omit } from 'lodash';
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';
import isAuthenticated from '../middlewares/isAuthenticated';

const router: Router = express.Router();

//register
router.post(
  '/register',
  body('username')
    .trim()
    .exists()
    .withMessage('username is required')
    .isLength({
      min: 4,
      max: 20,
    })
    .withMessage('username must be between 4 and 20 characters'),
  body('email')
    .trim()
    .exists()
    .withMessage('email is required')
    .isEmail()
    .withMessage('email must be valid'),
  body('password')
    .trim()
    .exists()
    .withMessage('password is required')
    .isLength({
      min: 8,
      max: 20,
    })
    .withMessage('password must be between 8 and 20 characters'),
  async (req: Request, res: Response) => {
    try {
      const data: UserModel = req.body;
      const userbyemail = await User.findOne({
        email: data?.email,
      });
      const userbyusername = await User.findOne({
        username: data?.username,
      });
      if (userbyemail || userbyusername) {
        res.json({
          error: 'Username or email already exists',
        });
      } else {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          res.json({
            error: errors.array()[0].msg,
          });
        } else {
          const user = await User.create({
            username: data?.username,
            email: data?.email,
            password: data?.password,
          });
          const userboi = omit(user.toJSON(), ['password', 'email']);
          res.json(userboi);
        }
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//login
router.post(
  '/login',
  body('email')
    .trim()
    .exists()
    .withMessage('email is required')
    .isEmail()
    .withMessage('email must be valid'),
  body('password')
    .trim()
    .exists()
    .withMessage('password is required')
    .isLength({
      min: 8,
      max: 20,
    })
    .withMessage('password must be between 8 and 20 characters'),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.json({
          error: errors.array()[0].msg,
        });
      } else {
        const body: UserModel = req.body;
        const user = await User.findOne({
          email: body?.email,
        });
        if (!user) {
          res.json({
            error: 'Wrong Credentials',
          });
        } else {
          const hashedpass = await bcrypt.compare(body.password, user.password);
          if (!hashedpass) {
            res.json({
              error: 'Wrong Credentials',
            });
          } else {
            const userboi = omit(user.toJSON(), ['password', 'email']);
            const token = jwt.sign(
              {
                userId: userboi?._id,
              },
              process.env.JWT_SECRET as Secret,
              {
                expiresIn: '69h',
              }
            );
            res.json(token);
          }
        }
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

//get profile without email / get others profile
router.get('/profile/:userId', async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req?.params?.userId);
    const userboi = omit(user?.toJSON(), ['password', 'email']);
    res.json(userboi);
  } catch (error: any) {
    res.json({
      error: error.message,
    });
  }
});

//get profile with email / get your profile
router.get('/profile', isAuthenticated, async (req: Request, res: Response) => {
  try {
    const user = await User.findById(res?.locals?.userId);
    const userboi = omit(user?.toJSON(), ['password']);
    res.json(userboi);
  } catch (error: any) {
    res.json({
      error: error.message,
    });
  }
});

//update profile
router.put(
  '/update_profile',
  body('username')
    .trim()
    .exists()
    .withMessage('username is required')
    .isLength({
      min: 4,
      max: 20,
    })
    .withMessage('username must be between 4 and 20 characters'),
  body('email')
    .trim()
    .exists()
    .withMessage('email is required')
    .isEmail()
    .withMessage('email must be valid'),
  body('bio')
    .trim()
    .isLength({
      min: 1,
      max: 100,
    })
    .withMessage('bio must be between 1 and 100 characters'),
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const data: UserModel = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.json({
          error: errors.array()[0].msg,
        });
      } else {
        await User.findByIdAndUpdate(res?.locals?.userId, {
          username: data?.username,
          email: data?.email,
          bio: data?.bio,
        });
        const userboi = await User.findById(res?.locals?.userId);
        const userboi2 = omit(userboi?.toJSON(), ['password']);
        res.json(userboi2);
      }
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  }
);

export default router;
