import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Neeraj Kiran Janakula | AI Engineer & ML Enthusiast",
  description:
    "Premium portfolio of Neeraj Kiran Janakula — AI Engineer, Machine Learning Enthusiast, and Future Builder. Building intelligent systems that shape tomorrow.",
  keywords: [
    "Neeraj Kiran Janakula",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Portfolio",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Neeraj Kiran Janakula | AI Engineer",
    description:
      "Building intelligent systems that shape tomorrow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${notoSansJP.variable}`}>
      <body className="min-h-screen bg-[#050505] text-[#F5F5F5]">
        {children}
      </body>
    </html>
  );
}
