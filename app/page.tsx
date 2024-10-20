import Faqs from "@/components/home/faqs";
import Features from "@/components/home/features";
import Footer from "@/components/layout/Footer";
import Future from "@/components/home/future";
import Hero from "@/components/home/hero";
import Navbar from "@/components/layout/Navbar";
import Pricing from "@/components/home/pricing";
import { auth } from "@/lib/helper/auth";
import Extension from "@/components/extension";
export default function Home() {
  let tempToken = "";
  let user = null;
  if (auth.isAuthenticated()) {
    const { token, decoded } = auth.verifyToken();
    user = decoded;
    tempToken = token;
  }

  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Intro /> */}
      <Features />
      <Future />
      <Pricing />
      <Faqs />
      <Footer />
      <Extension token={tempToken} />
    </main>
  );
}
