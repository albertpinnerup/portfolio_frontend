'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { projectType } from '../components/projectComponents/ProjectsSectionClient';
import { normalizeMedia } from '../utils/normalizeImage';
import { BackButton } from '../components/BackButton';
import { ProjectType } from '../api/schemas/schemas';

export const PageClient = ({ projects }: { projects: ProjectType[] }) => {
    const readableProjects = projects?.filter((p) => p.featured || p.readable);

    console.log('readable projects: ', readableProjects);

    return (
        <>
            <div className='absolute h-full inset-0 bg-[url("/grid-dark.svg")] dark:bg-[url("/grid.svg")] bg-center opacity-20 pointer-events-none bg-blend-overlay' />
            <BackButton className='rotate-90 fixed z-10 p-2 rounded-full bg-gray-200 dark:bg-gray-800 top-6 left-6 transition-transform duration-150 hover:scale-125 active:scale-95'>
                <div>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M19 14l-7 7m0 0l-7-7m7 7V3'
                        />
                    </svg>
                </div>
            </BackButton>

            {readableProjects?.length > 0 && (
                <section className='py-20' id='featured'>
                    <div className='max-w-6xl px-4 mx-auto'>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className='text-3xl font-bold mb-12 text-center'
                        >
                            All Projects
                        </motion.h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            {readableProjects
                                ?.filter(
                                    (project) =>
                                        (project.featured === true || project.readable === true) &&
                                        project.display_title
                                )
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
                                            <div className='transition-transform duration-300 group-hover:scale-105 h-[450px]  relative bg-white/50 dark:bg-gray-900/75 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-200 dark:border-gray-800'>
                                                <div className='aspect-video relative overflow-hidden'>
                                                    {project.image && (
                                                        <Image
                                                            src={normalizeMedia(project.image.url)}
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
                    </div>
                </section>
            )}
        </>
    );
};
