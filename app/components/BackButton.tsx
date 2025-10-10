import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface BackButtonType extends PropsWithChildren {
    className: string;
}

export const BackButton = ({ children, className }: BackButtonType) => {
    const router = useRouter();

    function handleBack() {
        if (window.history.length > 1) {
            router.back();
        } else {
            router.push('/');
        }
    }

    return (
        <button className={`text-gray-900 dark:text-white ${className ?? ''}`} onClick={handleBack}>
            {children}
        </button>
    );
};
