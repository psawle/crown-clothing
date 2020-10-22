import firebase, { initializeApp } from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCqpIW2zgpq7lj8_VI_2cu9A8o3GsOpo38",
    authDomain: "crown-db-8763a.firebaseapp.com",
    databaseURL: "https://crown-db-8763a.firebaseio.com",
    projectId: "crown-db-8763a",
    storageBucket: "crown-db-8763a.appspot.com",
    messagingSenderId: "69062872299",
    appId: "1:69062872299:web:0606d5dfda1c565b6742ae"
}
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => {auth.signInWithPopup(provider)};

export default firebase;