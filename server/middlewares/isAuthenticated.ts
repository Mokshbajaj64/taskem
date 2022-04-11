import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    try {
      const decoded = jwt.verify(
        authHeader as string,
        process.env.JWT_SECRET as Secret
      );
      // @ts-ignore
      res.locals.userId = decoded.userId;
      next();
    } catch (error: any) {
      res.json({
        error: error.message,
      });
    }
  } else {
    res.status(401).send('Unauthorized');
  }
};

export default isAuthenticated;
