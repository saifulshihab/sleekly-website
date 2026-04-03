"use client";

import { cn } from "@/lib/utils";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    category: "SaaS Platform",
    title: "Nexora Analytics",
    description:
      "A real-time analytics dashboard for a Series A startup. We architected the entire platform — from data ingestion pipelines to a pixel-perfect React UI with 50k+ daily active users.",
    outcome: "3× faster query performance, 40% reduction in churn",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Grafana"],
    accent: "bg-primary",
  },
  {
    number: "02",
    category: "Mobile Application",
    title: "GreenPath",
    description:
      "A sustainability-focused lifestyle app for iOS and Android. Gamified carbon tracking, community challenges, and partnerships with 200+ eco-conscious brands.",
    outcome: "4.8★ App Store rating, 85k downloads in 6 months",
    stack: ["React Native", "Node.js", "MongoDB", "Firebase"],
    accent: "bg-forest",
  },
  {
    number: "03",
    category: "E-Commerce Platform",
    title: "FlowCommerce",
    description:
      "A headless commerce platform for a luxury fashion brand entering DTC. Custom Shopify storefront with a bespoke CMS, size recommendation AI, and 3D product previews.",
    outcome: "2.4× conversion lift, 28% increase in average order value",
    stack: ["Next.js", "Shopify", "Sanity", "Three.js", "Vercel"],
    accent: "bg-charcoal",
  },
];

export function WorkSection() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work-header", {
        scrollTrigger: { trigger: ".work-header", start: "top 82%" },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".work-card", {
        scrollTrigger: { trigger: ".work-grid", start: "top 78%" },
        y: 70,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={ref} className="bg-beige px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="work-header mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="section-label text-muted">Selected Projects</span>
            </div>
            <h2
              className="text-display-md font-display font-700 text-ink"
              style={{ fontVariationSettings: "'opsz' 72, 'wght' 700" }}
            >
              Our Work
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted lg:text-right">
            A curated selection of projects where precision engineering met
            ambitious vision.
          </p>
        </div>

        {/* Cards */}
        <div className="work-grid flex flex-col gap-6">
          {projects.map((project) => (
            <WorkCard key={project.number} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface WorkCardProps {
  number: string;
  category: string;
  title: string;
  description: string;
  outcome: string;
  stack: string[];
  accent: string;
}

function WorkCard({ number, category, title, description, outcome, stack, accent }: WorkCardProps) {
  return (
    <div className="work-card group relative overflow-hidden border border-ink/10 bg-cream transition-all duration-500 hover:shadow-ink-hard-lg">
      {/* Accent bar */}
      <div className={cn("absolute left-0 top-0 h-full w-1 transition-all duration-500 group-hover:w-2", accent)} />

      <div className="flex flex-col gap-6 p-8 pl-10 lg:flex-row lg:items-start lg:gap-12 lg:p-10 lg:pl-14">
        {/* Left: number + category */}
        <div className="flex shrink-0 flex-col gap-2 lg:w-36">
          <span className="font-mono text-xs text-muted/50">{number}</span>
          <span className="tag-pill">{category}</span>
        </div>

        {/* Center: title + description */}
        <div className="flex flex-1 flex-col gap-4">
          <h3
            className="font-display text-3xl font-700 text-ink transition-colors group-hover:text-forest"
            style={{ fontVariationSettings: "'opsz' 48, 'wght' 700" }}
          >
            {title}
          </h3>
          <p className="text-base leading-relaxed text-muted">{description}</p>

          {/* Outcome */}
          <div className="flex items-start gap-3 rounded-none border-l-2 border-primary/60 pl-4">
            <p className="text-sm font-600 text-forest">{outcome}</p>
          </div>
        </div>

        {/* Right: stack + CTA */}
        <div className="flex shrink-0 flex-col items-start gap-6 lg:w-52 lg:items-end">
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-ink/10 px-2.5 py-0.5 font-mono text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <button className="group/btn flex items-center gap-2 border-b border-ink/30 pb-0.5 font-sans text-xs font-700 uppercase tracking-widest text-ink transition-all duration-200 hover:border-primary hover:text-forest">
            View Case Study
            <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
