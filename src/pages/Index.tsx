import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PatientShowcase from "@/components/PatientShowcase";
import MedicalFeatures from "@/components/GameFeatures";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PatientShowcase />
      <MedicalFeatures />
    </div>
  );
};

export default Index;
