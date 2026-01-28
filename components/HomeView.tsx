import React from 'react';
import { Calendar, ShoppingBag, BookOpen, ArrowRight, Upload, MessageCircle } from 'lucide-react';
import { Page, ClassType } from '../types';

interface HomeViewProps {
  setPage: (page: Page) => void;
  selectedClass: ClassType;
}

const HomeView: React.FC<HomeViewProps> = ({ setPage, selectedClass }) => {
  const isMW = selectedClass === 'MW';

  // Dynamic theme colors for cards based on class selection
  const theme = {
    iconBg: isMW ? 'bg-brand-50' : 'bg-green-50',
    iconColor: isMW ? 'text-brand-600' : 'text-green-600',
    titleHover: isMW ? 'group-hover:text-brand-600' : 'group-hover:text-green-600',
  };

  return (
    <div className="space-y-10">
      {/* Welcome Banner */}
      <div className="bg-navy-900 rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden group">
        <div className="relative z-10 max-w-2xl">
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-6`}>
            <span className={`w-2 h-2 rounded-full animate-pulse ${isMW ? 'bg-brand-400' : 'bg-green-400'}`}></span>
            <span className={`text-sm font-bold ${isMW ? 'text-brand-100' : 'text-green-100'}`}>
                현재 {isMW ? '월수반' : '화목반'} 접속 중
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            반가워요! <br/>
            <span className={isMW ? 'text-brand-400' : 'text-green-400'}>로봇창의부</span> 입니다.
          </h2>
          <p className="text-gray-400 text-xl mb-10 leading-relaxed">
            우리 아이들의 창의력이 자라나는 공간.<br/>
            오늘도 즐거운 로봇 수업을 시작해볼까요?
          </p>
          <button 
            onClick={() => setPage('schedule')}
            className={`
                px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center gap-2 hover:gap-4 shadow-lg
                ${isMW 
                    ? 'bg-brand-400 text-navy-900 hover:bg-brand-500 shadow-brand-400/20' 
                    : 'bg-green-500 text-white hover:bg-green-600 shadow-green-500/20'}
            `}
          >
            일정 확인하기 <ArrowRight size={20} />
          </button>
        </div>
        
        {/* Decorative Circles */}
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full -mr-20 -mt-20 blur-3xl transition-all duration-1000 group-hover:opacity-70 opacity-30 ${isMW ? 'bg-brand-500' : 'bg-green-500'}`}></div>
        <div className={`absolute bottom-0 right-20 w-64 h-64 rounded-full blur-3xl opacity-20 ${isMW ? 'bg-accent-500' : 'bg-green-400'}`}></div>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <button 
          onClick={() => setPage('schedule')}
          className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all border border-gray-100 text-left group h-full"
        >
          <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner ${theme.iconBg} ${theme.iconColor}`}>
            <Calendar size={32} />
          </div>
          <h3 className={`text-2xl font-bold text-navy-900 mb-2 transition-colors ${theme.titleHover}`}>수업 일정</h3>
          <p className="text-gray-500 text-lg">이번 주 수업 일정과<br/>장소를 확인해요</p>
        </button>

        <button 
          onClick={() => setPage('curriculum')}
          className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all border border-gray-100 text-left group h-full"
        >
          <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner ${theme.iconBg} ${theme.iconColor}`}>
            <BookOpen size={32} />
          </div>
          <h3 className={`text-2xl font-bold text-navy-900 mb-2 transition-colors ${theme.titleHover}`}>커리큘럼</h3>
          <p className="text-gray-500 text-lg">이번 학기에 만들<br/>로봇들을 살펴봐요</p>
        </button>

        <button 
          onClick={() => setPage('parts')}
          className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all border border-gray-100 text-left group h-full"
        >
          <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner ${theme.iconBg} ${theme.iconColor}`}>
            <ShoppingBag size={32} />
          </div>
          <h3 className={`text-2xl font-bold text-navy-900 mb-2 transition-colors ${theme.titleHover}`}>부품 구입</h3>
          <p className="text-gray-500 text-lg">필요한 부품을<br/>간편하게 신청해요</p>
        </button>

        <button 
          onClick={() => setPage('works')}
          className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all border border-gray-100 text-left group h-full"
        >
          <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner ${theme.iconBg} ${theme.iconColor}`}>
            <Upload size={32} />
          </div>
          <h3 className={`text-2xl font-bold text-navy-900 mb-2 transition-colors ${theme.titleHover}`}>작품 올리기</h3>
          <p className="text-gray-500 text-lg">나만의 멋진 로봇 작품을<br/>친구들에게 자랑해요</p>
        </button>

        <button 
          onClick={() => setPage('consultation')}
          className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all border border-gray-100 text-left group h-full"
        >
          <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner ${theme.iconBg} ${theme.iconColor}`}>
            <MessageCircle size={32} />
          </div>
          <h3 className={`text-2xl font-bold text-navy-900 mb-2 transition-colors ${theme.titleHover}`}>상담 요청</h3>
          <p className="text-gray-500 text-lg">궁금한 점이 있다면<br/>언제든 물어보세요</p>
        </button>
      </div>
    </div>
  );
};

export default HomeView;