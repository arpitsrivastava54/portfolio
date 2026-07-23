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
  const title = `${project.title} | ${project.role}`;
  const description = `${project.shortDescription} — case study by ${profile.name}, software engineer. Built with ${techList}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/experience/${project.id}`,
    },
    openGraph: {
      title: `${project.title} | ${profile.name}`,
      description,
      url: `/experience/${project.id}`,
      type: "article",
      ...(project.image
        ? {
            images: [
              {
                url: project.image,
                alt: `${project.title} — ${techList} project by ${profile.name}`,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${profile.name}`,
      description,
      ...(project.image ? { images: [project.image] } : {}),
    },
  };
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { id } = await params;
  return <ExperienceDetailClient id={id} />;
}
