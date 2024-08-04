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
export const loginWithGoogle = async (redirectUrl: string) => {
  // const provider = new GoogleAuthProvider();
  try {
    const res = await fetch(
      `https://flexisaves.toolefy.com/api/v1/users/google-login?return_uri=${redirectUrl}`,
      {
        method: "GET",
      }
    );
    if (!res.ok) {
      const response = await res.json();
      const statusCode = response.status || 400;
      const message =
        response.message && response.message.length
          ? response.message
          : response;

      throw new AppError(message, statusCode, response.validation ?? null);
    }
    return await res.json();
  } catch (err) {
    throw err;
  }
};

// signout

export const logout = async () => {
  // await signOut(auth);
};

// login with email
export const loginWithEmail = async (email: string, password: string) => {
  try {
    const res = await fetch(
      "https://flexisaves.toolefy.com/api/v1/users/login",
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://flexisaves.toolefy.com",
        },
        credentials: "include",
        mode: "cors",
      }
    );

    if (!res.ok) {
      const response = await res.json();
      const statusCode = response.status || 400;
      const message =
        response.message && response.message.length
          ? response.message
          : response;

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
    const res = await fetch(
      "https://flexisaves.toolefy.com/api/v1/users/signup",
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password: password,
          name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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
      "https://flexisaves.toolefy.com/api/v1/users/custom-token",

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
