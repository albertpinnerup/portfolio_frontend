import { projectsQuery } from '@/app/api/queries/projects';
import { getFetch } from '@/app/utils/getFetch';
import ProjectsSectionClient from './ProjectsSectionClient';
import { projectType } from './ProjectsSectionClient';
import { ProjectsArraySchema } from '@/app/api/schemas/schemas';

export const ProjectsSectionWrapper = async () => {
    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

    const res = await getFetch(projectsQuery);
    const projects = res?.data?.global?.projects ?? [];

    const parsed = ProjectsArraySchema.safeParse(projects);

    if (!parsed.success) {
        console.error('Invalid project data from Strapi', parsed.error);
        return null;
    }

    const normalizedProjects = parsed.data.map((project) => ({
        ...project,
        image: project.image
            ? {
                  ...project.image,
                  url: project.image.url.startsWith('http')
                      ? project.image.url
                      : `${STRAPI_URL}${project.image.url}`,
              }
            : null,
    }));

    return <ProjectsSectionClient projects={normalizedProjects} />;
};
