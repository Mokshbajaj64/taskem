import express, { Request, Response, Router } from 'express';
import Contact, { ContactModel } from '../models/contact.model';
import { body, validationResult } from 'express-validator';

const router: Router = express.Router();

router.post(
  '/',
  body('username')
    .exists()
    .withMessage('Username is required')
    .isLength({
      min: 4,
      max: 20,
    })
    .withMessage('Username must be between 4 and 20 characters'),
  body('email').isEmail().withMessage('Email must be valid'),
  body('message')
    .exists()
    .withMessage('Message is required')
    .isLength({
      min: 1,
      max: 200,
    })
    .withMessage('Message must be between 1 and 200 characters'),
  async (req: Request, res: Response) => {
    const data: ContactModel = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(403).json({
        error: errors.array()[0].msg,
      });
    } else {
      const contact = new Contact({
        username: data?.username?.trim(),
        email: data?.email?.trim(),
        message: data?.message?.trim(),
      });
      await contact
        .save()
        .then((data: ContactModel) => {
          res.status(201).json({
            data,
          });
        })
        .catch((error) => {
          res.status(403).json({
            error: error.message,
          });
        });
    }
  }
);

export default router;
