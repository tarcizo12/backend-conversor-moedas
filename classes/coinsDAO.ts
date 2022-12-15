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
        //TODO
    }
    delete(id: String): void {
        //TODO
    }

    add(coin: string, value: number): void{
        this.instance.add({ coin: coin , value:value})
        .then((res) =>{
            console.log(`Moeda cadastrada no id ${res.id}`)
        })
    }

}

