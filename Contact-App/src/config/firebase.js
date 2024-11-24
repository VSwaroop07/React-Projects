// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfd4fntTtPnesUljVJKAY2Xz87S6WYpeY",
  authDomain: "contact-app-f8ea9.firebaseapp.com",
  projectId: "contact-app-f8ea9",
  storageBucket: "contact-app-f8ea9.firebasestorage.app",
  messagingSenderId: "657707449428",
  appId: "1:657707449428:web:2365310cd754f5727d81c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
