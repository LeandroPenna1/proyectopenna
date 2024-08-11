
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDSw1ox_lvHbvNnaZiWun6r5GUHOD3fX4M",
  authDomain: "futshop-80525.firebaseapp.com",
  projectId: "futshop-80525",
  storageBucket: "futshop-80525.appspot.com",
  messagingSenderId: "251979469239",
  appId: "1:251979469239:web:ef885d26a588fcbd6c1832"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)