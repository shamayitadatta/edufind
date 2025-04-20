
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, School, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <School className="h-8 w-8 text-college-600" />
            <Link to="/" className="text-2xl font-bold text-college-900">EduFind</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-neutral-700 hover:text-college-700 font-medium">
              Home
            </Link>
            <Link to="/colleges" className="text-neutral-700 hover:text-college-700 font-medium">
              Colleges
            </Link>
            <Link to="/compare" className="text-neutral-700 hover:text-college-700 font-medium">
              Compare
            </Link>
            <Link to="/eligibility" className="text-neutral-700 hover:text-college-700 font-medium">
              Eligibility Check
            </Link>
            <Link to="/about" className="text-neutral-700 hover:text-college-700 font-medium">
              About
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
              <Input 
                type="text" 
                placeholder="Search colleges..." 
                className="pl-10 pr-4 py-2 w-64 rounded-full bg-gray-50 focus-visible:ring-college-500"
              />
            </div>
            <Button variant="default" className="bg-college-600 hover:bg-college-700">Login</Button>
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 space-y-4 bg-white border-t">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
            <Input 
              type="text" 
              placeholder="Search colleges..." 
              className="pl-10 pr-4 py-2 w-full rounded-full bg-gray-50"
            />
          </div>
          <div className="space-y-3">
            <Link to="/" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 rounded-md">
              Home
            </Link>
            <Link to="/colleges" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 rounded-md">
              Colleges
            </Link>
            <Link to="/compare" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 rounded-md">
              Compare
            </Link>
            <Link to="/eligibility" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 rounded-md">
              Eligibility Check
            </Link>
            <Link to="/about" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 rounded-md">
              About
            </Link>
          </div>
          <Button className="w-full bg-college-600 hover:bg-college-700">Login</Button>
        </div>
      )}
    </div>
  );
}
