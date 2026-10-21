import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dwifoundation.org"),
  title: { default: "Digital Women Impact Foundation — Skills, confidence & opportunity", template: "%s | Digital Women Impact Foundation" },
  description: "Advancing women and girls through education, mentorship, digital & AI literacy, rights awareness, and practical opportunity.",
  openGraph: { title: "Digital Women Impact Foundation", description: "Evidence and practical pathways for a world where women can thrive.", type: "website" },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a><SiteHeader />{children}<SiteFooter /></body></html>;
}
