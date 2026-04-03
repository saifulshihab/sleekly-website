"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered", description: "Across 12+ industries" },
  { value: 8, suffix: "+", label: "Years in Business", description: "Founded 2016" },
  { value: 98, suffix: "%", label: "Client Retention", description: "They keep coming back" },
  { value: 40, suffix: "+", label: "Team Members", description: "Across 3 continents" },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section reveal
      gsap.from(".stats-content", {
        scrollTrigger: { trigger: ".stats-content", start: "top 82%" },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      // Counter animation
      const counters = document.querySelectorAll<HTMLElement>(".stat-counter");
      counters.forEach((counter) => {
        const target = parseInt(counter.dataset.target ?? "0", 10);
        const suffix = counter.dataset.suffix ?? "";

        ScrollTrigger.create({
          trigger: counter,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              counter,
              { textContent: "0" },
              {
                textContent: target,
                duration: 1.8,
                ease: "power2.out",
                snap: { textContent: 1 },
                onUpdate() {
                  counter.textContent = Math.round(parseFloat(counter.textContent ?? "0")) + suffix;
                },
                onComplete() {
                  counter.textContent = target + suffix;
                },
              },
            );
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-ink px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="stats-content grid grid-cols-2 gap-px bg-cream/5 border border-cream/10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col gap-3 bg-ink p-8 transition-colors duration-300 hover:bg-charcoal lg:p-10"
            >
              <div className="flex items-end gap-1">
                <span
                  className="stat-counter font-display text-5xl font-700 leading-none text-primary lg:text-6xl"
                  style={{ fontVariationSettings: "'opsz' 96, 'wght' 700" }}
                  data-target={stat.value}
                  data-suffix={stat.suffix}
                >
                  0{stat.suffix}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-sans text-base font-600 text-cream">{stat.label}</span>
                <span className="font-mono text-xs text-cream/30">{stat.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
