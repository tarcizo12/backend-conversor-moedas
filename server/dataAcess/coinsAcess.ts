import { db } from "../../firebase/firebaseConfig"
import { CoinDao } from "../../classes/coinsDAO"

const coins = db.collection('moedas')
const coinsDAo = new CoinDao(coins)

export async function addCoinAcess(coin: string, value: number) {
    try {
        return await coinsDAo.add(coin,value);   
    } catch (error) {
        console.log("Falha no acesso")
        throw(error)
    }
}


export async function updateCoinAcess(id: string, coin: string, value: number) {
    try {
        return await coinsDAo.set(id, coin, value);   
    } catch (error) {
        console.log("Falha atualizar moeda");
        throw(error)
    }
}
