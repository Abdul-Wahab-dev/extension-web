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
  googleLogin: (redirectUrl: string) => Promise<any>;
  signOut: () => Promise<void>;
  setCurrentUser: (authUser: { [keys: string]: string }) => void;
  loginWithemailAndPasswrd: (
    email: string,
    password: string
  ) => Promise<string>;
  signUpWithEmail: (
    email: string,
    password: string,
    name: string
  ) => Promise<boolean>;
}

export const useAuthentication = create<AuthStoreType>((set) => ({
  isAuthenticated: false,
  user: null,
  error: null,
  googleLogin: async (redirectUrl: string) => {
    try {
      set({ error: null });
      const res = await loginWithGoogle(redirectUrl);
      return res;
    } catch (error: any) {
      set({ error: error });
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
      set({ error: null });
      const authUser = await loginWithEmail(email, password);
      console.log({ authUser });
      if (authUser && authUser.user) {
        set({ user: authUser.user, isAuthenticated: true });
        return authUser.token;
      }
    } catch (error: any) {
      set({ error: error });
    }
  },
  signUpWithEmail: async (
    email: string,
    password: string,
    name: string
  ): Promise<boolean> => {
    try {
      set({ error: null });
      const user = await signupWithEmailAndPassword(email, password, name);
      if (user) {
        return true;
      }
      return false;
    } catch (error: any) {
      set({ error: error });
      return false;
    }
  },
}));
