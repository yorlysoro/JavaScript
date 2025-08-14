// Data Types in TypeScript

// 1. String
let name: string = "John Doe";

// 2. Number
let age: number = 30;

// 3. Boolean
let isEmployed: boolean = true;

// 4. Array
let hobbies: string[] = ["Reading", "Traveling", "Cooking"];

// 5. Tuple
let address: [string, number] = ["Main St", 123];

// 6. Enum
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;

// 7. Any
let randomValue: any = 42;
randomValue = "Now I'm a string";

// 8. Void
function logMessage(message: string): void {
    console.log(message);
}

// 9. Null and Undefined
let u: undefined = undefined;
let n: null = null;


// Interfaces
interface Person {
    name: string;
    age: number;
    isEmployed: boolean;
}

let employee: Person = {
    name: "Jane Smith",
    age: 28,
    isEmployed: true
};

console.log(employee);

// Using types
function getEmployeeInfo(emp: Person): string {
    return `${emp.name} is ${emp.age} years old and is ${emp.isEmployed ? "employed" : "unemployed"}.`;
}

console.log(getEmployeeInfo(employee));

// use type
type Employee = Person;

let newEmployee: Employee = {
    name: "Alice Johnson",
    age: 32,
    isEmployed: false
};

console.log(getEmployeeInfo(newEmployee));