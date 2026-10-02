// const characterNames = ['Goku', 'Vegeta', 'Trunks'];

// const [, p2,] = characterNames;

// console.log({ p2 });

// const returnsArrayFn = () => {
//     return ['Las letras: abc', 123] as const;
// };

// const [letras, numeros] = returnsArrayFn();

// console.log(letras, numeros);

//TAREA:

const useState = (value: string) => {
    return [value, (newValue: string) => {
        console.log(newValue);
    },
    ] as const;
};

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"