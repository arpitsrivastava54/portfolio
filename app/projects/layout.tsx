import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Software Engineer & Full Stack Developer | Arpit Srivastava",
  description: "Expert AI Software Engineer and Full Stack Developer. Explore innovative AI solutions, machine learning models, and scalable cloud architecture projects.",
  alternates: { canonical: "https://itsarpit.dev" },
  openGraph: {
    title: "AI Software Engineer & Full Stack Developer | Arpit Srivastava",
    description: "Expert AI Software Engineer and Full Stack Developer. Explore innovative AI solutions, machine learning models, and scalable cloud architecture projects.",
    url: "https://itsarpit.dev",
    siteName: "Arpit Srivastava Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Software Engineer & Full Stack Developer | Arpit Srivastava",
    description: "Expert AI Software Engineer and Full Stack Developer. Explore innovative AI solutions, machine learning models, and scalable cloud architecture projects."
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
            "@type": "WebSite",
            "name": "Arpit Srivastava Portfolio",
            "url": "https://itsarpit.dev",
            "author": {
              "@type": "Person",
              "name": "Arpit Srivastava",
              "jobTitle": "AI Software Engineer"
            },
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What services does Arpit Srivastava offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Arpit specializes in AI engineering, full stack development, machine learning, and DevOps solutions."
                  }
                }
              ]
            }
          })
        }}
      />
      {children}
    </>
  );
}