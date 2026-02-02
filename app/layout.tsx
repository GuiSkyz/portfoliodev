import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Guilherme Silvestre | Fullstack Dev",
  description:
    "Portfólio de projetos, stacks e contato. Next.js, Node.js, automações e IA.",
  openGraph: {
    title: "Guilherme Silvestre | Fullstack Dev",
    description:
      "Projetos: MinervaFlow (em desenvolvimento) e Decode. Stacks e contato.",
    url: "https://portfoliodev-mocha.vercel.app/",
    siteName: "Guilherme Portfolio",
    images: ["/og.png"],
    type: "website",
    icons: {icon:"/icon.png",},
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
