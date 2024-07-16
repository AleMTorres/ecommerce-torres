import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCdl9U4reE6Xf0VZwz3ntNaSpenLf50ek8",
  authDomain: "tienda-3d.firebaseapp.com",
  projectId: "tienda-3d",
  storageBucket: "tienda-3d.appspot.com",
  messagingSenderId: "33523260377",
  appId: "1:33523260377:web:c8f2b26425f7289b5f97c8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)