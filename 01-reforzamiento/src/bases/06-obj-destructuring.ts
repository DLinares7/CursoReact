const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
};

const { name: ironmanName, age, key } = person;

// const name = person.name;
// const age = person.age;
// const key = person.key;

console.log({ ironmanName, age, key });

interface Hero {
    name: string;
    age: number;
    key: string,
    rank?: string,
}

const userContext = ({ key, name, age, rank = 'sin rango' }: Hero) => {

    return {
        keyName: key,
        user: {
            name: name,
            age: age,
        },
        rank: rank,
    };
};

// const context = userContext(person)

// console.log(context);

const { rank, keyName, user: { name }, } = userContext(person);

console.log({ rank, keyName, name });