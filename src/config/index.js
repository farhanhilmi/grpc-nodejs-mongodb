import dotenv from 'dotenv';

dotenv.config();

const config = {
  DATABASE_URI: process.env.DATABASE_URI,
};

export default config;
