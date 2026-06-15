"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Trophy,
} from "lucide-react";
import type { ReactNode } from "react";

import { profile } from "@/constants/profile";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const sectionIds = [
  { label: "소개", href: "#about" },
  { label: "기술", href: "#skills" },
  { label: "경력", href: "#career" },
  { label: "프로젝트", href: "#projects" },
  { label: "수상", href: "#awards" },
  { label: "연락처", href: "#contact" },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <div className="chip">{eyebrow}</div>
      <h2 className="section-title text-3xl sm:text-4xl">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  );
}

function PrimaryLink({
  href,
  label,
  icon,
  secondary,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  secondary?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={[
        "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300",
        secondary
          ? "border border-white/10 bg-white/5 text-slate-100 hover:border-cyan-400/40 hover:bg-white/10"
          : "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
      ].join(" ")}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function MetricCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="surface rounded-3xl p-6">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-50">
        {value}
      </p>
      <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
    </div>
  );
}

function SkillCategoryCard({
  title,
  description,
  skills,
}: {
  title: string;
  description: string;
  skills: { name: string; level: number }[];
}) {
  return (
    <div className="surface rounded-3xl p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
        </div>
        <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-[family-name:var(--font-mono)] text-xs text-cyan-100">
          {skills.length}개 기술
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="font-medium text-slate-200">{skill.name}</span>
              <span className="font-[family-name:var(--font-mono)] text-slate-400">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({
  company,
  period,
  summary,
  highlights,
}: {
  company: string;
  period: string;
  summary: string;
  highlights: string[];
}) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-2 h-4 w-4 rounded-full border border-cyan-300/40 bg-cyan-400 shadow-[0_0_0_8px_rgba(34,211,238,0.08)]" />
      <div className="surface rounded-3xl p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-50">{company}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">{summary}</p>
          </div>
          <div className="font-[family-name:var(--font-mono)] text-sm text-cyan-100">
            {period}
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <span key={highlight} className="chip">
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  name,
  technologies,
  overview,
  challenges,
  outcomes,
}: {
  name: string;
  technologies: string[];
  overview: string;
  challenges: string;
  outcomes: string;
}) {
  return (
    <div className="surface group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-slate-50">{name}</h3>
        <ArrowRight className="h-5 w-5 text-slate-500 transition duration-300 group-hover:text-cyan-300" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 space-y-5 text-sm leading-6 text-slate-300">
        <div>
          <p className="font-medium text-slate-100">개요</p>
          <p className="mt-2">{overview}</p>
        </div>
        <div>
          <p className="font-medium text-slate-100">도전 과제</p>
          <p className="mt-2">{challenges}</p>
        </div>
        <div>
          <p className="font-medium text-slate-100">성과</p>
          <p className="mt-2">{outcomes}</p>
        </div>
      </div>
    </div>
  );
}

function AwardCard({
  title,
  organization,
  detail,
}: {
  title: string;
  organization: string;
  detail: string;
}) {
  return (
    <div className="surface rounded-3xl p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl border border-amber-300/20 bg-amber-400/10 p-3 text-amber-200">
          <Trophy className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-50">{title}</h3>
          <p className="text-sm text-slate-400">{organization}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{detail}</p>
    </div>
  );
}

function ContactCard({
  label,
  value,
  href,
  description,
}: {
  label: string;
  value: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="surface group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25"
    >
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-3 text-lg font-semibold text-slate-50">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-200">
        <span>연결하기</span>
        <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
      </div>
    </a>
  );
}

