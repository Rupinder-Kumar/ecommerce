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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShop = await userRef.get()

    if(!snapShop.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user: ", error.message)
        }
    }

    return userRef;
  } 

  firebase.initializeApp(config);


  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);

      const batch = firestore.batch();

      objectsToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef, obj);
      });

     return await batch.commit();

  }

  export const convertCollectionsSnapshotToMap = (collections) => {
      const transFormedCollection = collections.docs.map(docSnapshot => {
          const { title, items } = docSnapshot.data();

          return {
            routeName: encodeURI(title.toLowerCase()),
            id: docSnapshot.id,
            title,
            items
          }

      })

      return transFormedCollection.reduce((accumulator, collection) => {
          accumulator[collection.title.toLowerCase()] = collection;
          return accumulator;
      }, {});
  }

  export const getCurrentUser = () => {
      return new Promise((resolve, reject) => {
          const unsubscribe = auth.onAuthStateChanged(userAuth => {
              unsubscribe();
              resolve(userAuth)
          }, reject)
      })
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
  export default firebase;