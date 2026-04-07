import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import CategoriesSection from "@/components/CategoriesSection";
import WhySection from "@/components/WhySection";
import EnergySection from "@/components/EnergySection";
import ExperienceSection from "@/components/ExperienceSection";
import ProcessSection from "@/components/ProcessSection";
import CriteriaSection from "@/components/CriteriaSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <CategoriesSection />
      <WhySection />
      <EnergySection />
      <ExperienceSection />
      <ProcessSection />
      <CriteriaSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
