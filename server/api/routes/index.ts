import { response, Router } from "express";
import { getCoinAction, addCoinsAction}  from '../../actions/coinsAction'

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


router.post('/',async (request , response) => {
    try {
        const bodyRequst = request.body
        
        if (bodyRequst.coin == undefined || bodyRequst.value == undefined) {
            console.log("Faltaram informaçẽs, enviando flag")
            response.status(200).send(false)
        }else {
            const nameCoin = bodyRequst.coin
            const valueCoin = bodyRequst.value
            
            //Realiza envio somente quando a moeda for falsa
            addCoinsAction(nameCoin,valueCoin)
                .then((id)=>console.log(`Moeda salva no id ${id}`))
                .finally(()=>response.status(200).send(true));
            
        }

    }catch (error) {
        response.send(response.statusCode)
    }
    
})

export { router } 