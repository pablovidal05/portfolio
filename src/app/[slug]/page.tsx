import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
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
        <div className="min-h-screen bg-black">
            <div className="page-layout py-8" style={{ paddingTop: '8rem' }}>
                <Link
                    href="/"
                    className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 mb-8"
                    style={{ fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace", fontSize: '0.75rem' }}
                >
                    ← VOLVER
                </Link>
            </div>
            <ProjectDetail project={project} />
        </div>
    );
}
