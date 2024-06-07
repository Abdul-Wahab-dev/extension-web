import { redirect } from "next/navigation";
import { auth } from "@/lib/helper/auth";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!auth.isAuthenticated()) {
    redirect("/login");
  }

  return <>{children}</>;
}
