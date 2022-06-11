
import * as firebase from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyAMZzvreMugdBF8nmNqRwWxf6TVJFzM1jw",
  authDomain: "pocket-library-31a42.firebaseapp.com",
  projectId: "pocket-library-31a42",
  storageBucket: "pocket-library-31a42.appspot.com",
  messagingSenderId: "697461920914",
  appId: "1:697461920914:web:248d503835518392f7824b",
  measurementId: "G-3W9315GWPK"
};

let app;
if(firebase.getApps.length ===0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app("Pocket Library");
}

const auth = firebase.auth();
 export {auth};

//const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);