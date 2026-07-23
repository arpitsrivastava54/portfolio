import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack | React, Node.js, Python",
  description:
    "Tech stack of Arpit Srivastava — software engineer skilled in React, Next.js, Node.js, JavaScript, Python, LLMs, Docker, and AWS.",
  alternates: { canonical: "/stack" },
  openGraph: {
    title: "Tech Stack | Arpit Srivastava",
    description:
      "Frontend, backend, AI, and DevOps tools used by full stack developer Arpit Srivastava.",
    url: "/stack",
  },
};

export default function StackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
