import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA9xzGWOZsQvt1-pdYyZEmFxTVdGNobhI8",
  authDomain: "reactproject-letmeask.firebaseapp.com",
  databaseURL: "https://reactproject-letmeask-default-rtdb.firebaseio.com",
  projectId: "reactproject-letmeask",
  storageBucket: "reactproject-letmeask.appspot.com",
  messagingSenderId: "231631207463",
  appId: "1:231631207463:web:dca26c39ff3d70ed61a202"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const database = firebase.database();
export {firebase, auth, database}