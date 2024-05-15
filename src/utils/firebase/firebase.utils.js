import { initializeApp } from "firebase/app";

// IMPORT AUTHENTICATION FUNCTIONALITY
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// IMPORT DATABASE FUNCTIONALITY
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6FmigAuWrizYaRLj3aZa2JaocuN2tV2Q",
  authDomain: "e-sh-271c5.firebaseapp.com",
  projectId: "e-sh-271c5",
  storageBucket: "e-sh-271c5.appspot.com",
  messagingSenderId: "543570926842",
  appId: "1:543570926842:web:431b27288458a1c1e37d43",
};

const app = initializeApp(firebaseConfig);

// AUTH TOKEN
export const auth = getAuth();

// DATABASE TOKEN
export const db = getFirestore();

// DATABASE FUNCTIONALITY

// a collection of documents
// users is a collection, categories is a collection
// we pass categories into the collectionKey in the next function.
// this sets up the structure of retreiving data. not retreiving the data itself
// write to the database, a batch of writes, writes the objects to the db
// each object is the title, items objects in the shop-data.js file
// we have to create a document reference for each object

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

// the "categories" is the collection key from above
// q returns an object from querying the db, collection, collectionkey
// querySnapshot gets the documents of q, which queries the collectionKey in the DB
// access documents off of querySnapshot as an array.
// reduce over snapshots to build a structure
// accumulator is number of snapshots being accumulated, docSnapshot is what we add
// destructure values from the data of the docSnapshot.
// targets the title of each accumulating turn, making it the item. the title is the item
// return the item that is a title on each accumulation
// the category map is the structure we just built

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title] = items;
    return acc;
  }, {});

  return categoryMap;
};

// create a document for the user
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

// AUTHENTICATION FUNCTIONALITY
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
