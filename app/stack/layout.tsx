import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Software Engineer & Full Stack Developer | Arpit Srivastava",
  description: "Expert AI software engineer and full stack developer specializing in React, Node.js, Python, and LLMs. Building scalable, high-performance web solutions.",
  alternates: { canonical: "https://itsarpit.dev/stack" },
  openGraph: {
    title: "AI Software Engineer & Full Stack Developer | Arpit Srivastava",
    description: "Expert AI software engineer and full stack developer specializing in React, Node.js, Python, and LLMs. Building scalable, high-performance web solutions.",
    url: "https://itsarpit.dev/stack",
    siteName: "Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Software Engineer & Full Stack Developer | Arpit Srivastava",
    description: "Expert AI software engineer and full stack developer specializing in React, Node.js, Python, and LLMs.",
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
            "@type": "WebSite",
            "name": "Arpit Srivastava Portfolio",
            "url": "https://itsarpit.dev",
            "author": {
              "@type": "Person",
              "name": "Arpit Srivastava",
              "jobTitle": "AI Software Engineer"
            }
          })
        }}
      />
      {children}
    </>
  );
}