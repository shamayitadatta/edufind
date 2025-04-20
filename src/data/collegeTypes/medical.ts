
import { College } from "@/types/college";

export const medicalColleges: College[] = [
  {
    id: "aiims-delhi",
    name: "All India Institute of Medical Sciences, Delhi",
    type: "Medical",
    city: "Delhi",
    state: "Delhi",
    cutoffMarks: {
      general: 90,
      obc: 85,
      sc: 80,
      st: 75
    },
    ranking: 1,
    fees: {
      tuition: 1350,
      hostel: 240,
      other: 25000
    },
    courses: ["MBBS", "MD", "MS", "DM", "MCh"],
    acceptanceRate: 0.05,
    facilities: ["Super Specialty Hospital", "Research Labs", "Digital Library"],
    website: "https://www.aiims.edu"
  },
  {
    id: "cmch-vellore",
    name: "Christian Medical College, Vellore",
    type: "Medical",
    city: "Vellore",
    state: "Tamil Nadu",
    cutoffMarks: {
      general: 88,
      obc: 83,
      sc: 78,
      st: 73
    },
    ranking: 2,
    fees: {
      tuition: 150000,
      hostel: 60000,
      other: 40000
    },
    courses: ["MBBS", "BSc Nursing", "MD", "MS"],
    acceptanceRate: 0.08,
    facilities: ["Multi-Specialty Hospital", "Research Center", "Simulation Lab"],
    website: "https://www.cmch-vellore.edu"
  },
  {
    id: "afmc-pune",
    name: "Armed Forces Medical College, Pune",
    type: "Medical",
    city: "Pune",
    state: "Maharashtra",
    cutoffMarks: {
      general: 87,
      obc: 82,
      sc: 77,
      st: 72
    },
    ranking: 3,
    fees: {
      tuition: 50000,
      hostel: 30000,
      other: 20000
    },
    courses: ["MBBS", "MD", "MS", "DM"],
    acceptanceRate: 0.07,
    facilities: ["Military Hospital", "Research Labs", "Sports Facilities"],
    website: "https://www.afmc.nic.in"
  },
  {
    id: "mamc-delhi",
    name: "Maulana Azad Medical College, New Delhi",
    type: "Medical",
    city: "Delhi",
    state: "Delhi",
    cutoffMarks: {
      general: 86,
      obc: 81,
      sc: 76,
      st: 71
    },
    ranking: 4,
    fees: {
      tuition: 45000,
      hostel: 25000,
      other: 15000
    },
    courses: ["MBBS", "MD", "MS"],
    acceptanceRate: 0.10,
    facilities: ["Teaching Hospital", "Research Center", "Library"],
    website: "https://www.mamc.ac.in"
  },
  {
    id: "kmch-manipal",
    name: "Kasturba Medical College, Manipal",
    type: "Medical",
    city: "Manipal",
    state: "Karnataka",
    cutoffMarks: {
      general: 85,
      obc: 80,
      sc: 75,
      st: 70
    },
    ranking: 5,
    fees: {
      tuition: 250000,
      hostel: 75000,
      other: 45000
    },
    courses: ["MBBS", "MD", "MS", "Allied Health"],
    acceptanceRate: 0.12,
    facilities: ["Teaching Hospital", "Research Institute", "Modern Labs"],
    website: "https://manipal.edu/kmc-manipal"
  },
  {
    id: "kgmu-lucknow",
    name: "King George's Medical University, Lucknow",
    type: "Medical",
    city: "Lucknow",
    state: "Uttar Pradesh",
    cutoffMarks: {
      general: 84,
      obc: 79,
      sc: 74,
      st: 69
    },
    ranking: 6,
    fees: {
      tuition: 70000,
      hostel: 35000,
      other: 25000
    },
    courses: ["MBBS", "MD", "MS", "PhD"],
    acceptanceRate: 0.15,
    facilities: ["Super Specialty Hospital", "Research Center", "Library"],
    website: "https://www.kgmu.org"
  },
  {
    id: "grant-medical-mumbai",
    name: "Grant Medical College, Mumbai",
    type: "Medical",
    city: "Mumbai",
    state: "Maharashtra",
    cutoffMarks: {
      general: 83,
      obc: 78,
      sc: 73,
      st: 68
    },
    ranking: 7,
    fees: {
      tuition: 65000,
      hostel: 30000,
      other: 20000
    },
    courses: ["MBBS", "MD", "MS"],
    acceptanceRate: 0.18,
    facilities: ["Teaching Hospital", "Research Labs", "Library"],
    website: "https://www.grantmedicalcollege.org"
  },
  {
    id: "st-johns-bangalore",
    name: "St. John's Medical College, Bengaluru",
    type: "Medical",
    city: "Bengaluru",
    state: "Karnataka",
    cutoffMarks: {
      general: 82,
      obc: 77,
      sc: 72,
      st: 67
    },
    ranking: 8,
    fees: {
      tuition: 200000,
      hostel: 60000,
      other: 40000
    },
    courses: ["MBBS", "MD", "MS", "Nursing"],
    acceptanceRate: 0.20,
    facilities: ["Hospital", "Research Center", "Sports Complex"],
    website: "https://www.stjohns.in"
  },
  {
    id: "ims-bhu",
    name: "Institute of Medical Sciences, BHU, Varanasi",
    type: "Medical",
    city: "Varanasi",
    state: "Uttar Pradesh",
    cutoffMarks: {
      general: 81,
      obc: 76,
      sc: 71,
      st: 66
    },
    ranking: 9,
    fees: {
      tuition: 55000,
      hostel: 25000,
      other: 15000
    },
    courses: ["MBBS", "MD", "MS", "PhD"],
    acceptanceRate: 0.22,
    facilities: ["Hospital", "Research Labs", "Library"],
    website: "https://www.bhu.ac.in/ims"
  },
  {
    id: "madras-medical",
    name: "Madras Medical College, Chennai",
    type: "Medical",
    city: "Chennai",
    state: "Tamil Nadu",
    cutoffMarks: {
      general: 80,
      obc: 75,
      sc: 70,
      st: 65
    },
    ranking: 10,
    fees: {
      tuition: 50000,
      hostel: 20000,
      other: 15000
    },
    courses: ["MBBS", "MD", "MS"],
    acceptanceRate: 0.25,
    facilities: ["Hospital", "Research Center", "Library"],
    website: "https://www.mmc.tn.gov.in"
  },
  {
    id: "jipmer-puducherry",
    name: "JIPMER, Puducherry",
    type: "Medical",
    city: "Puducherry",
    state: "Puducherry",
    cutoffMarks: {
      general: 79,
      obc: 74,
      sc: 69,
      st: 64
    },
    ranking: 11,
    fees: {
      tuition: 45000,
      hostel: 18000,
      other: 12000
    },
    courses: ["MBBS", "MD", "MS", "DM", "MCh"],
    acceptanceRate: 0.28,
    facilities: ["Hospital", "Research Labs", "Library"],
    website: "https://www.jipmer.edu.in"
  },
  {
    id: "lady-hardinge",
    name: "Lady Hardinge Medical College, New Delhi",
    type: "Medical",
    city: "Delhi",
    state: "Delhi",
    cutoffMarks: {
      general: 78,
      obc: 73,
      sc: 68,
      st: 63
    },
    ranking: 12,
    fees: {
      tuition: 40000,
      hostel: 15000,
      other: 10000
    },
    courses: ["MBBS", "MD", "MS"],
    acceptanceRate: 0.30,
    facilities: ["Hospital", "Research Labs", "Library"],
    website: "https://www.lhmc.gov.in"
  },
  {
    id: "seth-gs-medical",
    name: "Seth GS Medical College, Mumbai",
    type: "Medical",
    city: "Mumbai",
    state: "Maharashtra",
    cutoffMarks: {
      general: 77,
      obc: 72,
      sc: 67,
      st: 62
    },
    ranking: 13,
    fees: {
      tuition: 60000,
      hostel: 25000,
      other: 18000
    },
    courses: ["MBBS", "MD", "MS"],
    acceptanceRate: 0.32,
    facilities: ["Hospital", "Research Center", "Library"],
    website: "https://www.gsmc.edu.in"
  },
  {
    id: "ltmmc-mumbai",
    name: "Lokmanya Tilak Municipal Medical College, Mumbai",
    type: "Medical",
    city: "Mumbai",
    state: "Maharashtra",
    cutoffMarks: {
      general: 76,
      obc: 71,
      sc: 66,
      st: 61
    },
    ranking: 14,
    fees: {
      tuition: 55000,
      hostel: 22000,
      other: 15000
    },
    courses: ["MBBS", "MD", "MS"],
    acceptanceRate: 0.35,
    facilities: ["Hospital", "Research Labs", "Library"],
    website: "https://www.ltmmc.org"
  },
  {
    id: "bmcri-bangalore",
    name: "Bangalore Medical College and Research Institute",
    type: "Medical",
    city: "Bengaluru",
    state: "Karnataka",
    cutoffMarks: {
      general: 75,
      obc: 70,
      sc: 65,
      st: 60
    },
    ranking: 15,
    fees: {
      tuition: 50000,
      hostel: 20000,
      other: 12000
    },
    courses: ["MBBS", "MD", "MS"],
    acceptanceRate: 0.38,
    facilities: ["Hospital", "Research Center", "Library"],
    website: "https://www.bmcri.org"
  }
];
