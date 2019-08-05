import { Router } from 'express';
import UserController from '../controllers/user.controller';

const UserRouter: Router = Router();

UserRouter
  .get('/', UserController.info)
  .post('/', UserController.register)
  .post('/auth', UserController.auth);

export default UserRouter;
