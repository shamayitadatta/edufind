
export interface College {
  id: string;
  name: string;
  type: CollegeType;
  city: string;
  state: string;
  cutoffMarks: {
    general: number;
    obc: number;
    sc: number;
    st: number;
  };
  ranking: number;
  fees: {
    tuition: number;
    hostel?: number;
    other?: number;
  };
  courses: string[];
  acceptanceRate: number;
  facilities: string[];
  imageUrl?: string;
  website: string;
}

export type CollegeType = 'IIT' | 'NIT' | 'Medical' | 'Private' | 'State' | 'Deemed';

export interface City {
  name: string;
  state: string;
}

export interface StudentMarks {
  marks: number;
  category: 'general' | 'obc' | 'sc' | 'st';
}

export interface FilterOptions {
  type?: CollegeType[];
  city?: string[];
  state?: string[];
  minMarks?: number;
  maxFees?: number;
}
