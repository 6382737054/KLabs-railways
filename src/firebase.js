// src/firebase.js

// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration (replace these values with your own)
const firebaseConfig = {
  apiKey: "AIzaSyAyduM4pa8X0E41WzOvyEl1o_Ba94SRVJ4",
  authDomain: "railwaypass-edc47.firebaseapp.com",
  projectId: "railwaypass-edc47",
  storageBucket: "railwaypass-edc47.appspot.com",
  messagingSenderId: "359687355029",
  appId: "1:359687355029:web:bd26939b8e314c0926799c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
