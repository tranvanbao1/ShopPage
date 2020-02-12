import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyAOE0cQE6htw-dEuyvBse1NDsS7aGAZfzg",
    authDomain: "crwn-bao.firebaseapp.com",
    databaseURL: "https://crwn-bao.firebaseio.com",
    projectId: "crwn-bao",
    storageBucket: "crwn-bao.appspot.com",
    messagingSenderId: "95597285493",
    appId: "1:95597285493:web:30e731c1e925a055cfa83c",
    measurementId: "G-K67K8JJ4NN"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;