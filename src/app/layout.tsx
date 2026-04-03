import { CustomCursor } from "@/components/ui/custom-cursor";
import type { Metadata } from "next";
import { DM_Mono, Fraunces, Syne } from "next/font/google";
import { Footer } from "../components/layout/footer";
import { Navbar } from "../components/layout/navbar";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sleekly — Software Development Studio",
    template: "%s | Sleekly",
  },
  description:
    "We craft exceptional digital products — web applications, mobile apps, and enterprise software — that drive real business growth.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "Next.js",
    "React",
    "TypeScript",
    "UI/UX design",
    "cloud infrastructure",
  ],
  openGraph: {
    type: "website",
    siteName: "Sleekly",
    title: "Sleekly — Software Development Studio",
    description: "We craft exceptional digital products that drive real business growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${syne.variable} ${dmMono.variable}`}>
      <body className="grain-overlay font-sans text-ink antialiased">
        <Navbar />
        <main>
          {children}
          <CustomCursor />
        </main>
        <Footer />
      </body>
    </html>
  );
}
