import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FilterSidebar } from "@/components/FilterSidebar";
import { CollegeCard } from "@/components/CollegeCard";
import { College, FilterOptions } from "@/types/college";
import { colleges } from "@/data/colleges";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Grid3X3, Menu, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Colleges = () => {
  const [filters, setFilters] = useState<FilterOptions>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const filteredColleges = colleges.filter((college) => {
    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (!college.name.toLowerCase().includes(query) && 
          !college.city.toLowerCase().includes(query) &&
          !college.state.toLowerCase().includes(query) &&
          !college.type.toLowerCase().includes(query)) {
        return false;
      }
    }
    
    // College type filter
    if (filters.type && filters.type.length > 0) {
      if (!filters.type.includes(college.type)) {
        return false;
      }
    }
    
    // City filter
    if (filters.city && filters.city.length > 0) {
      if (!filters.city.includes(college.city)) {
        return false;
      }
    }
    
    // Minimum marks filter
    if (filters.minMarks !== undefined) {
      if (college.cutoffMarks.general > filters.minMarks) {
        return false;
      }
    }
    
    // Maximum fees filter
    if (filters.maxFees !== undefined) {
      const totalFees = college.fees.tuition + (college.fees.hostel || 0) + (college.fees.other || 0);
      if (totalFees > filters.maxFees) {
        return false;
      }
    }
    
    return true;
  });
  
  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };
  
  const clearFilters = () => {
    setFilters({});
    setSearchQuery("");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Find Colleges</h1>
            <p className="text-neutral-600 mt-1">Browse and filter from our database of top colleges in India</p>
          </div>
          
          <div className="mt-4 md:mt-0 w-full md:w-auto flex gap-2">
            <div className="relative flex-grow md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
              <Input 
                type="text" 
                placeholder="Search colleges..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-64"
              />
            </div>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="hidden md:flex"
            >
              {viewMode === "grid" ? <Menu size={18} /> : <Grid3X3 size={18} />}
            </Button>
            <Button 
              variant={showFilters ? "default" : "outline"}
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <SlidersHorizontal size={18} className="mr-2" />
              Filters
            </Button>
          </div>
        </div>
        
        {Object.keys(filters).length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {filters.type && filters.type.map((type) => (
              <Badge key={type} variant="secondary" className="bg-college-100 text-college-800 hover:bg-college-200">
                {type}
              </Badge>
            ))}
            
            {filters.city && filters.city.map((city) => (
              <Badge key={city} variant="secondary" className="bg-neutral-100 text-neutral-800 hover:bg-neutral-200">
                {city}
              </Badge>
            ))}
            
            {filters.minMarks && (
              <Badge variant="secondary" className="bg-neutral-100 text-neutral-800 hover:bg-neutral-200">
                Min Marks: {filters.minMarks}%
              </Badge>
            )}
            
            {filters.maxFees && (
              <Badge variant="secondary" className="bg-neutral-100 text-neutral-800 hover:bg-neutral-200">
                Max Fees: ₹{(filters.maxFees/100000).toFixed(1)} Lakhs
              </Badge>
            )}
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilters}
              className="text-neutral-500 hover:text-neutral-700 h-6"
            >
              Clear All
            </Button>
          </div>
        )}
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-72 sticky top-24 h-fit`}>
            <FilterSidebar onFilterChange={handleFilterChange} />
          </div>
          
          <div className="flex-grow">
            {filteredColleges.length > 0 ? (
              <>
                <p className="text-neutral-600 mb-4">
                  Showing {filteredColleges.length} colleges
                </p>
                
                <div className={`grid ${viewMode === "grid" ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
                  {filteredColleges.map((college) => (
                    <CollegeCard key={college.id} college={college} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="mx-auto w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-neutral-400" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">No Colleges Found</h3>
                <p className="text-neutral-600 mb-6">Try adjusting your filters or search query</p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colleges;
