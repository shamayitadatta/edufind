
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { colleges } from "@/data/colleges";
import { College } from '@/types/college';
import { ExamType, examDefinitions } from '@/types/exam';
import { Card } from './ui/card';
import { InfoIcon, MapPin, GraduationCap, School, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from './ui/separator';

const EligibilityChecker = () => {
  const [marks, setMarks] = useState<number | null>(null);
  const [examType, setExamType] = useState<ExamType>('JEE_MAIN');
  const [category, setCategory] = useState<string>('general');
  const [eligibleColleges, setEligibleColleges] = useState<College[]>([]);
  const [cityFilter, setCityFilter] = useState<string>('all-cities');
  const [stateFilter, setStateFilter] = useState<string>('all-states');
  const [showResults, setShowResults] = useState(false);
  const [sortBy, setSortBy] = useState<string>('ranking'); // Default sort by ranking

  const handleMarksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setMarks(isNaN(value) ? null : value);
  };

  const isValidInput = (): boolean => {
    if (marks === null) return false;
    
    // For percentile-based exams
    if (examDefinitions[examType].isPercentile) {
      return marks >= 0 && marks <= 100;
    } 
    // For marks-based exams
    else {
      return marks >= 0 && marks <= examDefinitions[examType].maxMarks;
    }
  };

  const getCollegeTypeByExam = (examType: ExamType): string[] => {
    return examDefinitions[examType].eligibleCollegeTypes;
  };

  const getCitiesForExam = (): string[] => {
    const collegeTypes = getCollegeTypeByExam(examType);
    const examColleges = colleges.filter(college => collegeTypes.includes(college.type));
    
    // Get unique cities
    const cities = [...new Set(examColleges.map(college => college.city))].sort();
    return cities;
  };
  
  const getStatesForExam = (): string[] => {
    const collegeTypes = getCollegeTypeByExam(examType);
    const examColleges = colleges.filter(college => collegeTypes.includes(college.type));
    
    // Get unique states
    const states = [...new Set(examColleges.map(college => college.state))].sort();
    return states;
  };

  const isEligibleBasedOnMarks = (college: College, category: string, inputMarks: number): boolean => {
    // Get cutoff marks from exam definition
    const examInfo = examDefinitions[examType];
    const examCutoff = examInfo.cutoffs[category as keyof typeof examInfo.cutoffs] || examInfo.cutoffs.general;
    
    // Get college specific cutoff
    const collegeCutoff = college.cutoffMarks[category as keyof typeof college.cutoffMarks] || college.cutoffMarks.general;
    
    // For percentile-based exams (higher is better)
    if (examInfo.isPercentile) {
      return inputMarks >= examCutoff;
    } 
    // For marks-based exams
    else {
      // Convert marks to percentage for comparison with college cutoff
      const percentageMarks = (inputMarks / examInfo.maxMarks) * 100;
      return percentageMarks >= collegeCutoff;
    }
  };

  const checkEligibility = () => {
    if (!isValidInput()) {
      alert(`Please enter valid ${examDefinitions[examType].isPercentile ? 'percentile' : 'marks'} between 0 and ${examDefinitions[examType].isPercentile ? '100' : examDefinitions[examType].maxMarks}.`);
      return;
    }

    // Get college types based on exam
    const eligibleCollegeTypes = getCollegeTypeByExam(examType);

    // Filter colleges based on multiple criteria
    const filteredColleges = colleges.filter(college => {
      // Filter by college type based on exam
      if (!eligibleCollegeTypes.includes(college.type)) {
        return false;
      }

      // For WBJEE, only show Kolkata colleges
      if (examType === 'WBJEE' && college.city !== 'Kolkata') {
        return false;
      }

      // For NEET, only show Medical colleges
      if (examType === 'NEET' && college.type !== 'Medical') {
        return false;
      }

      // Apply city filter if selected
      if (cityFilter && cityFilter !== 'all-cities' && college.city !== cityFilter) {
        return false;
      }

      // Apply state filter if selected
      if (stateFilter && stateFilter !== 'all-states' && college.state !== stateFilter) {
        return false;
      }

      // Check if eligible based on marks/percentile
      return isEligibleBasedOnMarks(college, category, marks!);
    });

    // Sort colleges based on selected criteria
    let sortedColleges: College[] = [];
    if (sortBy === 'ranking') {
      sortedColleges = filteredColleges.sort((a, b) => a.ranking - b.ranking);
    } else if (sortBy === 'acceptanceRate') {
      sortedColleges = filteredColleges.sort((a, b) => a.acceptanceRate - b.acceptanceRate);
    } else if (sortBy === 'fees') {
      sortedColleges = filteredColleges.sort((a, b) => a.fees.tuition - b.fees.tuition);
    }
    
    setEligibleColleges(sortedColleges);
    setShowResults(true);
  };

  const resetFilters = () => {
    setCityFilter('all-cities');
    setStateFilter('all-states');
  };

  const handleExamChange = (value: ExamType) => {
    setExamType(value);
    resetFilters();
    setShowResults(false);
  };

  const getInputLabel = () => {
    if (examDefinitions[examType].isPercentile) {
      return "Percentile";
    } else {
      return `Marks (out of ${examDefinitions[examType].maxMarks})`;
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="exam-type">Select Entrance Exam</Label>
            <Select value={examType} onValueChange={(value: ExamType) => handleExamChange(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select exam" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(examDefinitions).map(([key, exam]) => (
                  <SelectItem key={key} value={key}>
                    {exam.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="mt-2 text-sm text-neutral-600 flex items-center gap-1">
              <InfoIcon size={14} />
              <span>{examDefinitions[examType].description}</span>
            </div>
          </div>

          <div>
            <Label htmlFor="location">Filter by State (Optional)</Label>
            <Select value={stateFilter} onValueChange={setStateFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-states">All States</SelectItem>
                {getStatesForExam().map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="location">Filter by City (Optional)</Label>
            <Select value={cityFilter} onValueChange={setCityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-cities">All Cities</SelectItem>
                {getCitiesForExam().map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="marks">
              {getInputLabel()}
            </Label>
            <Input
              type="number"
              id="marks"
              placeholder={`Enter your ${examDefinitions[examType].isPercentile ? 'percentile' : 'marks'} (0-${examDefinitions[examType].isPercentile ? '100' : examDefinitions[examType].maxMarks})`}
              max={examDefinitions[examType].isPercentile ? 100 : examDefinitions[examType].maxMarks}
              min={0}
              step={0.01}
              onChange={handleMarksChange}
            />
            <p className="text-xs text-neutral-500 mt-1">
              {examDefinitions[examType].isPercentile ? 
                `Enter your percentile between 0-100` : 
                `Enter your marks between 0-${examDefinitions[examType].maxMarks}`}
            </p>
          </div>

          <div>
            <Label>Category</Label>
            <RadioGroup defaultValue="general" className="grid grid-cols-2 gap-4 mt-2" onValueChange={setCategory}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="general" id="r1" />
                <Label htmlFor="r1">General</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="obc" id="r2" />
                <Label htmlFor="r2">OBC</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sc" id="r3" />
                <Label htmlFor="r3">SC</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="st" id="r4" />
                <Label htmlFor="r4">ST</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="sortBy">Sort Results By</Label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ranking">Ranking</SelectItem>
                <SelectItem value="acceptanceRate">Acceptance Rate</SelectItem>
                <SelectItem value="fees">Tuition Fees</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button 
          className="w-full bg-college-600 hover:bg-college-700" 
          onClick={checkEligibility}
        >
          Check Eligibility
        </Button>
      </Card>

      <div className={`${!showResults && eligibleColleges.length === 0 ? 'hidden md:flex' : ''} flex-col`}>
        {!showResults && eligibleColleges.length === 0 ? (
          <div className="h-full flex items-center justify-center bg-neutral-50 rounded-lg border border-dashed border-neutral-200 p-8">
            <div className="text-center">
              <GraduationCap className="h-12 w-12 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-600 mb-2">Check Your Eligibility</h3>
              <p className="text-neutral-500 max-w-xs mx-auto">
                Enter your exam details and marks to see which colleges you're eligible for
              </p>
            </div>
          </div>
        ) : (
          <Card className="h-full overflow-hidden flex flex-col">
            <div className="p-4 bg-college-50 border-b border-college-100">
              <h3 className="text-xl font-bold text-college-900 flex items-center">
                <School className="mr-2" size={20} />
                Eligible Colleges ({eligibleColleges.length})
              </h3>
              <p className="text-sm text-college-700 mt-1">
                Based on {examDefinitions[examType].name} {examDefinitions[examType].isPercentile ? 'percentile' : 'score'} and {category} category
              </p>
              {sortBy === 'acceptanceRate' && (
                <p className="text-xs text-college-600 mt-1">
                  Sorted by acceptance rate (most selective first)
                </p>
              )}
            </div>
            
            {eligibleColleges.length > 0 ? (
              <div className="flex-grow overflow-y-auto p-4 space-y-3">
                {eligibleColleges.map(college => (
                  <Card key={college.id} className="p-4 hover:bg-neutral-50 transition-colors duration-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-neutral-800">{college.name}</h4>
                        <div className="flex items-center text-sm text-neutral-600 mt-1">
                          <MapPin size={14} className="mr-1" />
                          <span>{college.city}, {college.state}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-college-50 text-college-800 border-college-200">
                        Rank #{college.ranking}
                      </Badge>
                    </div>
                    
                    <Separator className="my-2" />
                    
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div>
                        <p className="text-xs text-neutral-500">College Type</p>
                        <p className="text-sm font-medium">{college.type}</p>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500">Cutoff ({category})</p>
                        <p className="text-sm font-medium">{
                          category === 'general' ? college.cutoffMarks.general :
                          category === 'obc' ? college.cutoffMarks.obc :
                          category === 'sc' ? college.cutoffMarks.sc :
                          college.cutoffMarks.st
                        }%</p>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500">Acceptance Rate</p>
                        <p className="text-sm font-medium">{(college.acceptanceRate * 100).toFixed(1)}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500">Tuition Fees</p>
                        <p className="text-sm font-medium">₹{college.fees.tuition.toLocaleString()}</p>
                      </div>
                    </div>
                    
                    <div className="mt-2 text-xs text-neutral-600">
                      <span className="font-medium">Courses:</span> {college.courses.join(", ")}
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex-grow flex items-center justify-center p-6">
                <div className="text-center">
                  <Award className="h-12 w-12 text-neutral-300 mx-auto mb-3" />
                  <h4 className="text-lg font-medium text-neutral-700 mb-2">No Eligible Colleges Found</h4>
                  <p className="text-neutral-500 max-w-xs">
                    Try adjusting your marks or category to see more options
                  </p>
                </div>
              </div>
            )}
          </Card>
        )}
      </div>
    </div>
  );
};

export { EligibilityChecker };
