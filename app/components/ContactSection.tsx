'use client';

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

export default function ContactSection() {
    return (
        <section className='py-20 px-4'>
            <div className='max-w-4xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='relative p-12 rounded-3xl overflow-hidden backdrop-blur-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50/90 to-gray-100/50 dark:from-gray-900/90 dark:to-gray-900/50'
                >
                    <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10' />
                    <div className='absolute inset-0 bg-[url("/grid-dark.svg")] dark:bg-[url("/grid.svg")] bg-center opacity-20' />
                    <div className='relative z-10'>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className='text-4xl font-bold mb-3 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text'>
                                Let&apos;s Connect
                            </h2>
                            <p className='text-gray-800 text-center mb-4 dark:text-gray-400'></p>
                            <div className='flex items-center justify-center gap-2 text-gray-800 mb-8 dark:text-gray-400'>
                                <svg
                                    className='w-5 h-5'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                                    />
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                                    />
                                </svg>
                                <span>Copenhagen, Denmark</span>
                            </div>
                        </motion.div>
                        <div className='max-w-lg mx-auto'>
                            <ContactForm />
                        </div>
                        <div className='flex flex-col items-center gap-6 mt-8'>
                            <motion.a
                                href='/resume.pdf'
                                target='_blank'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='flex items-center gap-3 px-8 py-4 bg-gray-100 text-gray-800 rounded-2xl hover:bg-gray-200 border border-gray-300 hover:border-gray-400 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:border-gray-600 transition-all duration-300'
                            >
                                <svg
                                    className='w-5 h-5 text-gray-700 dark:text-gray-200'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                                    />
                                </svg>
                                <span className='font-medium text-gray-700 dark:text-gray-400'>
                                    View Resume
                                </span>
                            </motion.a>
                        </div>
                        <div className='flex flex-wrap justify-center gap-6 mt-8'>
                            <motion.a
                                href='https://github.com/albertpinnerup'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='group flex items-center justify-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 border border-blue-300 hover:border-blue-400 dark:bg-blue-800 dark:border-blue-700 dark:hover:bg-blue-700 dark:hover:border-blue-600 transition-all duration-300'
                            >
                                <svg
                                    className='w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                                </svg>
                            </motion.a>
                            <motion.a
                                href='https://www.linkedin.com/in/albertpinnerup/'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='group flex items-center justify-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 border border-purple-300 hover:border-purple-400 dark:bg-purple-800 dark:border-purple-700 dark:hover:bg-purple-700 dark:hover:border-purple-600 transition-all duration-300'
                            >
                                <svg
                                    className='w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                                </svg>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
