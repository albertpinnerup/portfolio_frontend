import ContactSection from './components/ContactSection';
import { HeroSectionWrapper } from './components/heroComponents/HeroSectionWrapper';
import { ProjectsSectionWrapper } from './components/projectComponents/ProjectsSectionWrapper';
import { SkillsSectionWrapper } from './components/skillComponents/SkillsSectionWrapper';

export default function FrontendPortfolio() {
    return (
        <main className='min-h-screen bg-white text-gray-900 dark:bg-[#0F172A] dark:text-white overflow-x-hidden'>
            <HeroSectionWrapper />
            <ProjectsSectionWrapper />
            <SkillsSectionWrapper />
            <ContactSection />
        </main>
    );
}
