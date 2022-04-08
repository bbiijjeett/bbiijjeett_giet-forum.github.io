import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC49EAk78UKLOxK2U4sHnwqJovn-HAXR_M",
    authDomain: "giet-forum.firebaseapp.com",
    projectId: "giet-forum",
    storageBucket: "giet-forum.appspot.com",
    messagingSenderId: "674949531506",
    appId: "1:674949531506:web:6abf04625a93b85464ffeb",
    measurementId: "G-S1EK3RZEKY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleprovider = new firebase.auth.GoogleAuthProvider();
const facebookprovider = new firebase.auth.FacebookAuthProvider();
const db = firebaseApp.firestore();

export { auth, googleprovider,facebookprovider };
export default db;