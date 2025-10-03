import { heroQuery } from '../../api/queries/hero';
import { getFetch } from '../../utils/getFetch';
import HeroSectionClient from './HeroSectionClient';

export const HeroSectionWrapper = async () => {
    const res = await getFetch(heroQuery);
    const hero = res.data.global.hero;

    return <HeroSectionClient hero={hero} />;
};
