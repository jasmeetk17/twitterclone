import firebase from 'firebase';
import {initializeApp} from 'firebase';
import {getFirestore} from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCv_EipsxXh1grGkVUJBkRlKZsIlFDUhys",
    authDomain: "twitterclone-c7b00.firebaseapp.com",
    projectId: "twitterclone-c7b00",
    storageBucket: "twitterclone-c7b00.appspot.com",
    messagingSenderId: "196250422676",
    appId: "1:196250422676:web:ac737b8096d7a4efb99381"
  };
  const firebaseApp=initializeApp(firebaseConfig);
  const db=getFirestore(firebaseApp);
  export default db;
