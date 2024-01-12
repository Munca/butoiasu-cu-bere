import {
  getAuth,
  createUserWithEmailAndPassword,
  User,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase.config";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

export const auth = getAuth(app);
export const db = getFirestore();

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<User> => {
  return (await createUserWithEmailAndPassword(auth, email, password)).user;
};

export const createUserDocumentFromAuth = async (
  user: User,
  displayName?: string
) => {
  if (!user) {
    return;
  }
  const userDocRef = doc(db, "users", user.uid);
  const snapshot = await getDoc(userDocRef);

  const { email } = user;

  if (!snapshot.exists()) {
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName: displayName,
        email: email,
        createdAt: createdAt,
      });
    } catch (err: any) {
      console.log(err);
    }
  }
  return userDocRef;
};

export const signInUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<User> => {
  return (await signInWithEmailAndPassword(auth, email, password)).user;
};

export const onAuthStateChangedListener = (callback: any) => {
  onAuthStateChanged(auth, callback);
};

export const signOutUser = async () => {
  await signOut(auth);
};
