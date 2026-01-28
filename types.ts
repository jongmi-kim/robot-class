export type ClassType = 'MW' | 'TT'; // MW: Mon/Wed, TT: Tue/Thu
export type Page = 'home' | 'schedule' | 'curriculum' | 'works' | 'parts' | 'consultation';

export interface CurriculumItem {
  id: number;
  level: string;
  title: string;
  description: string;
  imageUrl: string;
  externalLink: string;
  titleColor: string;
  badgeColor: string;
}

export interface RobotFile {
  id: number;
  name: string;
  version: string;
  date: string;
  type: 'code' | 'manual' | '3d';
}

export interface PartItem {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  imageUrl: string;
}

export interface CalendarEvent {
  id: number;
  title: string;
  date: Date;
  type: ClassType;
  description?: string;
}

export interface PartRequest {
  studentName: string;
  classType: ClassType;
  partName: string;
  quantity: number;
  reason: string;
  file?: File | null;
}

export interface WorkUploadRequest {
  studentName: string;
  classType: ClassType;
  subClass?: string; // Added for grade level selection (e.g., '1-2', '3-4')
  file?: File | null;
}

export interface ConsultationRequest {
  classType: ClassType;
  studentName: string;
  parentPhone: string;
  content: string;
}