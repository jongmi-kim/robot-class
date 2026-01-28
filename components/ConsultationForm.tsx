import React, { useState, useEffect } from 'react';
import { ClassType, ConsultationRequest } from '../types';
import { CheckCircle, MessageCircle, Phone, User, AlertCircle, BellRing, Info, ExternalLink } from 'lucide-react';

// ============================================================================================
// [선생님/개발자 설정 가이드 🛠️]
// 1. 아래 제공해주신 구글 폼 주소(https://forms.gle/EbxzypEjuBu1BpjN9)를 열어주세요.
// 2. '미리 채워진 링크 가져오기(Get pre-filled link)' 기능을 통해 각 항목의 ID(entry.xxxx)를 찾아주세요.
// 3. 실제 전송을 위해서는 'forms.gle' 주소가 아닌, 인터넷 주소창에 보이는 긴 주소('docs.google.com/...')의 ID가 필요합니다.
// ============================================================================================

const GOOGLE_FORM_CONFIG = {
  // 사용자가 제공한 원본 구글 폼 주소 (직접 이동용)
  ORIGINAL_URL: "https://forms.gle/EbxzypEjuBu1BpjN9",

  // 실제 전송용 URL (수정 필요: forms.gle 주소는 API 전송이 안됩니다. 긴 주소의 ID로 바꿔주세요)
  // 예: https://docs.google.com/forms/d/e/1FAIpQLSd.../formResponse
  FORM_ACTION_URL: "https://docs.google.com/forms/d/e/1FAIpQLSc3L83490vz5lSgJd3DS3QATCzQ9khXpeqmmdpfARGZi24oNg/formResponse",
  
  // 각 입력 항목의 고유 ID (entry.xxxxxx 형식) - 미리 채워진 링크에서 확인하여 교체하세요.
  ENTRY_IDS: {
    CLASS_SELECTION: "entry.1779559595", // "월수반(1~2학년)" 등의 값이 들어가는 항목
    STUDENT_NAME: "entry.1404358059",    // "학생의 이름을 적어주세요" 항목
    PARENT_PHONE: "entry.629707229",    // "부모님 연락처를 남겨주세요" 항목
    CONTENT: "entry.142509027",         // "상담요청 할 내용을 적어주세요 (질문 포함)" 항목
  }
};

