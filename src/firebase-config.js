import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzEqIteGZm6E2sHSYhCTr-Vu1jN5y5RTM",
  authDomain: "blogsite-d3aae.firebaseapp.com",
  projectId: "blogsite-d3aae",
  storageBucket: "blogsite-d3aae.appspot.com",
  messagingSenderId: "518609409550",
  appId: "1:518609409550:web:915382ff492c7d625b4e5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()