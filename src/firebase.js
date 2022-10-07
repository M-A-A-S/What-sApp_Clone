import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAROU1No2r4p3Rsq4qZRIZbzg7ckJiLiOc",
    authDomain: "whatsapp-clone-ebf32.firebaseapp.com",
    projectId: "whatsapp-clone-ebf32",
    storageBucket: "whatsapp-clone-ebf32.appspot.com",
    messagingSenderId: "790950246589",
    appId: "1:790950246589:web:796ded4b3591717d26dfd4",
    measurementId: "G-LQF7FN7CHN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = getStorage(firebaseApp);

export { provider, auth };
export default db;