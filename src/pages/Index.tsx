import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ServerStats from "@/components/ServerStats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Features />
      <ServerStats />
      <Footer />
    </div>
  );
};

export default Index;
