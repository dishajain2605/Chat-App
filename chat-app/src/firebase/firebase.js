import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhHk7B2USHU5a2GB-CJ4tHPpG90vajVsg",
  authDomain: "chat-app-265a1.firebaseapp.com",
  projectId: "chat-app-265a1",
  storageBucket: "chat-app-265a1.firebasestorage.app",
  messagingSenderId: "1056737046101",
  appId: "1:1056737046101:web:7b7ba37c3ffc7877b02edc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db} ;