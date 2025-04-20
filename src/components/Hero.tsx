
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Search } from "lucide-react";

export function Hero() {
  return (
    <div className="relative">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 min-h-[85vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Your Journey to the
              <span className="text-college-400 block">Perfect College</span>
              Starts Here
            </h1>
            
            <p className="text-xl text-neutral-200 mb-8 max-w-2xl animate-fade-in">
              Explore top colleges across India, check your eligibility, and find your ideal educational path - all in one place.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button asChild size="lg" className="bg-college-600 hover:bg-college-700">
                <Link to="/eligibility">
                  <GraduationCap className="mr-2" />
                  Check Eligibility
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/colleges">
                  <Search className="mr-2" />
                  Explore Colleges
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
