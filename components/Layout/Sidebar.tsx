import React from 'react';
import { Home, Calendar, BookOpen, ShoppingBag, MessageCircle, X, Bot, Settings, Upload } from 'lucide-react';
import { Page, ClassType } from '../../types';

interface SidebarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedClass: ClassType;
  setSelectedClass: (cls: ClassType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  currentPage, 
  setPage, 
  isOpen, 
  setIsOpen,
  selectedClass,
  setSelectedClass
}) => {
  const menuItems: { id: Page; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: '홈', icon: <Home size={22} /> },
    { id: 'schedule', label: '수업 일정', icon: <Calendar size={22} /> },
    { id: 'curriculum', label: '커리큘럼', icon: <BookOpen size={22} /> },
    { id: 'works', label: '작품 올리기', icon: <Upload size={22} /> },
    { id: 'parts', label: '부품 구입', icon: <ShoppingBag size={22} /> },
    { id: 'consultation', label: '상담 요청', icon: <MessageCircle size={22} /> },
  ];

  const handleNavClick = (page: Page) => {
    setPage(page);
    setIsOpen(false);
  };

  const getActiveStyles = () => {
    if (selectedClass === 'MW') {
      return 'bg-brand-100 text-brand-600 shadow-lg shadow-brand-900/20';
    } else {
      return 'bg-green-100 text-green-700 shadow-lg shadow-green-900/20';
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 z-20 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed top-0 left-0 h-full bg-navy-900 text-white z-30 transition-transform duration-300 ease-in-out shadow-2xl
        w-72 flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:h-screen
      `}>
        {/* Logo Area */}
        <div className="p-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full text-brand-600">
                <Bot size={28} />
            </div>
            <div>
                <h1 className="font-display text-2xl font-bold tracking-wide">로봇창의부</h1>
                <p className="text-xs text-blue-400 tracking-widest uppercase font-bold">Robot Lab</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="md:hidden text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Class Selector Section */}
        <div className="px-6 mb-6">
            <label className="text-sm font-bold text-gray-500 uppercase mb-3 block tracking-wider text-center">로봇창의반 선택</label>
            <div className="flex gap-2">
                <button 
                    onClick={() => setSelectedClass('MW')}
                    className={`flex-1 py-3 rounded-2xl font-bold text-lg transition-all duration-200
                        ${selectedClass === 'MW' 
                            ? 'bg-brand-400 text-navy-950 shadow-lg scale-105' 
                            : 'bg-navy-800 text-gray-400 hover:bg-navy-700'
                        }
                    `}
                >
                    월수반
                </button>
                <button 
                    onClick={() => setSelectedClass('TT')}
                    className={`flex-1 py-3 rounded-2xl font-bold text-lg transition-all duration-200
                        ${selectedClass === 'TT' 
                            ? 'bg-green-500 text-white shadow-lg scale-105' 
                            : 'bg-navy-800 text-gray-400 hover:bg-navy-700'
                        }
                    `}
                >
                    화목반
                </button>
            </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-3 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-200 font-bold text-lg
                ${currentPage === item.id 
                  ? getActiveStyles() 
                  : 'text-gray-400 hover:bg-navy-800 hover:text-white'}
              `}
            >
              {item.icon}
              <span>{item.label}</span>
              {currentPage === item.id && (
                  <div className={`ml-auto w-2 h-2 rounded-full ${selectedClass === 'TT' ? 'bg-green-500' : 'bg-brand-400'}`}></div>
              )}
            </button>
          ))}
        </nav>

        {/* Footer info */}
        <div className="p-6 border-t border-navy-800 mt-auto">
            
            <p className="mt-4 text-center text-xs text-gray-600">
                © 2026 Robot Creativity Lab
            </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
