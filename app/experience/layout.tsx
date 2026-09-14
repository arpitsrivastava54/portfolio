import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arpit Srivastava | AI Software & Full Stack Engineer",
  description: "Hire Arpit Srivastava, a Senior AI Software Engineer and Full Stack Developer. Specializing in scalable AI platforms, machine learning, and DevOps solutions.",
  alternates: { canonical: "https://itsarpit.dev" },
  openGraph: {
    title: "Arpit Srivastava | AI Software & Full Stack Engineer",
    description: "Hire Arpit Srivastava, a Senior AI Software Engineer and Full Stack Developer. Specializing in scalable AI platforms, machine learning, and DevOps solutions.",
    url: "https://itsarpit.dev",
    siteName: "Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpit Srivastava | AI Software & Full Stack Engineer",
    description: "Hire Arpit Srivastava, a Senior AI Software Engineer and Full Stack Developer. Specializing in scalable AI platforms, machine learning, and DevOps solutions.",
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
            "@graph": [
              {
                "@type": "WebSite",
                "name": "Arpit Srivastava Portfolio",
                "url": "https://itsarpit.dev"
              },
              {
                "@type": "Organization",
                "name": "Arpit Srivastava",
                "url": "https://itsarpit.dev",
                "founder": {
                  "@type": "Person",
                  "name": "Arpit Srivastava",
                  "jobTitle": "AI Software Engineer"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What services does Arpit Srivastava offer?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Arpit offers expert AI software engineering, full stack development, machine learning integration, and DevOps consulting services."
                    }
                  }
                ]
              }
            ]
          }),
        }}
      />
      {children}
    </>
  );
}