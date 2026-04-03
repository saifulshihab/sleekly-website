"use client";

import { cn } from "@/lib/utils";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "We build performant, scalable web applications using modern frameworks. From SaaS platforms to e-commerce solutions, we architect for growth.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    number: "02",
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps that feel native on every device. We deliver polished iOS and Android experiences that users love.",
    tags: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    description:
      "Reliable, cost-efficient cloud infrastructure with automated pipelines. We handle the complexity so your team can focus on shipping.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Interfaces that balance aesthetic beauty with effortless usability. We research, prototype, and refine until every interaction feels right.",
    tags: ["Figma", "Design Systems", "User Research", "Prototyping"],
  },
  {
    number: "05",
    title: "Custom Software",
    description:
      "Bespoke enterprise solutions and automation tools built precisely for your workflow. No bloated off-the-shelf software — just exactly what you need.",
    tags: ["Python", "Go", "Microservices", "Integrations"],
  },
  {
    number: "06",
    title: "AI Integration",
    description:
      "We embed intelligence into your products — from LLM-powered features to custom ML pipelines. Practical AI that delivers real business value.",
    tags: ["OpenAI", "LangChain", "ML Pipelines", "RAG"],
  },
];

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-header", {
        scrollTrigger: {
          trigger: ".services-header",
          start: "top 82%",
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: { amount: 0.55, from: "start" },
        ease: "power3.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={ref} className="bg-beige px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="services-header mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="section-label text-muted">What We Do</span>
            </div>
            <h2
              className="text-display-md font-display font-700 text-ink"
              style={{ fontVariationSettings: "'opsz' 72, 'wght' 700" }}
            >
              Our Services
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted lg:text-right">
            End-to-end software services — from strategy and design to
            deployment and ongoing support.
          </p>
        </div>

        {/* Grid */}
        <div className="services-grid grid grid-cols-1 gap-px bg-ink/10 border border-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

function ServiceCard({ number, title, description, tags }: ServiceCardProps) {
  return (
    <div className="service-card group relative flex flex-col gap-5 bg-cream p-8 transition-colors duration-300 hover:bg-ink">
      {/* Hover green line */}
      <div className="absolute left-0 top-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />

      <div className="flex items-start justify-between">
        <span
          className={cn(
            "font-mono text-xs text-muted/60 transition-colors duration-300 group-hover:text-primary/60",
          )}
        >
          {number}
        </span>
        <div className="h-5 w-5 rounded-full border border-ink/20 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10" />
      </div>

      <h3
        className="font-display text-2xl font-700 text-ink transition-colors duration-300 group-hover:text-cream"
        style={{ fontVariationSettings: "'opsz' 48, 'wght' 700" }}
      >
        {title}
      </h3>

      <p className="flex-1 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-cream/60">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-ink/10 px-2.5 py-0.5 font-mono text-xs text-muted/70 transition-all duration-300 group-hover:border-primary/20 group-hover:text-primary/70"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow indicator */}
      <div className="flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <span className="section-label text-primary">Explore</span>
        <span className="text-primary text-sm">→</span>
      </div>
    </div>
  );
}
