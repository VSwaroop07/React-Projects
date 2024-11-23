// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD25a2uU1usBulu1hmMMOOSooEEribWlIE",
  authDomain: "contacts-app-e57e4.firebaseapp.com",
  projectId: "contacts-app-e57e4",
  storageBucket: "contacts-app-e57e4.firebasestorage.app",
  messagingSenderId: "177647125242",
  appId: "1:177647125242:web:4800ef2e0bc18aa6f4bf43"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);