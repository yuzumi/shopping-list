import express, { Application } from 'express';
import config from 'config';
import mongoose from 'mongoose';

import ItemRouter from './routes/item.router';
import UserRouter from './routes/user.router';

const app: Application = express();

const port: number = config.get('port') || 5000;

const databaseUri: string = config.get('database.uri');

mongoose
  .connect(databaseUri, {
    useNewUrlParser: true
  })
  .then(() => console.log('Database connected'))
  .catch(error => {
    console.error(error);

    process.exit(1);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/item', ItemRouter);
app.use('/api/user', UserRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
