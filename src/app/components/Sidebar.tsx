import { Home, BookOpen, MessageSquare, Award, Settings, Users, LayoutDashboard, X, PlusCircle } from 'lucide-react';
import sirrosLogo from '../../imports/logo.png';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
  userRole: 'student' | 'admin' | 'technician';
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ currentView, onViewChange, userRole, isOpen = true, onClose }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['student', 'admin', 'technician'] },
    { id: 'devices', label: 'Dispositivos', icon: Home, roles: ['student', 'admin', 'technician'] },
    { id: 'my-courses', label: 'Meus Cursos', icon: BookOpen, roles: ['student', 'technician'] },
    { id: 'ai-support', label: 'Suporte IA', icon: MessageSquare, roles: ['student', 'admin', 'technician'] },
    { id: 'certificates', label: 'Certificados', icon: Award, roles: ['student', 'technician'] },
    { id: 'admin', label: 'Administração', icon: Users, roles: ['admin'] },
    { id: 'create-course',label: 'Criar Curso',icon: PlusCircle, roles: ['student', 'admin', 'technician']},
  ];

  const filteredItems = menuItems.filter(item => item.roles.includes(userRole));

  const handleMenuClick = (view: string) => {
    onViewChange(view);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && onClose && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col
        fixed lg:sticky top-0 z-50 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={sirrosLogo} alt="SIRROS Logo" className="h-8 w-auto" />
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="lg:hidden p-2 hover:bg-sidebar-accent rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-sidebar-foreground" />
              </button>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-2">Plataforma de Treinamento</p>
        </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary-foreground">
            LS
          </div>
          <div className="flex-1">
            <p className="text-sm text-sidebar-foreground">Lucas</p>
            <p className="text-xs text-muted-foreground">CEO</p>
          </div>
        </div>
      </div>
    </aside>
    </>
  );
}
