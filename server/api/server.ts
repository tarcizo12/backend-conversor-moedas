import { app } from "./app";
require('dotenv').config();

const porta = process.env.port 

const server = app.listen(porta, ()=> console.log(`Ouvindo na porta ${porta}`));

process.on(`SIGINT`, ()=>{
    server.close();
    console.log(`App finalizado, porta ${porta} foi encerrada`)
});