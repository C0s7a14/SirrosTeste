import { Course } from '../types';
import { Play, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import sirrosLogo from '../../imports/logo.png';

interface MyCoursesProps {
  courses: Course[];
  onCourseSelect: (courseId: string) => void;
}

export function MyCourses({ courses, onCourseSelect }: MyCoursesProps) {
  return (
    <div className="p-4 md:p-8">
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-4">
          <img src={sirrosLogo} alt="SIRROS Logo" className="h-6 md:h-8 w-auto" />
          <h1 className="mb-0 text-xl md:text-2xl">Meus Cursos</h1>
        </div>
        <p className="text-muted-foreground text-sm md:text-base">
          {courses.length} {courses.length === 1 ? 'curso em andamento' : 'cursos em andamento'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courses.map((course) => {
          const totalLessons = course.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);
          const completedLessons = course.modules.reduce(
            (acc, mod) => acc + mod.lessons.filter(l => l.completed).length,
            0
          );
          const progress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

          return (
            <div
              key={course.id}
              onClick={() => onCourseSelect(course.id)}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:border-primary group"
            >
              <div className="h-40 bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm">{progress}% completo</span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <span className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs">
                    {course.deviceName}
                  </span>
                </div>

                <h3 className="mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{course.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{course.totalDuration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4" />
                    <span>{completedLessons}/{totalLessons} aulas</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progresso</span>
                    <span className="text-foreground">{progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Continuar Curso
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {courses.length === 0 && (
        <div className="text-center py-16 bg-card border border-dashed border-border rounded-lg">
          <Play className="w-20 h-20 text-muted-foreground mx-auto mb-4 opacity-20" />
          <h3 className="mb-2">Nenhum curso em andamento</h3>
          <p className="text-muted-foreground mb-6">
            Explore nossa biblioteca e comece seu aprendizado
          </p>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Explorar Cursos
          </button>
        </div>
      )}
    </div>
  );
}
