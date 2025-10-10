import type { Metadata } from 'next';
import { ThemeProvider } from './components/theme/ThemeProvider';
import { ThemeToggle } from './components/theme/ThemeToggle';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { NavigationComp } from './components/Navigation';
import { ToastContainer } from 'react-toastify';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://albertpinnerup.dev'),
    title: 'Albert Pinnerup - Frontend Developer',
    description:
        'Welcome to my portfolio! I am a passionate frontend developer specializing in creating beautiful, responsive, and user-centric web applications. With expertise in modern JavaScript frameworks and UI/UX principles, I transform designs into seamless interactive experiences.',
    keywords: [
        'Frontend Developer',
        'Web Developer',
        'React Developer',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Responsive Design',
        'Web Animation',
        'Modern Web Development',
        'CSS Expert',
        'Performance Optimization',
        'Web Accessibility',
        'Component Design',
        'Albert Pinnerup',
    ],
    authors: [{ name: 'Albert Pinnerup' }],
    creator: 'Albert Pinnerup',
    openGraph: {
        title: 'Albert Pinnerup - Frontend Developer Portfolio',
        description:
            'Passionate frontend developer crafting beautiful and interactive web experiences. Explore my projects and frontend development expertise.',
        url: 'https://albertpinnerup.dev',
        siteName: 'Albert Pinnerup - Portfolio',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Albert Pinnerup - Frontend Developer Portfolio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-[#0F172A]`}
            >
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                    <header className='h-[72px] hidden sm:hidden'>
                        <NavigationComp />
                    </header>
                    {children}
                    <Analytics />
                    <ThemeToggle />
                    <ToastContainer
                        toastClassName={
                            'bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white'
                        }
                        toastStyle={{}}
                    />
                </ThemeProvider>
            </body>
        </html>
    );
}
