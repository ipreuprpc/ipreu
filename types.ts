export enum UserRole {
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
  PENDING = 'PENDING',
}

export interface User {
  id: string; // Firebase Auth UID
  email: string; // Used for Auth
  employeeNumber: string;
  employeeName: string;
  dob: string;
  fatherName: string;
  motherName: string;
  nativePlace: string;
  state: string;
  caste?: string;
  mobileNumber: string;
  role: UserRole;
  password?: string; // Kept for form types but not persisted
}

export interface SurveyOption {
  id: string;
  text: string;
}

export interface Survey {
  id: string;
  question: string;
  options: SurveyOption[];
  votes: Record<string, string>; // Maps userId to optionId
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  createdAt: string; // ISO date string
  attachment?: {
    name: string;
    type: string;
    dataUrl: string; // Base64 encoded file
  };
}
