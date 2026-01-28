import React from 'react';
import { CURRICULUM_DATA } from '../constants';
import { ExternalLink } from 'lucide-react';

const CurriculumView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center py-8">
        <h2 className="text-6xl font-display font-bold text-gray-800 mb-6">올로 AI 커리큘럼</h2>
        <p className="text-lg text-gray-600">1단계 기초부터 8단계 마스터 과정까지 도전해보세요!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {CURRICULUM_DATA.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-200 group flex flex-col h-full">
            <div className="h-56 overflow-hidden relative bg-gray-50 p-4 flex items-center justify-center">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
              />
              <div className={`absolute top-4 left-4 ${item.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                {item.level}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <h3 className={`text-xl font-bold mb-3 ${item.titleColor} transition-colors`}>
                {item.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                {item.description}
              </p>

              <a 
                href={item.externalLink} 
                target="_blank" 
                rel="noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-black text-white hover:bg-gray-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5`}
              >
                <ExternalLink size={16} />
                상세 정보 보기
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculumView;