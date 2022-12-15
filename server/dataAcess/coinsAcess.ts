import { db } from "../../firebase/firebaseConfig"
import { CoinDao } from "../../classes/coinsDAO"

const coins = db.collection('moedas')

let coinsDAo = new CoinDao(coins)

coinsDAo.add("USA",4.18)