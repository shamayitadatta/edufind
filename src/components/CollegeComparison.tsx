
import { useState } from "react";
import { College } from "@/types/college";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Award, IndianRupee, GraduationCap, Users, Star, Building, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CollegeComparisonProps {
  colleges: College[];
  onRemove: (collegeId: string) => void;
}

export function CollegeComparison({ colleges, onRemove }: CollegeComparisonProps) {
  const [activeTab, setActiveTab] = useState("overview");
  
  if (colleges.length === 0) {
    return (
      <Card className="border-dashed border-2 border-neutral-300 bg-neutral-50">
        <CardContent className="p-8 text-center">
          <GraduationCap className="mx-auto h-12 w-12 text-neutral-400 mb-4" />
          <h3 className="text-lg font-medium text-neutral-700 mb-2">No Colleges Selected</h3>
          <p className="text-neutral-500 mb-4">Add colleges to compare them side by side</p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="border-neutral-200">
      <CardHeader className="bg-college-50 border-b border-neutral-200">
        <CardTitle className="text-college-900 flex items-center justify-between">
          <span>Compare Colleges</span>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
            <TabsList className="bg-white/50">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="academics">Academics</TabsTrigger>
              <TabsTrigger value="fees">Fees & Admissions</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 divide-y divide-neutral-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
          {colleges.map((college) => (
            <div key={college.id} className="relative">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => onRemove(college.id)}
                className="absolute top-2 right-2 h-6 w-6 text-neutral-400 hover:text-neutral-700"
              >
                <X size={14} />
              </Button>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg text-college-900 mb-1 pr-6">{college.name}</h3>
                <p className="text-sm text-neutral-600 mb-3">{college.city}, {college.state}</p>
                
                <Badge variant="outline" className="bg-college-50 text-college-800 border-college-200 mb-4">
                  {college.type}
                </Badge>
                
                {activeTab === "overview" && (
                  <div className="space-y-4 mt-4">
                    <ComparisonItem icon={<Award size={16} />} label="Ranking">
                      #{college.ranking} in India
                    </ComparisonItem>
                    
                    <ComparisonItem icon={<Users size={16} />} label="Acceptance Rate">
                      {college.acceptanceRate}%
                    </ComparisonItem>
                    
                    <ComparisonItem icon={<Building size={16} />} label="Facilities">
                      <ul className="list-disc list-inside text-sm">
                        {college.facilities.slice(0, 3).map((facility, i) => (
                          <li key={i}>{facility}</li>
                        ))}
                      </ul>
                    </ComparisonItem>
                  </div>
                )}
                
                {activeTab === "academics" && (
                  <div className="space-y-4 mt-4">
                    <ComparisonItem icon={<BookOpen size={16} />} label="Courses Offered">
                      <ul className="list-disc list-inside text-sm">
                        {college.courses.map((course, i) => (
                          <li key={i}>{course}</li>
                        ))}
                      </ul>
                    </ComparisonItem>
                  </div>
                )}
                
                {activeTab === "fees" && (
                  <div className="space-y-4 mt-4">
                    <ComparisonItem icon={<IndianRupee size={16} />} label="Tuition Fees">
                      ₹{(college.fees.tuition/100000).toFixed(2)} Lakhs/year
                    </ComparisonItem>
                    
                    {college.fees.hostel && (
                      <ComparisonItem icon={<IndianRupee size={16} />} label="Hostel Fees">
                        ₹{(college.fees.hostel/100000).toFixed(2)} Lakhs/year
                      </ComparisonItem>
                    )}
                    
                    <ComparisonItem icon={<Star size={16} />} label="Cutoff Marks">
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                        <div className="text-xs">
                          <span className="font-medium">General:</span> {college.cutoffMarks.general}%
                        </div>
                        <div className="text-xs">
                          <span className="font-medium">OBC:</span> {college.cutoffMarks.obc}%
                        </div>
                        <div className="text-xs">
                          <span className="font-medium">SC:</span> {college.cutoffMarks.sc}%
                        </div>
                        <div className="text-xs">
                          <span className="font-medium">ST:</span> {college.cutoffMarks.st}%
                        </div>
                      </div>
                    </ComparisonItem>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {colleges.length < 3 && (
            <div className="flex items-center justify-center p-6 bg-neutral-50">
              <div className="text-center">
                <GraduationCap className="mx-auto h-10 w-10 text-neutral-300 mb-2" />
                <p className="text-sm text-neutral-500">
                  {colleges.length === 1 ? "Add 2 more colleges" : "Add 1 more college"} 
                  <br />to compare
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

interface ComparisonItemProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

function ComparisonItem({ icon, label, children }: ComparisonItemProps) {
  return (
    <div>
      <div className="flex items-center text-neutral-700 mb-1">
        <span className="mr-2">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className="ml-6 text-neutral-800">
        {children}
      </div>
    </div>
  );
}
