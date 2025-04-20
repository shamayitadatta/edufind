import { College } from "@/types/college";

export const iitColleges: College[] = [
  {
    id: "iit-bombay",
    name: "IIT Bombay",
    type: "IIT",
    city: "Mumbai",
    state: "Maharashtra",
    cutoffMarks: {
      general: 92,
      obc: 87,
      sc: 78,
      st: 72
    },
    ranking: 1,
    fees: {
      tuition: 230000,
      hostel: 65000,
      other: 35000
    },
    courses: ["Computer Science", "Chemical Engineering", "Aerospace Engineering"],
    acceptanceRate: 1,
    facilities: ["Library", "Sports Complex", "Labs", "Innovation Center"],
    imageUrl: "/lovable-uploads/iit-bombay.jpg",
    website: "http://www.iitb.ac.in"
  },
  {
    id: "iit-delhi",
    name: "IIT Delhi",
    type: "IIT",
    city: "Delhi",
    state: "Delhi",
    cutoffMarks: {
      general: 90,
      obc: 85,
      sc: 75,
      st: 70
    },
    ranking: 2,
    fees: {
      tuition: 220000,
      hostel: 60000,
      other: 30000
    },
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"],
    acceptanceRate: 1.5,
    facilities: ["Library", "Sports Complex", "Labs", "Hostel"],
    imageUrl: "/lovable-uploads/iit-delhi.jpg",
    website: "http://www.iitd.ac.in"
  },
  {
    id: "iit-madras",
    name: "IIT Madras",
    type: "IIT",
    city: "Chennai",
    state: "Tamil Nadu",
    cutoffMarks: {
      general: 89,
      obc: 84,
      sc: 74,
      st: 69
    },
    ranking: 3,
    fees: {
      tuition: 225000,
      hostel: 62000,
      other: 32000
    },
    courses: ["Computer Science", "Data Science", "Engineering Design"],
    acceptanceRate: 1.6,
    facilities: ["Research Park", "Innovation Center", "Sports Complex"],
    imageUrl: "/lovable-uploads/iit-madras.jpg",
    website: "https://www.iitm.ac.in"
  },
  {
    id: "iit-kanpur",
    name: "IIT Kanpur",
    type: "IIT",
    city: "Kanpur",
    state: "Uttar Pradesh",
    cutoffMarks: {
      general: 88,
      obc: 83,
      sc: 73,
      st: 68
    },
    ranking: 4,
    fees: {
      tuition: 225000,
      hostel: 60000,
      other: 30000
    },
    courses: ["Computer Science", "Aerospace Engineering", "Materials Science"],
    acceptanceRate: 1.7,
    facilities: ["Library", "Sports Complex", "Incubation Center"],
    imageUrl: "/lovable-uploads/iit-kanpur.jpg",
    website: "https://www.iitk.ac.in"
  },
  {
    id: "iit-kgp",
    name: "IIT Kharagpur",
    type: "IIT",
    city: "Kharagpur",
    state: "West Bengal",
    cutoffMarks: {
      general: 85,
      obc: 78,
      sc: 70,
      st: 65
    },
    ranking: 5,
    fees: {
      tuition: 200000,
      hostel: 50000,
      other: 25000
    },
    courses: ["Computer Science", "Electronics", "Mechanical"],
    acceptanceRate: 2,
    facilities: ["Library", "Sports Complex", "Research Labs"],
    imageUrl: "/lovable-uploads/iit-kharagpur.jpg",
    website: "http://www.iitkgp.ac.in"
  },
  {
    id: "iit-roorkee",
    name: "IIT Roorkee",
    type: "IIT",
    city: "Roorkee",
    state: "Uttarakhand",
    cutoffMarks: {
      general: 83,
      obc: 77,
      sc: 68,
      st: 63
    },
    ranking: 6,
    fees: {
      tuition: 210000,
      hostel: 55000,
      other: 28000
    },
    courses: ["Computer Science", "Civil Engineering", "Architecture"],
    acceptanceRate: 2.5,
    facilities: ["Library", "Sports Complex", "Research Centers"],
    imageUrl: "/lovable-uploads/iit-roorkee.jpg",
    website: "https://www.iitr.ac.in"
  },
  {
    id: "iit-guwahati",
    name: "IIT Guwahati",
    type: "IIT",
    city: "Guwahati",
    state: "Assam",
    cutoffMarks: {
      general: 82,
      obc: 76,
      sc: 67,
      st: 62
    },
    ranking: 7,
    fees: {
      tuition: 205000,
      hostel: 52000,
      other: 26000
    },
    courses: ["Computer Science", "Design", "Biotechnology"],
    acceptanceRate: 2.8,
    facilities: ["Library", "Innovation Lab", "Cultural Complex"],
    imageUrl: "/lovable-uploads/iit-guwahati.jpg",
    website: "http://www.iitg.ac.in"
  },
  {
    id: "iit-hyderabad",
    name: "IIT Hyderabad",
    type: "IIT",
    city: "Hyderabad",
    state: "Telangana",
    cutoffMarks: {
      general: 80,
      obc: 74,
      sc: 65,
      st: 60
    },
    ranking: 8,
    fees: {
      tuition: 210000,
      hostel: 55000,
      other: 28000
    },
    courses: ["Computer Science", "Artificial Intelligence", "Climate Studies"],
    acceptanceRate: 3,
    facilities: ["Library", "Research Parks", "Startup Incubator"],
    imageUrl: "/lovable-uploads/iit-hyderabad.jpg",
    website: "https://www.iith.ac.in"
  },
  {
    id: "iit-bhu",
    name: "IIT (BHU) Varanasi",
    type: "IIT",
    city: "Varanasi",
    state: "Uttar Pradesh",
    cutoffMarks: {
      general: 78,
      obc: 72,
      sc: 63,
      st: 58
    },
    ranking: 9,
    fees: {
      tuition: 200000,
      hostel: 50000,
      other: 25000
    },
    courses: ["Computer Science", "Ceramic Engineering", "Mining Engineering"],
    acceptanceRate: 3.5,
    facilities: ["Library", "Research Center", "Cultural Complex"],
    imageUrl: "/lovable-uploads/iit-bhu.jpg",
    website: "https://www.iitbhu.ac.in"
  },
  {
    id: "iit-indore",
    name: "IIT Indore",
    type: "IIT",
    city: "Indore",
    state: "Madhya Pradesh",
    cutoffMarks: {
      general: 77,
      obc: 71,
      sc: 62,
      st: 57
    },
    ranking: 10,
    fees: {
      tuition: 200000,
      hostel: 50000,
      other: 25000
    },
    courses: ["Computer Science", "Astronomy", "Biosciences"],
    acceptanceRate: 4,
    facilities: ["Library", "Sports Complex", "Science Complex"],
    imageUrl: "/lovable-uploads/iit-indore.jpg",
    website: "https://www.iiti.ac.in"
  },
  {
    id: "iit-patna",
    name: "IIT Patna",
    type: "IIT",
    city: "Patna",
    state: "Bihar",
    cutoffMarks: {
      general: 76,
      obc: 70,
      sc: 61,
      st: 56
    },
    ranking: 11,
    fees: {
      tuition: 195000,
      hostel: 48000,
      other: 24000
    },
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"],
    acceptanceRate: 4.2,
    facilities: ["Library", "Sports Complex", "Innovation Center"],
    imageUrl: "/lovable-uploads/iit-patna.jpg",
    website: "https://www.iitp.ac.in"
  },
  {
    id: "iit-gandhinagar",
    name: "IIT Gandhinagar",
    type: "IIT",
    city: "Gandhinagar",
    state: "Gujarat",
    cutoffMarks: {
      general: 75,
      obc: 69,
      sc: 60,
      st: 55
    },
    ranking: 12,
    fees: {
      tuition: 195000,
      hostel: 48000,
      other: 24000
    },
    courses: ["Computer Science", "Materials Engineering", "Cognitive Science"],
    acceptanceRate: 4.5,
    facilities: ["Library", "Sports Complex", "Innovation Center"],
    imageUrl: "/lovable-uploads/iit-gandhinagar.jpg",
    website: "https://www.iitgn.ac.in"
  },
  
  // More IITs
  {
    id: "iit-jodhpur",
    name: "IIT Jodhpur",
    type: "IIT",
    city: "Jodhpur",
    state: "Rajasthan",
    cutoffMarks: {
      general: 75,
      obc: 69,
      sc: 60,
      st: 55
    },
    ranking: 13,
    fees: {
      tuition: 195000,
      hostel: 48000,
      other: 24000
    },
    courses: ["Computer Science", "Renewable Energy", "AI & Data Science"],
    acceptanceRate: 4.8,
    facilities: ["Library", "Sports Complex", "Technology Hub"],
    imageUrl: "/lovable-uploads/iit-jodhpur.jpg",
    website: "http://www.iitj.ac.in"
  },
  {
    id: "iit-tirupati",
    name: "IIT Tirupati",
    type: "IIT",
    city: "Tirupati",
    state: "Andhra Pradesh",
    cutoffMarks: {
      general: 74,
      obc: 68,
      sc: 59,
      st: 54
    },
    ranking: 14,
    fees: {
      tuition: 190000,
      hostel: 47000,
      other: 23000
    },
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"],
    acceptanceRate: 5,
    facilities: ["Library", "Labs", "Sports Facilities"],
    imageUrl: "/lovable-uploads/iit-tirupati.jpg",
    website: "https://www.iittp.ac.in"
  },
  {
    id: "iit-bhilai",
    name: "IIT Bhilai",
    type: "IIT",
    city: "Bhilai",
    state: "Chhattisgarh",
    cutoffMarks: {
      general: 73,
      obc: 67,
      sc: 58,
      st: 53
    },
    ranking: 15,
    fees: {
      tuition: 190000,
      hostel: 47000,
      other: 23000
    },
    courses: ["Computer Science", "Data Science", "Electrical Engineering"],
    acceptanceRate: 5.5,
    facilities: ["Library", "Labs", "Sports Facilities"],
    imageUrl: "/lovable-uploads/iit-bhilai.jpg",
    website: "https://www.iitbhilai.ac.in"
  },
  {
    id: "iit-dharwad",
    name: "IIT Dharwad",
    type: "IIT",
    city: "Dharwad",
    state: "Karnataka",
    cutoffMarks: {
      general: 73,
      obc: 67,
      sc: 58,
      st: 53
    },
    ranking: 16,
    fees: {
      tuition: 190000,
      hostel: 47000,
      other: 23000
    },
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"],
    acceptanceRate: 5.5,
    facilities: ["Library", "Labs", "Sports Facilities"],
    imageUrl: "/lovable-uploads/iit-dharwad.jpg",
    website: "https://www.iitdh.ac.in"
  },
  {
    id: "iit-palakkad",
    name: "IIT Palakkad",
    type: "IIT",
    city: "Palakkad",
    state: "Kerala",
    cutoffMarks: {
      general: 73,
      obc: 67,
      sc: 58,
      st: 53
    },
    ranking: 17,
    fees: {
      tuition: 190000,
      hostel: 47000,
      other: 23000
    },
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"],
    acceptanceRate: 5.5,
    facilities: ["Library", "Labs", "Sports Facilities"],
    imageUrl: "/lovable-uploads/iit-palakkad.jpg",
    website: "https://www.iitpkd.ac.in"
  },
  {
    id: "iit-jammu",
    name: "IIT Jammu",
    type: "IIT",
    city: "Jammu",
    state: "Jammu & Kashmir",
    cutoffMarks: {
      general: 72,
      obc: 66,
      sc: 57,
      st: 52
    },
    ranking: 18,
    fees: {
      tuition: 185000,
      hostel: 45000,
      other: 22000
    },
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"],
    acceptanceRate: 6,
    facilities: ["Library", "Labs", "Sports Facilities"],
    imageUrl: "/lovable-uploads/iit-jammu.jpg",
    website: "https://www.iitjammu.ac.in"
  },
  {
    id: "iit-dhanbad",
    name: "IIT (ISM) Dhanbad",
    type: "IIT",
    city: "Dhanbad",
    state: "Jharkhand",
    cutoffMarks: {
      general: 77,
      obc: 71,
      sc: 62,
      st: 57
    },
    ranking: 10,
    fees: {
      tuition: 205000,
      hostel: 52000,
      other: 26000
    },
    courses: ["Mining Engineering", "Petroleum Engineering", "Computer Science"],
    acceptanceRate: 4,
    facilities: ["Library", "Sports Complex", "Research Centers"],
    imageUrl: "/lovable-uploads/iit-dhanbad.jpg",
    website: "https://www.iitism.ac.in"
  },
  {
    id: "iit-goa",
    name: "IIT Goa",
    type: "IIT",
    city: "Ponda",
    state: "Goa",
    cutoffMarks: {
      general: 72,
      obc: 66,
      sc: 57,
      st: 52
    },
    ranking: 19,
    fees: {
      tuition: 185000,
      hostel: 45000,
      other: 22000
    },
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"],
    acceptanceRate: 6,
    facilities: ["Library", "Labs", "Sports Facilities"],
    imageUrl: "/lovable-uploads/iit-goa.jpg",
    website: "https://www.iitgoa.ac.in"
  },
  {
    id: "iit-mandi",
    name: "IIT Mandi",
    type: "IIT",
    city: "Mandi",
    state: "Himachal Pradesh",
    cutoffMarks: {
      general: 76,
      obc: 70,
      sc: 61,
      st: 56
    },
    ranking: 12,
    fees: {
      tuition: 195000,
      hostel: 48000,
      other: 24000
    },
    courses: ["Computer Science", "Bioengineering", "Data Science"],
    acceptanceRate: 4.2,
    facilities: ["Library", "Sports Complex", "Research Centers"],
    imageUrl: "/lovable-uploads/iit-mandi.jpg",
    website: "https://www.iitmandi.ac.in"
  },
  {
    id: "indian-institute-of-engineering-science-and-technology-shibpur",
    name: "Indian Institute of Engineering Science and Technology - Shibpur",
    type: "IIT",
    city: "Shibpur",
    state: "West Bengal",
    cutoffMarks: {
      general: 76,
      obc: 70,
      sc: 62,
      st: 56
    },
    ranking: 28,
    fees: {
      tuition: 170000,
      hostel: 40000,
      other: 20000
    },
    courses: ["Engineering", "Technology", "Science"],
    acceptanceRate: 11,
    facilities: ["Central Library", "Gymnasium", "Laboratories"],
    imageUrl: "/lovable-uploads/iiest-shibpur.jpg",
    website: "http://www.iiests.ac.in/"
  },
];
