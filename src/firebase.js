import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm99tAUQbgfnAU9-zt54Tae1P0nC5UEXE",
  authDomain: "slack-clone-23df2.firebaseapp.com",
  projectId: "slack-clone-23df2",
  storageBucket: "slack-clone-23df2.appspot.com",
  messagingSenderId: "199255205950",
  appId: "1:199255205950:web:82daeed1865ec3e623096f",
  measurementId: "G-ECM5NYWFX7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
