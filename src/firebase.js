
import firebase from "firebase";

// initialisation our middleware

const firebaseConfig = {
    apiKey: "AIzaSyBmaDxl4BndLkvyvQn8lQzWVkRz5iczAmA",
    authDomain: "message-test-8552a.firebaseapp.com",
    projectId: "message-test-8552a",
    storageBucket: "message-test-8552a.appspot.com",
    messagingSenderId: "691785405428",
    appId: "1:691785405428:web:b78da2ac24b385802c1fa1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

  // invoking our database
  const db =firebaseApp.firestore();

  // invoking our authentication service

  const auth =firebase.auth();

  // google auth provider setup
  const provider = new firebase.auth.GoogleAuthProvider()

  //exporting our instances so that we can use them any where in our project
    export {auth,provider};
    export default db;