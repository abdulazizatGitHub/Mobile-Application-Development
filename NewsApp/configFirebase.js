// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS3oAAyI1Woul8Av09hN4nOlJLwuBOQzU",
  authDomain: "trendspot-058.firebaseapp.com",
  projectId: "trendspot-058",
  storageBucket: "trendspot-058.appspot.com",
  messagingSenderId: "560398627317",
  appId: "1:560398627317:web:9f143cb468fc9839c630bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore(app);
export const auth = getAuth(app);
export default db;