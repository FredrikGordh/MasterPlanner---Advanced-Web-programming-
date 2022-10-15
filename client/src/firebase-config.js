// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkrCNPAxqtYNBfjgBCXcXBkojwavsM7R8",
  authDomain: "masterplanner-410b7.firebaseapp.com",
  databaseURL:
    "https://masterplanner-410b7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "masterplanner-410b7",
  storageBucket: "masterplanner-410b7.appspot.com",
  messagingSenderId: "83476523056",
  appId: "1:83476523056:web:5a876005b9f386c2fe65f5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export default firebase;
