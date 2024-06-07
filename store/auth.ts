import { create } from "zustand";
import {
  loginWithGoogle,
  logout,
  loginWithEmail,
  signupWithEmailAndPassword,
} from "@/lib/services/authentication";

interface AuthStoreType {
  isAuthenticated: boolean;
  user: {
    [keys: string]: string;
  } | null;
  error: {
    [keys: string]: string;
  } | null;
  googleLogin: () => Promise<void>;
  signOut: () => Promise<void>;
  setCurrentUser: (authUser: { [keys: string]: string }) => void;
  loginWithemailAndPasswrd: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (
    email: string,
    password: string,
    name: string
  ) => Promise<void>;
}

export const useAuthentication = create<AuthStoreType>((set) => ({
  isAuthenticated: false,
  user: null,
  error: null,
  googleLogin: async () => {
    const authUser = await loginWithGoogle();
    if (authUser && authUser.uid) {
      const tempObj = {
        name: authUser.displayName,
        email: authUser.email,
        uid: authUser.uid,
        image: authUser.photoURL ?? "",
        providerId: authUser.providerData[0].providerId,
      };
      set({ user: tempObj, isAuthenticated: true });
    }
  },
  signOut: async () => {
    await logout();
    set({ user: null, isAuthenticated: false });
  },
  setCurrentUser: (authUser) => {
    set({ user: authUser });
  },
  loginWithemailAndPasswrd: async (email, password) => {
    try {
      const authUser = await loginWithEmail(email, password);
      if (authUser && authUser.uid) {
        const tempObj = {
          name: authUser.displayName,
          email: authUser.email,
          uid: authUser.uid,
          image: authUser.photoURL ?? "",
          providerId: authUser.providerData[0].providerId,
        };
        set({ user: tempObj, isAuthenticated: true });
      }
    } catch (error) {
      console.log(error.message, "inside the catch block authStore");
    }
  },
  signUpWithEmail: async (email: string, password: string, name: string) => {
    try {
      const user = await signupWithEmailAndPassword(email, password, name);
    } catch (error) {
      set({ error: error });
    }
  },
}));
