import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senior AI Software Engineer & Full Stack Developer | Arpit",
  description: "Hire Arpit Srivastava, a Senior AI Software Engineer and Full Stack Developer. Expert in ML, DevOps, and scalable web solutions for modern enterprises.",
  alternates: { canonical: "https://itsarpit.dev" },
  openGraph: {
    title: "Senior AI Software Engineer & Full Stack Developer | Arpit",
    description: "Hire Arpit Srivastava, a Senior AI Software Engineer and Full Stack Developer. Expert in ML, DevOps, and scalable web solutions for modern enterprises.",
    url: "https://itsarpit.dev",
    siteName: "Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior AI Software Engineer & Full Stack Developer | Arpit",
    description: "Hire Arpit Srivastava, a Senior AI Software Engineer and Full Stack Developer. Expert in ML, DevOps, and scalable web solutions.",
  },
  robots: { index: true, follow: true },
};

export default function StackLayout({
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
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What services does Arpit Srivastava offer?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Arpit offers AI engineering, full-stack development, and DevOps consulting services." }
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