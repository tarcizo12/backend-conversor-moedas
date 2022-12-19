import { addCoinAcess, updateCoinAcess } from "../dataAcess/coinsAcess";


export async function addCoinsAction(coin: string, value: number) {
    try {
        const response = await addCoinAcess(coin,value);
        return response.id;
    } catch (error) {
        console.log("Falha na transformação");
    }
}


export async function updateCoinAction(id:string, coin: string, value: number) {
    try {
        const response = await updateCoinAcess(id,coin,value);
        return response;
    } catch (error) {
        console.log("Falha na na atualização");
    }
}

//Funcao add
// addCoinsAction("brl",5.3).then((coin)=>{
//     console.log(`moeda cadastrada em ${coin}`)
//     process.exit();
// })

//Funcao update
const key = "81fUSndXSeGpPmBzxc6A";
updateCoinAcess(key, "argentina",2.5).then((res)=>{
    console.log("Atualizado com sucesso!");
    process.exit();
});

