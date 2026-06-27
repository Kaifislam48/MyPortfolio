"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Bot,
  Box,
  Briefcase,
  Cloud,
  Code,
  Cpu,
  Download,
  ExternalLink,
  FlaskConical,
  GitBranch,
  Globe,
  GraduationCap,
  Image as LucideImage,
  Layers,
  Mail,
  Mic,
  Music,
  NotebookPen,
  Palette,
  PenTool,
  Phone,
  Presentation,
  Search,
  Sparkles,
  SquareTerminal,
  Video,
  Wand,
  Zap
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState, type ComponentType } from "react";
import {
  aiStackWorkflow,
  certifications,
  uiUxDesign,
  codingProfiles,
  personalInfo,
  PortfolioView,
  profileViews,
  projects,
  skills,
  timeline,
  type AiStackIconKey
} from "@/constants/data";
import { cn } from "@/utils/cn";

function TypingHeadline({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setIndex(0);
    setText("");
    setDeleting(false);
  }, [words]);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 55 : 95;
    const timeout = setTimeout(() => {
      const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      setText(next);
      if (!deleting && next === current) {
        setTimeout(() => setDeleting(true), 900);
      }
      if (deleting && next.length === 0) {
        setDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [deleting, index, text, words]);

  return <span className="text-neon">{text}<span className="animate-pulse">|</span></span>;
}

const springCard = { type: "spring" as const, stiffness: 420, damping: 28 };
const hoverCardFlex = { y: -8, scale: 1.02, rotateZ: -0.35, transition: springCard };
const hoverPanelLift = { y: -5, transition: springCard };

const AI_STACK_ICONS: Record<
  AiStackIconKey,
  ComponentType<{ size?: number; className?: string; strokeWidth?: number }>
> = {
  sparkles: Sparkles,
  bot: Bot,
  layers: Layers,
  cpu: Cpu,
  terminal: SquareTerminal,
  github: Code,
  cloud: Cloud,
  wand: Wand,
  image: LucideImage,
  video: Video,
  box: Box,
  mic: Mic,
  music: Music,
  notebook: NotebookPen,
  search: Search,
  book: BookOpen,
  presentation: Presentation,
  flask: FlaskConical,
  gitBranch: GitBranch,
  zap: Zap
};

const UI_UX_ICONS = {
  pen: PenTool,
  palette: Palette
} as const;

export default function PortfolioShell() {
  const [view, setView] = useState<PortfolioView>("ai");
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    window.history.scrollRestoration = "manual";
    const hash = window.location.hash;
    if (hash) {
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.2
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const orbYSecondary = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const activeProfile = profileViews[view];
  const activeSkills = skills
    .filter((group) => activeProfile.priorityCategories.includes(group.category))
    .sort((a, b) => activeProfile.priorityCategories.indexOf(a.category) - activeProfile.priorityCategories.indexOf(b.category));
  const filteredProjects = [...projects]
    .filter((project) => (view === "ai" ? project.type === "ai" : true))
    .sort((a, b) => Number(b.type === view) - Number(a.type === view));

  return (
    <main ref={containerRef} className="relative overflow-x-clip bg-hero-gradient text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,rgba(56,224,245,0.06),transparent_58%)]" />
      {/* Scroll progress bar — gradient uses theme accent colors */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-violet-500 shadow-[0_0_20px_rgba(56,224,245,0.45)]"
      />
      <motion.div
        style={{ y: orbY }}
        className="pointer-events-none absolute -left-20 top-12 h-72 w-72 rounded-full bg-gradient-to-br from-violet-500/35 to-fuchsia-600/20 blur-3xl"
      />
      <motion.div
        style={{ y: orbYSecondary }}
        className="pointer-events-none absolute -right-20 top-[30rem] h-80 w-80 rounded-full bg-gradient-to-br from-cyan-400/30 to-sky-600/15 blur-3xl"
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(200,240,255,0.9)_0.55px,transparent_0.55px)] [background-size:22px_22px]" />
      <section className="mx-auto min-h-screen max-w-6xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-nav mb-14 flex items-center justify-between rounded-2xl px-4 py-3 shadow-glow-theme"
        >
          <p className="gradient-text text-sm font-bold tracking-wide">{personalInfo.name}</p>
          <div className="flex gap-2 rounded-full border border-white/15 bg-black/30 p-1">
            <button
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300",
                view === "ai"
                  ? "bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-black shadow-glow-accent"
                  : "text-white/60 hover:text-white"
              )}
              onClick={() => setView("ai")}
            >
              AI Engineer
            </button>
            <button
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300",
                view === "software"
                  ? "bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-black shadow-glow-accent"
                  : "text-white/60 hover:text-white"
              )}
              onClick={() => setView("software")}
            >
              Software Engineer
            </button>
          </div>
        </motion.nav>

        <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="space-y-6"
          >
            <p className="badge-pulse inline-flex items-center gap-2 rounded-full border border-[var(--color-accent-primary)]/25 bg-[var(--color-accent-primary)]/10 px-4 py-1 text-xs text-white/90">
              <Sparkles size={14} className="icon-glow" style={{ color: 'var(--color-accent-primary)' }} /> {activeProfile.focusLabel}
            </p>
            <h1 className="gradient-text text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {activeProfile.title}
            </h1>
            <p className="max-w-xl text-base text-white/80 sm:text-lg">{activeProfile.tagline}</p>
            <p className="text-base text-white/80">
              Crafting <TypingHeadline words={activeProfile.typingWords} />
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <a
                  href="/resumes/ResumeForSDERole.pdf"
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-accent-secondary)] via-[var(--color-accent-tertiary)] to-[var(--color-accent-primary)] px-4 py-2.5 text-sm font-semibold text-black shadow-glow-theme transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-theme-lg"
                  style={{ backgroundSize: '200% auto', animation: 'gradient-shift 4s ease infinite' }}
                >
                  Download Resume
                  <Download size={15} className="transition group-hover:translate-y-0.5" />
                </a>
              </motion.div>
              <a
                href="#contact"
                className="glow-border inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[var(--color-accent-primary)]/50 hover:bg-white/10"
              >
                Contact Me <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mx-auto w-fit"
          >
            <motion.div
              whileHover={{ scale: 1.05, transition: springCard }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative overflow-hidden rounded-full"
              style={{
                padding: 3,
                background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary), var(--color-accent-tertiary), var(--color-accent-primary))',
                backgroundSize: '300% 300%',
                animation: 'gradient-shift 4s ease infinite',
                boxShadow: '0 0 40px var(--color-glow-primary), 0 0 80px var(--color-glow-secondary)',
              }}
            >
              <div className="overflow-hidden rounded-full">
                <Image
                  src="/assets/Profile.jpeg"
                  alt="Kaif Islam profile photo"
                  width={320}
                  height={320}
                  priority
                  className="h-[320px] w-[320px] rounded-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55 }}
          whileHover={hoverPanelLift}
          className="glass-card spotlight-card mt-24 rounded-3xl p-6 transition-all duration-300"
        >
          <h2 className="mb-3 text-2xl font-bold"><span className="gradient-text">About Me</span></h2>
          <p className="max-w-4xl text-white/80 leading-relaxed">{activeProfile.about}</p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55 }}
          whileHover={hoverPanelLift}
          className="glass-card mt-10 rounded-3xl p-6 transition-all duration-300"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold"><span className="gradient-text">Skills</span></h2>
            <p className="rounded-full border border-[var(--color-accent-primary)]/20 bg-[var(--color-accent-primary)]/10 px-3 py-1 text-xs uppercase tracking-wider" style={{ color: 'var(--color-accent-primary)' }}>{activeProfile.focusLabel}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {activeSkills.map((group) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                whileHover={hoverCardFlex}
                className="glass-card spotlight-card rounded-2xl p-4"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--color-accent-primary)' }}>{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs text-white/85 transition-all duration-300 hover:scale-105 hover:border-[var(--color-accent-primary)]/45 hover:bg-[var(--color-accent-primary)]/10 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.6 }}
          className="relative mt-16 overflow-hidden rounded-3xl p-[1.5px] shadow-glow-theme"
          style={{ background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary), var(--color-accent-tertiary))', backgroundSize: '200% auto', animation: 'gradient-shift 5s ease infinite' }}
        >
          <div className="rounded-[calc(1.5rem-1.5px)] bg-[#0a1623]/92 px-5 py-6 backdrop-blur-xl sm:px-8 sm:py-8">
            <p className="gradient-text text-center text-sm font-semibold tracking-wide sm:text-base">
              {aiStackWorkflow.banner}
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55 }}
          className="mt-14"
        >
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl"><span className="gradient-text">{aiStackWorkflow.sectionTitle}</span></h2>
            <p className="mt-3 text-base leading-relaxed text-white/75 sm:text-lg">{aiStackWorkflow.sectionLead}</p>
          </div>

          <div className="space-y-16">
            {aiStackWorkflow.categories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.04 }}
              >
                <div className="mb-5">
                  <h3 className="text-xl font-bold sm:text-2xl" style={{ color: 'var(--color-accent-primary)' }}>{category.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">{category.description}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {category.tools.map((tool, i) => {
                    const Icon = AI_STACK_ICONS[tool.icon];
                    return (
                      <motion.article
                        key={tool.name}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        whileHover={hoverCardFlex}
                        className="glass-card spotlight-card group relative overflow-hidden rounded-2xl p-5"
                      >
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{
                            background:
                              "radial-gradient(ellipse 90% 80% at 50% -20%, var(--color-glow-primary), transparent 55%), radial-gradient(ellipse 70% 60% at 100% 100%, var(--color-glow-secondary), transparent 50%)"
                          }}
                        />
                        <div className="relative flex gap-4">
                          <div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ring-white/15 transition-all duration-300 group-hover:scale-110"
                            style={{ background: 'linear-gradient(135deg, var(--color-glow-primary), var(--color-glow-secondary))', color: 'var(--color-accent-primary)' }}
                          >
                            <Icon size={22} strokeWidth={1.75} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-white">{tool.name}</h4>
                            <p className="mt-1.5 text-sm leading-snug text-white/65">{tool.purpose}</p>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="glass-card mt-16 rounded-3xl p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold sm:text-2xl">{aiStackWorkflow.howIUse.title}</h3>
            <ul className="mt-5 space-y-3">
              {aiStackWorkflow.howIUse.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-white/75 sm:text-base">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))', boxShadow: '0 0 12px var(--color-glow-primary)' }} />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55 }}
          className="mt-20"
        >
          <div className="mb-8 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl"><span className="gradient-text">{uiUxDesign.sectionTitle}</span></h2>
            <p className="mt-3 text-base leading-relaxed text-white/75">{uiUxDesign.subtext}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {uiUxDesign.tools.map((tool, i) => {
              const Icon = UI_UX_ICONS[tool.icon];
              return (
                <motion.article
                  key={tool.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  whileHover={hoverCardFlex}
                  className="glass-card spotlight-card group relative overflow-hidden rounded-2xl p-6"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 70% at 0% 0%, var(--color-glow-secondary), transparent 50%), radial-gradient(ellipse 70% 60% at 100% 100%, var(--color-glow-primary), transparent 50%)"
                    }}
                  />
                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ring-white/15 transition-all duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, var(--color-glow-secondary), var(--color-glow-primary))', color: 'var(--color-accent-primary)' }}>
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">{tool.summary}</p>
                      <p className="mt-3 border-l-2 pl-3 text-sm font-medium leading-snug text-white/80" style={{ borderColor: 'var(--color-accent-primary)' }}>
                        {tool.useCase}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="glass-card mt-10 rounded-2xl px-5 py-5 sm:px-6 sm:py-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">{uiUxDesign.designPhilosophy.title}</p>
            <ul className="mt-4 flex flex-wrap gap-2 sm:gap-3">
              {uiUxDesign.designPhilosophy.points.map((point) => (
                <li
                  key={point}
                  className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/85 sm:text-sm"
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        <section className="mt-24">
          <h2 className="mb-6 text-2xl font-bold"><span className="gradient-text">Projects</span></h2>
          <div className="grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={`${project.title}-${view}`}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.97 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  whileHover={hoverCardFlex}
                  className="glass-card spotlight-card group rounded-2xl p-5"
                >
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-all duration-300"
                    style={{
                      background: 'var(--color-glow-primary)',
                      color: 'var(--color-accent-primary)',
                      border: '1px solid rgba(56,224,245,0.25)',
                    }}
                  >
                    {project.type === "ai" ? "AI & ML" : "Software + AI"}
                  </motion.p>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{project.description}</p>
                  <p className="mt-3 text-xs text-cyan-200/85">{project.stack}</p>
                  <div className="mt-4 flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="link-animated inline-flex items-center gap-2 text-sm text-white/75 transition-all duration-300 hover:text-white"
                    >
                      <Globe size={14} className="transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--color-accent-primary)' }} /> GitHub
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="mb-6 text-2xl font-bold"><span className="gradient-text">Coding Profiles</span></h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {codingProfiles.map((profile, index) => (
              <motion.article
                key={profile.platform}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={hoverCardFlex}
                className={cn(
                  "glass-card spotlight-card group rounded-2xl p-5",
                  profile.border
                )}
              >
                <div className={cn("mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-3 py-1 text-xs text-white/90", profile.accent)}>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-black/30 text-[10px] font-semibold">
                    {profile.logo}
                  </span>
                  {profile.platform}
                </div>
                <p className="text-sm text-white/65">{profile.label}</p>
                <h3 className="mt-1 text-lg font-semibold">@{profile.username}</h3>
                <p className="mt-3 inline-flex rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-cyan-200/90">
                  {profile.stat}
                </p>
                <Link
                  href={profile.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-white/90 transition group-hover:text-neon"
                >
                  Open Profile <ExternalLink size={14} />
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h2 className="mb-6 text-2xl font-bold"><span className="gradient-text">Certifications</span></h2>
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((certificate) => (
              <motion.article
                key={certificate.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={hoverCardFlex}
                className="glass-card spotlight-card glow-border rounded-2xl p-5"
              >
                <p className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider" style={{ color: 'var(--color-accent-primary)' }}>
                  <Award size={14} className="icon-glow" /> {certificate.date}
                </p>
                <h3 className="text-base font-semibold">{certificate.title}</h3>
                <p className="mt-1 text-sm text-white/70">{certificate.issuer}</p>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="link-animated mt-4 inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white"
                >
                  <Globe size={14} style={{ color: 'var(--color-accent-primary)' }} /> View Certificate
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h2 className="mb-6 text-2xl font-bold"><span className="gradient-text">Experience &amp; Education</span></h2>
          <div className="space-y-4">
            {timeline.map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={hoverCardFlex}
                className="glass-card glow-border spotlight-card rounded-2xl p-5"
              >
                <p className="flex items-center gap-2 text-xs uppercase tracking-wide" style={{ color: 'var(--color-accent-primary)' }}>
                  {item.title.toLowerCase().includes("b.tech") ? <GraduationCap size={14} /> : <Briefcase size={14} />}
                  {item.date}
                </p>
                <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
                <p className="text-sm text-white/65">{item.org}</p>
                {item.detail ? <p className="mt-2 text-sm text-white/75">{item.detail}</p> : null}
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-14 pb-24">
          <motion.div
            whileHover={hoverPanelLift}
            className="glass-shine glass-card spotlight-card rounded-3xl p-6 transition-all duration-300"
          >
            <h2 className="mb-4 text-2xl font-bold"><span className="gradient-text">Let&apos;s Build Something Exceptional</span></h2>
            <p className="mb-5 text-sm text-white/75">
              Open to AI engineering, full-stack development, and collaborative product opportunities.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`mailto:${personalInfo.email}`} className="link-animated flex items-center gap-2 text-white/80 transition-colors duration-300 hover:text-white">
                <Mail size={16} style={{ color: 'var(--color-accent-primary)' }} /> {personalInfo.email}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="link-animated flex items-center gap-2 text-white/80 transition-colors duration-300 hover:text-white">
                <Globe size={16} style={{ color: 'var(--color-accent-primary)' }} /> LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="link-animated flex items-center gap-2 text-white/80 transition-colors duration-300 hover:text-white">
                <Globe size={16} style={{ color: 'var(--color-accent-primary)' }} /> GitHub
              </a>
              <a href={`tel:${personalInfo.phone}`} className="link-animated flex items-center gap-2 text-white/80 transition-colors duration-300 hover:text-white">
                <Phone size={16} style={{ color: 'var(--color-accent-primary)' }} /> {personalInfo.phone}
              </a>
            </div>
            <div className="mt-7 grid gap-3">
              <a
                href="/resumes/ResumeForSDERole.pdf"
                target="_blank"
                rel="noreferrer"
                download
                className="rounded-xl px-4 py-3 text-center text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-theme"
                style={{ background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary), var(--color-accent-tertiary))', backgroundSize: '200% auto', animation: 'gradient-shift 4s ease infinite' }}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </section>
      </section>
    </main>
  );
}
