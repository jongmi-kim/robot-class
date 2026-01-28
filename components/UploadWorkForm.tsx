import React from 'react';
import { ClassType } from '../types';
import { AlertTriangle, ExternalLink, Image as ImageIcon, Sparkles, FolderOpen, Heart } from 'lucide-react';

// ============================================================================================
// [선생님 설정 가이드 🛠️]
// 월수반과 화목반의 패들렛 주소를 각각 넣어주세요.
//
// 1. 패들렛(padlet.com)에서 '월수반'용 담벼락 생성 -> 주소 복사 -> 아래 MW에 붙여넣기
// 2. 패들렛에서 '화목반'용 담벼락 생성 -> 주소 복사 -> 아래 TT에 붙여넣기
// ============================================================================================

const BOARD_CONFIG = {
  // 월수반 패들렛 주소
  MW: "https://padlet.com/toda4000/padlet-3bx7ad1byzzkfsdz", 
  
  // 화목반 패들렛 주소
  TT: "https://padlet.com/toda4000/padlet-4iblie7q557pf86z"
};

interface UploadWorkFormProps {
  selectedClass: ClassType;
}

const UploadWorkForm: React.FC<UploadWorkFormProps> = ({ selectedClass }) => {
  const isMW = selectedClass === 'MW';
  
  // 현재 선택된 반에 따라 주소 선택
  const currentBoardUrl = isMW ? BOARD_CONFIG.MW : BOARD_CONFIG.TT;

  // Theme definition
  const theme = {
    topBar: isMW ? 'bg-brand-400' : 'bg-green-500',
    borderColor: isMW ? 'border-brand-400' : 'border-green-400',
    buttonBg: isMW ? 'bg-brand-500 hover:bg-brand-600' : 'bg-green-500 hover:bg-green-600',
    iconColor: isMW ? 'text-brand-500' : 'text-green-500',
    bgColor: isMW ? 'bg-brand-50' : 'bg-green-50',
    textColor: isMW ? 'text-brand-600' : 'text-green-600',
    title: isMW ? '월수반' : '화목반'
  };

  const hasConfigError = currentBoardUrl.includes("padlet.com/embed/yours");

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center">
        <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${isMW ? 'bg-brand-100 text-brand-700' : 'bg-green-100 text-green-700'}`}>
            현재 {theme.title} 갤러리입니다
        </div>
        <h2 className={`text-5xl md:text-6xl font-display font-bold mb-6 ${theme.textColor}`}>
           {theme.title} 로봇 갤러리 📸
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          로그인 없이 편하게 사진을 올릴 수 있어요.<br/>
          친구들이 만든 멋진 로봇 작품에 <span className="text-red-500 font-bold">하트❤️</span>를 눌러주세요!
        </p>
      </div>

      {/* Guide Banner */}
      <div className={`${theme.bgColor} border-2 ${theme.borderColor} rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 shadow-sm text-center md:text-left`}>
        <div className={`bg-white p-3 rounded-full ${theme.iconColor} shrink-0 shadow-sm hidden md:block`}>
            <Sparkles size={24} />
        </div>
        <div className="flex-1">
             <p className="text-gray-800 font-medium text-base md:text-lg leading-relaxed break-keep">
                <span className="font-bold mr-1">✨ 사용 방법 안내 :</span> 
                우측 하단의 <strong>(+) 버튼</strong>을 누르면 사진 or 영상을 올릴 수 있어요. 
                <span className="ml-2 text-red-600 font-bold bg-white px-2 py-0.5 rounded border border-red-200 shadow-sm inline-block mt-2 md:mt-0">학년/이름 꼭 적기!!</span>
            </p>
        </div>
        <a 
            href={currentBoardUrl}
            target="_blank" 
            rel="noreferrer"
            className={`shrink-0 px-5 py-2.5 ${theme.buttonBg} text-white font-bold rounded-xl shadow-md transition-all hover:-translate-y-0.5 flex items-center gap-2 text-sm`}
        >
            <ExternalLink size={16} />
            새 창으로 크게 보기
        </a>
      </div>

      {/* Embed Container */}
      <div className={`bg-white rounded-[2rem] shadow-2xl border-4 ${theme.borderColor} overflow-hidden relative min-h-[600px] md:min-h-[800px]`}>
        
        {/* Decorative Header */}
        <div className={`${theme.topBar} p-4 flex items-center justify-between text-white transition-colors duration-300`}>
            <div className="flex items-center gap-2 px-2">
                <ImageIcon size={20} className="opacity-80"/>
                <span className="font-bold opacity-90 text-sm tracking-wider">{theme.title} Gallery Board</span>
            </div>
            <div className="flex items-center gap-2">
                 <Heart size={16} className="fill-white/30 text-transparent" />
                 <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
            </div>
        </div>

        {hasConfigError ? (
             <div className="flex flex-col items-center justify-center h-[500px] text-center p-10 bg-gray-50">
                <div className="bg-white p-6 rounded-full shadow-lg mb-6">
                    <FolderOpen size={64} className="text-gray-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-600 mb-3">게시판 연결이 필요해요</h3>
                <div className="text-gray-500 space-y-2 bg-white p-6 rounded-xl border border-gray-200 max-w-lg shadow-sm">
                    <p className="font-bold text-gray-700">💡 선생님, 반별로 패들렛 주소를 넣어주세요!</p>
                    <p className="text-sm">
                        1. <a href="https://padlet.com" target="_blank" rel="noreferrer" className="text-blue-500 underline">padlet.com</a>에서 월수반/화목반 보드를 만드세요.<br/>
                        2. 코드의 <code>BOARD_CONFIG</code> 부분에 각각 주소를 넣어주세요.<br/>
                        3. 현재 선택된 반: <strong className="text-gray-800">{theme.title}</strong>
                    </p>
                </div>
             </div>
        ) : (
            <iframe 
                key={currentBoardUrl} // URL이 바뀌면 iframe을 새로고침하기 위함
                src={currentBoardUrl}
                className="w-full h-[800px] md:h-[1000px] border-0 bg-gray-50"
                title={`${theme.title} Works Board`}
                allow="camera; microphone; geolocation"
            >
                로드 중...
            </iframe>
        )}
      </div>
      
      <div className="text-center pb-10">
         <p className="inline-flex items-center gap-2 text-gray-400 text-sm bg-gray-100 px-4 py-2 rounded-full">
            <AlertTriangle size={14} />
            <span>비방이나 나쁜 말은 선생님이 삭제할 수 있습니다.</span>
         </p>
      </div>
    </div>
  );
};

export default UploadWorkForm;