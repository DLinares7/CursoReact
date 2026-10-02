function greet(name: string): string {
    return `Hola ${name}`;
}

const greet2 = (name: string): string => `Hola ${name} `;

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);

interface User {
    uid: string,
    username: string,
    age: number,
}

function getUser(): User {
    return {
        uid: 'ABC-123',
        username: 'El_Papi23',
        age: 10,
    };
}

const getUser2 = () => ({
    uid: 'ABC-123',
    username: 'El_Papi23',
})

const user = getUser();
const user2 = getUser2();

console.log(user, user2);

const myNumbers: number[] = [1, 2, 3, 4, 5, 6];

//Funcion de flecha sin flecha.
// myNumbers.forEach(function (value) {
//     console.log({ value });
// });

//Funcion de flecha es mas corta que la funcion comun.
// myNumbers.forEach((a) => {
//     console.log({ a });
// });

//Forma mas resumida
// myNumbers.forEach(console.log)

myNumbers.forEach((value, index, arr) => {
    console.log(value, index, arr);
});