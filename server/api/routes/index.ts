import { response, Router } from "express";
import { getCoinAction}  from '../../actions/coinsAction'

const router = Router();

router.get('/',async (request, response)=>{
    try {
        //Recebendo parametro da requisicao 
        //url = localhost:3003/?coin='rubro'        
        const listCoins = await getCoinAction();
        const nameCoin = request.query.coin;    

        if(listCoins){
            if(nameCoin){
                const filteredElements = listCoins.filter(element => element.coin == nameCoin);
                response.json(filteredElements)
            }else{
                response.json(listCoins)
            }
        }else{
            console.log("Erro ao receber lista na requisicao get");
        }
        
    } catch (error) {
        console.log(`Erro ao solicitar informacoes: ${error}`);
    }
});

export { router } 