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
  doj: string;
  department: string;
  unit: string;
  fatherName: string;
  motherName: string;
  nativePlace: string;
  state: string;
  caste?: string;
  mobileNumber: string;
  role: UserRole;
  fcmToken?: string;
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
    name: string;     // Display name shown to members
    url: string;      // Google Drive share/preview URL
    driveId?: string; // Extracted Drive file ID (enables direct download link)
  };
}

export interface Grievance {
  id: string;
  userId: string;
  userName: string;
  category: string;
  subject: string;
  description: string;
  status: 'NEW' | 'PROCESSING' | 'RESOLVED';
  createdAt: string;
  response?: string;
  respondedAt?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date string
  startTime: string;
  endTime?: string;
  location?: string;
  category: 'MEETING' | 'HOLIDAY' | 'ELECTION' | 'SOCIAL' | 'OTHER';
  createdAt: string;
}

