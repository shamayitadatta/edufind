
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CollegeCard } from "@/components/CollegeCard";
import { colleges } from "@/data/colleges";

export function TopColleges() {
  const topColleges = colleges.slice(0, 6);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-3 px-3 py-1 bg-college-50 text-college-800 border-college-200">
            Featured Institutions
          </Badge>
          <h2 className="text-3xl font-bold text-neutral-900 mb-3">
            Discover Leading Colleges
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore some of India's most prestigious educational institutions and find your perfect match
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {topColleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="border-college-200 text-college-700 hover:bg-college-50">
            <Link to="/colleges">
              View All Colleges
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