export function PortfolioPage() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-dark bg-[size:44px_44px] opacity-[0.14]"
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <a href="#top" className="text-sm font-semibold tracking-[0.24em] text-slate-100">
            PARK.JH
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {sectionIds.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <motion.section
        id="top"
        className="section-shell pt-16 sm:pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="chip">{profile.hero.badge}</div>
            <div className="space-y-5">
              <p className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.24em] text-cyan-200">
                {profile.title}
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                {profile.hero.intro}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <PrimaryLink
                href={profile.socials.github.href}
                label={profile.socials.github.label}
                icon={<Github className="h-4 w-4" />}
              />
              <PrimaryLink
                href={profile.socials.email.href}
                label={profile.socials.email.label}
                icon={<Mail className="h-4 w-4" />}
                secondary
              />
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-400">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-200" />
                <span>{profile.location}</span>
              </div>
              <div className="hidden h-4 w-px bg-white/10 sm:block" />
              <span>{profile.availability}</span>
            </div>

            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-cyan-200"
            >
              <span>프로필 살펴보기</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="surface relative overflow-hidden rounded-[2rem] p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-emerald-400/10" />
              <div className="relative space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.24em] text-slate-400">
                      핵심 프로필
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-50">
                      스타트업 감각과 운영 중심 실행력을 갖춘 엔지니어
                    </h2>
                  </div>
                  <div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200 sm:block">
                    협업 가능
                  </div>
                </div>

                <div className="grid gap-4">
                  {profile.metrics.map((metric) => (
                    <MetricCard key={metric.label} {...metric} />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -right-8 -top-8 hidden h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl lg:block" />
          </motion.div>
        </div>
      </motion.section>

      <section id="about" className="section-shell">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 lg:grid-cols-[0.72fr_1fr]"
        >
          <motion.div variants={itemVariants}>
            <SectionHeading
              eyebrow="소개"
              title="백엔드, AI, 운영 관점을 함께 보는 엔지니어링"
              description="핵심은 실용적인 실행입니다. 팀이 신뢰할 수 있는 시스템을 만들고, 레거시 플랫폼을 안전하게 개선하며, 복잡한 데이터와 수작업을 반복 가능한 워크플로로 바꿉니다."
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="surface rounded-[2rem] p-8 text-sm leading-7 text-slate-300 sm:text-base"
          >
            <div className="space-y-5">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="skills" className="section-shell">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading
              eyebrow="기술 스택"
              title="실전 경험으로 다져진 백엔드 중심 기술 역량"
              description="서비스 개발, AI 프로토타이핑, 인프라 작업, 사내 도구 개발 경험을 일반적인 키워드 나열이 아닌 실제 깊이가 보이도록 정리했습니다."
            />
          </motion.div>

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {profile.skills.map((category) => (
              <motion.div key={category.title} variants={itemVariants}>
                <SkillCategoryCard {...category} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="career" className="section-shell">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading
              eyebrow="경력"
              title="스타트업과 서비스 조직을 아우른 경험"
              description="경력의 흐름은 분명합니다. 시스템을 현대화하고, 반복 업무를 자동화하며, 운영 데이터를 더 쉽게 활용할 수 있도록 만들었습니다."
            />
          </motion.div>

          <div className="relative mt-10 space-y-6 before:absolute before:left-[7px] before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-cyan-400/60 before:via-slate-600 before:to-transparent">
            {profile.career.map((item) => (
              <motion.div key={`${item.company}-${item.period}`} variants={itemVariants}>
                <TimelineItem {...item} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="projects" className="section-shell">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading
              eyebrow="주요 프로젝트"
              title="시스템, 도구, AI 활용성에 집중한 프로젝트"
              description="각 프로젝트는 운영 혹은 운영에 준하는 환경에서 수행한 엔지니어링 작업을 보여줍니다. 백엔드 안정성, AI 보조 워크플로, 내부 플랫폼 고도화가 중심입니다."
            />
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {profile.projects.map((project) => (
              <motion.div key={project.name} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="awards" className="section-shell">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading
              eyebrow="수상 및 성과"
              title="실행력, 학습 속도, 응용 AI 역량으로 받은 인정"
              description="대회, 학업, 스타트업 환경에서의 주요 성과를 통해 기술적 깊이와 압박 속 실행력을 함께 보여줍니다."
            />
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {profile.awards.map((award) => (
              <motion.div key={award.title} variants={itemVariants}>
                <AwardCard {...award} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="section-shell pt-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="surface rounded-[2rem] p-8 sm:p-10"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <SectionHeading
              eyebrow="연락처"
              title="의미 있는 엔지니어링 대화를 환영합니다"
              description="채용 제안, 백엔드 플랫폼 역할, AI/데이터 엔지니어링 기회, 자동화 중심 시스템 협업 모두 편하게 연락 주세요."
            />

            <div className="flex gap-3">
              <a
                href={profile.socials.github.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-200"
                aria-label="깃허브"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.email.href}
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-200"
                aria-label="이메일"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.linkedin.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-200"
                aria-label="링크드인"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {profile.contact.map((item) => (
              <motion.div key={item.label} variants={itemVariants}>
                <ContactCard {...item} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
