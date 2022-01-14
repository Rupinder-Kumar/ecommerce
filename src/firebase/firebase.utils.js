import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyAO016Wg9Ct6zs-pTOkHl9DVvlbVvXi2W4",
    authDomain: "ecommerce-rupi.firebaseapp.com",
    projectId: "ecommerce-rupi",
    storageBucket: "ecommerce-rupi.appspot.com",
    messagingSenderId: "252889350958",
    appId: "1:252889350958:web:1a03216e812bd62d4070bf",
    measurementId: "G-5ZZGS6SHS0"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;