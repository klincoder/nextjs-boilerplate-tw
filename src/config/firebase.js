// Import resources
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
  applyActionCode,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  orderBy,
  query,
  getDocs,
  collectionGroup,
  where,
  addDoc,
  serverTimestamp,
  deleteDoc,
  limit,
  increment,
  arrayUnion,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// DEFINE VARIABLES
// FIREBASE DEV CONFIG
const firebaseDev = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_DEV_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DEV_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_DEV_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_DEV_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_DEV_APP_ID,
};

// FIREBASE PROD CONFIG
const firebaseProd = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PROD_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_PROD_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROD_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_PROD_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_PROD_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_PROD_APP_ID,
};

// FIREBASE CONFIG
const firebaseConfig =
  process.env.NODE_ENV === "production" ? firebaseProd : firebaseDev;

// INITIALZE APP
// Check app initialzation
const app = !getApps().length ? initializeApp(firebaseDev) : getApp();

// Debug
//console.log("Firebase: ", app.options);

// DEFINE FIREBASE SERVICES
const fireDB = getFirestore(app);
const fireAuth = getAuth(app);
const fireStorage = getStorage(app);

// Export
export {
  fireDB,
  fireAuth,
  fireStorage,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  collection,
  doc,
  getDoc,
  onAuthStateChanged,
  setDoc,
  updateProfile,
  sendPasswordResetEmail,
  onSnapshot,
  orderBy,
  query,
  getDocs,
  collectionGroup,
  where,
  addDoc,
  serverTimestamp,
  verifyPasswordResetCode,
  confirmPasswordReset,
  applyActionCode,
  deleteDoc,
  limit,
  increment,
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  arrayUnion,
};
