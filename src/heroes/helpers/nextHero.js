import { heroes } from "../data/heroes";

export const nextHero = (heroId) => {
    const heroIndex = heroes.findIndex((hero) =>  hero.id === heroId);
    const nextHeroIndex = heroIndex + 1;

    return nextHeroIndex >= heroes.length ? heroes[0].id : heroes[nextHeroIndex].id
}