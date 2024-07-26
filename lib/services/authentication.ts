// import {
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "@/app/firebase/config";
import axios from "axios";
import AppError from "@/utils/appError";

// signin with google
export const loginWithGoogle = async () => {
  // const provider = new GoogleAuthProvider();
  try {
    // provider.setCustomParameters({
    //   prompt: "select_account ",
    // });
    // const userCred = await signInWithPopup(auth, provider);
    // const user = userCred.user;
    // const idToken = await user.getIdToken();

    // console.log({ user }, "user{}");
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
    return true;
  } catch (err) {
    console.log(err, "{error}");
    return err;
  }
};

// signout

export const logout = async () => {
  // await signOut(auth);
};

// login with email
export const loginWithEmail = async (email: string, password: string) => {
  try {
    const res = await fetch("http://localhost:8000/api/v1/users/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!res.ok) {
      const response = await res.json();
      const statusCode = response.status || 400;
      const message =
        response.message && response.message.length
          ? response.message
          : response;
      console.log({ response });
      throw new AppError(message, statusCode, response.validation ?? null);
    }
    const parsedResult = await res.json();
    return parsedResult;
  } catch (error) {
    console.log(error, "errir in authentication");
    throw error;
  }
};

export const signupWithEmailAndPassword = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const res = await fetch("http://localhost:8000/api/v1/users/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password: password,
        name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const error = await res.json();
      console.log(error);
      throw new Error(error.message);
    }
    const parsedResult = await res.json();
    console.log(parsedResult);

    return parsedResult;
  } catch (error) {
    throw error;
  }
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
