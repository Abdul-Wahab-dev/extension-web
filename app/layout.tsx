import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "@/lib/helper/auth";
import Extension from "@/components/extension";
import AuthUser from "@/components/auth/AuthUser";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flexisaves",
  description:
    "Flexisaves lets you instantly save and manage web content. Keep your research, articles, and inspiration at your fingertips with just few clicks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let tempToken = "";
  let user = null;
  if (auth.isAuthenticated()) {
    const { token, decoded } = auth.verifyToken();
    user = decoded;
    tempToken = token;
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthUser user={user}>{children}</AuthUser>
        <ToastContainer />
        <Extension token={tempToken} />
      </body>
    </html>
  );
}
