import firebase from 'firebase' ;

const firebaseConfig = {
  apiKey: "AIzaSyCXSm895lQFyf4Axnx7KJRsYhcCiva_aWA",
  authDomain: "disneyplus-clone-4e5b3.firebaseapp.com",
  projectId: "disneyplus-clone-4e5b3",
  storageBucket: "disneyplus-clone-4e5b3.appspot.com",
  messagingSenderId: "307673589296",
  appId: "1:307673589296:web:606a1edb65164dddf96ff5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig) ;
const db = firebaseApp.firestore() ;
const auth = firebase.auth() ;
const provider = new firebase.auth.GoogleAuthProvider() ; 
const storage = firebase.storage() ;

export {auth , provider , storage} ;
export default db ;