import { CurriculumItem, RobotFile, PartItem } from './types';

export const CURRICULUM_DATA: CurriculumItem[] = [
  {
    id: 1,
    level: '1단계',
    title: '올로 AI 1단계',
    description: '로봇의 구성 요소와 작동 원리를 배우며 창의력의 기초를 다집니다. 로봇 전용 앱을 활용한 첫걸음!',
    imageUrl: 'https://www.robotis.com/data/item/921-0162-000/tn_OLLO_AI_level1_500.jpg',
    externalLink: 'https://www.robotis.com/shop/item.php?it_id=921-0162-000',
    titleColor: 'text-orange-500',
    badgeColor: 'bg-orange-500'
  },
  {
    id: 2,
    level: '2단계',
    title: '올로 AI 2단계',
    description: '적외선 센서와 접촉 센서를 이해하고, 장애물을 피하거나 감지하는 지능형 로봇을 제작합니다.',
    imageUrl: 'https://www.robotis.com/data/item/921-0167-000/tn_OLLO_AI_level2_500.jpg',
    externalLink: 'https://www.robotis.com/shop/item.php?it_id=921-0167-000',
    titleColor: 'text-red-600',
    badgeColor: 'bg-red-600'
  },
  {
    id: 3,
    level: '3단계',
    title: '올로 AI 3단계',
    description: 'R+Task를 이용한 블록 코딩 기초. 나만의 알고리즘으로 로봇의 행동 패턴을 설계하는 과정입니다.',
    imageUrl: 'https://www.robotis.com/data/item/921-0188-000_tn_OLLO_AI_level3_500.jpg',
    externalLink: 'https://www.robotis.com/shop/item.php?it_id=921-0188-000',
    titleColor: 'text-blue-600',
    badgeColor: 'bg-blue-600'
  },
  {
    id: 4,
    level: '4단계',
    title: '올로 AI 4단계',
    description: '다양한 기계 요소를 조합하여 복잡한 움직임을 구현하는 전문 로봇 제작 단계입니다.',
    imageUrl: 'https://www.robotis.com/data/item/921-0203-000/tn_OLLO_AI_level4_500.jpg',
    externalLink: 'https://www.robotis.com/shop/item.php?it_id=921-0203-000',
    titleColor: 'text-lime-600',
    badgeColor: 'bg-lime-600'
  },
  {
    id: 5,
    level: '5단계',
    title: '올로 AI 5단계',
    description: '블루투스 통신을 활용한 원격 제어 로봇. 스마트 기기와 연동하여 실시간 컨트롤을 학습합니다.',
    imageUrl: 'https://www.robotis.com/data/item/921-0207-000_tn_OLLO_AI_level5_500.jpg',
    externalLink: 'https://www.robotis.com/shop/item.php?it_id=921-0207-000',
    titleColor: 'text-purple-600',
    badgeColor: 'bg-purple-600'
  },
  {
    id: 6,
    level: '6단계',
    title: '올로 AI 6단계',
    description: '카메라 센서를 이용한 사물 인식 및 추적. 인공지능 로봇의 핵심인 시각 인지 능력을 탐구합니다.',
    imageUrl: 'https://www.robotis.com/data/item/921-1205-000_tn_OLLO_AI_level6_500.jpg',
    externalLink: 'https://www.robotis.com/shop/item.php?it_id=921-1205-000',
    titleColor: 'text-emerald-800',
    badgeColor: 'bg-emerald-800'
  },
  {
    id: 7,
    level: '7단계',
    title: '올로 AI 7단계',
    description: '고급 멀티태스킹 제어. 여러 개의 모터를 정교하게 동기화하여 휴머노이드 보행 원리를 익힙니다.',
    imageUrl: 'https://www.robotis.com/data/item/921-0215-000_tn_OLLO_AI_level7_500.jpg',
    externalLink: 'https://www.robotis.com/shop/item.php?it_id=921-0215-000',
    titleColor: 'text-purple-700',
    badgeColor: 'bg-purple-700'
  },
  {
    id: 8,
    level: '8단계',
    title: '올로 AI 8단계',
    description: '최종 프로젝트 단계. 배운 모든 기술을 총동원하여 자신만의 로봇을 발명하고 발표합니다.',
    imageUrl: 'https://www.robotis.com/data/item/901-0216-000/tn_OLLO_AI_level8_500.jpg',
    externalLink: 'https://www.robotis.com/shop/item.php?it_id=901-0216-000',
    titleColor: 'text-amber-900',
    badgeColor: 'bg-amber-900'
  }
];

export const ROBOT_FILES: RobotFile[] = [
  { id: 1, name: '자동차 로봇 소스코드', version: 'v1.0', date: '2024-05-10', type: 'code' },
  { id: 2, name: '센서로봇 조립 매뉴얼', version: 'PDF', date: '2024-05-12', type: 'manual' },
  { id: 3, name: '라인트레이서 고급 알고리즘', version: 'v2.1', date: '2024-05-15', type: 'code' },
  { id: 4, name: '로봇 암 3D 모델링 파일', version: 'STL', date: '2024-05-18', type: '3d' },
];

export const PARTS_STORE: PartItem[] = [
  { id: 1, name: 'DC 기어드 모터 (6V)', price: 4500, category: '구동부', inStock: true, imageUrl: 'https://picsum.photos/seed/part1/200/200' },
  { id: 2, name: '초음파 거리 센서', price: 3200, category: '센서', inStock: true, imageUrl: 'https://picsum.photos/seed/part2/200/200' },
  { id: 3, name: '서보 모터 SG90', price: 2800, category: '구동부', inStock: true, imageUrl: 'https://picsum.photos/seed/part3/200/200' },
  { id: 4, name: '아두이노 호환보드', price: 8500, category: '제어부', inStock: true, imageUrl: 'https://picsum.photos/seed/part4/200/200' },
  { id: 5, name: '리튬이온 배터리 팩', price: 12000, category: '전원', inStock: false, imageUrl: 'https://picsum.photos/seed/part5/200/200' },
  { id: 6, name: '점퍼 와이어 세트', price: 1500, category: '부품', inStock: true, imageUrl: 'https://picsum.photos/seed/part6/200/200' },
];

export const GOOGLE_FORM_GUIDE = `
### Google 서비스 연동 가이드

1. **Google Form 설정 (알림 받기 필수!)**
   - **중요:** 구글 폼의 '응답(Responses)' 탭 > 점 3개 메뉴 > '새 응답에 대한 이메일 알림 받기(Get email notifications for new responses)'를 반드시 체크하세요.
   - 이렇게 하면 학생이 상담 신청이나 작품을 올렸을 때 선생님 이메일로 즉시 알림이 옵니다.

2. **작품 올리기 & 상담 요청**
   - '작품 올리기' 폼 질문에 '파일 업로드' 항목을 추가하면 파일이 선생님의 Google Drive 폴더에 자동 저장됩니다.
   - 상담 요청 폼에는 '연락처', '상담내용' 등 필요한 질문 항목을 만드세요.

3. **웹사이트 연동 방법**
   - 이 웹사이트의 디자인은 '프론트엔드' 예시입니다.
   - 실제 작동하게 하려면, Google Form의 '보내기' > '링크'를 복사하여 버튼에 연결하거나,
   - 개발 능력이 있다면 Google Sheets API 등을 활용해 데이터를 연동할 수 있습니다.
`;