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
  title: "Backend Developer | AI Data Engineer",
  location: "Seoul, South Korea",
  availability: "Open to backend and AI platform roles",
  email: "jaehyeong.park@example.com",
  siteUrl: "https://example-portfolio.vercel.app",
  socials: {
    github: {
      label: "GitHub",
      href: "https://github.com/your-github",
    },
    email: {
      label: "Email",
      href: "mailto:jaehyeong.park@example.com",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://linkedin.com/in/your-linkedin",
    },
  },
  hero: {
    badge: "Backend systems, data pipelines, internal AI tooling",
    intro: "Backend developer and AI/Data Engineer with experience building scalable backend systems, automation platforms, data pipelines, AI-powered internal tools, and operational services.",
    description:
      "Production-focused engineer with 5+ years across startups and service companies, shipping backend platforms, AI workflows, and automation systems that improve reliability, operational speed, and team productivity.",
  },
  about: [
    "5+ years of hands-on experience across backend development, AI/data engineering, and automation-heavy product environments.",
    "Built systems for data collection, real-time processing, internal operations, and production services with a pragmatic, reliability-first mindset.",
    "Comfortable moving between application architecture, pipeline design, performance tuning, and AI-assisted internal tooling.",
    "Worked across startup teams and established service organizations, adapting quickly while keeping delivery quality high.",
  ],
  metrics: [
    {
      label: "Experience",
      value: "5+ Years",
      detail: "Backend, data, and AI engineering delivery",
    },
    {
      label: "Core Focus",
      value: "Systems + Automation",
      detail: "Production services, tooling, and pipelines",
    },
    {
      label: "Delivery Style",
      value: "Execution-Oriented",
      detail: "Fast iteration with operational stability",
    },
  ],
  skills: [
    {
      title: "Programming Languages",
      description: "Strong day-to-day engineering languages for services, scripts, and data work.",
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
      title: "Frameworks & Libraries",
      description: "Application frameworks and tooling used for backend services, UI tools, and AI prototyping.",
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
      title: "Database",
      description: "Storage systems used for transactional services, caching, and lightweight local workflows.",
      skills: [
        { name: "MS SQL", level: 88 },
        { name: "MongoDB", level: 84 },
        { name: "Redis", level: 81 },
        { name: "SQLite", level: 73 },
      ],
    },
    {
      title: "Infrastructure",
      description: "Deployment and runtime environments used in production systems and operational automation.",
      skills: [
        { name: "Linux", level: 86 },
        { name: "Docker", level: 83 },
        { name: "Azure IIS", level: 72 },
        { name: "AWS Lambda", level: 66 },
        { name: "EPICS", level: 71 },
      ],
    },
    {
      title: "Tools",
      description: "Collaboration and delivery tooling supporting engineering teams and release workflows.",
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
      summary: "Short-cycle modernization work focused on stabilizing and upgrading legacy internal platforms.",
      highlights: [
        "Legacy back-office modernization",
        "ASP.NET Core MVC migration",
        "Django migration support",
        "MSSQL performance tuning",
      ],
    },
    {
      company: "Mobis",
      period: "2024.04 ~ 2025.04",
      summary: "Built operational tooling and data workflows inside Linux-based environments for industrial and internal knowledge use cases.",
      highlights: [
        "EPICS control systems",
        "Linux environments",
        "Docker automation",
        "Whisper transcription system",
        "Internal search platform",
      ],
    },
    {
      company: "Pinup",
      period: "2021.11 ~ 2024.02",
      summary: "Delivered backend and AI-driven internal systems in a fast-moving financial services context.",
      highlights: [
        "Real-time financial data platform",
        "Back-office systems",
        "MongoDB",
        "Redis",
        "Selenium automation",
        "KoBERT classification",
        "Internal LLM research",
      ],
    },
    {
      company: "DeltaX / RNDeep",
      period: "2019.10 ~ 2021.09",
      summary: "Worked on applied AI prototypes and demo systems spanning crawling, dashboards, and computer vision delivery.",
      highlights: [
        "Flask AI demo systems",
        "DeepFake demo",
        "Dashboard development",
        "Data crawling",
        "Linux AI servers",
        "Computer Vision projects",
      ],
    },
  ],
  projects: [
    {
      name: "Financial Data Platform",
      technologies: [".NET Core MVC", "MongoDB", "Redis"],
      overview:
        "Designed and maintained a real-time financial data platform used by internal teams to monitor market movement, manage operational workflows, and support service-side decision making.",
      challenges:
        "Balancing ingestion speed, backend responsiveness, and administrative usability while working with volatile data inputs and legacy process constraints.",
      outcomes:
        "Improved data accessibility for non-engineering teams, reduced friction in back-office workflows, and supported faster internal turnaround for finance-related operations.",
    },
    {
      name: "Whisper Meeting Documentation System",
      technologies: ["Python", "Flask", "Whisper"],
      overview:
        "Built an internal transcription workflow that converted meeting recordings into searchable documentation for faster team alignment and knowledge retention.",
      challenges:
        "Needed to handle long-form audio, improve transcript usability, and package the flow so non-technical users could operate it consistently.",
      outcomes:
        "Reduced manual note-taking overhead and made historical meeting context easier to retrieve across teams.",
    },
    {
      name: "KoBERT News Classification System",
      technologies: ["Python", "Flask", "KoBERT"],
      overview:
        "Implemented an AI-assisted news classification service to organize large article volumes into more useful internal categories.",
      challenges:
        "Had to maintain classification quality while simplifying deployment and integrating model output into practical internal workflows.",
      outcomes:
        "Enabled more structured downstream analysis and reduced time spent on repetitive manual categorization.",
    },
    {
      name: "EPICS DB Extractor",
      technologies: ["Python", "Linux", "EPICS"],
      overview:
        "Created a utility pipeline to extract and structure EPICS database information for inspection, auditing, and downstream operational use.",
      challenges:
        "Worked within domain-specific formats and Linux-heavy runtime environments where consistency and traceability were important.",
      outcomes:
        "Improved visibility into control-system data and accelerated internal troubleshooting and documentation work.",
    },
    {
      name: "AI Dashboard & Recommendation System",
      technologies: ["Flask", "Python"],
      overview:
        "Delivered a dashboard-oriented AI demo and recommendation experience to help communicate applied model results to stakeholders.",
      challenges:
        "Needed to bridge technical model behavior and business-facing presentation while keeping the system interactive and easy to demonstrate.",
      outcomes:
        "Made AI outputs more understandable to non-technical audiences and supported faster iteration on proof-of-concept ideas.",
    },
  ],
  awards: [
    {
      title: "2020 ComeUp AI Championship 1st Place",
      organization: "ComeUp AI Championship",
      detail: "Won first place with an applied AI solution in a startup-oriented competition setting.",
    },
    {
      title: "2020 AI Competition Runner-up (GIST)",
      organization: "GIST",
      detail: "Recognized for strong technical execution and model application in a competitive academic environment.",
    },
    {
      title: "Department Valedictorian",
      organization: "Academic Achievement",
      detail: "Graduated at the top of the department with consistent academic performance and project delivery.",
    },
    {
      title: "Multiple Startup and Hackathon Awards",
      organization: "Startup / Hackathon Programs",
      detail: "Earned repeated recognition for fast prototyping, teamwork, and practical engineering delivery.",
    },
  ],
  contact: [
    {
      label: "GitHub",
      value: "@your-github",
      href: "https://github.com/your-github",
      description: "Code samples, experiments, and engineering side projects.",
    },
    {
      label: "Email",
      value: "jaehyeong.park@example.com",
      href: "mailto:jaehyeong.park@example.com",
      description: "Best channel for recruiter outreach and project discussions.",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/your-linkedin",
      href: "https://linkedin.com/in/your-linkedin",
      description: "Professional background and future placeholder for updates.",
    },
  ],
};
