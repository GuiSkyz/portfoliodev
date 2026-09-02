import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Guilherme Silvestre — Full Stack Developer | Frontend · Product · AI",
    template: "%s | Guilherme Silvestre",
  },
  description: siteConfig.description,
  keywords: [
    "Guilherme Silvestre",
    "Full Stack Developer",
    "Frontend Developer",
    "Product Engineer",
    "AI Integrations",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Supabase",
    "MinervaFlow",
    "Decode",
  ],
  authors: [{ name: "Guilherme Silvestre", url: siteConfig.links.github }],
  creator: "Guilherme Silvestre",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: "Guilherme Silvestre — Full Stack Developer | Frontend · Product · AI",
    description:
      "Transformo ideias em produtos que as pessoas realmente querem usar. Full Stack Developer com foco em Frontend, Produto e Inteligência Artificial.",
    siteName: "Guilherme Silvestre Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Guilherme Silvestre — Full Stack Developer | Frontend · Product · AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guilherme Silvestre — Full Stack Developer",
    description:
      "Transformo ideias em produtos que as pessoas realmente querem usar. Frontend · Product · AI.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[#09090b] text-[#fafafa] antialiased selection:bg-blue-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
