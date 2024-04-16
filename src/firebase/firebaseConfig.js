import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAwgLi9k-SBLAJmqOc3hXcInTpt9xa4IiA",
  authDomain: "unitrywebsite.firebaseapp.com",
  projectId: "unitrywebsite",
  storageBucket: "unitrywebsite.appspot.com",
  messagingSenderId: "6127024780",
  appId: "1:6127024780:web:7b810d6d0e805863c519a9",
  measurementId: "G-WKR5ZPGV3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);// Initialize Firestore
const storage = getStorage(app); // Initialize Firebase storage

export { app, auth, firestore , storage }; // Export firestore