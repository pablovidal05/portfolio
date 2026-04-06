import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllProjectSlugs().map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title.es} | Portfolio`,
        description: project.shortDescription.es,
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            <ProjectDetail project={project} />
        </div>
    );
}
