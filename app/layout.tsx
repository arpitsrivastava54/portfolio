import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arpit Srivastava | Full Stack Engineer & AI Specialist",
  description: "Building production AI platforms that scale. Specialized in LLMs, Generative AI, and Scalable Backend Systems.",
  openGraph: {
    title: "Arpit Srivastava | Full Stack Engineer & AI Specialist",
    description: "Building production AI platforms that scale.",
    url: "https://arpitsrivastava.dev",
    siteName: "Arpit Srivastava Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpit Srivastava | Full Stack Engineer & AI Specialist",
    description: "Building production AI platforms that scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "dark", jetbrainsMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}
