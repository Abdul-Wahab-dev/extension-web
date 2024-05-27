import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/app/firebase/config";
import axios from "axios";

// signin with google
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    provider.setCustomParameters({
      prompt: "select_account ",
    });
    const userCred = await signInWithPopup(auth, provider);
    const user = userCred.user;
    const idToken = await user.getIdToken();

    console.log({ user }, "user{}");
    // Send user data to your backend with ID token
    // const res = await axios.post(
    //   "http://localhost:8000/api/v1/users/login",

    //   {
    //     email: user.email,
    //     uid: user.uid,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${idToken}`,
    //     },
    //   }
    // );

    // console.log({ res }, "{res}");
    return user;
  } catch (err) {
    console.log(err, "{error}");
    return err;
  }
};

// signout

export const logout = async () => {
  await signOut(auth);
};

// login with email
export const loginWithEmail = async (email: string, password: string) => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  const user = res.user;
  return user;
};

export const signupWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;
  return user;
};

export const getCustomToken = async (token: string) => {
  try {
    const res = await axios.get(
      "http://localhost:8000/api/v1/users/custom-token",

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.token;
  } catch (error) {
    throw error;
  }
};
