import { addCoinAcess, updateCoinAcess, getCoinAcess } from "../dataAcess/coinsAcess";


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

export async function getCoinAction() {
    try {
        const response = await getCoinAcess();
        const listCoins: any[] = [];
        response.forEach((doc)=>{
            listCoins.push(doc.data())
        })

        return listCoins;
    } catch (error) {
        console.log("Erro ao acesar lista de moedas")
    }
}

//Funcao add
// addCoinsAction("rubro",8.9).then((coin)=>{
//     console.log(`moeda cadastrada em ${coin}`)
//     process.exit();
// })

//Funcao update
// const key = "81fUSndXSeGpPmBzxc6A";
// updateCoinAcess(key, "argentina",2.5).then((res)=>{
//     console.log("Atualizado com sucesso!");
//     process.exit();
// });


//Funcao get
//getCoinAction().then((list)=>{
//     console.log(list);
//     console.log("Lista recebida");
//     process.exit();
// });
