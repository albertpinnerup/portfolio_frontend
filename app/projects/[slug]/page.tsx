import { getProjectDocumentId } from '@/app/api/queries/getDocumentId';
import { getProjectByDocId } from '@/app/api/queries/projectByDocId';
import { getFetch } from '@/app/utils/getFetch';
import { ProjectPageClient } from './ProjectPageClient';

export const dynamic = 'force-dynamic';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const res = await getFetch(getProjectDocumentId, { slug });

    console.log('Graphql response: ', res);

    const docID = res?.data?.projects?.[0].documentId ?? null;

    console.log('documentId: ', docID);

    if (!docID) return null;

    const projectRes = await getFetch(getProjectByDocId, { documentId: docID });
    console.log('project response: ', projectRes);

    const project = projectRes?.data.project ?? null;
    console.log('project data:', project);

    if (!project) return null;

    return (
        <main className='min-h-screen relative bg-white text-gray-900 dark:bg-[#0F172A] dark:text-white overflow-x-hidden'>
            <ProjectPageClient project={project} />
        </main>
    );
}
