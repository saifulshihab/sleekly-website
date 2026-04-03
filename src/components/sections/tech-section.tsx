"use client";

import { Marquee } from "@/components/ui/marquee";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techRow1 = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Go",
  "GraphQL",
  "PostgreSQL",
  "Redis",
  "MongoDB",
];

const techRow2 = [
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "GitHub Actions",
  "Vercel",
  "Supabase",
  "React Native",
  "Flutter",
  "Three.js",
];

const categories = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind"] },
  { label: "Backend", items: ["Node.js", "Python", "Go", "GraphQL", "REST"] },
  { label: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { label: "Cloud", items: ["AWS", "GCP", "Azure", "Docker", "K8s"] },
  { label: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"] },
];

export function TechSection() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tech-header", {
        scrollTrigger: { trigger: ".tech-header", start: "top 82%" },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".tech-category", {
        scrollTrigger: { trigger: ".tech-categories", start: "top 80%" },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="overflow-hidden bg-cream py-24 lg:py-32">
      {/* Header */}
      <div className="tech-header mx-auto mb-14 max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="section-label text-muted">Tech Stack</span>
            </div>
            <h2
              className="text-display-md font-display font-700 text-ink"
              style={{ fontVariationSettings: "'opsz' 72, 'wght' 700" }}
            >
              Tools We Master
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted lg:text-right">
            We pick the right tool for every job — no vendor lock-in, no
            cargo-cult technology choices.
          </p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="mb-14 flex flex-col gap-3">
        <Marquee
          items={techRow1}
          separator="·"
          className="py-3"
          itemClassName="text-ink/70"
        />
        <Marquee
          items={techRow2}
          separator="·"
          speed="slow"
          className="py-3"
          itemClassName="text-muted"
        />
      </div>

      {/* Category grid */}
      <div className="tech-categories mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="tech-category group border border-ink/10 bg-beige p-5 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
            >
              <h4 className="section-label mb-3 text-forest">{cat.label}</h4>
              <ul className="flex flex-col gap-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="font-mono text-xs text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
