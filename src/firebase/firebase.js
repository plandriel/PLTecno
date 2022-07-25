// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3zXOzDm_4Z5-lITmyjTsOOCATzOiDZGg",
  authDomain: "tecnopl.firebaseapp.com",
  projectId: "tecnopl",
  storageBucket: "tecnopl.appspot.com",
  messagingSenderId: "701986414450",
  appId: "1:701986414450:web:ab88069577361030b187eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);