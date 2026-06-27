import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeSwitcher from "@/components/theme-switcher";
import AnimatedBackground from "@/components/animated-background";
import CursorGlow from "@/components/cursor-glow";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Kaif Islam | AI & ML Engineer & Full Stack Developer",
  description:
    "Portfolio of Kaif Islam - AI & ML Engineer and Full Stack Developer building intelligent, production-grade digital products.",
  keywords: [
    "Kaif Islam",
    "AI Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "React",
    "Next.js"
  ],
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Kaif Islam Portfolio",
    description: "AI & ML + Full Stack portfolio with projects, skills, and experience.",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <AnimatedBackground />
          <CursorGlow />
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
