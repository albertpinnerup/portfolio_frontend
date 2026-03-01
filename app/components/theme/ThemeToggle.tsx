'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

function subscribe() {
    return () => {};
}

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const mounted = useSyncExternalStore(subscribe, () => true, () => false);

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        if (stored) return;

        const userPref = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (userPref) {
            setTheme('dark');
        }
    }, [setTheme]);

    if (!mounted) {
        return null;
    }
    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='fixed top-6 right-6 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white'
        >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
    );
}
