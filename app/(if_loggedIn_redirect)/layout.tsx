import { redirect } from "next/navigation";
import { auth } from "@/lib/helper/auth";
import { headers } from "next/headers";
export default function RootLayout({
  children,
  options,
}: Readonly<{
  children: React.ReactNode;
  options: any;
}>) {
  headers().forEach((el) => console.log(el));

  if (auth.isAuthenticated()) {
    redirect("/");
  }

  return <>{children}</>;
}
