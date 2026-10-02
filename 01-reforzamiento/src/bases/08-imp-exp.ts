import { heroes, type Hero, Owner } from "./data/heroes.data"

const getHeroByID = (id: number): Hero | undefined => {
    const hero = heroes.find((hero) => hero.id === id);

    // Si quieres usar tu bloque comentado:
    // if (!hero) {
    //     throw new Error(`No existe un héroe con el id ${id}`);
    // }

    return hero;
}

// console.log(getHeroByID(5));

export const getHeroByOwner = (owner: Owner) => {
    const heroesByOwner = heroes.filter(hero => hero.owner === owner);

    return heroesByOwner;
};
console.log(getHeroByID(5));