"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  ChevronRight,
  Download,
  ExternalLink,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { ThemeToggle } from "@/components/theme-toggle";
import { resume } from "@/data/resume";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function TypingText({ items }: { items: string[] }) {
  const [textIndex, setTextIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentItem = items[textIndex % items.length];

    if (!isDeleting && letterIndex <= currentItem.length) {
      const timer = setTimeout(() => {
        setLetterIndex((prev) => prev + 1);
      }, 80);

      return () => clearTimeout(timer);
    }

    if (!isDeleting && letterIndex > currentItem.length) {
      const timer = setTimeout(() => setIsDeleting(true), 1200);
      return () => clearTimeout(timer);
    }

    if (isDeleting && letterIndex <= 0) {
      const timer = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % items.length);
        setLetterIndex(0);
      }, 120);
      return () => clearTimeout(timer);
    }

    if (isDeleting && letterIndex > 0) {
      const timer = setTimeout(() => {
        setLetterIndex((prev) => prev - 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isDeleting, items, letterIndex, textIndex]);

  const displayText = items[textIndex].slice(0, letterIndex);

  return (
    <div className="mt-6 flex min-h-[50px] items-center gap-3">
      <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Core stack</span>
      <div className="rounded-full border border-cyan-400/30 bg-cyan-500/5 px-3 py-2 text-sm font-medium text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        {displayText}
        <span className="ml-1 inline-block h-4 w-0.5 animate-pulse bg-cyan-300 align-middle" />
      </div>
    </div>
  );
}

function CounterCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <div className="rounded-[22px] border border-white/10 bg-white/5 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.24)] backdrop-blur-md">
      <div className="text-4xl font-semibold tracking-[-0.08em] text-white sm:text-5xl">
        {displayValue}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-slate-300">{label}</p>
    </div>
  );
}

