import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arpit Srivastava | AI Software & Full Stack Engineer",
  description: "Expert AI software engineer and full stack developer. Explore my professional experience, case studies, and technical expertise in building scalable AI platforms.",
  alternates: { canonical: "https://itsarpit.dev/experience" },
  openGraph: {
    title: "Arpit Srivastava | AI Software & Full Stack Engineer",
    description: "Expert AI software engineer and full stack developer. Explore my professional experience, case studies, and technical expertise in building scalable AI platforms.",
    url: "https://itsarpit.dev/experience",
    siteName: "Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpit Srivastava | AI Software & Full Stack Engineer",
    description: "Expert AI software engineer and full stack developer. Explore my professional experience, case studies, and technical expertise in building scalable AI platforms.",
  },
  robots: { index: true, follow: true },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Arpit Srivastava Portfolio",
            "url": "https://itsarpit.dev",
            "author": {
              "@type": "Person",
              "name": "Arpit Srivastava",
              "jobTitle": "AI Software Engineer"
            }
          }),
        }}
      />
      {children}
    </>
  );
}