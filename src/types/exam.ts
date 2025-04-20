export type ExamType = 'JEE_MAIN' | 'JEE_ADVANCED' | 'NEET' | 'WBJEE';

export interface ExamScore {
  examType: ExamType;
  marks: number;
  percentile?: number;
  category: 'general' | 'obc' | 'sc' | 'st' | 'gen-ews' | 'gen-pwd' | 'obc-pwd' | 'sc-pwd' | 'st-pwd';
}

export interface ExamInfo {
  name: string;
  maxMarks: number;
  description: string;
  eligibleCollegeTypes: string[];
  cutoffs: {
    general: number;
    obc: number;
    sc: number;
    st: number;
    'gen-ews'?: number;
    'gen-pwd'?: number;
    'obc-pwd'?: number;
    'sc-pwd'?: number;
    'st-pwd'?: number;
  };
  isPercentile: boolean;
}

export const examDefinitions: Record<ExamType, ExamInfo> = {
  JEE_MAIN: {
    name: "JEE Main",
    maxMarks: 100,
    description: "Joint Entrance Examination for NITs, IIITs, and other CFTIs",
    eligibleCollegeTypes: ["NIT"],
    cutoffs: {
      general: 93.24, // 93.2362181
      obc: 79.68, // 79.6757881
      sc: 60.09, // 60.0923182
      st: 46.70, // 46.6975840
      'gen-ews': 81.33, // 81.3266412
      'gen-pwd': 0.01, // 0.0018700
    },
    isPercentile: true
  },
  JEE_ADVANCED: {
    name: "JEE Advanced",
    maxMarks: 360,
    description: "JEE Advanced for Indian Institutes of Technology (IITs)",
    eligibleCollegeTypes: ["IIT"],
    cutoffs: {
      general: 109, // Min. Aggregate Marks (out of 360)
      obc: 98,  // OBC-NCL / GEN-EWS
      sc: 54,   // SC / ST / PwD
      st: 54,   // SC / ST / PwD
      'gen-ews': 98, // OBC-NCL / GEN-EWS
      'gen-pwd': 54, // SC / ST / PwD
    },
    isPercentile: false
  },
  NEET: {
    name: "NEET",
    maxMarks: 720,
    description: "National Eligibility cum Entrance Test for Medical Colleges",
    eligibleCollegeTypes: ["Medical"],
    cutoffs: {
      general: 50, // Percentage cutoffs
      obc: 45,
      sc: 40,
      st: 40,
      'gen-pwd': 45,
      'obc-pwd': 40,
      'sc-pwd': 40,
      'st-pwd': 40,
    },
    isPercentile: false
  },
  WBJEE: {
    name: "WBJEE",
    maxMarks: 100,
    description: "West Bengal Joint Entrance Examination",
    eligibleCollegeTypes: ["State", "Private"],
    cutoffs: {
      general: 75,
      obc: 70,
      sc: 65,
      st: 60
    },
    isPercentile: false
  }
};
