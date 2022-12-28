import { response, Router } from "express";
import { getCoinAction}  from '../../actions/coinsAction'

const router = Router();

router.get('/',(request, response)=>{
    getCoinAction().then((list: any)=>{
        response.send(`lista: ${list}`);
    });
    
});

export { router } 