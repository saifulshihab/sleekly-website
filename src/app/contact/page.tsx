"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";

const services = [
  "Web Development",
  "Mobile Development",
  "Cloud & DevOps",
  "UI/UX Design",
  "Custom Software",
  "AI Integration",
  "Not sure yet",
];

const budgets = ["< $10k", "$10k – $25k", "$25k – $75k", "$75k – $150k", "$150k+"];

const contactInfo = [
  {
    label: "Email",
    value: "hello@sleekly.dev",
    href: "mailto:hello@sleekly.dev",
    mono: true,
  },
  {
    label: "Phone",
    value: "+1 (415) 555-0176",
    href: "tel:+14155550176",
    mono: true,
  },
  {
    label: "Office",
    value: "404 Green Lane, Tech District\nSan Francisco, CA 94103",
    href: null,
    mono: false,
  },
];

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

function FormField({ label, name, type, placeholder, required }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="section-label text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border border-ink/15 bg-cream px-4 py-3 font-sans text-sm text-ink transition-colors duration-200 placeholder:text-muted/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".contact-eyebrow", { y: 20, opacity: 0, duration: 0.5 }, 0.3)
        .from(".contact-headline", { y: 80, opacity: 0, duration: 0.9, stagger: 0.12 }, 0.45)
        .from(".contact-body", { y: 24, opacity: 0, duration: 0.65 }, "-=0.4");
    }, heroRef);

    const ctx2 = gsap.context(() => {
      gsap.from(".form-col", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      });
    }, formRef);

    return () => {
      ctx.revert();
      ctx2.revert();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-cream px-6 pb-20 pt-32 sm:px-10 lg:px-16"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30"
          style={{ backgroundSize: "28px 28px" }}
        />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-[40vw] w-[40vw] translate-y-1/2 rounded-full bg-primary/5" />

        <div className="relative mx-auto max-w-7xl">
          <div className="contact-eyebrow mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="section-label text-muted">Get In Touch</span>
          </div>
          <h1 className="max-w-3xl font-display">
            <span
              className="contact-headline text-display-xl block font-900 leading-[0.88] tracking-tight text-ink"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 900" }}
            >
              Let&apos;s Build
            </span>
            <span className="contact-headline block">
              <span
                className="text-display-xl font-700 italic text-primary"
                style={{ fontVariationSettings: "'opsz' 144, 'wght' 700, 'SOFT' 100" }}
              >
                Together.
              </span>
            </span>
          </h1>
          <p className="contact-body mt-8 max-w-lg text-lg leading-relaxed text-muted">
            Tell us about your project. We typically respond within one business day — often much
            sooner.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section ref={formRef} className="bg-beige px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
            {/* Form */}
            <div className="form-col">
              {submitted ? (
                <div className="flex flex-col gap-6 border border-primary/30 bg-primary/5 p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                    <span className="text-lg text-ink">✓</span>
                  </div>
                  <h3
                    className="font-display text-3xl font-700 text-ink"
                    style={{ fontVariationSettings: "'opsz' 48, 'wght' 700" }}
                  >
                    Message received!
                  </h3>
                  <p className="text-base leading-relaxed text-muted">
                    Thank you for reaching out. We&apos;ll review your project details and get back
                    to you within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-fit border-b border-ink/30 pb-0.5 font-sans text-xs font-700 uppercase tracking-widest text-ink hover:border-primary hover:text-forest"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      label="Full Name"
                      name="name"
                      type="text"
                      placeholder="Alex Johnson"
                      required
                    />
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="alex@company.com"
                      required
                    />
                  </div>

                  {/* Company */}
                  <FormField
                    label="Company (optional)"
                    name="company"
                    type="text"
                    placeholder="Acme Inc."
                  />

                  {/* Service selection */}
                  <div className="flex flex-col gap-2">
                    <label className="section-label text-muted">Service Interested In</label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSelectedService(s)}
                          className={cn(
                            "rounded-full border px-4 py-1.5 font-sans text-xs font-600 uppercase tracking-widest transition-all duration-200",
                            selectedService === s
                              ? "border-primary bg-primary text-ink"
                              : "border-ink/20 bg-cream text-muted hover:border-ink/50 hover:text-ink",
                          )}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="flex flex-col gap-2">
                    <label className="section-label text-muted">Approximate Budget</label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBudget(b)}
                          className={cn(
                            "rounded-full border px-4 py-1.5 font-sans text-xs font-600 uppercase tracking-widest transition-all duration-200",
                            selectedBudget === b
                              ? "border-primary bg-primary text-ink"
                              : "border-ink/20 bg-cream text-muted hover:border-ink/50 hover:text-ink",
                          )}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="section-label text-muted">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Describe your project, goals, timeline, or anything else you'd like us to know..."
                      required
                      className="w-full resize-none border border-ink/15 bg-cream px-4 py-3 font-sans text-sm text-ink transition-colors duration-200 placeholder:text-muted/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-fit">
                    Send Message →
                  </Button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="form-col flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex flex-col gap-1.5">
                    <span className="section-label text-muted">{info.label}</span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className={cn(
                          "text-ink transition-colors hover:text-forest",
                          info.mono ? "font-mono text-sm" : "text-base",
                        )}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p
                        className={cn(
                          "whitespace-pre-line text-muted",
                          info.mono ? "font-mono text-sm" : "text-base",
                        )}
                      >
                        {info.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="border border-ink/10 bg-cream p-6">
                <h4 className="section-label mb-4 text-muted">Response Hours</h4>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted">Mon – Fri</span>
                    <span className="font-mono text-xs text-ink">9am – 6pm PST</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted">Weekends</span>
                    <span className="font-mono text-xs text-muted">Emergency only</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                  <span className="font-mono text-xs text-forest">Available now</span>
                </div>
              </div>

              {/* Social */}
              <div className="flex flex-col gap-3">
                <span className="section-label text-muted">Follow Us</span>
                <div className="flex gap-4">
                  {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="font-mono text-xs text-muted transition-colors hover:text-ink"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