interface ConsultationFormProps {
  selectedClass: ClassType;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ selectedClass }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ConsultationRequest & { subClass: string }>({
    classType: selectedClass,
    studentName: '',
    parentPhone: '',
    content: '',
    subClass: ''
  });

  const isMW = selectedClass === 'MW';

  // Theme definition
  const theme = {
    borderColor: isMW ? 'border-brand-500' : 'border-green-500',
    bgColor: isMW ? 'bg-brand-50' : 'bg-green-50',
    textColor: isMW ? 'text-brand-700' : 'text-green-700',
    hoverBorder: isMW ? 'hover:border-brand-300' : 'hover:border-green-300',
    iconColor: isMW ? 'text-brand-500' : 'text-green-500',
    buttonBg: isMW ? 'bg-brand-500 hover:bg-brand-600' : 'bg-green-600 hover:bg-green-700',
    topBar: isMW ? 'bg-brand-400' : 'bg-green-500',
    inputFocus: isMW ? 'focus:border-brand-400' : 'focus:border-green-500',
  };

  useEffect(() => {
    setFormData(prev => ({ 
      ...prev, 
      classType: selectedClass,
      subClass: '' 
    }));
  }, [selectedClass]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubClassChange = (grade: string) => {
    setFormData(prev => ({ ...prev, subClass: grade }));
  };

  // 요청하신 대로 구글 폼의 선택지와 정확히 일치하도록 값을 생성합니다.
  const getClassFormValue = () => {
    const className = isMW ? "월수반" : "화목반";
    const gradeName = formData.subClass === '1-2' ? "(1~2학년)" : "(3~4학년)";
    // 결과 예시: "월수반(1~2학년)" 또는 "화목반(3~4학년)"
    return `${className}${gradeName}`; 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.subClass) {
      alert("학년 반을 선택해주세요!");
      return;
    }

    // 개발자/선생님이 아직 ID 설정을 안 했을 경우 안내
    if (GOOGLE_FORM_CONFIG.FORM_ACTION_URL.includes("YOUR_FORM_ID_HERE")) {
      const confirmOpen = window.confirm(
        "아직 웹사이트와 구글 폼이 내부적으로 연결되지 않았습니다.\n제공해주신 구글 폼 페이지를 직접 여시겠습니까?"
      );
      if (confirmOpen) {
        window.open(GOOGLE_FORM_CONFIG.ORIGINAL_URL, '_blank');
      }
      return;
    }

    setIsSubmitting(true);

    const formPayload = new FormData();
    formPayload.append(GOOGLE_FORM_CONFIG.ENTRY_IDS.CLASS_SELECTION, getClassFormValue());
    formPayload.append(GOOGLE_FORM_CONFIG.ENTRY_IDS.STUDENT_NAME, formData.studentName);
    formPayload.append(GOOGLE_FORM_CONFIG.ENTRY_IDS.PARENT_PHONE, formData.parentPhone);
    formPayload.append(GOOGLE_FORM_CONFIG.ENTRY_IDS.CONTENT, formData.content);

    try {
      await fetch(GOOGLE_FORM_CONFIG.FORM_ACTION_URL, {
        method: 'POST',
        body: formPayload,
        mode: 'no-cors' 
      });

      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
        window.scrollTo(0,0);
      }, 500);

    } catch (error) {
      console.error("Form submission error:", error);
      alert("전송 중 오류가 발생했습니다. 구글 폼을 직접 열어 작성해주세요.");
      window.open(GOOGLE_FORM_CONFIG.ORIGINAL_URL, '_blank');
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl shadow-sm border border-brand-100 animate-fade-in">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce">
          <CheckCircle size={48} />
        </div>
        <h2 className="text-3xl font-display font-bold text-gray-800 mb-2">상담 요청 접수 완료!</h2>
        <p className="text-xl text-gray-600 mb-2 font-bold">선생님께 알림이 전송되었습니다 🔔</p>
        <p className="text-gray-500 mb-10 text-center max-w-sm">
          수업 후 순서에 따라 연락드리겠습니다.<br/>
          잠시만 기다려주세요!
        </p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setFormData({ ...formData, content: '', studentName: '', parentPhone: '', subClass: '' });
          }}
          className="px-8 py-4 bg-navy-900 text-white rounded-2xl hover:bg-navy-800 transition-colors font-bold text-lg shadow-lg"
        >
          돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-5xl font-display font-bold text-gray-800 mb-6">로봇창의반 상담요청</h2>
      </div>

      {/* Info Banner with Direct Link */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-3 shadow-sm justify-between">
        <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-1.5 rounded-full text-blue-600 shrink-0">
                <AlertCircle size={20} />
            </div>
            <div className="text-blue-800 font-medium text-lg">
                <p><span className="font-bold mr-2">안내 :</span> 수업 후 순서에 따라 연락드리니, 다소 늦어질 수 있습니다 📞</p>
            </div>
        </div>
        <a 
            href={GOOGLE_FORM_CONFIG.ORIGINAL_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-bold text-white bg-blue-500 px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors shadow-sm whitespace-nowrap"
        >
            <ExternalLink size={14} />
            구글 폼에서 직접 작성하기
        </a>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
        <div className={`h-4 ${theme.topBar}`}></div>
        
        <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-8">
          
          {/* Class Selection - Matches Google Form Values */}
          <div className="pb-8 border-b border-gray-100">
            <label className="block text-lg font-bold text-gray-800 mb-4">로봇창의 어떤 반입니까?</label>
            <div className="grid grid-cols-2 gap-4">
                <button
                    type="button"
                    onClick={() => handleSubClassChange('1-2')}
                    className={`py-4 rounded-xl border-[3px] font-bold text-lg transition-all duration-200
                        ${formData.subClass === '1-2'
                            ? `${theme.borderColor} ${theme.bgColor} ${theme.textColor} shadow-md transform scale-105`
                            : `border-gray-200 text-gray-400 ${theme.hoverBorder} hover:bg-gray-50`
                        }
                    `}
                >
                    {isMW ? '월수반' : '화목반'} (1~2학년)
                </button>
                <button
                    type="button"
                    onClick={() => handleSubClassChange('3-4')}
                    className={`py-4 rounded-xl border-[3px] font-bold text-lg transition-all duration-200
                        ${formData.subClass === '3-4'
                            ? `${theme.borderColor} ${theme.bgColor} ${theme.textColor} shadow-md transform scale-105`
                            : `border-gray-200 text-gray-400 ${theme.hoverBorder} hover:bg-gray-50`
                        }
                    `}
                >
                    {isMW ? '월수반' : '화목반'} (3~4학년)
                </button>
            </div>
          </div>

          {/* Student Name */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <User size={20} className="text-gray-400" />
                학생의 이름을 적어주세요
            </label>
            <input
                required
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className={`w-full px-6 py-4 text-lg rounded-xl bg-gray-50 border-2 ${theme.borderColor} focus:bg-white ${theme.inputFocus} focus:ring-0 outline-none transition-all placeholder-gray-400`}
                placeholder="예: 홍길동"
            />
          </div>

          {/* Parent Phone */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Phone size={20} className="text-gray-400" />
                부모님 연락처를 남겨주세요
            </label>
            <input
                required
                type="tel"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleChange}
                className={`w-full px-6 py-4 text-lg rounded-xl bg-gray-50 border-2 ${theme.borderColor} focus:bg-white ${theme.inputFocus} focus:ring-0 outline-none transition-all placeholder-gray-400`}
                placeholder="예: 010-1234-5678"
            />
          </div>

          {/* Consultation Content */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <MessageCircle size={20} className="text-gray-400" />
                상담요청 할 내용을 적어주세요 (질문 포함)
            </label>
            <textarea
                required
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={5}
                className={`w-full px-6 py-4 text-lg rounded-xl bg-gray-50 border-2 ${theme.borderColor} focus:bg-white ${theme.inputFocus} focus:ring-0 outline-none transition-all placeholder-gray-400 resize-none`}
                placeholder="궁금한 점이나 상담하고 싶은 내용을 자유롭게 작성해주세요."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white font-bold py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-3 text-xl
                    ${theme.buttonBg} ${isSubmitting ? 'opacity-70 cursor-wait' : ''}
                `}
            >
                {isSubmitting ? (
                  <>전송 중...</>
                ) : (
                  <>
                    <BellRing size={24} className="animate-pulse" />
                    상담 요청 보내기
                  </>
                )}
            </button>
            <p className="text-center text-sm text-gray-400 mt-4 flex items-center justify-center gap-1">
                <Info size={14} />
                제출 버튼을 누르면 선생님에게 자동으로 알림이 전송됩니다.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
