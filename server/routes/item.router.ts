import { Router } from 'express';
import ItemController from '../controllers/item.controller';
import auth from '../middleware/auth.middleware';

const ItemRouter: Router = Router();

ItemRouter
  .get('/', ItemController.get)
  .post('/', auth, ItemController.create)
  .delete('/:id', auth, ItemController.delete);

export default ItemRouter;
