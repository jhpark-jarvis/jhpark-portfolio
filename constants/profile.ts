export type SocialLink = {
  label: string;
  href: string;
};

export type HighlightMetric = {
  label: string;
  value: string;
  detail: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: Skill[];
};

export type CareerItem = {
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type ProjectItem = {
  name: string;
  technologies: string[];
  overview: string;
  challenges: string;
  outcomes: string;
};

export type AwardItem = {
  title: string;
  organization: string;
  detail: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  description: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  availability: string;
  email: string;
  siteUrl: string;
  socials: {
    github: SocialLink;
    email: SocialLink;
    linkedin: SocialLink;
  };
  hero: {
    badge: string;
    intro: string;
    description: string;
  };
  about: string[];
  metrics: HighlightMetric[];
  skills: SkillCategory[];
  career: CareerItem[];
  projects: ProjectItem[];
  awards: AwardItem[];
  contact: ContactMethod[];
};

export const profile: Profile = {
  name: "박재형",
  title: "백엔드 개발자 | AI 데이터 엔지니어",
  location: "서울, 대한민국",
  availability: "백엔드 및 AI 플랫폼 관련 역할에 열려 있습니다",
  email: "jaehyung_96@naver.com",
  siteUrl: "https://example-portfolio.vercel.app",
  socials: {
    github: {
      label: "깃허브",
      href: "https://github.com/your-github",
    },
    email: {
      label: "이메일",
      href: "mailto:jaehyung_96@naver.com",
    },
    linkedin: {
      label: "링크드인",
      href: "https://linkedin.com/in/your-linkedin",
    },
  },
  hero: {
    badge: "백엔드 시스템, 데이터 파이프라인, 사내 AI 도구",
    intro:
      "확장 가능한 백엔드 시스템, 자동화 플랫폼, 데이터 파이프라인, AI 기반 사내 도구, 운영 서비스를 구축해 온 백엔드 개발자이자 AI/데이터 엔지니어입니다.",
    description:
      "스타트업과 서비스 기업에서 5년 이상 백엔드 플랫폼, AI 워크플로, 자동화 시스템을 운영 환경에 맞게 구축하며 안정성, 운영 속도, 팀 생산성을 높여 온 엔지니어입니다.",
  },
  about: [
    "백엔드 개발, AI/데이터 엔지니어링, 자동화 중심 제품 환경 전반에서 5년 이상의 실무 경험을 쌓았습니다.",
    "데이터 수집, 실시간 처리, 내부 운영, 운영 서비스 시스템을 실용적이고 안정성 우선의 관점으로 구축해 왔습니다.",
    "애플리케이션 아키텍처, 파이프라인 설계, 성능 튜닝, AI 기반 사내 도구 개발까지 유연하게 오가며 일할 수 있습니다.",
    "스타트업 팀과 기존 서비스 조직 모두에서 빠르게 적응하면서도 높은 전달 품질을 유지해 왔습니다.",
  ],
  metrics: [
    {
      label: "경력",
      value: "5년 이상",
      detail: "백엔드, 데이터, AI 엔지니어링 실무",
    },
    {
      label: "핵심 역량",
      value: "시스템 + 자동화",
      detail: "운영 서비스, 내부 도구, 파이프라인",
    },
    {
      label: "업무 스타일",
      value: "실행 중심",
      detail: "운영 안정성을 지키며 빠르게 반복 개선",
    },
  ],
  skills: [
    {
      title: "프로그래밍 언어",
      description: "서비스 개발, 스크립트 작성, 데이터 처리 업무에서 주력으로 사용하는 언어들입니다.",
      skills: [
        { name: "Python", level: 95 },
        { name: "C#", level: 90 },
        { name: "JavaScript", level: 82 },
        { name: "SQL", level: 88 },
        { name: "C++", level: 68 },
        { name: "Kotlin", level: 56 },
      ],
    },
    {
      title: "프레임워크 및 라이브러리",
      description: "백엔드 서비스, UI 도구, AI 프로토타이핑에 활용한 프레임워크와 라이브러리입니다.",
      skills: [
        { name: "ASP.NET Core MVC", level: 90 },
        { name: "ASP.NET WebForm", level: 74 },
        { name: "Flask", level: 92 },
        { name: "Django", level: 78 },
        { name: "Node.js", level: 76 },
        { name: "WPF", level: 70 },
        { name: "WinForms", level: 66 },
        { name: "PyTorch", level: 72 },
        { name: "OpenCV", level: 74 },
        { name: "Selenium", level: 86 },
        { name: "HtmlAgilityPack", level: 64 },
      ],
    },
    {
      title: "데이터베이스",
      description: "트랜잭션 처리, 캐싱, 경량 로컬 워크플로에 사용한 저장소 기술입니다.",
      skills: [
        { name: "MS SQL", level: 88 },
        { name: "MongoDB", level: 84 },
        { name: "Redis", level: 81 },
        { name: "SQLite", level: 73 },
      ],
    },
    {
      title: "인프라",
      description: "운영 시스템과 자동화 환경에서 사용한 배포 및 런타임 기술입니다.",
      skills: [
        { name: "Linux", level: 86 },
        { name: "Docker", level: 83 },
        { name: "Azure IIS", level: 72 },
        { name: "AWS Lambda", level: 66 },
        { name: "EPICS", level: 71 },
      ],
    },
    {
      title: "도구",
      description: "협업과 배포 워크플로를 지원하는 엔지니어링 도구들입니다.",
      skills: [
        { name: "Git", level: 90 },
        { name: "Jira", level: 82 },
        { name: "Slack", level: 85 },
      ],
    },
  ],
  career: [
    {
      company: "MediaWill Networks (Albamon)",
      period: "2025.04 ~ 2025.05",
      summary: "레거시 내부 플랫폼을 안정화하고 고도화하는 단기 현대화 작업을 수행했습니다.",
      highlights: [
        "레거시 백오피스 현대화",
        "ASP.NET Core MVC 마이그레이션",
        "Django 마이그레이션 지원",
        "MSSQL 성능 튜닝",
      ],
    },
    {
      company: "Mobis",
      period: "2024.04 ~ 2025.04",
      summary: "산업 및 사내 지식 활용 사례를 위해 Linux 기반 환경에서 운영 도구와 데이터 워크플로를 구축했습니다.",
      highlights: [
        "EPICS 제어 시스템",
        "Linux 환경",
        "Docker 자동화",
        "Whisper 전사 시스템",
        "사내 검색 플랫폼",
      ],
    },
    {
      company: "Pinup",
      period: "2021.11 ~ 2024.02",
      summary: "빠르게 움직이는 금융 서비스 환경에서 백엔드 및 AI 기반 내부 시스템을 구축했습니다.",
      highlights: [
        "실시간 금융 데이터 플랫폼",
        "백오피스 시스템",
        "MongoDB",
        "Redis",
        "Selenium 자동화",
        "KoBERT 분류 시스템",
        "사내 LLM 연구",
      ],
    },
    {
      company: "DeltaX / RNDeep",
      period: "2019.10 ~ 2021.09",
      summary: "크롤링, 대시보드, 컴퓨터 비전 영역에 걸친 응용 AI 프로토타입과 데모 시스템을 개발했습니다.",
      highlights: [
        "Flask AI 데모 시스템",
        "딥페이크 데모",
        "대시보드 개발",
        "데이터 크롤링",
        "Linux AI 서버",
        "컴퓨터 비전 프로젝트",
      ],
    },
  ],
  projects: [
    {
      name: "금융 데이터 플랫폼",
      technologies: [".NET Core MVC", "MongoDB", "Redis"],
      overview:
        "내부 팀이 시장 흐름을 모니터링하고 운영 워크플로를 관리하며 서비스 의사결정을 지원할 수 있도록 실시간 금융 데이터 플랫폼을 설계하고 운영했습니다.",
      challenges:
        "변동성이 큰 데이터 입력과 레거시 프로세스 제약 속에서 수집 속도, 백엔드 응답성, 관리 편의성의 균형을 맞춰야 했습니다.",
      outcomes:
        "비개발 부서의 데이터 접근성을 높이고 백오피스 업무 마찰을 줄였으며 금융 관련 내부 처리 속도를 개선했습니다.",
    },
    {
      name: "Whisper 회의 문서화 시스템",
      technologies: ["Python", "Flask", "Whisper"],
      overview:
        "회의 녹음을 검색 가능한 문서로 변환하는 사내 전사 워크플로를 구축해 팀 정렬과 지식 축적 속도를 높였습니다.",
      challenges:
        "긴 오디오를 안정적으로 처리하고 전사 결과의 활용성을 높이며 비개발자도 일관되게 사용할 수 있도록 구성해야 했습니다.",
      outcomes:
        "수기 회의록 작성 부담을 줄이고 팀 간 과거 회의 맥락을 더 쉽게 찾을 수 있게 했습니다.",
    },
    {
      name: "KoBERT 뉴스 분류 시스템",
      technologies: ["Python", "Flask", "KoBERT"],
      overview:
        "대량의 기사를 더 유용한 내부 카테고리로 정리하기 위한 AI 기반 뉴스 분류 서비스를 구현했습니다.",
      challenges:
        "분류 품질을 유지하면서도 배포를 단순화하고 모델 결과를 실제 내부 업무 흐름에 자연스럽게 녹여내야 했습니다.",
      outcomes:
        "후속 분석을 더 구조화할 수 있게 되었고 반복적인 수작업 분류 시간을 줄였습니다.",
    },
    {
      name: "EPICS DB 추출기",
      technologies: ["Python", "Linux", "EPICS"],
      overview:
        "점검, 감사, 후속 운영 활용을 위해 EPICS 데이터베이스 정보를 추출하고 구조화하는 유틸리티 파이프라인을 만들었습니다.",
      challenges:
        "일관성과 추적성이 중요한 도메인 특화 포맷과 Linux 중심 런타임 환경 안에서 작업해야 했습니다.",
      outcomes:
        "제어 시스템 데이터 가시성을 높이고 내부 장애 대응 및 문서화 속도를 향상시켰습니다.",
    },
    {
      name: "AI 대시보드 및 추천 시스템",
      technologies: ["Flask", "Python"],
      overview:
        "이해관계자에게 모델 결과를 효과적으로 전달할 수 있도록 대시보드 중심의 AI 데모 및 추천 경험을 구현했습니다.",
      challenges:
        "기술적인 모델 동작과 비즈니스 관점의 표현 사이를 연결하면서도 시스템을 인터랙티브하고 시연하기 쉽게 유지해야 했습니다.",
      outcomes:
        "비기술 직군도 AI 결과를 더 쉽게 이해할 수 있게 되었고 PoC 아이디어를 더 빠르게 반복 검증할 수 있었습니다.",
    },
  ],
  awards: [
    {
      title: "2020 ComeUp AI 챔피언십 1위",
      organization: "ComeUp AI 챔피언십",
      detail: "스타트업 중심 대회 환경에서 응용 AI 솔루션으로 1위를 수상했습니다.",
    },
    {
      title: "2020 AI 경진대회 준우승 (GIST)",
      organization: "GIST",
      detail: "경쟁적인 학술 환경에서 뛰어난 기술 구현력과 모델 적용 역량을 인정받았습니다.",
    },
    {
      title: "학과 수석 졸업",
      organization: "학업 성취",
      detail: "꾸준한 학업 성과와 프로젝트 수행 역량을 바탕으로 학과 수석으로 졸업했습니다.",
    },
    {
      title: "다수의 스타트업 및 해커톤 수상",
      organization: "스타트업 / 해커톤 프로그램",
      detail: "빠른 프로토타이핑, 팀워크, 실용적인 엔지니어링 실행력으로 여러 차례 수상했습니다.",
    },
  ],
  contact: [
    {
      label: "깃허브",
      value: "@your-github",
      href: "https://github.com/your-github",
      description: "코드 샘플, 실험 프로젝트, 개인 엔지니어링 작업물을 볼 수 있습니다.",
    },
    {
      label: "이메일",
      value: "jaehyung_96@naver.com",
      href: "mailto:jaehyung_96@naver.com",
      description: "채용 문의나 프로젝트 관련 대화를 나누기 가장 좋은 채널입니다.",
    },
    // {
    //   label: "링크드인",
    //   value: "linkedin.com/in/your-linkedin",
    //   href: "https://linkedin.com/in/your-linkedin",
    //   description: "경력 요약과 향후 업데이트를 위한 자리입니다.",
    // },
  ],
};
