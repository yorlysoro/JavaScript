const heroes = [
    {
        id: 1,
        name: 'Superman',
        power: 'Flight',
    },
    {
        id: 2,
        name: 'Batman',
        power: 'Intelligence',
    },
    {
        id: 3,
        name: 'Wonder Woman',
        power: 'Super Strength',
    },
];


const hero = heroes.find(hero => hero.id === 1);
console.log(hero);

// null check
if (hero) {
    console.log(`Found hero: ${hero.name}`);
} else {
    console.log('Hero not found');
}

// null check with ?.
console.log(`Found hero: ${hero?.name ?? 'Hero not found'}`);
