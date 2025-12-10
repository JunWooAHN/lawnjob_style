import React, { useState } from 'react';
import { Coffee, Stethoscope, Utensils, Factory, ChevronRight, ChevronLeft, CheckCircle, Wallet, FileText, ShieldCheck, Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Home, Search, PlusSquare, User } from 'lucide-react';

type IndustryKey = 'cafe' | 'hospital' | 'restaurant' | 'manufacturing';

interface Slide {
  title: string;
  subtitle: string;
  content: string;
  imageType: string;
  cta?: string;
}

interface Industry {
  icon: React.ReactElement;
  name: string;
  color: string;
  accent: string;
  slides: Slide[];
}

const CardNews = () => {
  const [activeIndustry, setActiveIndustry] = useState<IndustryKey>('cafe');
  const [currentSlide, setCurrentSlide] = useState(0);

  const industries: Record<IndustryKey, Industry> = {
    cafe: {
      icon: <Coffee className="w-6 h-6" />,
      name: "카페/베이커리",
      color: "bg-amber-100 text-amber-900",
      accent: "text-amber-600",
      slides: [
        {
          title: "알바생이 또 그만두셨나요?",
          subtitle: "사장님, 이제 채용 스트레스 끝내세요.",
          content: "잦은 이직, 교육시키면 나가는 악순환.\n언제까지 반복하실 건가요?",
          imageType: "frustrated_owner"
        },
        {
          title: "인건비, 정부가 내줍니다",
          subtitle: "신규 채용 1명당 최대 1,440만원!",
          content: "카페 매니저, 바리스타 정규직 채용 시\n정부 지원금을 받을 수 있다는 사실,\n알고 계셨나요?",
          imageType: "money_graph"
        },
        {
          title: "채용부터 지원금 신청까지 한 번에!",
          subtitle: "논스톱 원큐 채용 서비스",
          content: "1. 맞춤형 인재 채용\n2. 근로계약서 작성 (노무 리스크 ZERO)\n3. 고용지원금 신청 대행\n\n사장님은 커피만 내리세요.",
          imageType: "checklist"
        },
        {
          title: "직원도 오래 다닙니다",
          subtitle: "왜냐고요? 보너스를 주니까요!",
          content: "저희가 받는 성공보수의 20%를\n직원에게 '장기근무 격려금'으로 지급합니다.\n\n사장님은 인건비 절감,\n직원은 보너스 획득! (Win-Win)",
          imageType: "handshake"
        },
        {
          title: "못 자를까봐 겁나시나요?",
          subtitle: "이별까지 책임지는 계약 설계",
          content: "매출 하락이 걱정되시죠?\n'자연 감축 유도' 계약 설계를 통해\n해고 없이도 유연한 인력 운영이 가능하도록\n안전장치를 마련해 드립니다.",
          imageType: "exit_strategy_cafe"
        },
        {
          title: "100만원은 '비용'이 아닙니다",
          subtitle: "성공보수에서 전액 차감되는 '선수금'",
          content: "추가 비용이 0원입니다.\n나중에 주실 성공보수의 일부를\n미리 '예치'하는 개념입니다.\n(성공보수 정산 시 100% 공제)",
          cta: "내 지원금 조회하기",
          imageType: "cta"
        }
      ]
    },
    hospital: {
      icon: <Stethoscope className="w-6 h-6" />,
      name: "병원/의원",
      color: "bg-teal-100 text-teal-900",
      accent: "text-teal-600",
      slides: [
        {
          title: "간호조무사/코디네이터 구인난",
          subtitle: "높은 연봉에도 사람 구하기 힘드시죠?",
          content: "개원가의 가장 큰 고민,\n결국은 '사람'입니다.",
          imageType: "hospital_hall"
        },
        {
          title: "고용지원금, 병원도 받습니다",
          subtitle: "청년 일자리 도약 장려금 활용",
          content: "청년 인재 채용 시\n월 최대 60만원 x 24개월\n+ 근속 인센티브 480만원 지원!",
          imageType: "doctor_smile"
        },
        {
          title: "전문적인 행정 처리",
          subtitle: "원장님은 진료에만 집중하세요",
          content: "복잡한 노무 서류, 지원금 신청 요건 검토.\n전문가가 완벽하게 대행해 드립니다.\n채용부터 지원금 수령까지 원스톱으로.",
          imageType: "documents"
        },
        {
          title: "장기 근속 시스템 도입",
          subtitle: "직원 이탈을 막는 획기적 구조",
          content: "수령한 지원금 성공보수의 20%를\n직원에게 인센티브로 지급합니다.\n직원의 애사심이 달라집니다.",
          imageType: "team_meeting"
        },
        {
          title: "인력 감축도 데이터로!",
          subtitle: "HR 플로우(입퇴사) 분석 솔루션",
          content: "무조건 채용만 권하지 않습니다.\n병원의 입퇴사율 흐름을 분석하여\n자연 감소 시점을 예측하고,\n무리한 해고 없이 적정 TO를 맞춰드립니다.",
          imageType: "exit_strategy_hospital"
        },
        {
          title: "착수금? 아니요, '선지급금'입니다",
          subtitle: "성공보수 - 기납부 100만원 = 잔금",
          content: "이중으로 돈이 들지 않습니다.\n어차피 지급하실 수수료의 일부를\n계약 시점에 먼저 납부하는 방식입니다.\n\n[병원명]으로 예상 견적 받아보세요.",
          cta: "예상 견적 받기",
          imageType: "cta"
        }
      ]
    },
    restaurant: {
      icon: <Utensils className="w-6 h-6" />,
      name: "식당/요식업",
      color: "bg-orange-100 text-orange-900",
      accent: "text-orange-600",
      slides: [
        {
          title: "홀서빙, 주방보조...",
          subtitle: "노쇼에 잠수에 지치셨나요?",
          content: "가게 문 여는 것보다\n사람 관리가 더 힘든 사장님들을 위해\n준비했습니다.",
          imageType: "kitchen_busy"
        },
        {
          title: "인건비 80% 절감의 비밀",
          subtitle: "나라돈으로 직원 월급 주기",
          content: "매년 버려지는 고용지원금이 수조원입니다.\n몰라서 못 받는 지원금,\n저희가 싹 찾아서 받아드립니다.",
          imageType: "coins"
        },
        {
          title: "복잡한 서류? NO!",
          subtitle: "면접만 보세요. 나머진 저희가 합니다.",
          content: "구인광고 등록, 이력서 필터링,\n근로계약서, 4대보험, 지원금 신청까지.\n\n사장님 폰에 불나게 해드립니다.",
          imageType: "phone_call"
        },
        {
          title: "오래 일하는 직원을 만듭니다",
          subtitle: "지원금 쉐어 프로그램",
          content: "성공보수의 일부를 직원에게 줍니다.\n'여기서 오래 일하면 보너스가 나온다'는\n확실한 동기부여를 심어줍니다.",
          imageType: "happy_staff"
        },
        {
          title: "사람 자르기 힘들죠?",
          subtitle: "처음부터 '나갈 때'를 대비합니다",
          content: "정규직 전환 의무가 없는 계약직 활용,\n프로젝트 기반 고용 설계를 통해\n법적 분쟁 없는 자연스러운 인력 감축,\n저희가 미리 설계해 둡니다.",
          imageType: "exit_strategy_restaurant"
        },
        {
          title: "돈 더 드는거 아니에요!",
          subtitle: "100만원은 '보증금' 성격입니다",
          content: "지원금 받고 나서 성공보수 주실 때,\n이미 내신 100만원은 빼고 주시면 됩니다.\n사장님 손해는 1원도 없습니다.\n\n선착순 30곳 상담 진행 중!",
          cta: "상담 예약하기",
          imageType: "cta"
        }
      ]
    },
    manufacturing: {
      icon: <Factory className="w-6 h-6" />,
      name: "제조업/공장",
      color: "bg-blue-100 text-blue-900",
      accent: "text-blue-600",
      slides: [
        {
          title: "현장직 구인난, 외국인만 찾나요?",
          subtitle: "내국인 채용하고 지원금 받으세요",
          content: "제조업은 고용지원금 혜택이 가장 큽니다.\n하지만 절차가 복잡해 포기하셨죠?",
          imageType: "factory_machine"
        },
        {
          title: "1인당 최대 2,000만원 혜택",
          subtitle: "고용창출장려금 + 청년채용특별장려금",
          content: "요건만 맞으면 인건비 부담이 확 줄어듭니다.\n생산 원가를 낮추는 가장 확실한 방법은\n'인건비 지원'입니다.",
          imageType: "chart_up"
        },
        {
          title: "채용부터 노무 관리까지",
          subtitle: "중소기업 맞춤형 HR팀",
          content: "자버(Jobber) 기반의 체계적인 인재풀.\n근로계약부터 지원금 수급 심사 대응까지\n완벽하게 처리합니다.",
          imageType: "handshake_suit"
        },
        {
          title: "장기근속 유도 시스템",
          subtitle: "이직률 낮추는 확실한 보상",
          content: "저희 수익의 20%를 근로자에게 돌려줍니다.\n숙련공이 떠나지 않는 공장,\n저희가 만들어 드립니다.",
          imageType: "gears"
        },
        {
          title: "정리해고 없는 인원 감축",
          subtitle: "촉탁직 활용 + AI 도입 로드맵",
          content: "1. 55세 이상 촉탁직 활용 (정규직 TO 감축)\n2. 단순 반복 업무 AI 자동화 설계\n\n'안 뽑아도 되는 자리'는 과감히 없애고\n인건비 구조를 슬림하게 만들어 드립니다.",
          imageType: "exit_strategy_factory"
        },
        {
          title: "착수금은 전액 '충당금' 처리됩니다",
          subtitle: "성공보수 - 기납부 100만원 = 잔금",
          content: "비용이 추가되는 것이 아닙니다.\n성공보수의 일부를 선납하는 구조로\n합리적이고 투명하게 정산합니다.\n\n지금 무료 컨설팅을 신청하세요.",
          cta: "무료 컨설팅 신청",
          imageType: "cta"
        }
      ]
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % industries[activeIndustry].slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + industries[activeIndustry].slides.length) % industries[activeIndustry].slides.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">원스톱 채용 서비스</h1>
          <div className="flex items-center gap-4">
            <Home className="w-6 h-6 text-gray-800" />
            <Search className="w-6 h-6 text-gray-800" />
            <PlusSquare className="w-6 h-6 text-gray-800" />
            <User className="w-6 h-6 text-gray-800" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Industry Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {(Object.keys(industries) as IndustryKey[]).map((key) => (
            <button
              key={key}
              onClick={() => { setActiveIndustry(key); setCurrentSlide(0); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all font-medium text-sm ${
                activeIndustry === key 
                  ? `${industries[key].color} shadow-md transform scale-105` 
                  : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {industries[key].icon}
              {industries[key].name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Instagram Card */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm max-w-sm mx-auto w-full">
            {/* Instagram Header */}
            <div className="px-4 py-3 flex items-center justify-between border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full p-0.5">
                  <div className="w-full h-full bg-white rounded-full"></div>
                </div>
                <span className="font-semibold text-sm">recruitment_solution_official</span>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-800" />
            </div>

            {/* Slide Indicators (Top) */}
            <div className="flex justify-center gap-1.5 py-2 bg-gray-50 border-b border-gray-200">
              {industries[activeIndustry].slides.map((_: Slide, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    idx === currentSlide 
                      ? 'w-8 bg-blue-600 shadow-sm' 
                      : 'w-1.5 bg-blue-300 hover:bg-blue-400'
                  }`}
                  type="button"
                  aria-label={`슬라이드 ${idx + 1}로 이동`}
                />
              ))}
            </div>

            {/* Card Content - Instagram Style */}
            <div className={`aspect-square relative overflow-hidden ${industries[activeIndustry].color.split(' ')[0]}`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 text-center">
                {/* Dynamic Icon for Exit Strategy */}
                {industries[activeIndustry].slides[currentSlide].imageType?.includes('exit_strategy') && (
                  <div className="mb-4 p-3 bg-white/90 rounded-full shadow-lg">
                    <ShieldCheck className={`w-8 h-8 ${industries[activeIndustry].accent}`} />
                  </div>
                )}

                <span className={`text-xs font-bold px-3 py-1.5 bg-white rounded-full mb-4 inline-block shadow-sm ${industries[activeIndustry].accent}`}>
                  #{industries[activeIndustry].name.split('/')[0]}사장님필독
                </span>
                
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2 leading-tight break-keep px-4">
                  {industries[activeIndustry].slides[currentSlide].title}
                </h2>
                
                <p className={`font-bold text-base mb-3 ${industries[activeIndustry].accent} px-4`}>
                  {industries[activeIndustry].slides[currentSlide].subtitle}
                </p>
                
                <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed px-4 max-w-xs">
                  {industries[activeIndustry].slides[currentSlide].content}
                </p>
                
                {industries[activeIndustry].slides[currentSlide].cta && (
                  <button 
                    className={`mt-6 px-8 py-2.5 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-800 transition-colors shadow-lg pointer-events-auto`}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      // CTA 버튼 클릭 시 처리 (예: 링크 이동 등)
                      console.log('CTA 클릭:', industries[activeIndustry].slides[currentSlide].cta);
                    }}
                  >
                    {industries[activeIndustry].slides[currentSlide].cta}
                  </button>
                )}
              </div>

              {/* Navigation Arrows */}
              {currentSlide > 0 && (
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg backdrop-blur-sm z-20 cursor-pointer"
                  type="button"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                </button>
              )}
              {currentSlide < industries[activeIndustry].slides.length - 1 && (
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg backdrop-blur-sm z-20 cursor-pointer"
                  type="button"
                >
                  <ChevronRight className="w-5 h-5 text-gray-800" />
                </button>
              )}
            </div>

            {/* Instagram Action Bar */}
            <div className="px-4 py-3 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Heart className="w-6 h-6 text-gray-800 cursor-pointer hover:text-red-500 transition-colors" />
                  <MessageCircle className="w-6 h-6 text-gray-800 cursor-pointer hover:text-gray-500 transition-colors" />
                  <Send className="w-6 h-6 text-gray-800 cursor-pointer hover:text-gray-500 transition-colors rotate-12" />
                </div>
                <Bookmark className="w-6 h-6 text-gray-800 cursor-pointer hover:text-gray-500 transition-colors" />
              </div>
            </div>

            {/* Likes */}
            <div className="px-4 py-2">
              <div className="text-sm font-semibold text-gray-900 mb-1">좋아요 1,240개</div>
            </div>

            {/* Caption */}
            <div className="px-4 pb-3">
              <div className="text-sm text-gray-900">
                <span className="font-semibold mr-2">recruitment_solution_official</span>
                <span className="text-gray-800">{industries[activeIndustry].slides[currentSlide].subtitle}</span>
              </div>
            </div>
          </div>

          {/* Strategy Dashboard */}
          <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg flex items-center gap-2 mb-4 text-gray-800">
              <FileText className="w-5 h-5 text-blue-500" />
              핵심 세일즈 포인트
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-gray-900">100만원 선수금(Deposit) 강조:</strong> <br/>
                  추가 비용이 아니라, 어차피 낼 성공보수의 일부를 미리 '충당'하는 것임을 명시하여 거부감 해소.
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-gray-900">구직자 20% 리워드:</strong> <br/>
                  "여기서 일하면 보너스 받는다"는 인식을 심어 장기근속 유도.
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <ShieldCheck className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                <span className="bg-blue-50 px-2 py-1 rounded text-blue-900 block w-full">
                  <strong className="text-blue-900">해고 공포 해소 솔루션:</strong> <br/>
                  HR 플로우 분석, 촉탁직, AI 대체를 통한 '자연 감축' 로드맵 제시.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
            <h3 className="font-bold text-lg flex items-center gap-2 mb-4 text-indigo-900">
              <Wallet className="w-5 h-5 text-indigo-600" />
              수익 모델 시뮬레이션
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-indigo-200">
                <span className="text-sm text-indigo-800">1. 선수금 (성공보수 선납)</span>
                <span className="font-bold text-indigo-900">+100만원 (즉시 수입)</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-indigo-200">
                <span className="text-sm text-indigo-800">2. 고용지원금 수령 (예시)</span>
                <span className="text-xs text-indigo-500">기업 통장으로 입금</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-indigo-200">
                <span className="text-sm text-indigo-800">3. 성공보수 총액 (50%)</span>
                <span className="font-bold text-indigo-900">720만원</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-indigo-200">
                <span className="text-sm text-indigo-800">4. 기납부 선수금 차감 (100% 공제)</span>
                <span className="text-xs text-red-500 font-medium">-100만원</span>
              </div>
               <div className="flex justify-between items-center pb-2 border-b border-indigo-200">
                <span className="text-sm text-indigo-800">5. 최종 청구액 (잔금)</span>
                <span className="font-bold text-indigo-900">620만원</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-indigo-900">우리측 최종 순수익</span>
                <span className="font-extrabold text-2xl text-indigo-600">576만원</span>
              </div>
              <p className="text-xs text-indigo-400 mt-2 text-right">* 구직자 인센티브(144만원) 지급 후 순수익</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CardNews;