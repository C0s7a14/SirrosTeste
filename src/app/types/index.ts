export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin' | 'technician';
  avatar?: string;
  enrolledCourses: string[];
  completedCourses: string[];
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'pdf' | 'text' | 'quiz';
  duration: string;
  content: string;
  videoUrl?: string;
  pdfUrl?: string;
  completed: boolean;
  order: number;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  order: number;
  completedLessons: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  deviceId: string;
  deviceName: string;
  modules: Module[];
  totalDuration: string;
  enrolledStudents: number;
  completionRate: number;
  thumbnail?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Device {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: string;
  ficha?: string[];
  courses: Course[];
}

export interface Certificate {
  id: string;
  userId: string;
  courseId: string;
  courseName: string;
  completionDate: string;
  certificateUrl: string;
  score: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  context?: {
    courseId?: string;
    deviceId?: string;
    lessonId?: string;
  };
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface StudentProgress {
  userId: string;
  courseId: string;
  progress: number;
  lastAccessed: string;
  completedLessons: string[];
  quizScores: { lessonId: string; score: number }[];
}
