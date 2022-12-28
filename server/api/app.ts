import express from 'express';
import cors from 'cors';
import logers from 'morgan';

import { router } from './routes/index';


//Criando app aqui
const app = express();

app.use(express.json());
app.use(cors());
app.use(logers('dev'));


//Integrando endpoints
app.use('/', router)




//Exportando app
export { app };
