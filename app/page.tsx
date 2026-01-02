import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardsShowcase from "./components/CardsShowcase";
import Problem from "./components/Problem";
import VideoTutorial from "./components/VideoTutorial";
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
        <CardsShowcase />
        <Problem />
        {/* <Features /> */}
        <VideoTutorial />
        <Integrations />
        <Security />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
