import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('ValidateCustomerMiddleware');
    const { authorization } = req.headers;
    if (!authorization)
      return res.status(403).send({ error: 'No authorization token provided' });
    if (authorization === '123') {
      next();
    } else {
      return res
        .status(403)
        .send({ error: 'Invalid authorization token provided' });
    }
  }
}
