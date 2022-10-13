


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBj-a6-lS-GdN3cgbOZncszvURhkipdP78",
    authDomain: "clonin.firebaseapp.com",
    projectId: "clonin",
    storageBucket: "clonin.appspot.com",
    messagingSenderId: "533193936537",
    appId: "1:533193936537:web:1bf61376268aab7771f208"
  };
  
const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp)
const auth = getAuth(FirebaseApp);
export {
  db,auth
}
