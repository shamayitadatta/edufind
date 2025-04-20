
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { TopColleges } from "@/components/TopColleges";
import { EligibilitySection } from "@/components/EligibilitySection";
import { Features } from "@/components/Features";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <TopColleges />
        <EligibilitySection />
        <Features />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
