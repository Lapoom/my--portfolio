
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNb-OsZivFUg3_95vxc_xQTXQ8LEK1u5E",
  authDomain: "my-portfolio-6eeb0.firebaseapp.com",
  projectId: "my-portfolio-6eeb0",
  storageBucket: "my-portfolio-6eeb0.firebasestorage.app",
  messagingSenderId: "740291923306",
  appId: "1:740291923306:web:914ca2e755e6fd6355a913",
  measurementId: "G-SYETQBS3T8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function addContactMessage(data) {
  const docRef = await addDoc(collection(db, "contacts"), {
    ...data,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}
