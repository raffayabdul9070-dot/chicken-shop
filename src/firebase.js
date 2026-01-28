// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGymCO0Mfb7EFg15olmSz3IuzXQkp_x_g",
  authDomain: "chicken-2a6ee.firebaseapp.com",
  projectId: "chicken-2a6ee",
  storageBucket: "chicken-2a6ee.firebasestorage.app",
  messagingSenderId: "1044988636596",
  appId: "1:1044988636596:web:1e1f2405645dc79ee796e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore and helpers
export { db, collection, addDoc };
