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
      <div className="pointer-events-none absolute inset-0 opacity-[0.085] [background-image:radial-gradient(rgba(200,240,255,0.9)_0.55px,transparent_0.55px)] [background-size:22px_22px]" />
      <section className="mx-auto min-h-screen max-w-6xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 flex items-center justify-between rounded-2xl border border-cyan-400/20 bg-white/[0.07] px-4 py-3 shadow-[0_0_40px_-10px_rgba(56,224,245,0.15)] backdrop-blur-xl"
        >
          <p className="text-sm font-semibold tracking-wide text-white/90">{personalInfo.name}</p>
          <div className="flex gap-2 rounded-full border border-white/15 bg-black/25 p-1">
            <button
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-medium transition",
                view === "ai" ? "bg-white text-black" : "text-white/70 hover:text-white"
              )}
              onClick={() => setView("ai")}
            >
              AI Engineer
            </button>
            <button
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-medium transition",
                view === "software" ? "bg-white text-black" : "text-white/70 hover:text-white"
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
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1 text-xs text-cyan-200">
              <Sparkles size={14} /> {activeProfile.focusLabel}
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {activeProfile.title}
            </h1>
            <p className="max-w-xl text-base text-white/75 sm:text-lg">{activeProfile.tagline}</p>
            <p className="text-base text-white/80">
              Crafting <TypingHeadline words={activeProfile.typingWords} />
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Link
                  href="/resumes/ResumeForSDERole.pdf"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-4 py-2.5 text-sm font-semibold text-black shadow-glow transition hover:shadow-glow-lg"
                >
                  Download Resume
                  <Download size={15} className="transition group-hover:translate-y-0.5" />
                </Link>
              </motion.div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Contact Me <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            whileHover={hoverCardFlex}
            className="glass-shine mx-auto w-full max-w-xs perspective-[1000px] rounded-[2rem] border border-white/15 bg-card p-3 backdrop-blur-2xl transition-colors duration-300 hover:border-cyan-400/45 hover:shadow-glow-lg hover:ring-1 hover:ring-fuchsia-500/20"
          >
            <motion.div
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02, transition: springCard }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="[transform-style:preserve-3d]"
            >
              <Image
                src="/assets/profile.jpg"
                alt="Kaif Islam profile photo"
                width={420}
                height={520}
                priority
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55 }}
          whileHover={hoverPanelLift}
          className="mt-24 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-300 hover:border-cyan-400/35 hover:bg-gradient-to-br hover:from-cyan-500/[0.06] hover:to-violet-600/[0.08] hover:shadow-[0_0_50px_-12px_rgba(56,224,245,0.18)]"
        >
          <h2 className="mb-3 text-2xl font-bold">About Me</h2>
          <p className="max-w-4xl text-white/80">{activeProfile.about}</p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55 }}
          whileHover={hoverPanelLift}
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-300 hover:border-fuchsia-400/30 hover:bg-gradient-to-br hover:from-violet-500/[0.06] hover:to-cyan-500/[0.07] hover:shadow-[0_0_50px_-12px_rgba(167,139,250,0.2)]"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold">Skills</h2>
            <p className="text-xs uppercase tracking-wider text-cyan-200/90">{activeProfile.focusLabel}</p>
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
                className="rounded-2xl border border-white/10 bg-black/25 p-4 transition-[border-color,box-shadow,background-color] duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/[0.06] hover:shadow-glow"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-200">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs text-white/85 transition-all duration-300 hover:scale-105 hover:border-cyan-400/45 hover:bg-cyan-500/15 hover:text-white hover:shadow-[0_0_20px_-4px_rgba(56,224,245,0.35)]"
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
          className="relative mt-16 overflow-hidden rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/[0.07] via-violet-600/[0.06] to-fuchsia-500/[0.05] p-1 shadow-[0_0_60px_-20px_rgba(56,224,245,0.25)] backdrop-blur-xl"
        >
          <div className="rounded-[1.35rem] border border-white/10 bg-[#0a1623]/90 px-5 py-6 sm:px-8 sm:py-8">
            <p className="text-center text-sm font-semibold tracking-wide text-cyan-100 sm:text-base">
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{aiStackWorkflow.sectionTitle}</h2>
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
                  <h3 className="text-xl font-bold text-white sm:text-2xl">{category.title}</h3>
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
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/90 p-5 backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_40px_-8px_rgba(56,224,245,0.25),0_0_60px_-12px_rgba(167,139,246,0.15)]"
                      >
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{
                            background:
                              "radial-gradient(ellipse 90% 80% at 50% -20%, rgba(56, 224, 245, 0.12), transparent 55%), radial-gradient(ellipse 70% 60% at 100% 100%, rgba(167, 139, 246, 0.1), transparent 50%)"
                          }}
                        />
                        <div className="relative flex gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/25 text-cyan-100 ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-105 group-hover:from-cyan-400/30 group-hover:to-fuchsia-500/25">
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
            className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8"
          >
            <h3 className="text-xl font-bold sm:text-2xl">{aiStackWorkflow.howIUse.title}</h3>
            <ul className="mt-5 space-y-3">
              {aiStackWorkflow.howIUse.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-white/75 sm:text-base">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 shadow-[0_0_12px_rgba(56,224,245,0.6)]" />
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{uiUxDesign.sectionTitle}</h2>
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
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/90 p-6 backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-fuchsia-400/35 hover:shadow-[0_0_44px_-10px_rgba(232,121,249,0.2),0_0_50px_-12px_rgba(56,224,245,0.12)]"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 70% at 0% 0%, rgba(232, 121, 249, 0.08), transparent 50%), radial-gradient(ellipse 70% 60% at 100% 100%, rgba(56, 224, 245, 0.08), transparent 50%)"
                    }}
                  />
                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 text-white ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">{tool.summary}</p>
                      <p className="mt-3 border-l-2 border-cyan-400/40 pl-3 text-sm font-medium leading-snug text-cyan-100/90">
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
            className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 backdrop-blur-xl sm:px-6 sm:py-6"
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
          <h2 className="mb-6 text-2xl font-bold">Projects</h2>
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
                  className="group rounded-2xl border border-white/10 bg-card p-5 backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-300 hover:border-cyan-400/45 hover:bg-gradient-to-br hover:from-cyan-500/[0.08] hover:to-violet-600/[0.12] hover:shadow-glow-lg"
                >
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-2 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/75 transition-colors duration-300 group-hover:bg-cyan-400/15 group-hover:text-cyan-100"
                  >
                    {project.type === "ai" ? "AI & ML" : "Software + AI"}
                  </motion.p>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{project.description}</p>
                  <p className="mt-3 text-xs text-cyan-200/85">{project.stack}</p>
                  <div className="mt-4 flex gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white/85 transition group-hover:text-white"
                    >
                      <Globe size={14} /> GitHub
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="mb-6 text-2xl font-bold">Coding Profiles</h2>
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
                  "group rounded-2xl border bg-card p-5 backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-300 hover:shadow-glow-lg hover:ring-1 hover:ring-white/15 hover:bg-gradient-to-br hover:from-white/[0.07] hover:to-cyan-500/[0.05]",
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
          <h2 className="mb-6 text-2xl font-bold">Certifications</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((certificate) => (
              <motion.article
                key={certificate.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={hoverCardFlex}
                className="rounded-2xl border border-white/10 bg-card p-5 backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-300 hover:border-fuchsia-400/40 hover:bg-gradient-to-br hover:from-fuchsia-500/[0.07] hover:to-cyan-500/[0.08] hover:shadow-glow"
              >
                <p className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-cyan-200">
                  <Award size={14} /> {certificate.date}
                </p>
                <h3 className="text-base font-semibold">{certificate.title}</h3>
                <p className="mt-1 text-sm text-white/70">{certificate.issuer}</p>
                <Link
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-white/85 transition hover:text-neon"
                >
                  <Globe size={14} /> View Certificate
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h2 className="mb-6 text-2xl font-bold">Experience & Education</h2>
          <div className="space-y-4">
            {timeline.map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={hoverCardFlex}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-[border-color,box-shadow,background-color] duration-300 hover:border-cyan-400/35 hover:bg-gradient-to-r hover:from-cyan-500/[0.05] hover:to-transparent hover:shadow-[0_8px_40px_-15px_rgba(56,224,245,0.2)]"
              >
                <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-cyan-200">
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

        <section id="contact" className="mt-14">
          <motion.div
            whileHover={hoverPanelLift}
            className="glass-shine rounded-3xl border border-white/10 bg-card p-6 backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/40 hover:shadow-glow-lg hover:ring-1 hover:ring-violet-500/25"
          >
            <h2 className="mb-4 text-2xl font-bold">Let&apos;s Build Something Exceptional</h2>
            <p className="mb-5 text-sm text-white/75">
              Open to AI engineering, full-stack development, and collaborative product opportunities.
            </p>
            <div className="space-y-3 text-sm">
              <Link href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-white/85 hover:text-neon">
                <Mail size={16} /> {personalInfo.email}
              </Link>
              <Link href={personalInfo.linkedin} className="flex items-center gap-2 text-white/85 hover:text-neon">
                <Globe size={16} /> LinkedIn
              </Link>
              <Link href={personalInfo.github} className="flex items-center gap-2 text-white/85 hover:text-neon">
                <Globe size={16} /> GitHub
              </Link>
              <p className="flex items-center gap-2 text-white/85">
                <Phone size={16} /> {personalInfo.phone}
              </p>
            </div>
            <div className="mt-7 grid gap-3">
              <Link href="/resumes/ResumeForSDERole.pdf" className="rounded-xl border border-white/20 px-4 py-3 text-center text-sm hover:bg-white/10">
                Download Resume
              </Link>
            </div>
          </motion.div>
        </section>
      </section>
    </main>
  );
}
