
import { Building, MapPin, Filter, GraduationCap } from "lucide-react";

interface FeatureBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imagePath: string;
}

function FeatureBox({ icon, title, description, imagePath }: FeatureBoxProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all hover:shadow-lg">
      <div className="absolute inset-0 z-0">
        <img 
          src={imagePath} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          style={{ opacity: 0.1 }}
        />
      </div>
      
      <div className="relative z-10 p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-college-100 text-college-600">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-neutral-900">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-neutral-600">
            Discover the tools and features that make your college selection journey seamless
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureBox 
            icon={<Building />}
            title="Extensive Database"
            description="Access detailed information about top colleges across India"
            imagePath="https://images.unsplash.com/photo-1551038247-3d9af20df552"
          />
          
          <FeatureBox 
            icon={<MapPin />}
            title="Location Search"
            description="Find colleges in your preferred cities and states"
            imagePath="https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
          />
          
          <FeatureBox 
            icon={<Filter />}
            title="Smart Filtering"
            description="Filter colleges by course, fees, and eligibility criteria"
            imagePath="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
          />
          
          <FeatureBox 
            icon={<GraduationCap />}
            title="Eligibility Check"
            description="Instantly check your eligibility for different colleges"
            imagePath="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
          />
        </div>
      </div>
    </section>
  );
}
