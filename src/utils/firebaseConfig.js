// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5K0wgJfHqbHZajnPOuTMs5X2bzxJsxDE",
  authDomain: "ecommerceplatonicalenceria.firebaseapp.com",
  projectId: "ecommerceplatonicalenceria",
  storageBucket: "ecommerceplatonicalenceria.appspot.com",
  messagingSenderId: "1052219228771",
  appId: "1:1052219228771:web:2ffccfce65fb9a56a9ee56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore intialize
const db = getFirestore(app)

export default db