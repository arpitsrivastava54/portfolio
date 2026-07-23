import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Arpit Srivastava — software engineer and full stack developer available for React, Node.js, Python, and AI engineering work.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Arpit Srivastava",
    description:
      "Get in touch with software engineer Arpit Srivastava for full stack and AI projects.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
