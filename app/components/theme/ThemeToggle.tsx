'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const stored = localStorage.getItem('theme');
        if (stored) return;

        const userPref = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (userPref == true) {
            setTheme('dark');
        }
    });
    /* eslint-disable react-hooks/exhaustive-deps */

    if (!mounted) {
        return null;
    }
    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white'
        >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
    );
}
