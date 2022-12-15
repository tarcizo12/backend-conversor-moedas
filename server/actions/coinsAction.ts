import { addCoinAcess } from "../dataAcess/coinsAcess";


export async function addCoinsAction(coin: string, value: number) {
    try {
        const response = await addCoinAcess(coin,value);
        return response.id;
    } catch (error) {
        console.log("Falha na transformação");
    }
}


async function teste(){
    const teste = await addCoinsAction('teste',100)
    console.log(`moeda cadastrada em ${teste}`)
}

teste()