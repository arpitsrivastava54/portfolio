import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Software Engineer Portfolio | Arpit Srivastava",
  description: "Explore expert AI software engineer Arpit Srivastava's portfolio. Specializing in AI full stack development, machine learning, and scalable cloud solutions.",
  alternates: { canonical: "https://itsarpit.dev/projects" },
  openGraph: {
    title: "AI Software Engineer Portfolio | Arpit Srivastava",
    description: "Expert AI software engineer and full stack developer. View projects in machine learning, cloud architecture, and scalable web applications.",
    url: "https://itsarpit.dev/projects",
    siteName: "Arpit Srivastava Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Software Engineer Portfolio | Arpit Srivastava",
    description: "Expert AI software engineer and full stack developer. View projects in machine learning, cloud architecture, and scalable web applications."
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
            "@type": "CollectionPage",
            "name": "Projects Portfolio",
            "description": "Portfolio of AI and Full Stack software engineering projects.",
            "author": {
              "@type": "Person",
              "name": "Arpit Srivastava"
            }
          })
        }}
      />
      {children}
    </>
  );
}