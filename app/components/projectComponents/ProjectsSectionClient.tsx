'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectType } from '@/app/api/schemas/schemas';

export type projectType = {
    featured: boolean;
    readable: boolean;
    title: string;
    display_title: string;
    description: string;
    image: {
        height: number;
        width: number;
        url: string;
    };
    slug: string;
    about: string;
    technologies: {
        title: string;
    }[];
};

export default function ProjectsSectionClient({ projects }: { projects: ProjectType[] }) {
    const featuredProjects = projects?.filter((p) => p.featured);

    return (
        <>
            {featuredProjects?.length > 0 && (
                <section className='py-20 pb-12' id='featured'>
                    <div className='max-w-6xl px-4 mx-auto'>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className='text-3xl font-bold mb-12 text-center'
                        >
                            Featured Projects
                        </motion.h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            {featuredProjects
                                ?.filter((project) => project.featured == true)
                                .map((project, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        className='group'
                                    >
                                        <Link href={`projects/${project.slug}`}>
                                            <div className='transition-transform duration-300 group-hover:scale-105 h-[450px]  relative bg-white/50 dark:bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-200 dark:border-gray-800'>
                                                <div className='aspect-video relative overflow-hidden'>
                                                    {project.image && (
                                                        <Image
                                                            src={`${project.image.url}`}
                                                            alt={project.title}
                                                            fill
                                                            className='object-cover'
                                                        />
                                                    )}
                                                </div>
                                                <div className='p-6'>
                                                    <h3 className='text-xl font-bold mb-2'>
                                                        {project.display_title}
                                                    </h3>
                                                    <p className='text-gray-600 dark:text-gray-400 mb-4 line-clamp-3'>
                                                        {project.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                        </div>
                        <Link
                            href={'projects'}
                            className='mx-auto mt-12 block text-gray-200 w-fit px-6 rounded-lg hover:scale-105 active:scale-95 scale-100 transition-transform duration-150 py-4 bg-gradient-to-r from-blue-500 to-purple-500'
                        >
                            <h3 className='text-xl text-center'>See all projects</h3>
                        </Link>
                    </div>
                </section>
            )}
        </>
    );
}
