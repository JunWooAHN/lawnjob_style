import React, { useState } from 'react';
import { 
  CheckCircle2, 
  PhoneCall, 
  MessageCircle, 
  FileText, 
  Calendar, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp,
  UserCheck,
  Building,
  ArrowRight,
  UploadCloud
} from 'lucide-react';

interface FormData {
  phone: string;
  link: string;
  company: string;
}

export default function App() {
  const [formData, setFormData] = useState<FormData>({
    phone: '',
    link: '',
    company: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    // 실제 환경에서는 여기서 API 호출을 진행합니다.
    setTimeout(() => {
      alert("진단 요청이 완료되었습니다. 24시간 내에 연락드리겠습니다.");
      setIsSubmitted(false);
      setFormData({ phone: '', link: '', company: '' });
    }, 1000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      
      {/* GNB (Header) */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Law&Job</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#form" className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              <PhoneCall className="w-4 h-4" /> 전화 상담
            </a>
            <a href="#form" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-md hover:bg-blue-700 transition-all hover:-translate-y-0.5">
              무료 진단 요청
            </a>
          </div>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left: Copy & Trust */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-200 text-sm font-medium border border-blue-500/30">
              <CheckCircle2 className="w-4 h-4" />
              <span>채용공고 링크 하나면 진단 준비 끝</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              채용 중이신가요?<br />
              <span className="text-blue-400">숨은 고용지원금</span>, 지금 바로 진단받으세요.
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              24시간 내 진단콜 → N일 내 요약(가능/예상액/리스크) 제공. <br/>
              계약 시 서류부터 운영, 분쟁 예방(리스크컷)까지 모두 대행해 드립니다. <br/>
              <span className="text-blue-200 font-semibold">지원금 검토 중 기업이 놓친 더 많은 혜택을 찾아드립니다.</span>
            </p>

            {/* Profile Micro Card */}
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm max-w-md">
              <div className="w-16 h-16 bg-slate-300 rounded-full overflow-hidden shrink-0 border-2 border-white/20">
                {/* Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-slate-700 text-slate-400 text-xs">사진</div>
              </div>
              <div>
                <div className="font-bold text-lg text-white">공병수 노무사</div>
                <div className="text-sm text-slate-300 leading-snug">
                  로앤잡 주식회사 대표<br/>전) 노동법률 동행 책임 노무사
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all">
                <PhoneCall className="w-5 h-5" /> 1588-0000
              </button>
              <button className="flex items-center gap-2 bg-[#FEE500] text-[#000000] hover:bg-[#FEE500]/90 px-6 py-3 rounded-xl font-semibold transition-all">
                <MessageCircle className="w-5 h-5" /> 카카오톡 문의
              </button>
            </div>
          </div>

          {/* Right: Input Form */}
          <div id="form" className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl relative">
            <div className="absolute -top-4 -right-4 bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg transform rotate-3">
              1분 만에 완료!
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">무료 진단 요청</h2>
            <p className="text-slate-500 text-sm mb-6">제출 후 24시간 내에 결과를 안내해 드립니다.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">연락처 <span className="text-red-500">*</span></label>
                <input 
                  type="tel" name="phone" required placeholder="010-0000-0000"
                  value={formData.phone} onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">채용공고 링크 <span className="text-red-500">*</span></label>
                <input 
                  type="url" name="link" required placeholder="사람인, 잡코리아 등 URL 복사"
                  value={formData.link} onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">회사명 / 담당자 (선택)</label>
                <input 
                  type="text" name="company" placeholder="로앤잡 / 홍길동"
                  value={formData.company} onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">지원자 업로드 (선택)</label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                  <UploadCloud className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                  <span className="text-sm text-slate-500">클릭하여 파일 첨부 (PDF/XLSX)</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <input type="checkbox" id="terms" required className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                <label htmlFor="terms" className="text-xs text-slate-500 leading-tight">
                  개인정보 수집 및 이용에 동의합니다. (필수)<br/>
                  <span className="text-slate-400">* 상세 리포트/선별표/템플릿은 계약 후 제공됩니다.</span>
                </label>
              </div>

              <button 
                type="submit" disabled={isSubmitted}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all active:scale-95 disabled:opacity-70 mt-2"
              >
                {isSubmitted ? '요청 중...' : '무료 진단 요청하기'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 2. Self-Check Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">우리 회사도 대상일까요?</h2>
            <p className="text-lg text-slate-600">아래 항목 중 <strong className="text-blue-600 bg-blue-50 px-2 py-1 rounded">단 1개라도 해당</strong>되면, 고용지원금 대상일 가능성이 큽니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-sm font-bold text-blue-600 mb-6 uppercase tracking-wider flex items-center gap-2">
                <UserCheck className="w-5 h-5"/> 체크리스트
              </h3>
              <ul className="space-y-4">
                {[
                  "34세 미만 청년 채용 예정",
                  "경력단절 여성 채용 예정",
                  "육아휴직자가 있는 경우",
                  "육아휴직 대체인력 채용 예정",
                  "재택/유연근로 도입 예정",
                  "최근 채용 후 중도퇴사/부적응 이슈가 큼",
                  "고용지원금 대상이나, 요건유지/증빙/제출 일정 관리가 부담됨"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center space-y-8 px-4">
              <div className="w-full max-w-xs aspect-square bg-blue-50 rounded-full flex items-center justify-center relative">
                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 bg-white p-3 rounded-2xl shadow-lg animate-bounce">
                  <span className="text-2xl font-bold text-blue-600">₩</span>
                </div>
                <div className="absolute bottom-10 left-10 bg-white p-3 rounded-2xl shadow-lg">
                  <FileText className="w-8 h-8 text-slate-700" />
                </div>
                <Calendar className="w-32 h-32 text-blue-200" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">놓치고 있는 지원금이 있는지 확인하세요!</h4>
                <a href="#form" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-slate-800 transition-all hover:-translate-y-1">
                  우리 회사 지원금 확인 <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Workflow Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">신청부터 수령까지, 전 과정을 대신합니다.</h2>
            <p className="text-lg text-slate-600">복잡한 절차는 로앤잡에 맡기고, 본업에 집중하세요.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: 1, title: "2분 폼 제출", desc: "공고 링크/상황 입력", highlight: true },
              { step: 2, title: "24h 내 진단콜", desc: "가능여부 / 예상액 안내" },
              { step: 3, title: "N일 내 요약", desc: "요건 / 리스크 / 필요자료" },
              { step: 4, title: "실행 플랜 (계약)", desc: "서류 / 일정 / 액션 플랜" },
              { step: 5, title: "대행 운영 (계약)", desc: "요건 유지 / 증빙 / 이슈대응" },
              { step: 6, title: "수령 후 정산", desc: "성공보수 정산 / 사후관리" },
            ].map((s, i) => (
              <div key={i} className={`p-6 rounded-2xl border ${s.highlight ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20 transform scale-105 z-10' : 'bg-white text-slate-800 border-slate-200'} relative flex flex-col items-center text-center`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4 ${s.highlight ? 'bg-white text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                  {s.step}
                </div>
                <h4 className={`font-bold mb-2 ${s.highlight ? 'text-white' : 'text-slate-900'}`}>{s.title}</h4>
                <p className={`text-sm ${s.highlight ? 'text-blue-100' : 'text-slate-500'}`}>{s.desc}</p>
                {i !== 5 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-300 z-0">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="#form" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-blue-700 transition-all hover:-translate-y-1">
              무료 진단 요청하기
            </a>
          </div>
        </div>
      </section>

      {/* 4. 산출물 Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">회사(기업)가 받는 결과물을 먼저 보여드립니다.</h2>
            <p className="text-lg text-slate-600">말로만 하는 대행이 아닙니다. 확실한 문서와 플랜을 제공합니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 무료 제공 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-slate-200 text-slate-600 text-xs font-bold px-4 py-2 rounded-bl-xl">무료 제공 (진단콜 단계)</div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 mt-4">1차 진단 리포트</h3>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex gap-4 items-start">
                <FileText className="w-8 h-8 text-blue-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">A. 지원금 가능성 진단 요약</h4>
                  <p className="text-sm text-slate-600">가능/불가 여부, 예상액 Range, 기본 조건, 리스크(중도퇴사/환수 등) 요약</p>
                </div>
              </div>
            </div>

            {/* 계약 후 제공 */}
            <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-bl-xl">계약 후 제공</div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 mt-4">상세 문서 & 템플릿 패키지</h3>
              <div className="space-y-3">
                {[
                  { title: "B. 대상자 선별표", desc: "지원자 기반 대상 여부, 사유, 추가 확인 필요사항" },
                  { title: "C. 요건 유지/운영 체크리스트", desc: "월별 증빙, 제출 일정, 내부 담당자 액션" },
                  { title: "D. 채용 설계안", desc: "조건/프로세스/타임라인을 지원금 구조에 맞게 최적화 설계" },
                  { title: "E. 지원자 평가 요약 템플릿", desc: "(옵션) 요약/강점/리스크/면접포인트/희망조건" },
                  { title: "F. 성과관리·분쟁예방 문서세트", desc: "수습평가표, 피드백 양식, 면담 기록 템플릿 (온라인)" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-blue-50 shadow-sm flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Top 5 Grants Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">리드 확보에 강한 주력 지원금 TOP 5</h2>
            <p className="text-lg text-slate-400">정확한 요건과 대상은 10분 진단콜에서 확정됩니다.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "청년일자리도약장려금", amount: "연 720만원", target: "34세 미만", diff: "쉬움", risk: "중도퇴사 (관리필요)" },
              { title: "새일여성인턴지원금", amount: "연 400만원", target: "경력단절 여성", diff: "보통", risk: "부적합 채용 (관리필요)" },
              { title: "육아휴직·대체인력 지원", amount: "월 140만원", target: "니즈 직결", diff: "보통", risk: "부정수급 (증빙대행 중요)" },
              { title: "유연근무 지원금", amount: "월 20~40만원", target: "니즈 직결", diff: "상", risk: "관리 어려움 (증빙대행 중요)" },
              { title: "고령자 관련 지원금", amount: "월 30~40만원", target: "고령자", diff: "어려움", risk: "중도퇴사 (관리필요)" },
            ].map((grant, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold text-blue-400 mb-4">{grant.title}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-400">지원 혜택</span>
                    <span className="font-bold text-white">{grant.amount}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-400">메인 타겟</span>
                    <span className="font-medium text-slate-200">{grant.target}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-400">난이도</span>
                    <span className="font-medium text-slate-200">{grant.diff}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-slate-400">리스크</span>
                    <span className="font-medium text-red-400 text-right">{grant.risk}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="#form" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-blue-500 transition-all hover:-translate-y-1">
              무료 진단 요청하기
            </a>
          </div>
        </div>
      </section>

      {/* 6. Pricing Packages Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">필요한 범위만 선택하세요</h2>
            <p className="text-lg text-slate-600 mb-2">합리적인 성공보수(20~35%)로 부담 없이 시작할 수 있습니다.</p>
            <p className="text-xs text-slate-400">* 착수금 유무, 상세 산출물 제공 시점, 정산 기준은 계약서에 명시됩니다.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Basic</h3>
                <div className="text-blue-600 font-bold mb-4">성공보수 20%</div>
                <p className="text-sm text-slate-500 h-10">지원금 신청 및 서류 대행 중심의 베이직 서비스</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0"/> 간단 진단 요약(A)</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0"/> 신청·제출 서류 작성 및 제출</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0"/> 제출 기한·요건 체크</li>
                <li className="flex items-start gap-2 text-xs text-slate-400 mt-4 pt-4 border-t border-slate-100">
                  가능 범위: 청일도, 대체인력, 육아휴직
                </li>
              </ul>
            </div>

            {/* Plus */}
            <div className="bg-white rounded-3xl p-8 border-2 border-blue-600 shadow-xl relative flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                가장 많이 선택해요
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Plus</h3>
                <div className="text-blue-600 font-bold mb-4">성공보수 25%</div>
                <p className="text-sm text-slate-500 h-10">Basic + 지원자 검토 및 대상자 태깅 결합</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0"/> Basic 서비스 모두 포함</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0"/> 지원자 대상 여부 태깅(B)</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0"/> 추가 확인사항 안내</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0"/> 진행 중 질의 대응</li>
                <li className="flex items-start gap-2 text-xs text-slate-400 mt-4 pt-4 border-t border-slate-100">
                  가능 범위: 청일도, 대체인력, 육아휴직, 고령자, 유연근로
                </li>
              </ul>
            </div>

            {/* Pro */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro</h3>
                <div className="text-blue-600 font-bold mb-4">성공보수 35%</div>
                <p className="text-sm text-slate-500 h-10">Plus + 채용 설계 및 전방위 리스크 관리</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-slate-800 shrink-0"/> Plus 서비스 모두 포함</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-slate-800 shrink-0"/> 채용 설계안(D)</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-slate-800 shrink-0"/> 성과관리·분쟁예방 문서세트(F)</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-slate-800 shrink-0"/> 종료 절차 가이드(문서)</li>
                <li className="flex items-start gap-2 text-xs text-slate-400 mt-4 pt-4 border-t border-slate-100">
                  가능 범위: 전 범위 지원
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Risk Management Section */}
      <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djIwaC0ydi0yMEgzNHYyMGgtMnYtMjBoLTJ2MjBoLTJ2LTIwaC0ydjIwaC0ydi0yMEgyMnYyMGgtMnYtMjBoLTJ2MjBoLTJ2LTIwaC0ydjIwaC0ydi0yMEg4djIwaC0ydjIwaC0ydjIwaC0ydjIwaC0ydjIwaC0ydjIwSDJWMTRoNDR2MjBoLTZWMTRoLTZWMTRoLTZWMTRoLTZWMTRoLTZWMTRoLTZWMTRoLTZWMTRoLTZWMTRoLTZWMTRoLTZWMTRoLTZWMTRoLTZWMTRoLTZWMTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">채용 후 부적응/이탈이 걱정되시나요?</h2>
            <p className="text-xl text-blue-100">분쟁과 비용 리스크를 먼저 줄여드립니다.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">합법적 성과관리 체계 세팅</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  수습 평가 기준을 명확히 하고, 성과관리 문서화를 세팅하여 혹시 모를 분쟁 리스크를 최소화합니다. 필요 시 법 테두리 안에서 안전한 종료 절차 가이드를 제공합니다.
                </p>
                <div className="bg-slate-900/50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-white mb-3">제공 문서 (온라인 지원)</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400"/> 수습평가표 (회사용)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400"/> 피드백 양식 (근로자용)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400"/> 면담 기록 템플릿</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400"/> 상황별 대응 가이드 문서</li>
                  </ul>
                  <p className="text-xs text-slate-400 mt-4 pt-4 border-t border-slate-700">
                    * 대행 범위: 면담 직접 동행은 불가하며, 온라인으로 문서 작성 및 포맷을 지원합니다.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <ShieldCheck className="w-48 h-48 text-white/20" />
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#form" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-xl hover:bg-slate-50 transition-all hover:-translate-y-1">
              무료 진단 요청하기
            </a>
          </div>
        </div>
      </section>

      {/* 8. Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12">
            
            {/* Profile Card */}
            <div className="md:col-span-5">
              <div className="sticky top-24 bg-slate-50 rounded-3xl p-8 border border-slate-200">
                <div className="w-32 h-32 bg-slate-200 rounded-full mb-6 mx-auto border-4 border-white shadow-lg overflow-hidden flex items-center justify-center text-slate-400 text-sm">
                  프로필 사진
                </div>
                <h3 className="text-2xl font-bold text-center text-slate-900 mb-1">공병수 노무사</h3>
                <p className="text-center text-blue-600 font-medium mb-6">로앤잡 주식회사 대표</p>
                
                <ul className="space-y-3 text-sm text-slate-600 mb-6">
                  <li>• 2014년 노무사 합격</li>
                  <li>• 삼봉노무법인 대표 노무사</li>
                  <li>• 전) 산군노무사 대표 노무사</li>
                  <li>• 전) 노동법률 동행 책임 노무사</li>
                  <li>• 노사발전재단 인권경영위원회 위원</li>
                  <li>• 전) 인천 지방노동위원회 위원</li>
                  <li>• 인천시 정규직전환 심의위원회 위원</li>
                </ul>
                <div className="bg-slate-800 text-white p-4 rounded-xl text-center text-sm font-medium">
                  저서: '사장이 원하는 회사 직원이 바라는 회사'
                </div>
              </div>
            </div>

            {/* References */}
            <div className="md:col-span-7 space-y-12">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Building className="w-6 h-6 text-blue-600"/> 함께하는 파트너
                </h3>
                {/* Mock Logos */}
                <div className="flex flex-wrap gap-4">
                  {[1,2,3,4,5,6].map(i => (
                    <div key={i} className="w-24 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 font-bold border border-slate-200">
                      LOGO {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 mt-4">수많은 기업이 로앤잡을 통해 고용지원금 혜택을 누리고 있습니다.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">성공 사례 <span className="text-xs text-slate-400 font-normal ml-2 bg-slate-100 px-2 py-1 rounded">예시</span></h3>
                <div className="space-y-4">
                  <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">IT 스타트업 / 15인</span>
                      <span className="font-bold text-slate-900">예상액 1,440만원 수령</span>
                    </div>
                    <h4 className="font-bold text-lg mb-1">청년일자리도약장려금 적용</h4>
                    <p className="text-sm text-slate-600">지원자 선별부터 청년 채용에 맞춘 요건 유지 관리 대행으로 안정적인 지원금 수령 완료.</p>
                  </div>
                  
                  <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">제조업 / 40인</span>
                      <span className="font-bold text-slate-900">연 800만원 비용 절감</span>
                    </div>
                    <h4 className="font-bold text-lg mb-1">육아휴직 및 대체인력 지원</h4>
                    <p className="text-sm text-slate-600">복잡한 육아휴직 증빙 서류와 대체인력 매칭 프로세스 대행으로 실무자 부담 해소.</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">자주 묻는 질문</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "우리 회사가 대상인지 어떻게 판단하나요?", a: "제출해주신 채용공고와 지원자 정보를 기반으로 1차 진단콜을 진행합니다. 이후 N시간 내에 가능 여부와 예상액이 포함된 요약 리포트를 제공해 드립니다." },
              { q: "중도퇴사나 요건 미충족이면 지원금은 어떻게 되나요?", a: "요건유지 체크리스트를 통해 이탈 리스크를 사전에 관리합니다. 만약 발생하더라도 케이스별 대응 가이드를 제공하여 기업의 피해를 최소화합니다." },
              { q: "환수(부정수급) 리스크를 어떻게 줄이나요?", a: "필수 증빙 자료와 운영 프로세스를 철저히 표준화합니다. 정기적인 서류 점검 및 추가 서류 대응까지 대행 범위 내에서 안전하게 관리해 드립니다." },
              { q: "어디까지 ‘대행’하고, 기업은 뭘 해야 하나요?", a: "저희는 신청서 작성, 제출, 일정 관리, 증빙 점검 등 실무를 대행합니다. 기업 담당자님은 내부 승인과 기초 자료(급여대장 등) 제공만 해주시면 됩니다." },
              { q: "성공보수는 어떤 기준으로 정산하나요?", a: "실제 수령하신 지원금을 기준으로 20~35%의 성공보수가 책정됩니다. 회차별 정산 시점 및 총액 등 상세한 내용은 사전 계약서에 투명하게 명시됩니다." },
              { q: "지원자가 회사와 안 맞으면 어떻게 대응하나요?", a: "저희는 해고 대행을 하지 않습니다. 대신 합법적인 수습평가, 피드백 양식, 면담 기록 등 '성과관리 체계'를 세팅해 드려, 불필요한 분쟁 및 비용 리스크를 사전에 방지하도록 돕습니다." },
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 font-bold text-slate-800 flex justify-between items-center focus:outline-none"
                >
                  <span>Q. {faq.q}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4 bg-slate-50/50">
                    A. {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-sm text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="font-bold text-white mb-2">로앤잡 주식회사</p>
          <p className="mb-4">대표: 공병수 | 이메일: contact@lawandjob.com</p>
          <p>© 2026 Law&Job Inc. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}