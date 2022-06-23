
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getAuth} from  "firebase/auth"
import { getFirestore } from 'firebase/firestore';
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0IprWdbY2uf_ZNVMxkP80e1CRjmktqmY",
  authDomain: "mobile-fe17f.firebaseapp.com",
  projectId: "mobile-fe17f",
  storageBucket: "mobile-fe17f.appspot.com",
  messagingSenderId: "282878160572",
  appId: "1:282878160572:web:f5d162287e09753f32eab9",
  measurementId: "G-3NW0LXCPGK",
  

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);
export const db = getFirestore(app);

export const RealtimeDb = getDatabase(app);


export default module = auth;
