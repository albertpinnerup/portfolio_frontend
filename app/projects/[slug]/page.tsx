import { getProjectDocumentId } from '@/app/api/queries/getDocumentId';
import { getProjectByDocId } from '@/app/api/queries/projectByDocId';
import { getFetch } from '@/app/utils/getFetch';
import { ProjectPageClient } from './ProjectPageClient';
import { DocumentIdResponseSchema, ProjectByDocIdSchema } from '@/app/api/schemas/schemas';

export const dynamic = 'force-dynamic';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const res = await getFetch(getProjectDocumentId, { slug });

    const parsedDocId = DocumentIdResponseSchema.safeParse(res);

    if (!parsedDocId.success) {
        console.error('Invalid document id response', parsedDocId.error);
        return null;
    }

    const docID = parsedDocId.data.data.projects[0]?.documentId ?? null;
    if (!docID) {
        return (
            <main>
                <p>Not found: {slug}</p>
            </main>
        );
    }

    const projectRes = await getFetch(getProjectByDocId, { documentId: docID });
    const parsedProject = ProjectByDocIdSchema.safeParse(projectRes);

    if (!parsedProject.success) {
        console.error('Invalid project response', parsedProject.error);
        return null;
    }

    const project = parsedProject.data.data.project;

    if (!project) {
        return (
            <main>
                <p>Not found: {slug}</p>
            </main>
        );
    }

    return (
        <main className='min-h-screen relative bg-white text-gray-900 dark:bg-[#0F172A] dark:text-white overflow-x-hidden'>
            <ProjectPageClient project={project} />
        </main>
    );
}
