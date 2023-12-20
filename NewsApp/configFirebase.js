import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCS3oAAyI1Woul8Av09hN4nOlJLwuBOQzU",
  authDomain: "trendspot-058.firebaseapp.com",
  projectId: "trendspot-058",
  storageBucket: "trendspot-058.appspot.com",
  messagingSenderId: "560398627317",
  appId: "1:560398627317:web:9f143cb468fc9839c630bc"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;