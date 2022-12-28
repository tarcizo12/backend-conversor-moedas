import express from 'express';
import cors from 'cors';
import logers from 'morgan';

const app = express();

app.use(express.json());
app.use(cors());
app.use(logers('dev'));

export { app };