export function PortfolioPage() {
  const heroSkills = [
    "React.js",
    "React Native",
    "Angular",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "AWS",
    "Kubernetes",
  ];

  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-[1] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.13),transparent_30%),linear-gradient(180deg,#040b16_0%,#081222_32%,#0b1425_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-[1] opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] [background-size:54px_54px]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#top" className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-violet-400 to-fuchsia-400 text-sm font-black tracking-[-0.08em] text-slate-950 shadow-[0_18px_35px_rgba(110,231,249,0.35)]">
              {resume.name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")}
            </span>
            <span className="text-xl font-semibold tracking-[-0.06em] text-white">{resume.name}</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {[
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Experience", href: "#experience" },
              { label: "Projects", href: "#projects" },
              { label: "Education", href: "#education" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">{resume.title}</p>
              <h1 className="max-w-[820px] text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-[7rem] lg:leading-[0.92]">
                Building <span className="text-gradient">scalable</span>
                <span className="block text-slate-200">digital products</span>
                <span className="block text-slate-300">from concept to deployment.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                I&apos;m {resume.name.replace("THEERTHA M K", "Theertha M K")}, a software engineer with around 4 years and 10 months of experience creating responsive web apps, mobile experiences, secure APIs, and cloud-powered platforms using React, Node.js, TypeScript, Angular, and modern AWS workflows.
              </p>

              <TypingText items={heroSkills} />

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href={resume.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download resume"
                  className={cn(
                    "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-[0_18px_40px_rgba(34,211,238,0.35)] transition hover:brightness-110"
                  )}
                >
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Link>
                <Link
                  href="#projects"
                  className={cn(
                    "inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                  )}
                >
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#contact"
                  className={cn(
                    "inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-cyan-300/40 hover:text-cyan-300"
                  )}
                >
                  Contact Me
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {resume.stats.map((stat) => (
                  <CounterCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -right-10 top-6 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute -bottom-8 left-10 h-40 w-40 rounded-full bg-violet-500/25 blur-3xl" />

              <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_rgba(2,6,23,0.5)] backdrop-blur-xl">
                <div className="flex items-center justify-center">
                  <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-cyan-400/20 bg-[radial-gradient(circle_at_top,_rgba(103,232,249,0.22),transparent_40%),linear-gradient(135deg,_rgba(15,23,42,0.9),_rgba(10,14,28,0.98))]">
                    <div className="absolute inset-3 rounded-full border border-white/10" />
                    <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-slate-200 via-slate-300 to-slate-500 text-4xl font-black tracking-[-0.08em] text-slate-900 shadow-[inset_0_2px_12px_rgba(255,255,255,0.6)]">
                      TM
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <h2 className="text-3xl font-semibold tracking-[-0.06em] text-white">{resume.name}</h2>
                  <p className="mt-2 text-base text-slate-300">{resume.title}</p>
                </div>

                <div className="mt-8 space-y-3">
                  {resume.contactMethods.slice(0, 4).map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/8 bg-slate-900/50 p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">{item.label}</p>
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="mt-1 block text-sm text-slate-200 transition hover:text-cyan-300">
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="About" title="Summary" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-8 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.36)] backdrop-blur-xl sm:p-8"
          >
            <p className="text-lg leading-8 text-slate-200 sm:text-xl">{resume.summary}</p>
          </motion.div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Core strengths" title="Skills" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {resume.skills.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[28px] border border-white/10 bg-slate-950/40 p-6 shadow-[0_18px_50px_rgba(2,6,23,0.35)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="text-xl font-medium text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Career journey" title="Professional Experience" />
          <div className="relative mt-10 space-y-8 before:absolute before:left-[14px] before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-cyan-400/50 before:via-violet-400/60 before:to-transparent">
            {resume.experience.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-7 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-950 shadow-[0_0_0_8px_rgba(34,211,238,0.08)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
                </div>

                <div className="rounded-[28px] border border-white/10 bg-slate-950/40 p-6 shadow-[0_18px_50px_rgba(2,6,23,0.35)]">
                  <div className="flex flex-col gap-3 pb-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white">{item.title}</h3>
                      <p className="mt-1 text-base text-slate-300">{item.company}</p>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-cyan-300">
                      {item.period}
                    </span>
                  </div>
                  <p className="mb-5 flex items-center gap-2 text-sm text-slate-400">
                    <MapPin className="h-4 w-4" /> {item.location}
                  </p>

                  <ul className="space-y-3 text-base leading-7 text-slate-300">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span key={technology} className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Work samples" title="Featured Projects" />
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {resume.projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                className="group rounded-[30px] border border-white/10 bg-slate-950/50 p-6 shadow-[0_22px_60px_rgba(2,6,23,0.4)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400">{project.period}</span>
                </div>

                <div className="mt-6 h-40 rounded-[24px] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.2),transparent_36%),linear-gradient(135deg,_rgba(15,23,42,1),_rgba(15,23,42,0.8))] border border-white/10 p-4">
                  <div className="flex h-full items-end justify-between rounded-[18px] border border-white/8 bg-slate-900/30 p-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Platform</p>
                      <p className="mt-2 text-xl font-semibold text-white">{project.category}</p>
                    </div>
                    <Star className="h-5 w-5 text-cyan-300" />
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.05em] text-white">{project.name}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="#"
                    aria-label={`GitHub for ${project.name}`}
                    className={cn(
                      "inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                    )}
                  >
                    <GithubIcon className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                  <Link
                    href="#"
                    aria-label={`Demo for ${project.name}`}
                    className={cn(
                      "inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-500/20"
                    )}
                  >
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div> */}
              </motion.article>
            ))}
          </div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Academic foundation" title="Education" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {resume.education.map((education, index) => (
              <motion.article
                key={education.institution}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_40px_rgba(2,6,23,0.28)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-200">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white">{education.degree}</h3>
                <p className="mt-2 text-base text-slate-300">{education.institution}</p>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="h-4 w-4" /> {education.location}
                </p>
                <p className="mt-4 text-sm font-medium text-cyan-300">{education.period}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Learning" title="Courses" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {resume.certifications.map((certification, index) => (
              <motion.div
                key={certification}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-slate-950/45 p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 text-amber-300">
                  <Award className="h-5 w-5" />
                </div>
                <p className="text-base leading-7 text-slate-200">{certification}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Recognition" title="Achievements" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {resume.achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-[0_15px_30px_rgba(2,6,23,0.25)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 text-fuchsia-200">
                  <Trophy className="h-5 w-5" />
                </div>
                <p className="text-base leading-7 text-slate-200">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Connect" title="Let’s build something meaningful" />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(2,6,23,0.28)]">
                <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">Reach out</p>
                <div className="mt-6 space-y-4 text-slate-200">
                  {resume.contactMethods.map((item) => (
                    <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/50 p-3 transition hover:border-cyan-400/30 hover:text-cyan-300">
                      {item.label === "Email" && <Mail className="h-4 w-4" />}
                      {item.label === "Phone" && <Phone className="h-4 w-4" />}
                      {item.label === "LinkedIn" && <Briefcase className="h-4 w-4" />}
                      {item.label === "Website" && <ExternalLink className="h-4 w-4" />}
                      <span>{item.value}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-slate-950/50 p-6 shadow-[0_18px_50px_rgba(2,6,23,0.3)]">
                <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">Languages</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {resume.languages.map((language) => (
                    <span key={language} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/75">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Let&apos;s connect</p>
            <p className="mt-2 text-xl font-medium text-white">Open to impactful engineering opportunities.</p>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-300">
            <Link href={resume.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:border-cyan-400/30 hover:text-cyan-300">
              <Download className="h-4 w-4" /> Resume
            </Link>
            <Link href={resume.linkedInUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:border-cyan-400/30 hover:text-cyan-300">
              LinkedIn <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {resume.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9c0-1.2-.4-1.9-1.1-2.5 3.6-.4 7.4-1.8 7.4-8.2a6.4 6.4 0 0 0-1.8-4.4 6 6 0 0 0-.1-4.4s-1.4-.4-4.6 1.7a15.9 15.9 0 0 0-8.3 0C6.4 1.8 5 2.2 5 2.2A6 6 0 0 0 3.3 6.6a6.4 6.4 0 0 0-1.8 4.4c0 6.3 3.8 7.8 7.4 8.2-.7.6-1.1 1.3-1.1 2.5V22" />
    </svg>
  );
}
