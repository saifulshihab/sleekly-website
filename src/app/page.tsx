import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TechSection } from "@/components/sections/tech-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WorkSection } from "@/components/sections/work-section";
import { Marquee } from "@/components/ui/marquee";
import { Fragment } from "react";

const marqueeItems = [
  "Web Development",
  "Mobile Apps",
  "Cloud & DevOps",
  "UI/UX Design",
  "Custom Software",
  "AI Integration",
  "React & Next.js",
  "TypeScript",
  "Node.js",
  "AWS",
];

export default function HomePage() {
  return (
    <Fragment>
      <HeroSection />
      <div className="bg-ink py-5">
        <Marquee items={marqueeItems} separator="✦" itemClassName="text-cream/50" />
      </div>
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <StatsSection />
      <TechSection />
      <TestimonialsSection />
      <CtaSection />
    </Fragment>
  );
}
