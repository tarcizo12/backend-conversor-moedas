import firebase  from "firebase/app";
import "firebase/firestore"

export interface DAO{
    instance: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
    
    get(): void;
    add(coin: String, value: number): Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>>;
    set(id: String,coin: String, value: Number): void;
    delete(id: String): void;

}