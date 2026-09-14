import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Arpit Srivastava | AI & Full Stack Engineer",
  description: "Hire Arpit Srivastava, a Senior AI Software Engineer. Expert in AI, Machine Learning, and Full Stack development. Contact for consulting and projects.",
  alternates: { canonical: "https://itsarpit.dev/contact" },
  openGraph: {
    title: "Contact Arpit Srivastava | AI & Full Stack Engineer",
    description: "Hire Arpit Srivastava, a Senior AI Software Engineer. Expert in AI, Machine Learning, and Full Stack development. Contact for consulting and projects.",
    url: "https://itsarpit.dev/contact",
    siteName: "Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Arpit Srivastava | AI & Full Stack Engineer",
    description: "Hire Arpit Srivastava, a Senior AI Software Engineer. Expert in AI, Machine Learning, and Full Stack development. Contact for consulting and projects.",
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
                  "jobTitle": "AI Software Engineer",
                  "url": "https://itsarpit.dev"
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
                  },
                  {
                    "@type": "Question",
                    "name": "How can I hire Arpit for a project?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can reach out via the contact form on this page to discuss your AI, ML, or software engineering requirements."
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