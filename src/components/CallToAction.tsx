
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Filter } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500673922987-e212871fec22')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your College Journey?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Start exploring colleges, check your eligibility, and take the first step towards your future
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-college-900 hover:bg-neutral-100">
              <Link to="/colleges">
                <BookOpen className="mr-2" /> Browse Colleges
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/compare">
                <Filter className="mr-2" /> Compare Colleges
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
