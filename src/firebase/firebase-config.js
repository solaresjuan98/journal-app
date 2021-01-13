import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEevjDSSSYfxEK31HXNzQ4FichqfZ97Ys",
  authDomain: "react-app-course-34fc8.firebaseapp.com",
  projectId: "react-app-course-34fc8",
  storageBucket: "react-app-course-34fc8.appspot.com",
  messagingSenderId: "131199547804",
  appId: "1:131199547804:web:c1fe0f590f199d460c3059",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
