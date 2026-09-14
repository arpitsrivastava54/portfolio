import type { Metadata } from "next";
import { experiences } from "@/data/experiences";
import { ExperienceDetailClient } from "@/components/ExperienceDetailClient";
import { profile } from "@/data/profile";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return experiences.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = experiences.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const techList = project.tech.slice(0, 4).join(", ");
  const title = `${project.title} | AI Software Engineer Portfolio`;
  const description = `Explore ${project.title} case study by ${profile.name}. Expert AI software engineer & full stack developer insights on ${techList}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://itsarpit.dev/experience/${project.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://itsarpit.dev/experience/${project.id}`,
      siteName: "Arpit Srivastava Portfolio",
      type: "article",
      ...(project.image
        ? {
            images: [
              {
                url: project.image,
                alt: `${project.title} project case study by Arpit Srivastava`,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(project.image ? { images: [project.image] } : {}),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { id } = await params;
  const project = experiences.find((p) => p.id === id);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": project?.title || "Experience Detail",
            "author": {
              "@type": "Person",
              "name": "Arpit Srivastava",
              "url": "https://itsarpit.dev"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Arpit Srivastava Portfolio"
            }
          })
        }}
      />
      <ExperienceDetailClient id={id} />
    </>
  );
}