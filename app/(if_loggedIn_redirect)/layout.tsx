"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthentication } from "@/store/auth";
import { useEffect } from "react";
import { auth } from "@/app/firebase/config";
import { getCustomToken } from "@/lib/services/authentication";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const setCurrentUser = useAuthentication((state) => state.setCurrentUser);
  const params = useSearchParams();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user && user.uid) {
        const tempObj = {
          name: user.displayName!,
          email: user.email!,
          uid: user.uid,
          image: user.photoURL ?? "",
          providerId: user.providerData[0].providerId,
        };
        if (params.get("via_extension")) {
          const token = await user.getIdToken();
          const customToken = await getCustomToken(token);

          router.replace(`/?custom_token=${customToken}`);
        } else {
          router.replace("/");
          setCurrentUser(tempObj);
        }
      }
    });
  }, []);

  return <>{children}</>;
}
