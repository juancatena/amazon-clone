import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBXDQQ_TkiWJ4sCBKCstnkiwgrvk3MaWxQ",
  authDomain: "challenge-d58bc.firebaseapp.com",
  databaseURL: "https://challenge-d58bc.firebaseio.com",
  projectId: "challenge-d58bc",
  storageBucket: "challenge-d58bc.appspot.com",
  messagingSenderId: "10822830220",
  appId: "1:10822830220:web:f3351635c0ec2d42bb53a9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
