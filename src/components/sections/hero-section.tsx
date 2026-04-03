"use client";

import { Button } from "@/components/ui/button";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-navbar-spacer", { opacity: 0, duration: 0.01 })
        .from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.55 }, 0.2)
        .from(
          ".hero-line",
          { y: 100, opacity: 0, duration: 1.0, stagger: 0.12 },
          0.35,
        )
        .from(".hero-body", { y: 24, opacity: 0, duration: 0.65 }, "-=0.5")
        .from(
          ".hero-cta-item",
          { y: 18, opacity: 0, duration: 0.5, stagger: 0.08 },
          "-=0.4",
        )
        .from(
          ".hero-orb",
          { scale: 0, opacity: 0, duration: 1.4, ease: "elastic.out(1,0.55)" },
          0.1,
        )
        .from(".hero-scroll", { y: -16, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(
          ".hero-badge",
          { x: 30, opacity: 0, duration: 0.55, ease: "power2.out" },
          "-=0.6",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-cream"
    >
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 bg-dot-pattern"
        style={{ backgroundSize: "28px 28px", opacity: 0.35 }}
      />

      {/* Large decorative orb */}
      <div
        className="hero-orb pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 rounded-full bg-primary"
        style={{ width: "52vw", height: "52vw", opacity: 0.12 }}
      />
      <div
        className="hero-orb pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 rounded-full border border-primary/30"
        style={{ width: "52vw", height: "52vw" }}
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-28 sm:px-10 lg:px-16">
        <div className="max-w-[900px]">
          {/* Eyebrow */}
          <div className="hero-eyebrow mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="section-label text-muted">
              Software Development Studio
            </span>
          </div>

          {/* Main headline */}
          <h1 className="overflow-hidden font-display" aria-label="We build software that grows.">
            <span
              className="hero-line block overflow-hidden text-display-xl font-900 leading-[0.88] tracking-tight text-ink"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 900" }}
            >
              We Build
            </span>
            <span className="hero-line block overflow-hidden">
              <span
                className="text-display-xl font-900 italic text-primary"
                style={{ fontVariationSettings: "'opsz' 144, 'wght' 700, 'SOFT' 100" }}
              >
                Software
              </span>
            </span>
            <span
              className="hero-line block overflow-hidden text-display-xl font-900 leading-[0.88] tracking-tight text-ink"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 900" }}
            >
              That Grows.
            </span>
          </h1>

          {/* Body */}
          <p className="hero-body mt-10 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            From elegant web applications to robust enterprise systems — we turn
            ambitious ideas into exceptional digital products. Precision
            engineering, beautiful design, real results.
          </p>

          {/* CTAs */}
          <div className="hero-cta-item mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="hero-cta-item">
              <Button variant="primary" size="lg">
                Start a Project →
              </Button>
            </Link>
            <Link href="/#work" className="hero-cta-item">
              <Button variant="outline" size="lg">
                See Our Work
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom stat badge */}
        <div className="hero-badge absolute bottom-16 right-8 hidden flex-col items-end gap-1 lg:flex">
          <div className="border border-ink/10 bg-beige px-5 py-3">
            <p
              className="font-display text-4xl font-700 text-ink"
              style={{ fontVariationSettings: "'opsz' 72, 'wght' 700" }}
            >
              150+
            </p>
            <p className="section-label mt-1 text-muted">Projects Delivered</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-10 left-6 flex items-center gap-3 sm:left-10 lg:left-16">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ink/20 p-1.5">
            <div className="h-2 w-0.5 animate-float rounded-full bg-ink/40" />
          </div>
          <span className="section-label text-muted">Scroll</span>
        </div>
      </div>
    </section>
  );
}
