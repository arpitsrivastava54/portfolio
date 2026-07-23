import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Full Stack & React",
  description:
    "Deployed platforms and SaaS projects by Arpit Srivastava — full stack software engineer building with React, Next.js, Node.js, and Python.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Arpit Srivastava",
    description:
      "Flagship full stack and React projects by software engineer Arpit Srivastava.",
    url: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
