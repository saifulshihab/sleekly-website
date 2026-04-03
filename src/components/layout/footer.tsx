import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "/#services" },
    { label: "Mobile Apps", href: "/#services" },
    { label: "Cloud & DevOps", href: "/#services" },
    { label: "UI/UX Design", href: "/#services" },
    { label: "AI Integration", href: "/#services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/#work" },
    { label: "Our Process", href: "/#process" },
    { label: "Contact", href: "/contact" },
  ],
  Connect: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
};

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "PostgreSQL",
  "Flutter",
  "GraphQL",
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      {/* Top section */}
      <div className="border-b border-cream/10 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
            {/* Brand col */}
            <div className="flex flex-col gap-6">
              <Link href="/" className="group flex w-fit items-center gap-2">
                <span
                  className="font-display text-2xl font-700 tracking-tight"
                  style={{ fontVariationSettings: "'opsz' 144, 'wght' 700" }}
                >
                  Sleek<span className="text-primary">ly</span>
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </Link>

              <p className="max-w-xs leading-relaxed text-cream/60">
                A software development studio crafting exceptional digital products for ambitious
                businesses.
              </p>

              <div className="flex flex-col gap-1">
                <a
                  href="mailto:hello@sleekly.dev"
                  className="font-mono text-sm text-primary transition-colors hover:text-primary-dim"
                >
                  hello@sleekly.dev
                </a>
                <a
                  href="tel:+14155550176"
                  className="font-mono text-sm text-cream/50 transition-colors hover:text-cream/80"
                >
                  +880 1806 121 861
                </a>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cream/10 px-2.5 py-1 font-mono text-xs text-cream/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Link cols */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading} className="flex flex-col gap-4">
                <h4 className="section-label text-cream/40">{heading}</h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-cream/60 transition-colors duration-200 hover:text-cream"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 py-5 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-cream/30">
            &copy; {new Date().getFullYear()} Sleekly. All rights reserved.
          </p>
          <p className="font-mono text-xs text-cream/20">Crafted with precision in Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
