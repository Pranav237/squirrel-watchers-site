// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9AS_92eW9MN7AR4BYa6g9nCvEO7iFQ2s",
  authDomain: "squirrel-watchers-site.firebaseapp.com",
  projectId: "squirrel-watchers-site",
  storageBucket: "squirrel-watchers-site.appspot.com",
  messagingSenderId: "428356743031",
  appId: "1:428356743031:web:e6dd945478074724c1fb72",
  measurementId: "G-YJ7YGCQJ49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);

export {
  db,
  storage,
  ref,
  uploadBytes,
  deleteObject,
  collection,
  addDoc,
  getDownloadURL
};
