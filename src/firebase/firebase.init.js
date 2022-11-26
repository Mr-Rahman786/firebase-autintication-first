// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA86IejoXkJgGtVv33bNx3UdlG5YeTJyE4",
  authDomain: "email-passworr-auth.firebaseapp.com",
  projectId: "email-passworr-auth",
  storageBucket: "email-passworr-auth.appspot.com",
  messagingSenderId: "58507494788",
  appId: "1:58507494788:web:8d75b0ae8472eef3c589d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;