import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCPlFmnKaFKv5nMWSs4l8aX4wxLExB8ZCU",
    authDomain: "booking-dbdb2.firebaseapp.com",
    projectId: "booking-dbdb2",
    storageBucket: "booking-dbdb2.appspot.com",
    messagingSenderId: "1097537769988",
    appId: "1:1097537769988:web:b9d73602f3103058ff9b51"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();




