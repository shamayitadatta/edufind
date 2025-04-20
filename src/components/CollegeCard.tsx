
import { College } from "@/types/college";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, MapPin, Star, BookOpen, IndianRupee } from "lucide-react";

interface CollegeCardProps {
  college: College;
  onCompare?: (college: College) => void;
  isInComparison?: boolean;
}

export function CollegeCard({ college, onCompare, isInComparison = false }: CollegeCardProps) {
  const totalFees = (college.fees.tuition + (college.fees.hostel || 0) + (college.fees.other || 0));
  
  return (
    <Card className="college-card-shadow college-card-hover h-full flex flex-col border-neutral-200 overflow-hidden">
      <div className="h-36 bg-gradient-to-r from-college-200 to-neutral-200 flex items-center justify-center">
        <GraduationCap className="h-16 w-16 text-college-600" />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold text-college-900">{college.name}</CardTitle>
        </div>
        <div className="flex items-center text-sm text-neutral-600 mt-1">
          <MapPin size={14} className="mr-1" />
          <span>{college.city}, {college.state}</span>
        </div>
        <CardDescription className="flex items-center mt-2">
          <Star className="h-4 w-4 text-amber-500 mr-1 fill-amber-500" />
          <span>Ranking: #{college.ranking}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pb-3">
        <div className="flex flex-wrap gap-1 mb-3">
          <Badge variant="outline" className="bg-college-50 text-college-800 border-college-200">
            {college.type}
          </Badge>
          {college.courses.slice(0, 2).map((course, i) => (
            <Badge key={i} variant="outline" className="bg-neutral-50 text-neutral-700 border-neutral-200">
              {course}
            </Badge>
          ))}
          {college.courses.length > 2 && (
            <Badge variant="outline" className="bg-neutral-50 text-neutral-700 border-neutral-200">
              +{college.courses.length - 2} more
            </Badge>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-neutral-50 p-2 rounded-md">
            <p className="text-xs text-neutral-500">General Cutoff</p>
            <p className="text-sm font-medium">{college.cutoffMarks.general}%</p>
          </div>
          <div className="bg-neutral-50 p-2 rounded-md">
            <p className="text-xs text-neutral-500">Acceptance</p>
            <p className="text-sm font-medium">{college.acceptanceRate}%</p>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-neutral-700 mb-1">
          <BookOpen size={14} className="mr-2" /> 
          <span>{college.courses.slice(0, 3).join(", ")}{college.courses.length > 3 ? "..." : ""}</span>
        </div>
        
        <div className="flex items-center text-sm text-neutral-700">
          <IndianRupee size={14} className="mr-2" />
          <span>₹{(totalFees/100000).toFixed(1)} Lakhs/year</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex gap-2">
        <Button variant="outline" className="w-1/2 border-college-200 text-college-700 hover:bg-college-50">
          Details
        </Button>
        <Button 
          className={`w-1/2 ${isInComparison ? "bg-neutral-700 hover:bg-neutral-800" : "bg-college-600 hover:bg-college-700"}`}
          onClick={() => onCompare && onCompare(college)}
        >
          {isInComparison ? "Remove" : "Compare"}
        </Button>
      </CardFooter>
    </Card>
  );
}
