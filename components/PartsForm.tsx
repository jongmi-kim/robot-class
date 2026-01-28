import React from 'react';
import { ClassType } from '../types';
import { ShoppingCart, Wrench, ShieldCheck, ExternalLink } from 'lucide-react';

interface PartsFormProps {
  selectedClass: ClassType;
}

const PartsForm: React.FC<PartsFormProps> = ({ selectedClass }) => {
  return (
    <div className="space-y-10 animate-fade-in max-w-7xl mx-auto">
      
      {/* 1. Guide Header Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
           <div className="bg-orange-500 p-2.5 rounded-xl text-white shadow-lg shadow-orange-200">
               <ShoppingCart size={28} />
           </div>
           <h2 className="text-3xl font-display font-bold text-gray-800">부품 구입 가이드</h2>
           <Wrench className="text-gray-400" size={24} />
        </div>

        {/* Spec Check Banner */}
        <div className="bg-white rounded-[2rem] shadow-xl border-t-[6px] border-orange-500 p-8 md:p-10 relative overflow-hidden">
            <div className="text-center mb-8 relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-3 text-gray-800">
                    <ShieldCheck className="text-green-500 fill-green-100" size={32} />
                    <span>규격 확인 필수! (12mm <span className="text-gray-400 text-4xl mx-2 font-black align-middle">vs</span> 6mm)</span>
                </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {/* 12mm Box */}
                <div className="bg-blue-50/80 border-2 border-blue-100 rounded-2xl p-10 text-center hover:bg-blue-100 transition-colors cursor-default group">
                    <div className="inline-block bg-blue-500 text-white text-sm md:text-base font-bold px-4 py-1.5 rounded-full mb-4 group-hover:scale-105 transition-transform">
                        주의
                    </div>
                    <p className="text-blue-900 font-bold text-3xl md:text-4xl mb-3">1 ~ 5단계 학생 : <span className="text-blue-600">12mm</span></p>
                    <p className="text-blue-600/80 text-base font-medium">올로플러스, AI용 부품을 확인하세요!</p>
                </div>
                 {/* 6mm Box */}
                <div className="bg-purple-50/80 border-2 border-purple-100 rounded-2xl p-10 text-center hover:bg-purple-100 transition-colors cursor-default group">
                    <div className="inline-block bg-purple-500 text-white text-sm md:text-base font-bold px-4 py-1.5 rounded-full mb-4 group-hover:scale-105 transition-transform">
                        주의
                    </div>
                    <p className="text-purple-900 font-bold text-3xl md:text-4xl mb-3">6 ~ 8단계 학생 : <span className="text-purple-600">6mm</span></p>
                    <p className="text-purple-600/80 text-base font-medium">드림, 스마트 부품으로 확인하세요!</p>
                </div>
            </div>

             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
        </div>
      </div>

      {/* 2. Shop Iframe Section */}
      <div className="bg-white rounded-3xl shadow-xl border-[6px] border-orange-400 overflow-hidden relative group">
          <div className="bg-orange-50 border-b border-orange-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="ml-3 text-xs font-mono text-orange-600/80 font-bold">ROBOTIS Shop Viewer</span>
              </div>
              <a 
                href="https://www.robotis.com/shop/list.php?ca_id=301020" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm font-bold text-white flex items-center gap-2 hover:bg-orange-600 bg-orange-500 px-5 py-2.5 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                  <ExternalLink size={16} /> 새 창으로 열기
              </a>
          </div>
          
          <div className="relative h-[850px] w-full bg-gray-100">
             <iframe 
                src="https://www.robotis.com/shop/list.php?ca_id=301020"
                className="w-full h-full border-0"
                title="Robotis Parts Shop"
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          </div>
      </div>
    </div>
  );
};

export default PartsForm;