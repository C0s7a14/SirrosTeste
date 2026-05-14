import { Users, BookOpen, Award, TrendingUp, Search, Filter, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import sirrosLogo from '../../imports/logo.png';

export function AdminPanel() {
  const [activeTab, setActiveTab] = useState<'users' | 'courses' | 'analytics'>('users');

  const mockUsers = [
    { id: 1, name: 'João Silva', email: 'joao@empresa.com', role: 'Técnico', courses: 3, completed: 1, lastActive: '2h atrás' },
    { id: 2, name: 'Maria Santos', email: 'maria@empresa.com', role: 'Engenheira', courses: 5, completed: 3, lastActive: '1 dia atrás' },
    { id: 3, name: 'Pedro Costa', email: 'pedro@empresa.com', role: 'Técnico', courses: 2, completed: 0, lastActive: '3 dias atrás' },
    { id: 4, name: 'Ana Lima', email: 'ana@empresa.com', role: 'Administrador', courses: 6, completed: 4, lastActive: '5h atrás' },
  ];

  const mockCourseStats = [
    { name: 'Instalação Gateway IoT', enrolled: 145, completed: 113, avgScore: 87, completionRate: 78 },
    { name: 'Sensor Temperature', enrolled: 98, completed: 83, avgScore: 92, completionRate: 85 },
    { name: 'Actuator Smart', enrolled: 67, completed: 48, avgScore: 79, completionRate: 72 },
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-4">
          <img src={sirrosLogo} alt="SIRROS Logo" className="h-6 md:h-8 w-auto" />
          <h1 className="mb-0 text-xl md:text-2xl">Painel Administrativo</h1>
        </div>
        <p className="text-muted-foreground text-sm md:text-base">
          Gerencie usuários, cursos e analise o desempenho da plataforma
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-muted-foreground text-sm mb-1">Total de Usuários</p>
          <p className="text-foreground">324</p>
          <p className="text-xs text-green-600 mt-2">+12% este mês</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-muted-foreground text-sm mb-1">Cursos Ativos</p>
          <p className="text-foreground">18</p>
          <p className="text-xs text-green-600 mt-2">+3 novos</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-muted-foreground text-sm mb-1">Certificados Emitidos</p>
          <p className="text-foreground">287</p>
          <p className="text-xs text-green-600 mt-2">+45 este mês</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-1">Taxa de Conclusão</p>
          <p className="text-foreground">78%</p>
          <p className="text-xs text-green-600 mt-2">+5% vs mês anterior</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="border-b border-border">
          <div className="flex">
            <button
              onClick={() => setActiveTab('users')}
              className={`px-6 py-4 transition-colors ${
                activeTab === 'users'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Usuários
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-6 py-4 transition-colors ${
                activeTab === 'courses'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Cursos
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-6 py-4 transition-colors ${
                activeTab === 'analytics'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Analytics
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors">
              <Filter className="w-4 h-4" />
              Filtros
            </button>
          </div>

          {/* Users Tab */}
          {activeTab === 'users' && (
            <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm text-muted-foreground">Nome</th>
                    <th className="text-left py-3 px-4 text-sm text-muted-foreground">Email</th>
                    <th className="text-left py-3 px-4 text-sm text-muted-foreground">Função</th>
                    <th className="text-left py-3 px-4 text-sm text-muted-foreground">Cursos</th>
                    <th className="text-left py-3 px-4 text-sm text-muted-foreground">Concluídos</th>
                    <th className="text-left py-3 px-4 text-sm text-muted-foreground">Último Acesso</th>
                    <th className="text-left py-3 px-4 text-sm text-muted-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {mockUsers.map((user) => (
                    <tr key={user.id} className="border-b border-border hover:bg-accent transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm">
                            {user.name.charAt(0)}
                          </div>
                          <span className="text-foreground">{user.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">{user.email}</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-accent rounded-full text-xs">{user.role}</span>
                      </td>
                      <td className="py-4 px-4 text-foreground">{user.courses}</td>
                      <td className="py-4 px-4 text-foreground">{user.completed}</td>
                      <td className="py-4 px-4 text-muted-foreground">{user.lastActive}</td>
                      <td className="py-4 px-4">
                        <button className="p-1 hover:bg-accent rounded">
                          <MoreVertical className="w-4 h-4 text-muted-foreground" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Courses Tab */}
          {activeTab === 'courses' && (
            <div className="space-y-4">
              {mockCourseStats.map((course, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-foreground mb-1">{course.name}</h3>
                      <p className="text-sm text-muted-foreground">{course.enrolled} alunos matriculados</p>
                    </div>
                    <button className="p-1 hover:bg-accent rounded">
                      <MoreVertical className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Concluídos</p>
                      <p className="text-foreground">{course.completed}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Média de Notas</p>
                      <p className="text-foreground">{course.avgScore}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Taxa de Conclusão</p>
                      <p className="text-foreground">{course.completionRate}%</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progresso geral</span>
                      <span className="text-foreground">{course.completionRate}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${course.completionRate}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="bg-muted/30 border border-border rounded-lg p-12 text-center">
                <TrendingUp className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-20" />
                <h3 className="mb-2">Analytics em Desenvolvimento</h3>
                <p className="text-muted-foreground">
                  Gráficos e métricas detalhadas estarão disponíveis em breve
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
