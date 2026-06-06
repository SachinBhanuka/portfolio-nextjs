import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sachin Keragala | Full-Stack Developer Melbourne Australia",
  description:
    "Full-Stack Developer based in Melbourne, Australia. Specializing in React, Next.js, TypeScript & Node.js. Available for graduate developer, React developer, and full-stack roles.",
  keywords: [
    "Full-Stack Developer Australia",
    "React Developer Melbourne",
    "Next.js Developer",
    "Software Engineer Australia",
    "TypeScript Developer",
    "Graduate Developer Australia",
    "Sachin Keragala",
    "Web Developer Melbourne",
    "JavaScript Developer Australia",
    "Node.js Developer",
  ],
  authors: [{ name: "Sachin Keragala" }],
  creator: "Sachin Keragala",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://sachinkeragala.com",
    title: "Sachin Keragala | Full-Stack Developer Melbourne Australia",
    description:
      "Full-Stack Developer based in Melbourne, Australia. Specializing in React, Next.js, TypeScript & Node.js.",
    siteName: "Sachin Keragala Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sachin Keragala - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin Keragala | Full-Stack Developer Melbourne Australia",
    description:
      "Full-Stack Developer based in Melbourne, Australia. Specializing in React, Next.js, TypeScript & Node.js.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-navy-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
