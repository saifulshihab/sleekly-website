"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "navbar fixed left-0 right-0 top-0 z-50 px-6 transition-all duration-300",
          scrolled
            ? "mx-4 mt-3 rounded-full border border-ink/10 bg-cream/90 shadow-md backdrop-blur-md sm:mx-8 lg:mx-12"
            : "bg-transparent sm:px-10 lg:px-16",
        )}
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <span
              className="font-display text-xl font-700 tracking-tight text-ink"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 700" }}
            >
              Sleek
              <span className="text-lawn">ly</span>
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-lawn transition-transform duration-300 group-hover:scale-150" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "section-label text-muted transition-colors duration-200 hover:text-ink",
                  pathname === link.href && "underline-lawn",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 border-2 border-ink bg-ink px-5 py-2.5 font-sans text-xs font-700 uppercase tracking-widest text-cream transition-all duration-200 hover:bg-transparent hover:text-ink"
            >
              Start a Project
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "block h-0.5 w-6 bg-ink transition-all duration-300",
                menuOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-ink transition-all duration-300",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-ink transition-all duration-300",
                menuOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-cream pt-20 transition-all duration-500 md:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex flex-col items-start gap-1 px-8 py-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-4 py-3"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              <span className="font-mono text-xs text-lawn opacity-60">0{i + 1}</span>
              <span
                className="text-display-md font-display font-700 text-ink transition-colors group-hover:text-forest"
                style={{ fontVariationSettings: "'opsz' 72" }}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-8 border-2 border-ink bg-ink px-6 py-3 font-sans text-xs font-700 uppercase tracking-widest text-cream"
          >
            Start a Project →
          </Link>
        </div>

        <div className="mt-auto border-t border-ink/10 px-8 py-6">
          <p className="section-label text-muted">hello@sleekly.dev</p>
        </div>
      </div>
    </>
  );
}
