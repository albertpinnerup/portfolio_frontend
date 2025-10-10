import { allProjectsQuery } from '../api/queries/allProjects';
import { projectsQuery } from '../api/queries/projects';
import { ProjectsArraySchema } from '../api/schemas/schemas';
import { getFetch } from '../utils/getFetch';
import { PageClient } from './PageClient';

export default async function AllProjects() {
    const res = await getFetch(allProjectsQuery);

    const parsedRes = ProjectsArraySchema.safeParse(res.data.projects);

    if (!parsedRes.success) {
        console.error('invalid projects response', parsedRes.error);
        return null;
    }
    const projects = parsedRes.data;

    console.log('all projects: ', projects);

    return (
        <main className='min-h-screen relative bg-white text-gray-900 dark:bg-[#0F172A] dark:text-white overflow-x-hidden'>
            <PageClient projects={projects} />
        </main>
    );
}
