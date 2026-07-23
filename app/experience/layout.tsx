import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Software Engineer",
  description:
    "Career journey and case studies from Arpit Srivastava — software engineer and full stack developer specializing in React, Node.js, and AI platforms.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience | Arpit Srivastava",
    description:
      "Work experience and project case studies by software engineer Arpit Srivastava.",
    url: "/experience",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
