import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AI Software Engineer Arpit Srivastava | Hire Expert",
  description: "Contact Arpit Srivastava, a Senior AI Full Stack Engineer. Reach out for AI consulting, machine learning projects, and expert software development services.",
  alternates: { canonical: "https://itsarpit.dev/contact" },
  openGraph: {
    title: "Contact AI Software Engineer Arpit Srivastava | Hire Expert",
    description: "Contact Arpit Srivastava, a Senior AI Full Stack Engineer. Reach out for AI consulting, machine learning projects, and expert software development services.",
    url: "https://itsarpit.dev/contact",
    siteName: "Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AI Software Engineer Arpit Srivastava | Hire Expert",
    description: "Contact Arpit Srivastava, a Senior AI Full Stack Engineer. Reach out for AI consulting, machine learning projects, and expert software development services.",
  },
  robots: { index: true, follow: true },
};

export default function ContactLayout({
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
                "@type": "ContactPage",
                "name": "Contact Arpit Srivastava",
                "description": "Contact page for AI and Full Stack Software Engineer Arpit Srivastava.",
                "mainEntity": {
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
                      "text": "Arpit specializes in AI engineering, full-stack development, machine learning, and DevOps solutions for scalable enterprise applications."
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