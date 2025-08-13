import heroes from './07-exports'

// use heroes

console.log(heroes);

const getHero = (id: number) => {
    return heroes[id];
};

const hero = getHero(0);
console.log(hero);