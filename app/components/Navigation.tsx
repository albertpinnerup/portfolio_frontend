import Link from 'next/link';
import { getFetch } from '../utils/getFetch';
import { navLinkQuery } from '../api/queries/navLinks';

export const NavigationComp = async () => {
    const res = await getFetch(navLinkQuery);

    const navLinks = res?.data?.navigation?.navLink;
    console.log(navLinks);

    if (!navLinks) return null;

    return (
        <nav className=' py-6 fixed w-screen mb-[72px] bg-gradient-to-r from-[#dbdaff] to-[#fbdcff] z-50  dark:from-[#121f3e] dark:to-[#1c1a3e] '>
            <ul className='max-w-6xl px-4 mx-auto flex gap-4 justify-end'>
                {navLinks.length > 0 &&
                    navLinks.map(
                        (link: { label: string; href: string; id: string }, index: number) => (
                            <li key={`${link.id}-${index}`}>
                                <Link
                                    href={link.href}
                                    className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500'
                                >
                                    {link.label}
                                </Link>
                            </li>
                        )
                    )}
            </ul>
        </nav>
    );
};
