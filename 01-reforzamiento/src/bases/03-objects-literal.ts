interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
};

interface Address {
    postalCode: string;
    city: string;
};

const ironman: Person = {

    firstName: 'Tony',
    lastName: 'Stark',
    age: 43,
    address: {
        postalCode: 'ABC-123',
        city: 'New York',
    },
};

console.log(ironman);

// const spiderman: Person = {
//     firstName: "Tony",
//     lastName: "Stark",
//     age: 45,
// }



// const spiderman = structuredClone(ironman)

// spiderman.firstName = "Peter";
// spiderman.lastName = "Parker";
// spiderman.age = 22;
// spiderman.addres.city = 'San Jose'

// console.log(ironman, spiderman);