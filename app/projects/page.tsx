import { allProjectsQuery } from '../api/queries/allProjects';
import { projectsQuery } from '../api/queries/projects';
import { getFetch } from '../utils/getFetch';
import { PageClient } from './PageClient';

export default async function AllProjects() {
    const res = await getFetch(allProjectsQuery);
    const projects = res?.data?.projects ?? [];

    console.log('all projects: ', projects);

    return (
        <main className='min-h-screen relative bg-white text-gray-900 dark:bg-[#0F172A] dark:text-white overflow-x-hidden'>
            <PageClient projects={projects} />
        </main>
    );
}
