import { useState } from 'react';
import { Course, Lesson } from '../types';
import { ArrowLeft, CheckCircle, PlayCircle, FileText, FileType, HelpCircle, Clock, ChevronDown, ChevronRight } from 'lucide-react';
import sirrosLogo from '../../imports/logo.png';

interface CourseViewerProps {
  course: Course;
  onBack: () => void;
}

export function CourseViewer({ course, onBack }: CourseViewerProps) {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [expandedModules, setExpandedModules] = useState<string[]>([course.modules[0]?.id]);

  const toggleModule = (moduleId: string) => {
    if (expandedModules.includes(moduleId)) {
      setExpandedModules(expandedModules.filter(id => id !== moduleId));
    } else {
      setExpandedModules([...expandedModules, moduleId]);
    }
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video':
        return PlayCircle;
      case 'pdf':
        return FileType;
      case 'text':
        return FileText;
      case 'quiz':
        return HelpCircle;
      default:
        return FileText;
    }
  };

  const totalLessons = course.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);
  const completedLessons = course.modules.reduce(
    (acc, mod) => acc + mod.lessons.filter(l => l.completed).length,
    0
  );
  const progress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="flex flex-col md:flex-row h-screen bg-background">
      {/* Sidebar com módulos e aulas */}
      <div className="w-full md:w-96 border-r border-border overflow-y-auto bg-card">
        <div className="p-4 md:p-6 border-b border-border sticky top-0 bg-card z-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm md:text-base">Voltar</span>
          </button>
          <div className="flex items-center gap-2 mb-4">
            <img src={sirrosLogo} alt="SIRROS Logo" className="h-5 md:h-6 w-auto" />
          </div>
          <h2 className="mb-2 text-lg md:text-xl">{course.title}</h2>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>{completedLessons} de {totalLessons} aulas</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="p-4">
          {course.modules.map((module, moduleIndex) => {
            const isExpanded = expandedModules.includes(module.id);
            const moduleProgress = module.lessons.length > 0
              ? Math.round((module.lessons.filter(l => l.completed).length / module.lessons.length) * 100)
              : 0;

            return (
              <div key={module.id} className="mb-4">
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full flex items-center justify-between p-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    )}
                    <div className="text-left">
                      <h4 className="text-foreground">Módulo {moduleIndex + 1}</h4>
                      <p className="text-sm text-muted-foreground">{module.title}</p>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {moduleProgress}%
                  </div>
                </button>

                {isExpanded && (
                  <div className="mt-2 ml-4 space-y-1">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const Icon = getLessonIcon(lesson.type);
                      const isSelected = selectedLesson?.id === lesson.id;

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => setSelectedLesson(lesson)}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                            isSelected
                              ? 'bg-primary text-primary-foreground'
                              : 'hover:bg-accent text-foreground'
                          }`}
                        >
                          <div className="flex-shrink-0">
                            {lesson.completed ? (
                              <CheckCircle className={`w-5 h-5 ${isSelected ? 'text-primary-foreground' : 'text-green-600'}`} />
                            ) : (
                              <Icon className={`w-5 h-5 ${isSelected ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                            )}
                          </div>
                          <div className="flex-1 text-left">
                            <p className="text-sm">{lessonIndex + 1}. {lesson.title}</p>
                          </div>
                          <div className={`flex items-center gap-1 text-xs ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                            <Clock className="w-3 h-3" />
                            <span>{lesson.duration}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Área de conteúdo */}
      <div className="flex-1 overflow-y-auto">
        {selectedLesson ? (
          <div className="p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  {getLessonIcon(selectedLesson.type) && (
                    <span className="capitalize">{selectedLesson.type === 'video' ? 'Vídeo' : selectedLesson.type === 'pdf' ? 'PDF' : selectedLesson.type === 'text' ? 'Texto' : 'Quiz'}</span>
                  )}
                  <span>•</span>
                  <span>{selectedLesson.duration}</span>
                </div>
                <h1 className="mb-4">{selectedLesson.title}</h1>
              </div>

              {selectedLesson.type === 'video' && (
                <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center mb-6">
                  <div className="text-center">
                    <PlayCircle className="w-20 h-20 text-white/50 mx-auto mb-4" />
                    <p className="text-white/70">Player de vídeo</p>
                    <p className="text-white/50 text-sm mt-2">URL: {selectedLesson.videoUrl}</p>
                  </div>
                </div>
              )}

              {selectedLesson.type === 'pdf' && (
                <div className="border-2 border-dashed border-border rounded-lg p-12 mb-6 text-center">
                  <FileType className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Visualizador de PDF</p>
                  <p className="text-sm text-muted-foreground mt-2">URL: {selectedLesson.pdfUrl}</p>
                </div>
              )}

              {selectedLesson.type === 'text' && (
                <div className="bg-card border border-border rounded-lg p-8 mb-6">
                  <p className="text-foreground leading-relaxed">{selectedLesson.content}</p>
                </div>
              )}

              {selectedLesson.type === 'quiz' && (
                <div className="bg-card border border-border rounded-lg p-8 mb-6">
                  <h3 className="mb-4">Quiz de Avaliação</h3>
                  <div className="space-y-4">
                    <div className="p-4 border border-border rounded-lg">
                      <p className="mb-4">1. Qual é a função principal do Gateway IoT?</p>
                      <div className="space-y-2">
                        {['Conectar dispositivos à internet', 'Armazenar dados localmente', 'Processar informações', 'Todas as anteriores'].map((option, idx) => (
                          <label key={idx} className="flex items-center gap-3 p-3 border border-border rounded hover:bg-accent cursor-pointer">
                            <input type="radio" name="q1" className="w-4 h-4" />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-6 border-t border-border">
                <button className="px-6 py-2 border border-border rounded-lg hover:bg-accent transition-colors">
                  Aula Anterior
                </button>
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Marcar como Concluída
                </button>
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Próxima Aula
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <PlayCircle className="w-20 h-20 mx-auto mb-4 opacity-20" />
              <p>Selecione uma aula para começar</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
