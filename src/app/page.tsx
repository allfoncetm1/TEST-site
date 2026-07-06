import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import CeilingTypes from "@/components/CeilingTypes";
import Process from "@/components/Process";
import Calculator from "@/components/Calculator";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <CeilingTypes />
        <Process />
        <Calculator />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
