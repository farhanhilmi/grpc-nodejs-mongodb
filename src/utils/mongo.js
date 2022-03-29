import mongoose from 'mongoose';
import config from '../config/index.js';

mongoose.connect(config.DATABASE_URI, {
  useNewUrlParser: true,
});

mongoose.Promise = global.Promise;
mongoose.connection.on('connect', () => {
  console.log('Connected to DB');
});
mongoose.connection.on('error', (err) => {
  console.log(`Mongo connection error: ${err.message}`);
});

export default mongoose;
