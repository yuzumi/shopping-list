import express, { Application } from 'express';
import config from 'config';
import mongoose from 'mongoose';

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
