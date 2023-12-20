// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC8Ic_DozDqeDLhRZ4VvCjCcZKQQvC-YNg",
  authDomain: "news-5ced9.firebaseapp.com",
  projectId: "news-5ced9",
  storageBucket: "news-5ced9.appspot.com",
  messagingSenderId: "119401833365",
  appId: "1:119401833365:web:d6ae55dcb7a8b32f0d0c9c",
  measurementId: "G-VDN1X7NN27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore(app);
export const auth = getAuth(app);
export default db;