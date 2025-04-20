import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FilterOptions } from "@/types/college";
import { indianCities } from "@/data/cities";
import { Search, X } from "lucide-react";

interface FilterSidebarProps {
  onFilterChange: (filters: FilterOptions) => void;
}

export function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    type: undefined,
    city: undefined,
    state: undefined,
    minMarks: undefined,
    maxFees: undefined,
  });
  
  const [citySearch, setCitySearch] = useState("");
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  
  const uniqueStates = Array.from(new Set(indianCities.map(city => city.state))).sort();
  
  const filteredCities = indianCities
    .filter(city => city.name.toLowerCase().includes(citySearch.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));
  
  const collegeTypes = ["IIT", "NIT", "Medical", "Private", "State", "Deemed"];
  
  const handleCityToggle = (cityName: string) => {
    if (selectedCities.includes(cityName)) {
      setSelectedCities(selectedCities.filter(c => c !== cityName));
    } else {
      setSelectedCities([...selectedCities, cityName]);
    }
  };
  
  const handleStateToggle = (stateName: string) => {
    const citiesInState = indianCities
      .filter(city => city.state === stateName)
      .map(city => city.name);
      
    const allCitiesSelected = citiesInState.every(city => selectedCities.includes(city));
    
    if (allCitiesSelected) {
      setSelectedCities(selectedCities.filter(city => !citiesInState.includes(city)));
    } else {
      const newCities = citiesInState.filter(city => !selectedCities.includes(city));
      setSelectedCities([...selectedCities, ...newCities]);
    }
  };
  
  const handleTypeToggle = (type: string) => {
    const currentTypes = filters.type || [];
    
    if (currentTypes.includes(type as any)) {
      setFilters({
        ...filters,
        type: currentTypes.filter(t => t !== type) as any[]
      });
    } else {
      setFilters({
        ...filters,
        type: [...currentTypes, type] as any[]
      });
    }
  };
  
  const handleApplyFilters = () => {
    onFilterChange({
      ...filters,
      city: selectedCities.length > 0 ? selectedCities : undefined
    });
  };
  
  const handleResetFilters = () => {
    setFilters({
      type: undefined,
      city: undefined,
      state: undefined,
      minMarks: undefined,
      maxFees: undefined,
    });
    setSelectedCities([]);
    setCitySearch("");
  };
  
  return (
    <div className="w-full lg:w-72 bg-white border border-neutral-200 rounded-lg p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-neutral-900">Filters</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleResetFilters}
          className="h-8 text-neutral-500 hover:text-neutral-700"
        >
          Reset
        </Button>
      </div>
      
      <Accordion type="multiple" defaultValue={["collegeType", "location", "marks", "fees"]} className="space-y-2">
        <AccordionItem value="collegeType" className="border border-neutral-200 rounded-md px-3">
          <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
            College Type
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-3">
            <div className="space-y-2">
              {collegeTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`type-${type}`} 
                    checked={(filters.type || []).includes(type as any)}
                    onCheckedChange={() => handleTypeToggle(type)}
                  />
                  <Label htmlFor={`type-${type}`} className="text-sm cursor-pointer">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="location" className="border border-neutral-200 rounded-md px-3">
          <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
            Location
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-3">
            <div className="mb-3 relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-neutral-400" size={16} />
              <Input
                placeholder="Search cities..."
                className="pl-8 text-sm"
                value={citySearch}
                onChange={(e) => setCitySearch(e.target.value)}
              />
              {citySearch && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-400"
                  onClick={() => setCitySearch("")}
                >
                  <X size={14} />
                </Button>
              )}
            </div>
            
            <div className="space-y-1 max-h-40 overflow-y-auto pr-1">
              {uniqueStates.map((state: string) => (
                <div key={state} className="mb-2">
                  <div className="flex items-center mb-1">
                    <Checkbox 
                      id={`state-${state}`} 
                      checked={indianCities
                        .filter(city => city.state === state)
                        .every(city => selectedCities.includes(city.name))
                      }
                      onCheckedChange={() => handleStateToggle(state)}
                    />
                    <Label htmlFor={`state-${state}`} className="ml-2 text-sm font-medium cursor-pointer">
                      {state}
                    </Label>
                  </div>
                  
                  <div className="ml-6 space-y-1">
                    {filteredCities
                      .filter(city => city.state === state)
                      .map((city) => (
                        <div key={city.name} className="flex items-center">
                          <Checkbox 
                            id={`city-${city.name}`} 
                            checked={selectedCities.includes(city.name)}
                            onCheckedChange={() => handleCityToggle(city.name)}
                          />
                          <Label htmlFor={`city-${city.name}`} className="ml-2 text-xs cursor-pointer">
                            {city.name}
                          </Label>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="marks" className="border border-neutral-200 rounded-md px-3">
          <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
            Minimum Marks
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-3">
            <div className="px-2">
              <Slider
                defaultValue={[70]}
                max={100}
                step={1}
                onValueChange={(value) => setFilters({...filters, minMarks: value[0]})}
              />
              <div className="flex justify-between mt-2 text-xs text-neutral-500">
                <span>0%</span>
                <span>{filters.minMarks || 70}%</span>
                <span>100%</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="fees" className="border border-neutral-200 rounded-md px-3">
          <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
            Maximum Fees (Lakhs/Year)
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-3">
            <div className="px-2">
              <Slider
                defaultValue={[10]}
                max={20}
                step={0.5}
                onValueChange={(value) => setFilters({...filters, maxFees: value[0] * 100000})}
              />
              <div className="flex justify-between mt-2 text-xs text-neutral-500">
                <span>₹0</span>
                <span>₹{filters.maxFees ? (filters.maxFees/100000) : 10} L</span>
                <span>₹20 L</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Button 
        onClick={handleApplyFilters}
        className="w-full mt-4 bg-college-600 hover:bg-college-700"
      >
        Apply Filters
      </Button>
    </div>
  );
}
