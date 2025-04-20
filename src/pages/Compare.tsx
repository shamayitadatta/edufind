import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { CollegeComparison } from "@/components/CollegeComparison";
import { CollegeCard } from "@/components/CollegeCard";
import { College } from "@/types/college";
import { colleges } from "@/data/colleges";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Compare = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColleges, setSelectedColleges] = useState<College[]>([]);
  
  const handleAddToComparison = (college: College) => {
    if (selectedColleges.length < 3 && !selectedColleges.some(c => c.id === college.id)) {
      setSelectedColleges([...selectedColleges, college]);
    }
  };
  
  const handleRemoveFromComparison = (collegeId: string) => {
    setSelectedColleges(selectedColleges.filter(college => college.id !== collegeId));
  };
  
  const isInComparison = (collegeId: string) => {
    return selectedColleges.some(college => college.id === collegeId);
  };
  
  const filteredColleges = colleges.filter(college => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      college.name.toLowerCase().includes(query) ||
      college.city.toLowerCase().includes(query) ||
      college.state.toLowerCase().includes(query) ||
      college.type.toLowerCase().includes(query)
    );
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Compare Colleges Side by Side</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Select up to 3 colleges to compare their features, fees, and admission requirements
          </p>
        </div>
        
        <div className="mb-8">
          <CollegeComparison 
            colleges={selectedColleges} 
            onRemove={handleRemoveFromComparison} 
          />
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">Select Colleges to Compare</h2>
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
            <Input 
              type="text" 
              placeholder="Search colleges by name, city, or type..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college) => (
              <CollegeCard 
                key={college.id} 
                college={college} 
                onCompare={handleAddToComparison}
                isInComparison={isInComparison(college.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
