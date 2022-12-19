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

    async set(id: string,coin: string, value: number): Promise<void> {
        try {
            const body = {
                coin: coin,
                value: value
            }
            const response = await this.instance.doc(id).update(body);
            return response;
        } catch (err) {
            console.log("Erro ao atualizar moeda");
            throw(err);
        }
    }

    delete(id: String): void {
        //TODO
    }

    async add(coin: string, value: number): Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>>{
        try{
            const body = {
                coin: coin,
                value: value
            }
            const response = await this.instance.add(body);
            return response
        }catch(err){
            console.log("Erro ao cadastrar moeda")
            throw(err)
        } 
    }

}

