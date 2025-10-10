import { skillsQuery } from '@/app/api/queries/skills';
import { getFetch } from '../../utils/getFetch';
import SkillsSectionClient from './SkillsSectionClient';
import { TechnologySchema, TechnologySchemaArray } from '@/app/api/schemas/schemas';

export const SkillsSectionWrapper = async () => {
    const res = await getFetch(skillsQuery);
    const skillsRaw = res?.data?.global?.technologies;

    const parsedSkills = TechnologySchemaArray.safeParse(skillsRaw);

    if (!parsedSkills.success) {
        console.error('invalid skills response', parsedSkills.error);
        return null;
    }

    const skills = parsedSkills.data;
    return <SkillsSectionClient skills={skills} />;
};
