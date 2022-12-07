import express from 'express';
import cors from 'cors' 
import { parseStringPromise } from 'xml2js'
import fetch from 'node-fetch'

const app = express();

app.use(cors())

app.use(express.json())

app.get('/moedas', async (req, res) =>{

const url = "https://economia.awesomeapi.com.br/xml/available/uniq"
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'txt/xml',
      },
    })
    const xmlInJson = await parseStringPromise(await response.text())
    const coinList = Object.keys(xmlInJson.xml).map((key) => `${key} - ${xmlInJson.xml[key][0]}`)

    res.send(coinList)
  } catch (e) {
    console.log(e)
    res.status(500).send('Erro ao buscar lista de moedas')
  }
}
);

app.listen(3003, () => 
console.log('Servidor iniciado na porta 3003')
);