import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: { default: "Women in Focus — Research for change", template: "%s | Women in Focus" },
  description: "Advancing women through rigorous research, policy analysis, and advocacy across workplace equity, AI, and maternal health.",
  openGraph: { title: "Women in Focus", description: "Evidence for a world where women can thrive.", type: "website" },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a><SiteHeader />{children}<SiteFooter /></body></html>;
}
