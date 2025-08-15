//Interfaces
interface Hero {
    name: string;
    age: number;
    powers: string[];
}

const flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['super speed', 'time travel']
}

const greenLantern: Hero = {
    name: 'Hal Jordan',
    age: 32,
    powers: ['willpower', 'flight']
}

console.log(flash);
console.log(greenLantern);