import { Request, Response } from 'express';
import ItemModel, { Item } from '../models/item.model';

const ItemController = {
  async get(req: Request, res: Response): Promise<void> {
    try {
      const items: Item[] = await ItemModel.find().sort({ date: -1 });

      res.json(items);
    } catch (error) {}
  },
  async create(req: Request, res: Response): Promise<void> {
    try {
      const newItem: Item = new ItemModel({ ...req.body });

      const savedItem = await newItem.save();

      res.json(savedItem);
    } catch (error) {}
  },
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const deletedItem = await ItemModel.findByIdAndDelete(req.params.id);

      res.json({ deletedItem, success: true });
    } catch (error) {
      res.status(404).json({ success: false });
    }
  }
};

export default ItemController;
