import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Software Engineer & Full Stack Developer | Arpit S.",
  description: "Hire Arpit Srivastava, an expert AI Software Engineer and Full Stack Developer. Specializing in ML, DevOps, and scalable AI-driven cloud architecture solutions.",
  alternates: { canonical: "https://itsarpit.dev" },
  openGraph: {
    title: "AI Software Engineer & Full Stack Developer | Arpit S.",
    description: "Hire Arpit Srivastava, an expert AI Software Engineer and Full Stack Developer. Specializing in ML, DevOps, and scalable AI-driven cloud architecture solutions.",
    url: "https://itsarpit.dev",
    siteName: "Arpit Srivastava Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Software Engineer & Full Stack Developer | Arpit S.",
    description: "Hire Arpit Srivastava, an expert AI Software Engineer and Full Stack Developer. Specializing in ML, DevOps, and scalable AI-driven cloud architecture solutions."
  },
  robots: { index: true, follow: true }
};

export default function ProjectsLayout({
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
                "name": "Arpit Srivastava Portfolio",
                "url": "https://itsarpit.dev"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What services does Arpit Srivastava offer?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Arpit specializes in AI engineering, full stack development, machine learning, and DevOps solutions for enterprise-grade applications."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}