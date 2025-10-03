import { projectsQuery } from '@/app/api/queries/projects';
import { getFetch } from '@/app/utils/getFetch';
import ProjectsSectionClient from './ProjectsSectionClient';
import { projectType } from './ProjectsSectionClient';

export const ProjectsSectionWrapper = async () => {
    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

    const res = await getFetch(projectsQuery);
    const projects = res?.data?.global?.projects ?? [];

    const normalizedProjects = projects.map((project: projectType) => ({
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

    console.log(projects.image);

    return <ProjectsSectionClient projects={normalizedProjects} />;
};
