"use client";
import React, { useEffect } from "react";
import Faqs from "@/components/home/faqs";
import Features from "@/components/home/features";
import Footer from "@/components/layout/Footer";
import Future from "@/components/home/future";
import Hero from "@/components/home/hero";
import Navbar from "@/components/layout/Navbar";
import Pricing from "@/components/home/pricing";
export default function Home() {
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/test`
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
