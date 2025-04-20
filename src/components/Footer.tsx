
import { Link } from "react-router-dom";
import { School } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <School className="h-6 w-6 text-college-400" />
              <span className="text-xl font-bold text-white ml-2">EduFind</span>
            </div>
            <p className="max-w-xs">
              Making college selection easier for students across India
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-medium mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/colleges" className="hover:text-white">Colleges</Link></li>
                <li><Link to="/compare" className="hover:text-white">Compare</Link></li>
                <li><Link to="/eligibility" className="hover:text-white">Eligibility</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">College Types</h3>
              <ul className="space-y-2">
                <li><Link to="/colleges" className="hover:text-white">IITs</Link></li>
                <li><Link to="/colleges" className="hover:text-white">NITs</Link></li>
                <li><Link to="/colleges" className="hover:text-white">Medical</Link></li>
                <li><Link to="/colleges" className="hover:text-white">Private</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Email Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} EduFind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
