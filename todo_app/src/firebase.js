import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({

  apiKey: "AIzaSyAtGuYnxsQKeM86K8gRWMqwDH-XkVQnJ7w",

  authDomain: "tod0-app-op.firebaseapp.com",

  projectId: "tod0-app-op",

  storageBucket: "tod0-app-op.appspot.com",

  messagingSenderId: "810823750324",

  appId: "1:810823750324:web:4af0098d60972b5dca3de1",

  measurementId: "G-V1S97WRW6F"

});
const db = firebaseConfig.firestore();

export default db;