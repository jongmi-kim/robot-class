import React from 'react';
import { Menu, Bell } from 'lucide-react';
import { ClassType } from '../../types';

interface HeaderProps {
  toggleSidebar: () => void;
  title: string;
  selectedClass: ClassType;
  setSelectedClass: (cls: ClassType) => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, title, selectedClass, setSelectedClass }) => {
  return (
    <header className="sticky top-0 z-10 bg-gray-50/90 backdrop-blur-md px-6 md:px-10 py-5 flex items-center justify-between transition-all duration-300 shadow-sm border-b border-gray-100/50">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <button 
          onClick={toggleSidebar}
          className="p-2 -ml-2 text-navy-900 hover:bg-white rounded-xl md:hidden transition-colors shrink-0"
        >
          <Menu size={28} />
        </button>
        
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 overflow-hidden">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-navy-900 whitespace-nowrap">{title}</h1>
            
            <div className="flex items-center gap-2 md:ml-2 mb-2 md:mb-0">
                <button 
                    onClick={() => setSelectedClass('MW')}
                    className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all
                        ${selectedClass === 'MW' 
                            ? 'bg-brand-400 text-navy-900 shadow-sm' 
                            : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                        }
                    `}
                >
                    월수반
                </button>
                <button 
                    onClick={() => setSelectedClass('TT')}
                    className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all
                        ${selectedClass === 'TT' 
                            ? 'bg-green-500 text-white shadow-sm' 
                            : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                        }
                    `}
                >
                    화목반
                </button>
            </div>

            <div className="text-xs md:text-sm font-medium text-gray-500 flex flex-col md:flex-row md:items-center md:gap-3 leading-tight truncate hidden lg:flex">
                {selectedClass === 'MW' ? (
                    <>
                        <span className="hidden md:block w-px h-3 bg-gray-300"></span>
                        <span className="truncate">
                           <span className="font-bold text-gray-600">1~2학년</span> 2:30~3:10
                           <span className="mx-2 text-gray-300">|</span>
                           <span className="font-bold text-gray-600">3~4학년</span> 3:20~4:10
                        </span>
                    </>
                ) : (
                    <>
                        <span className="hidden md:block w-px h-3 bg-gray-300"></span>
                        <span className="truncate">
                           <span className="font-bold text-gray-600">1~2학년</span> 1:40~2:20
                           <span className="mx-2 text-gray-300">|</span>
                           <span className="font-bold text-gray-600">3~4학년</span> 2:30~3:10
                        </span>
                    </>
                )}
            </div>
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0 pl-4">
        <button className="p-3 bg-white rounded-full text-gray-400 hover:text-brand-500 shadow-sm hover:shadow-md transition-all">
            <Bell size={20} />
        </button>
        <div className="hidden md:flex items-center gap-3 bg-white pl-1 pr-4 py-1 rounded-full shadow-sm border border-gray-100">
            <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold text-xs">
                T
            </div>
            <span className="text-sm font-bold text-gray-600">선생님</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
