
import { Badge } from "@/components/ui/badge";
import { EligibilityChecker } from "@/components/EligibilityChecker";

export function EligibilitySection() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-3 px-3 py-1 bg-college-50 text-college-800 border-college-200">
            Eligibility
          </Badge>
          <h2 className="text-3xl font-bold text-neutral-900 mb-3">Check Your Eligibility</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Enter your exam marks and instantly see which colleges you qualify for
          </p>
        </div>
        
        <EligibilityChecker />
      </div>
    </section>
  );
}
