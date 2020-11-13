import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBQACLOfqS7rPpoD3z4qpMFwj8pZikd5-Y",
    authDomain: "youframe-3ccaa.firebaseapp.com",
    databaseURL: "https://youframe-3ccaa.firebaseio.com",
    projectId: "youframe-3ccaa",
    storageBucket: "youframe-3ccaa.appspot.com",
    messagingSenderId: "789427615502",
    appId: "1:789427615502:web:4a8bcd3431dc9503c1095f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectStorage, projectFirestore, timestamp };