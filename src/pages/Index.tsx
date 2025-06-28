import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PhobiaShowcase from "@/components/PhobiaShowcase";
import GameFeatures from "@/components/GameFeatures";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PhobiaShowcase />
      <GameFeatures />
    </div>
  );
};

export default Index;
