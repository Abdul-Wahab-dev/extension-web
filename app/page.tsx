import Help from "@/components/home/help";
import About from "@/components/home/about";
import Footer from "@/components/layout/Footer";
import Future from "@/components/home/future";
import Hero from "@/components/home/hero";
import Navbar from "@/components/layout/Navbar";
import Pricing from "@/components/home/pricing";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Intro /> */}
<<<<<<< HEAD
      <Features />
      <Future />
      {/* <Pricing /> */}
      <Faqs />
=======
      <About />
      <Pricing />
      <Future />
      <Help />
>>>>>>> 405e92f4e1301cc00add9672c126434f52824662
      <Footer />
    </main>
  );
}
