import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBG9yZHHLE12bB3yVoxsbjljDha2l4_Wms",
    authDomain: "whatsapp-2-541ce.firebaseapp.com",
    projectId: "whatsapp-2-541ce",
    storageBucket: "whatsapp-2-541ce.appspot.com",
    messagingSenderId: "158765575121",
    appId: "1:158765575121:web:bd1ec490fc6adf5a8e0ef0"
  };

  const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };