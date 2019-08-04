import { Router } from 'express';
import ItemController from '../controllers/item.controller';

const ItemRouter: Router = Router();

ItemRouter.get('/', ItemController.get)
  .post('/', ItemController.create)
  .delete('/:id', ItemController.delete);

export default ItemRouter;
