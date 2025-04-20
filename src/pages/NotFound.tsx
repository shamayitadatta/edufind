
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { School } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-neutral-50 p-4">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-college-100 text-college-700 rounded-full mb-6">
            <School className="h-10 w-10" />
          </div>
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">404</h1>
          <p className="text-xl text-neutral-700 mb-6">Oops! This page doesn't exist.</p>
          <p className="text-neutral-600 mb-8">The page you're looking for might have been moved or deleted.</p>
          <Button asChild className="bg-college-600 hover:bg-college-700">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
