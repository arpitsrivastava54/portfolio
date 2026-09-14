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
  title: "Arpit Srivastava | Senior AI & Full Stack Software Engineer",
  description: "Expert AI Software Engineer & Full Stack Developer. Specializing in Machine Learning, DevOps, and scalable AI-driven web applications for modern enterprises.",
  keywords: ["software engineer", "ai engineer", "ai full stack developer", "ai software engineer", "ml engineer", "devops engineer", "senior software engineer"],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "https://itsarpit.dev",
  },
  openGraph: {
    title: "Arpit Srivastava | Senior AI & Full Stack Software Engineer",
    description: "Expert AI Software Engineer & Full Stack Developer. Specializing in Machine Learning, DevOps, and scalable AI-driven web applications for modern enterprises.",
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
    title: "Arpit Srivastava | Senior AI & Full Stack Software Engineer",
    description: "Expert AI Software Engineer & Full Stack Developer. Specializing in Machine Learning, DevOps, and scalable AI-driven web applications for modern enterprises.",
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
        "description": "Expert AI software engineer and full stack developer specializing in ML and DevOps."
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": `${profile.name} Portfolio`,
        "author": { "@id": personId }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does Arpit Srivastava provide?",
            "acceptedAnswer": { "@type": "Answer", "text": "Arpit provides expert AI software engineering, full stack development, machine learning integration, and DevOps consulting services." }
          }
        ]
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}