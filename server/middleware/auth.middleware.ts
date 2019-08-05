import { Request, Response, NextFunction } from 'express';
import config from 'config';
import jwt from 'jsonwebtoken';

export default function auth(req: Request, res: Response, next: NextFunction) {
  const token: string | undefined = req.header('x-auth-token');

  if (!token) {
    res.status(401).json({ message: 'No token, authorization denied' });
  } else {
    try {
      const decoded = jwt.verify(token, config.get('jwt.secret'));

      Object.assign(req, { user: decoded });

      next();
    } catch (error) {
      res.status(400).json({ message: 'Token is not valid' });
    }
  }
};

