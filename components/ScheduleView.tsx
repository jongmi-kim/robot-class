import React from 'react';
import { ClassType } from '../types';
import { Calendar as CalendarIcon, ExternalLink, AlertCircle } from 'lucide-react';

interface ScheduleViewProps {
  selectedClass: ClassType;
}

const ScheduleView: React.FC<ScheduleViewProps> = ({ selectedClass }) => {
  
  // Google Calendar Configuration
  // Decoded CIDs from the provided URLs
  const CALENDAR_CONFIG = {
    MW: {
      id: 'f7b915ffc00cb502e2bfbf86a830f74d64348b2c19da8b8a582e014d9802673d@group.calendar.google.com',
      color: '%23F6BF26', // Matching Brand Yellow/Orange
      themeColor: 'bg-brand-400',
      label: '월수반 (Mon & Wed)',
      textColor: 'text-navy-900',
      subTextColor: 'text-navy-900/80',
      iconBg: 'bg-white/30'
    },
    TT: {
      id: '49a63f2747f0247f1002018ff09a48e45857014199b957f1397cd151abc60711@group.calendar.google.com',
      color: '%2333B679', // Sage/Green
      themeColor: 'bg-green-600',
      label: '화목반 (Tue & Thu)',
      textColor: 'text-white',
      subTextColor: 'text-green-50',
      iconBg: 'bg-white/20'
    }
  };

  const config = CALENDAR_CONFIG[selectedClass];
  
  // Construct Embed URL
  const embedUrl = `https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FSeoul&src=${encodeURIComponent(config.id)}&color=${config.color}&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0`;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Banner Section */}
      <div className={`${config.themeColor} rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8 transition-colors duration-500`}>
        <div className={`${config.iconBg} p-6 rounded-3xl text-white backdrop-blur-sm hidden md:block`}>
            <CalendarIcon size={48} />
        </div>
        <div className="relative z-10 text-center md:text-left">
          <div className="inline-block bg-black/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-3 text-white/90">
             {config.label}
          </div>
          <h2 className={`text-3xl md:text-5xl font-display font-black ${config.textColor} mb-3 tracking-tight`}>
            {selectedClass === 'MW' ? '월수반 수업일정' : '화목반 수업일정'}
          </h2>
          <p className={`${config.subTextColor} text-lg font-medium max-w-2xl`}>
            구글 캘린더로 실시간 수업 일정을 확인하세요.
          </p>
        </div>

        {/* Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none"></div>
      </div>

      {/* Google Calendar Embed */}
      <div className={`bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border-4 overflow-hidden p-2 md:p-4 transition-colors duration-300 ${selectedClass === 'MW' ? 'border-brand-400' : 'border-green-500'}`}>
        
        {/* Mobile Alert */}
        <div className="md:hidden mb-4 p-4 bg-gray-50 rounded-xl flex items-start gap-3 text-sm text-gray-600">
           <AlertCircle className="shrink-0 text-gray-400 mt-0.5" size={16} />
           <p>화면이 작을 경우 캘린더를 가로로 스크롤하거나 아래 버튼을 눌러 크게 보세요.</p>
        </div>

        <div className="relative w-full h-[600px] md:h-[750px] bg-gray-50 rounded-xl overflow-hidden">
            <iframe 
                src={embedUrl}
                style={{border: 0}} 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no"
                title="Google Calendar"
            ></iframe>
        </div>

        <div className="mt-4 flex justify-end px-2">
            <a 
                href={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(config.id)}&ctz=Asia%2FSeoul`}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 text-sm font-bold transition-colors px-4 py-2 rounded-lg hover:bg-gray-50
                  ${selectedClass === 'MW' ? 'text-brand-600' : 'text-green-600'}
                `}
            >
                <ExternalLink size={16} />
                새 창에서 캘린더 열기
            </a>
        </div>
      </div>
    </div>
  );
};

export default ScheduleView;
