import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Arpit Srivastava | AI & Full Stack Engineer",
  description: "Get in touch with Arpit Srivastava, a senior AI software engineer and full stack developer. Available for consulting, AI projects, and technical collaboration.",
  alternates: { canonical: "https://itsarpit.dev/contact" },
  openGraph: {
    title: "Contact Arpit Srivastava | AI & Full Stack Engineer",
    description: "Get in touch with Arpit Srivastava, a senior AI software engineer and full stack developer. Available for consulting, AI projects, and technical collaboration.",
    url: "https://itsarpit.dev/contact",
    siteName: "Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Arpit Srivastava | AI & Full Stack Engineer",
    description: "Get in touch with Arpit Srivastava, a senior AI software engineer and full stack developer. Available for consulting, AI projects, and technical collaboration.",
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
            "@type": "ContactPage",
            "name": "Contact Arpit Srivastava",
            "description": "Contact page for AI and Full Stack Software Engineer Arpit Srivastava.",
            "mainEntity": {
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