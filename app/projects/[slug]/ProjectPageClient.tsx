'use client';

import { normalizeMedia } from '@/app/utils/normalizeImage';
import Image from 'next/image';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { BackButton } from '@/app/components/BackButton';

type ProjectType = {
    display_title?: string;
    description?: string;
    about?: string;
    documentId: string;
    featured: boolean;
    readable: boolean;
    slug: string;
    title: string;
    technonologies: {
        title: string;
    };
    image: {
        url: string;
        width: number;
        height: number;
    };
};

export const ProjectPageClient = ({ project }: { project: ProjectType }) => {
    const img = project?.image;
    const markdown = project?.about;

    return (
        <>
            <div className='absolute h-full inset-0 bg-[url("/grid-dark.svg")] dark:bg-[url("/grid.svg")] bg-center opacity-20 pointer-events-none bg-blend-overlay' />
            <BackButton className='rotate-90 fixed top-6 left-6 transition-transform duration-150 hover:scale-125'>
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
            <section className='max-w-6xl px-6 pb-[4.5rem] mx-auto h-screen relative bg-transparent'>
                <div className='bg-white dark:bg-[#0F172A] h-screen'>
                    <div className='mx-auto w-full mt-6 aspect-video max-h-[550px] overflow-clip'>
                        <Image
                            src={normalizeMedia(img.url)}
                            width={img.width}
                            height={img.height}
                            className='object-contain w-full'
                            style={{ color: 'inherit' }}
                            alt={project.title}
                        />
                    </div>
                    <section className='px-4'>
                        <h1 className='text-6xl mt-6 mb-6 font-bold'>{project.display_title}</h1>
                        <Markdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw, rehypeSanitize]}
                            components={{
                                h1: ({ children, ...props }) => (
                                    <h1 className='text-4xl font-bold' {...props}>
                                        {children}
                                    </h1>
                                ),
                                h2: ({ children, ...props }) => (
                                    <h2 className='text-3xl font-bold' {...props}>
                                        {children}
                                    </h2>
                                ),
                                h3: ({ children, ...props }) => (
                                    <h3 className='text-2xl font-bold' {...props}>
                                        {children}
                                    </h3>
                                ),
                                h4: ({ children, ...props }) => (
                                    <h4 className='text-xl font-bold' {...props}>
                                        {children}
                                    </h4>
                                ),
                            }}
                        >
                            {markdown}
                        </Markdown>
                    </section>
                </div>
            </section>
        </>
    );
};
