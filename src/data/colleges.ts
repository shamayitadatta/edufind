
import { College } from "@/types/college";
import { iitColleges } from "./collegeTypes/iit";
import { nitColleges } from "./collegeTypes/nit";
import { medicalColleges } from "./collegeTypes/medical";
import { wbjeeColleges } from "./collegeTypes/wbjee";

export const colleges: College[] = [
  ...iitColleges,
  ...nitColleges,
  ...medicalColleges,
  ...wbjeeColleges
];
