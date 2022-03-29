import express from 'express';
import routes from './routes/userRoutes.js';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', routes);

app.listen(5000, () => {
  console.log('Client running at localhost:5000');
});
