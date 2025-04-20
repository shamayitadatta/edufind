
import { Navbar } from "@/components/Navbar";
import { EligibilityChecker } from "@/components/EligibilityChecker";
import { GraduationCap, Clipboard, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { examDefinitions } from "@/types/exam";

const Eligibility = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10 text-center">
          <Badge variant="outline" className="mb-3 px-3 py-1 bg-college-50 text-college-800 border-college-200">
            Find your matches
          </Badge>
          <h1 className="text-3xl font-bold text-neutral-900 mb-3">College Eligibility Checker</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Enter your exam marks and category to instantly check which colleges you are eligible for
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <EligibilityChecker />
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-college-100 p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-college-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">How the Eligibility Checker Works</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="font-medium">JEE Main:</span> 
                    <span>Shows eligible NITs based on your percentile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">JEE Advanced:</span> 
                    <span>Shows eligible IITs based on your marks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">NEET:</span> 
                    <span>Shows eligible Medical colleges based on your marks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">WBJEE:</span> 
                    <span>Shows eligible State and Private colleges in West Bengal</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-college-100 p-3 rounded-full">
                <Clipboard className="h-6 w-6 text-college-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">2024 Cutoff Information</h3>
                <div className="space-y-3 text-neutral-700 text-sm">
                  <div>
                    <p className="font-medium mb-1">JEE Main Percentile Cutoffs:</p>
                    <ul className="grid grid-cols-2 gap-x-4 text-neutral-600">
                      <li>General: {examDefinitions.JEE_MAIN.cutoffs.general}%</li>
                      <li>OBC-NCL: {examDefinitions.JEE_MAIN.cutoffs.obc}%</li>
                      <li>SC: {examDefinitions.JEE_MAIN.cutoffs.sc}%</li>
                      <li>ST: {examDefinitions.JEE_MAIN.cutoffs.st}%</li>
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <p className="font-medium mb-1">JEE Advanced Marks Cutoffs (out of 360):</p>
                    <ul className="grid grid-cols-2 gap-x-4 text-neutral-600">
                      <li>General: {examDefinitions.JEE_ADVANCED.cutoffs.general}</li>
                      <li>OBC/EWS: {examDefinitions.JEE_ADVANCED.cutoffs.obc}</li>
                      <li>SC/ST/PwD: {examDefinitions.JEE_ADVANCED.cutoffs.sc}</li>
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <p className="font-medium mb-1">NEET Marks Cutoffs:</p>
                    <ul className="grid grid-cols-2 gap-x-4 text-neutral-600">
                      <li>General: {examDefinitions.NEET.cutoffs.general}</li>
                      <li>OBC/SC/ST: {examDefinitions.NEET.cutoffs.obc}</li>
                      <li>Gen-PwD: {examDefinitions.NEET.cutoffs["gen-pwd"]}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="mt-8 max-w-5xl mx-auto">
          <Card className="p-6 bg-amber-50 border-amber-200">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-amber-800 mb-1">Important Notice for Candidates</h4>
                <p className="text-sm text-amber-700">
                  The eligibility tool provides approximate information based on the latest available data. 
                  For the most accurate and official cutoffs, always refer to the official websites of respective entrance exams and colleges.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
