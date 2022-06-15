
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getAuth} from  "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxie_10cDu0G_EV7PL2t5LAhEsrGfxYmQ",
  authDomain: "plib-4bad7.firebaseapp.com",
  projectId: "plib-4bad7",
  storageBucket: "plib-4bad7.appspot.com",
  messagingSenderId: "945563201683",
  appId: "1:945563201683:web:ea7dfbcf3db5895f4a1d66",
  measurementId: "G-XQG7W5YNHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default module = auth;
