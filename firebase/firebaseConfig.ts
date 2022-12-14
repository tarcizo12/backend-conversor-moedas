import firebase  from "firebase/app";
import "firebase/firestore"
require('dotenv').config();


const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
