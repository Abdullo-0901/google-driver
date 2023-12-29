import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "diver-fab6e.firebaseapp.com",
  projectId: "diver-fab6e",
  storageBucket: "diver-fab6e.appspot.com",
  messagingSenderId: "597656270074",
  appId: "1:597656270074:web:b35856dd8b6a512ab64543",
  measurementId: "G-SKPW85CMHE",
};
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

!getApps().length ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore();
const storage = getStorage();
export { db, storage };
