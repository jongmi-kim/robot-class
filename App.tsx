import React, { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import HomeView from './components/HomeView';
import ScheduleView from './components/ScheduleView';
import CurriculumView from './components/CurriculumView';
import PartsForm from './components/PartsForm';
import ConsultationForm from './components/ConsultationForm';
import UploadWorkForm from './components/UploadWorkForm';
import { Page, ClassType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedClass, setSelectedClass] = useState<ClassType>('MW');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Helper to get page title
  const getPageTitle = (page: Page) => {
    switch (page) {
      case 'home': return '홈';
      case 'schedule': return '수업 일정';
      case 'curriculum': return '커리큘럼';
      case 'works': return '작품 올리기';
      case 'parts': return '부품 구입';
      case 'consultation': return '상담 요청';
      default: return '';
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView setPage={setCurrentPage} selectedClass={selectedClass} />;
      case 'schedule':
        return <ScheduleView selectedClass={selectedClass} />;
      case 'curriculum':
        return <CurriculumView />;
      case 'works':
        return <UploadWorkForm selectedClass={selectedClass} />;
      case 'parts':
        return <PartsForm selectedClass={selectedClass} />;
      case 'consultation':
        return <ConsultationForm selectedClass={selectedClass} />;
      default:
        return <HomeView setPage={setCurrentPage} selectedClass={selectedClass} />;
    }
  };

  return (
    /* h-screen 대신 h-[100dvh]를 사용하여 모바일 브라우저 주소창에 의한 가림 현상 해결 */
    <div className="flex h-[100dvh] bg-gray-50 overflow-hidden font-sans text-gray-800">
      {/* Left Sidebar */}
      <Sidebar 
        currentPage={currentPage}
        setPage={setCurrentPage}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full relative">
        <Header 
          title={getPageTitle(currentPage)}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          selectedClass={selectedClass}
        />

        <main className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth">
          <div className="max-w-7xl mx-auto pb-20 md:pb-0">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;