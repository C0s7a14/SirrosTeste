import { Course } from '../types';
import { Clock, Users, TrendingUp, Play, ArrowLeft } from 'lucide-react';
import sirrosLogo from '../../imports/logo.png';

interface CourseListProps {
  courses: Course[];
  deviceName: string;
  onCourseSelect: (courseId: string) => void;
  onBack: () => void;
}

export function CourseList({ courses, deviceName, onCourseSelect, onBack }: CourseListProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-700';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700';
      case 'advanced':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'Iniciante';
      case 'intermediate':
        return 'Intermediário';
      case 'advanced':
        return 'Avançado';
      default:
        return difficulty;
    }
  };

  return (
    <div className="p-4 md:p-8">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4 md:mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm md:text-base">Voltar para dispositivos</span>
      </button>

      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-4">
          <img src={sirrosLogo} alt="SIRROS Logo" className="h-6 md:h-8 w-auto" />
          <h1 className="mb-0 text-lg md:text-2xl">Cursos - {deviceName}</h1>
        </div>
        <p className="text-muted-foreground text-sm md:text-base">
          {courses.length} {courses.length === 1 ? 'curso disponível' : 'cursos disponíveis'}
        </p>
      </div>

      <div className="space-y-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:border-primary group"
            onClick={() => onCourseSelect(course.id)}
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-64 h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white" />
                </div>
              </div>

              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="mb-2">{course.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ml-4 ${getDifficultyColor(course.difficulty)}`}>
                    {getDifficultyLabel(course.difficulty)}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{course.totalDuration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{course.enrolledStudents} alunos</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    <span>{course.completionRate}% conclusão</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Play className="w-4 h-4" />
                    <span>{course.modules.length} módulos</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex-1 bg-muted rounded-full h-2 mr-4">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">0% completo</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
