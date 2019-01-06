import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dan-mario-plan.firebaseapp.com",
  databaseURL: "https://dan-mario-plan.firebaseio.com",
  projectId: "dan-mario-plan",
  storageBucket: "dan-mario-plan.appspot.com",
  messagingSenderId: "1051423331040"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
