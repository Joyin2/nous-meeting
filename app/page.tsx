import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Features from "./components/Features";
import Integrations from "./components/Integrations";
import Security from "./components/Security";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Integrations />
        <Security />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
