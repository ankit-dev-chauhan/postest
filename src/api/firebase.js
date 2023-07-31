import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCS6DiysWcKN3mrlx0K-aav6EHFOurvAg8",
    authDomain: "garnetlanee-efd8f.firebaseapp.com",
    projectId: "garnetlanee-efd8f",
    storageBucket: "garnetlanee-efd8f.appspot.com",
    messagingSenderId: "579215317585",
    appId: "1:579215317585:web:d7efdf3f18fbc03c17b670",
    measurementId: "G-P0FLH5WYV6"
};

//____________Initialize Firebase

const app = initializeApp(firebaseConfig)
export const firebaseDb = getFirestore(app)

export const Messagin = getDocs(collection(firebaseDb, "Messaging"));
// export const MsgGroups = db.collection("Groups");
// export const firebaseDb = db;