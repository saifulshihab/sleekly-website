"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        defaults: { ease: "power3.out" },
      });

      tl.from(".cta-label", { y: 20, opacity: 0, duration: 0.5 })
        .from(".cta-headline", { y: 60, opacity: 0, duration: 0.9 }, "-=0.2")
        .from(".cta-sub", { y: 24, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".cta-actions > *", { y: 18, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3")
        .from(
          ".cta-deco",
          { scale: 0, opacity: 0, duration: 1.2, ease: "elastic.out(1, 0.6)" },
          0,
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink px-6 py-28 sm:px-10 lg:px-16 lg:py-40"
    >
      {/* Decorative circle */}
      <div
        className="cta-deco pointer-events-none absolute -left-40 -top-40 rounded-full border border-lawn/10"
        style={{ width: "600px", height: "600px" }}
      />
      <div
        className="cta-deco pointer-events-none absolute -right-20 bottom-0 translate-y-1/2 rounded-full bg-lawn/5"
        style={{ width: "400px", height: "400px" }}
      />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-10"
        style={{ backgroundSize: "28px 28px" }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="cta-label mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-lawn/50" />
          <span className="section-label text-cream/40">Ready When You Are</span>
          <span className="h-px w-8 bg-lawn/50" />
        </div>

        <h2
          className="cta-headline font-display font-700 text-cream"
          style={{
            fontVariationSettings: "'opsz' 144, 'wght' 700",
            fontSize: "clamp(2.5rem, 6vw, 6rem)",
            lineHeight: "0.95",
            letterSpacing: "-0.025em",
          }}
        >
          Ready to Build{" "}
          <span
            className="italic text-lawn"
            style={{ fontVariationSettings: "'opsz' 144, 'wght' 500, 'SOFT' 80" }}
          >
            Something
          </span>
          <br />
          Extraordinary?
        </h2>

        <p className="cta-sub mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/50">
          Whether you have a clear vision or just a kernel of an idea, we&apos;d
          love to hear about your project. No sales pitch — just a genuine
          conversation.
        </p>

        <div className="cta-actions mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border-2 border-lawn bg-lawn px-8 py-4 font-sans text-sm font-700 uppercase tracking-widest text-ink transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_rgba(124,252,0,0.4)] active:translate-x-0.5 active:translate-y-0.5"
          >
            Start a Conversation
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
          <a
            href="mailto:hello@sleekly.dev"
            className="inline-flex items-center gap-2 border-2 border-cream/20 px-8 py-4 font-sans text-sm font-700 uppercase tracking-widest text-cream transition-all duration-200 hover:border-cream/50 hover:bg-cream/5"
          >
            hello@sleekly.dev
          </a>
        </div>

        {/* Small trust signals */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 border-t border-cream/10 pt-10">
          {["No long-term lock-in", "Fixed-price options available", "Response within 24h"].map(
            (item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-lawn" />
                <span className="font-mono text-xs text-cream/30">{item}</span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
