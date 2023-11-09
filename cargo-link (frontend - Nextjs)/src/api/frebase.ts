// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlZzQS2D-uQE_EUAJCBihz8vPBK7VwhT4",
  authDomain: "cargo-link-20329.firebaseapp.com",
  projectId: "cargo-link-20329",
  storageBucket: "cargo-link-20329.appspot.com",
  messagingSenderId: "104413126992",
  appId: "1:104413126992:web:e3b61b024cb4180c914c55",
  measurementId: "G-20G0GNZY8D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
