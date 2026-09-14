import type { Metadata } from "next";
import { JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { getSiteUrl } from "@/lib/site";
import { profile } from "@/data/profile";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Arpit Srivastava | AI Software & Full Stack Engineer",
  description: "Expert AI software engineer and full stack developer specializing in machine learning, DevOps, and scalable web applications. Explore my professional portfolio.",
  keywords: ["software engineer", "ai engineer", "ai full stack developer", "ai software engineer", "ml engineer", "devops engineer", "senior software engineer"],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "https://itsarpit.dev",
  },
  openGraph: {
    title: "Arpit Srivastava | AI Software & Full Stack Engineer",
    description: "Expert AI software engineer and full stack developer specializing in machine learning, DevOps, and scalable web applications. Explore my professional portfolio.",
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Arpit Srivastava AI Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpit Srivastava | AI Software & Full Stack Engineer",
    description: "Expert AI software engineer and full stack developer specializing in machine learning, DevOps, and scalable web applications. Explore my professional portfolio.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

function JsonLd() {
  const personId = `${siteUrl}/#person`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        "name": profile.name,
        "url": siteUrl,
        "jobTitle": "Senior AI Software Engineer",
        "sameAs": [profile.github, profile.linkedin],
        "description": "Expert AI software engineer and full stack developer."
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": `${profile.name} Portfolio`,
        "author": { "@id": personId }
      }
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "dark",
        jetbrainsMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}