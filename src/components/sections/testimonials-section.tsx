"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Sleekly transformed our MVP into a production-grade platform in 10 weeks. Their architectural decisions saved us months of technical debt. We went from zero to 10k users without a single outage.",
    author: "Priya Nair",
    title: "CEO & Co-Founder",
    company: "Nexora Analytics",
    initials: "PN",
    accentColor: "bg-lawn",
  },
  {
    quote:
      "What sets Sleekly apart is that they genuinely care about the product, not just the code. They caught a fundamental UX problem in our checkout flow that was killing conversions — before we even brought it up.",
    author: "Marcus Webb",
    title: "Head of Product",
    company: "FlowCommerce",
    initials: "MW",
    accentColor: "bg-forest",
  },
  {
    quote:
      "We've worked with three other agencies. Sleekly is the only one that delivered on time, on budget, and actually exceeded expectations. The GreenPath app UI is stunning — users comment on it constantly.",
    author: "Lena Brauer",
    title: "CTO",
    company: "GreenPath",
    initials: "LB",
    accentColor: "bg-charcoal",
  },
];

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonials-header", {
        scrollTrigger: { trigger: ".testimonials-header", start: "top 82%" },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".testimonial-card", {
        scrollTrigger: { trigger: ".testimonials-grid", start: "top 78%" },
        y: 60,
        opacity: 0,
        duration: 0.75,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-beige px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="testimonials-header mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-lawn" />
            <span className="section-label text-muted">Client Stories</span>
          </div>
          <h2
            className="text-display-md font-display font-700 text-ink"
            style={{ fontVariationSettings: "'opsz' 72, 'wght' 700" }}
          >
            What Clients Say
          </h2>
        </div>

        {/* Grid */}
        <div className="testimonials-grid grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.author} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  initials: string;
  accentColor: string;
}

function TestimonialCard({
  quote,
  author,
  title,
  company,
  initials,
  accentColor,
}: TestimonialCardProps) {
  return (
    <div className="testimonial-card group flex flex-col justify-between gap-8 border border-ink/10 bg-cream p-8 transition-all duration-300 hover:shadow-ink-hard">
      {/* Quote mark */}
      <div className="flex flex-col gap-5">
        <span
          className="font-display text-6xl leading-none text-lawn/30"
          style={{ fontVariationSettings: "'opsz' 96" }}
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <p className="text-base leading-relaxed text-muted">{quote}</p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 border-t border-ink/10 pt-6">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${accentColor}`}
        >
          <span className="font-sans text-xs font-700 text-cream">{initials}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-sans text-sm font-700 text-ink">{author}</span>
          <span className="font-mono text-xs text-muted">
            {title}, {company}
          </span>
        </div>
      </div>
    </div>
  );
}
