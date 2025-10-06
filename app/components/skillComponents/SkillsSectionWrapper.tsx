import { skillsQuery } from '@/app/api/queries/skills';
import { getFetch } from '../../utils/getFetch';
import SkillsSectionClient from './SkillsSectionClient';

export const SkillsSectionWrapper = async () => {
    const res = await getFetch(skillsQuery);
    const skills = res?.data?.global?.technologies ?? null;

    if (!skills) return null;

    return <SkillsSectionClient skills={skills} />;
};
