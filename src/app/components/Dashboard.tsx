import { BookOpen, Award, Clock, TrendingUp, Play, Target } from 'lucide-react';
import sirrosLogo from '../../imports/Captura_de_tela_2026-05-05_202256.png';

interface DashboardProps {
  onNavigate: (view: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const stats = [
    { label: 'Cursos Matriculados', value: '3', icon: BookOpen, color: 'from-blue-500 to-blue-600' },
    { label: 'Cursos Concluídos', value: '1', icon: Award, color: 'from-green-500 to-green-600' },
    { label: 'Horas de Estudo', value: '12.5h', icon: Clock, color: 'from-purple-500 to-purple-600' },
    { label: 'Progresso Geral', value: '45%', icon: TrendingUp, color: 'from-orange-500 to-orange-600' },
  ];

  const recentCourses = [
    {
      id: 1,
      title: 'Instalação e Configuração do Gateway IoT',
      device: 'SIRROS Gateway IoT',
      progress: 65,
      lastAccessed: '2 horas atrás',
    },
    {
      id: 2,
      title: 'Sensor de Temperatura - Instalação e Calibração',
      device: 'SIRROS Sensor Temperature',
      progress: 30,
      lastAccessed: '1 dia atrás',
    },
    {
      id: 3,
      title: 'Atuador Smart - Programação e Controle',
      device: 'SIRROS Actuator Smart',
      progress: 15,
      lastAccessed: '3 dias atrás',
    },
  ];

  const upcomingLessons = [
    { title: 'Configuração de Rede', course: 'Gateway IoT', duration: '20min', type: 'video' },
    { title: 'Calibração Inicial', course: 'Sensor Temperature', duration: '35min', type: 'video' },
    { title: 'Quiz: Fundamentos', course: 'Gateway IoT', duration: '15min', type: 'quiz' },
  ];

  return (
    <div className="p-4 md:p-8 space-y-6 md:space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-xl md:text-2xl">Bem-vindo de volta, Lucas! <span className='text-blue-500'>Administrador</span></h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Continue seu aprendizado e alcance seus objetivos
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition duration-300 ease-in shadow-sm shadow-blue-500 hover:cursor-pointer ">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
              <p className="text-foreground">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Courses */}
        <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6">
          <h2 className="mb-6">Cursos em Andamento</h2>
          <div className="space-y-4">
            {recentCourses.map((course) => (
              <div
                key={course.id}
                className="p-4 border border-border rounded-2xl hover:bg-accent transition duration-300 ease-in shadow-sm shadow-blue-500 hover:cursor-pointer"
                onClick={() => onNavigate('my-courses')}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-foreground mb-1">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">{course.device}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{course.lastAccessed}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {course.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => onNavigate('devices')}
            className="w-full mt-4 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
          >
            Ver Todos os Cursos
          </button>
        </div>

        {/* Upcoming Lessons */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="mb-6">Próximas Aulas</h2>
          <div className="space-y-4 ">
            {upcomingLessons.map((lesson, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Play className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-foreground text-sm mb-1">{lesson.title}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{lesson.course}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{lesson.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Goals */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2>Metas de Aprendizado</h2>
          <Target className="w-5 h-5 text-primary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Meta Semanal</span>
              <span className="text-foreground">3/5 horas</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Cursos Este Mês</span>
              <span className="text-foreground">1/2 concluídos</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '50%' }}></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Certificados 2026</span>
              <span className="text-foreground">1/5 obtidos</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
