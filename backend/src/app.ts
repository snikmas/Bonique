import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from '../config/db';
import morgan from 'morgan';


connectDB();

console.log(" mongo_uri: ", process.env.MONGO_URI)
const app = express();

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`port:${PORT} ${process.env.NODE_ENV}`));