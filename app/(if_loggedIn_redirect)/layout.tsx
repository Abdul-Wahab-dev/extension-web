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
  const webUrl = headers().get("x-search-params");
  if (auth.isAuthenticated()) {
    if (webUrl && webUrl.includes("via_extension")) {
      const token = auth.verifyToken();
      redirect(`/?idToken=${token}`);
    } else {
      console.log("redirect");
      redirect("/");
    }
  }
  console.log("hello");
  return <>{children}</>;
}
