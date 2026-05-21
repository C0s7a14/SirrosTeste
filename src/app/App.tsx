import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { DevicesGrid } from './components/DevicesGrid';
import { CourseList } from './components/CourseList';
import { CourseViewer } from './components/CourseViewer';
import { AISupport } from './components/AISupport';
import { Certificates } from './components/Certificates';
import { AdminPanel } from './components/AdminPanel';
import { MyCourses } from './components/MyCourses';
import { CreateCourse } from './components/CreateCourse';
import { mockDevices, mockCourses, currentUser, mockCertificates } from './data/mockData';
import { Menu } from 'lucide-react';

// Associar cursos aos dispositivos
mockDevices.forEach(device => {
  device.courses = mockCourses.filter(course => course.deviceId === device.id);
});

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleDeviceSelect = (deviceId: string) => {
    setSelectedDeviceId(deviceId);
    setCurrentView('course-list');
  };

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentView('course-viewer');
  };

  const handleBackToDevices = () => {
    setSelectedDeviceId(null);
    setCurrentView('devices');
  };

  const handleBackToCourseList = () => {
    setSelectedCourseId(null);
    setCurrentView('course-list');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentView} />;

      case 'devices':
        return <DevicesGrid devices={mockDevices} onDeviceSelect={handleDeviceSelect} />;

      case 'create-course':
      return <CreateCourse />;

      case 'course-list':
        if (!selectedDeviceId) return null;
        const selectedDevice = mockDevices.find(d => d.id === selectedDeviceId);
        if (!selectedDevice) return null;
        return (
          <CourseList
            courses={selectedDevice.courses}
            deviceName={selectedDevice.name}
            onCourseSelect={handleCourseSelect}
            onBack={handleBackToDevices}
          />
        );

      case 'course-viewer':
        if (!selectedCourseId) return null;
        const selectedCourse = mockCourses.find(c => c.id === selectedCourseId);
        if (!selectedCourse) return null;
        return <CourseViewer course={selectedCourse} onBack={handleBackToCourseList} />;

      case 'my-courses':
        const enrolledCourses = mockCourses.filter(course =>
          currentUser.enrolledCourses.includes(course.id)
        );
        return <MyCourses courses={enrolledCourses} onCourseSelect={handleCourseSelect} />;

      case 'ai-support':
        return <AISupport />;

      case 'certificates':
        return <Certificates certificates={mockCertificates} />;

      case 'admin':
        return <AdminPanel />;

      default:
        return <Dashboard onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar
        currentView={currentView}
        onViewChange={setCurrentView}
        userRole={currentUser.role}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden bg-sidebar border-b border-sidebar-border p-4 flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-sidebar-foreground" />
          </button>
          <h2 className="text-sidebar-foreground">SIRROS IoT</h2>
        </header>

        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
