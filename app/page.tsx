"use client";
import { useEffect } from "react";
import Faqs from "@/components/home/Faqs";
import Features from "@/components/home/Features";
import Footer from "@/components/layout/Footer";
import Future from "@/components/home/Future";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";
import Pricing from "@/components/home/Pricing";
export default function Home() {
  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://flexisaves.toolefy.com/api/v1/users/test"
      );
      if (res.ok) {
        console.log(res);
      }
    })();
  }, []);
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
    </main>
  );
}
