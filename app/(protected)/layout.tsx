import { redirect } from "next/navigation";
import { auth } from "@/lib/helper/auth";
import AuthUser from "@/components/auth/AuthUser";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!auth.isAuthenticated()) {
    redirect("/login");
  }

  const user = auth.verifyToken();

  return <AuthUser user={user}>{children}</AuthUser>;
}
