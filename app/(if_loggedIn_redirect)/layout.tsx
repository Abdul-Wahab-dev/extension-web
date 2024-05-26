"use client";
import { useRouter } from "next/navigation";
import { useAuthentication } from "@/store/auth";
import { useEffect } from "react";
import { auth } from "@/app/firebase/config";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const setCurrentUser = useAuthentication((state) => state.setCurrentUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user && user.uid) {
        const tempObj = {
          name: user.displayName!,
          email: user.email!,
          uid: user.uid,
          image: user.photoURL ?? "",
          providerId: user.providerData[0].providerId,
        };
        router.replace("/");
        setCurrentUser(tempObj);
      }
    });
  }, []);

  return <>{children}</>;
}
