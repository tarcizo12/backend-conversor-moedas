import firebase  from "firebase/app";
import "firebase/firestore"
import { DAO } from "../classes/DAO"


export class CoinDao implements DAO{
    instance: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;

    constructor(instance: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>){
        this.instance = instance;
    }
    get(): void {
        //TODO
    }
    set(id: String, coin: String, value: Number): void {
        try {
            
        } catch (err) {
            console.log("Erro ao atualizar moeda")
            throw(err)
        }
    }
    delete(id: String): void {
        //TODO
    }

    async add(coin: string, value: number): Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>>{
        try{
            const response = await this.instance.add({ coin: coin , value:value})
            return response
        }catch(err){
            console.log("Erro ao cadastrar moeda")
            throw(err)
        } 
    }

}

