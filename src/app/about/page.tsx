"use client";

import { CtaSection } from "@/components/sections/cta-section";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    number: "01",
    title: "Craft",
    description:
      "We obsess over details others overlook. Every component, every API endpoint, every pixel is considered. Good enough isn't good enough.",
  },
  {
    number: "02",
    title: "Clarity",
    description:
      "Complex problems deserve simple solutions. We cut through noise to deliver software that's intuitive, maintainable, and actually enjoyable to use.",
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "The best work emerges from genuine partnership. We embed with your team, share context openly, and treat your goals as our own.",
  },
  {
    number: "04",
    title: "Continuity",
    description:
      "We build for the long haul. Clean code, thorough documentation, and real knowledge transfer ensure your investment compounds over time.",
  },
];

const team = [
  {
    name: "Saiful Islam",
    role: "CEO & Co-Founder",
    bio: "Former frontend engineer lead at Model-Prime. Obsessed with developer experience and systems that scale gracefully.",
    initials: "AC",
    accent: "bg-primary",
    skills: ["React", "Next.js", "TypeScript", "Full Stack"],
  },
];

const milestones = [{ year: "2026", event: "Founded in Bangladesh by Saiful Islam" }];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".about-eyebrow", { y: 20, opacity: 0, duration: 0.5 }, 0.3)
        .from(".about-hero-line", { y: 80, opacity: 0, duration: 0.9, stagger: 0.12 }, 0.45)
        .from(".about-hero-body", { y: 24, opacity: 0, duration: 0.65 }, "-=0.4");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<Element>(".scroll-reveal").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        });
      });

      gsap.from(".value-card", {
        scrollTrigger: { trigger: ".values-grid", start: "top 80%", once: true },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".team-card", {
        scrollTrigger: { trigger: ".team-grid", start: "top 85%", once: true },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".milestone-item", {
        scrollTrigger: { trigger: ".timeline", start: "top 80%", once: true },
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });

      ScrollTrigger.refresh();
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] overflow-hidden bg-beige px-6 pb-20 pt-32 sm:px-10 lg:px-16"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-25"
          style={{ backgroundSize: "28px 28px" }}
        />
        <div className="pointer-events-none absolute -right-32 top-0 h-[50vw] w-[50vw] -translate-y-1/4 rounded-full border border-primary/20 bg-primary/5" />

        <div className="relative mx-auto max-w-7xl">
          <div className="about-eyebrow mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="section-label text-muted">Our Story</span>
          </div>
          <h1 className="max-w-4xl font-display">
            <span
              className="about-hero-line text-display-xl block font-900 leading-[0.88] tracking-tight text-ink"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 900" }}
            >
              We Started Because
            </span>
            <span className="about-hero-line block">
              <span
                className="text-display-xl font-700 italic text-primary"
                style={{ fontVariationSettings: "'opsz' 144, 'wght' 700, 'SOFT' 100" }}
              >
                Great Software
              </span>
            </span>
            <span
              className="about-hero-line text-display-xl block font-900 leading-[0.88] tracking-tight text-ink"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 900" }}
            >
              Was Rare.
            </span>
          </h1>
          <p className="about-hero-body mt-10 max-w-2xl text-lg leading-relaxed text-muted">
            In 2016, Alex and Sarah quit their jobs at big tech to prove a point: software companies
            don&apos;t have to choose between moving fast and building things properly. Eight years
            later, 150+ projects, and a growing team — we&apos;re still proving it.
          </p>
        </div>
      </section>

      <div ref={contentRef}>
        {/* Mission */}
        <section className="bg-ink px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="scroll-reveal flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-16">
              <div className="lg:w-1/3">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-primary/50" />
                  <span className="section-label text-cream/40">Mission</span>
                </div>
              </div>
              <blockquote className="lg:w-2/3">
                <p
                  className="font-display italic text-cream"
                  style={{
                    fontVariationSettings: "'opsz' 72, 'wght' 400, 'SOFT' 100",
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    lineHeight: "1.2",
                  }}
                >
                  &ldquo;To build software that&apos;s as beautiful as it is functional — tools that
                  businesses rely on and users genuinely enjoy.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-cream px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="scroll-reveal mb-14">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="section-label text-muted">What We Stand For</span>
              </div>
              <h2
                className="text-display-md font-display font-700 text-ink"
                style={{ fontVariationSettings: "'opsz' 72, 'wght' 700" }}
              >
                Our Values
              </h2>
            </div>
            <div className="values-grid grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div
                  key={v.number}
                  className="value-card group flex flex-col gap-5 bg-cream p-8 transition-colors duration-300 hover:bg-beige"
                >
                  <span className="font-mono text-xs text-muted/50">{v.number}</span>
                  <h3
                    className="font-display text-2xl font-700 text-ink"
                    style={{ fontVariationSettings: "'opsz' 48, 'wght' 700" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-beige px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="scroll-reveal mb-14">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="section-label text-muted">The People</span>
              </div>
              <h2
                className="text-display-md font-display font-700 text-ink"
                style={{ fontVariationSettings: "'opsz' 72, 'wght' 700" }}
              >
                Meet the Team
              </h2>
            </div>
            <div className="team-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="team-card group flex flex-col gap-5 border border-ink/10 bg-cream p-6 transition-all duration-300 hover:shadow-ink-hard"
                >
                  {/* Avatar */}
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full ${member.accent}`}
                  >
                    <span className="font-display text-lg font-700 text-cream">
                      {member.initials}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="font-sans text-base font-700 text-ink">{member.name}</h3>
                    <p className="font-mono text-xs text-muted">{member.role}</p>
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-muted">{member.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-ink/10 px-2.5 py-0.5 font-mono text-xs text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-cream px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="scroll-reveal mb-14">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="section-label text-muted">Since 2026</span>
              </div>
              <h2
                className="text-display-md font-display font-700 text-ink"
                style={{ fontVariationSettings: "'opsz' 72, 'wght' 700" }}
              >
                Our Journey
              </h2>
            </div>
            <div className="timeline relative pl-6 lg:pl-8">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 h-full w-px bg-ink/10" />
              <div className="flex flex-col gap-8">
                {milestones.map((m) => (
                  <div key={m.year} className="milestone-item relative flex items-start gap-6">
                    {/* Node */}
                    <div className="absolute -left-[1.3rem] top-1 h-3 w-3 rounded-full border-2 border-primary bg-cream" />
                    <div className="shrink-0 font-mono text-sm font-600 text-primary">{m.year}</div>
                    <p className="text-base text-muted">{m.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <CtaSection />
      </div>
    </>
  );
}
