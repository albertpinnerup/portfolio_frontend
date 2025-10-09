import { getProjectDocumentId } from '@/app/api/queries/getDocumentId';
import { getProjectByDocId } from '@/app/api/queries/projectByDocId';
import { getFetch } from '@/app/utils/getFetch';
import { ProjectPageClient } from './ProjectPageClient';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    const res = await getFetch(getProjectDocumentId, { slug });
    const docID = res?.data?.projects?.[0].documentId ?? null;

    if (!docID) return null;

    const projectRes = await getFetch(getProjectByDocId, { documentId: docID });
    const project = projectRes?.data.project ?? null;

    if (!project) return null;

    return (
        <main className='min-h-screen relative bg-white text-gray-900 dark:bg-[#0F172A] dark:text-white overflow-x-hidden'>
            <ProjectPageClient project={project} />
        </main>
    );
}
