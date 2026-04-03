"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    phase: "Discover",
    description:
      "We immerse ourselves in your business, users, and competitive landscape. Deep listening, sharp questions, and structured analysis produce a clear vision.",
    duration: "1–2 weeks",
  },
  {
    number: "02",
    phase: "Design",
    description:
      "Architecture blueprints, wireframes, and high-fidelity prototypes. We validate every decision before a line of production code is written.",
    duration: "2–3 weeks",
  },
  {
    number: "03",
    phase: "Build",
    description:
      "Iterative sprints with continuous delivery. You see working software early and often — no big-bang reveals, no unpleasant surprises.",
    duration: "4–12 weeks",
  },
  {
    number: "04",
    phase: "Launch & Scale",
    description:
      "Smooth deployment with monitoring, performance tuning, and ongoing support. We stay engaged as your product grows.",
    duration: "Ongoing",
  },
];

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-header", {
        scrollTrigger: { trigger: ".process-header", start: "top 82%" },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".process-step", {
        scrollTrigger: { trigger: ".process-steps", start: "top 78%" },
        x: -40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Animate the connecting line
      gsap.from(".process-line", {
        scrollTrigger: { trigger: ".process-steps", start: "top 70%" },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power2.inOut",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={ref} className="bg-cream px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="process-header mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-lawn" />
              <span className="section-label text-muted">How We Work</span>
            </div>
            <h2
              className="text-display-md font-display font-700 text-ink"
              style={{ fontVariationSettings: "'opsz' 72, 'wght' 700" }}
            >
              Our Process
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted lg:text-right">
            A battle-tested approach that keeps projects on track and clients
            informed at every stage.
          </p>
        </div>

        {/* Steps */}
        <div className="process-steps relative">
          {/* Horizontal line (desktop) */}
          <div className="process-line absolute left-0 top-[2.75rem] hidden h-px w-full bg-ink/10 lg:block" />

          <div className="grid grid-cols-1 gap-0 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="process-step group relative flex flex-col gap-5 border-b border-ink/10 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-0 lg:pt-24"
                style={{ borderRightColor: i === steps.length - 1 ? "transparent" : undefined }}
              >
                {/* Step number node */}
                <div className="relative flex items-center gap-4 lg:absolute lg:left-8 lg:top-0 lg:flex-col lg:items-start lg:gap-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-cream transition-all duration-300 group-hover:border-lawn group-hover:bg-lawn lg:mb-6">
                    <span className="font-mono text-xs font-600 text-ink transition-colors group-hover:text-ink">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 lg:gap-4">
                  <div className="flex items-center justify-between">
                    <h3
                      className="font-display text-2xl font-700 text-ink"
                      style={{ fontVariationSettings: "'opsz' 48, 'wght' 700" }}
                    >
                      {step.phase}
                    </h3>
                    <span className="rounded-full bg-beige px-3 py-1 font-mono text-xs text-muted">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
