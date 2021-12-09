// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqRuf2oTwsNbj7wW-wX8sXPJN0U72xAns",
  authDomain: "techtest2-faa1c.firebaseapp.com",
  projectId: "techtest2-faa1c",
  storageBucket: "techtest2-faa1c.appspot.com",
  messagingSenderId: "787475704848",
  appId: "1:787475704848:web:25d95424e32396b74aee95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initalize firestore
const db = getFirestore()

export {
  app,
  db
}