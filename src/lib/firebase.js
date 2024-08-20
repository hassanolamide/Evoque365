
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "evoque350.firebaseapp.com",
  projectId: "evoque350",
  storageBucket: "evoque350.appspot.com",
  messagingSenderId: "796221372451",
  appId: "1:796221372451:web:2be09f908b0f44565f5996",
  measurementId: "G-DM1H594DKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();;