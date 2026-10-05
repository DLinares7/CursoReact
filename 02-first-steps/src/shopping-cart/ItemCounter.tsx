import { useState } from "react";
import './ItemCounter.css';

interface Props {
    name: string;
    quantity: number | undefined;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {

    const [count, setCount] = useState(quantity)

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubstract = () => {
        if (count === 1) return;
        setCount(count - 1);
    }

    // const handleSubtract
    // const handleClick = () => {
    //     console.log(`Click en ${name}`);
    // }

    return (
        <section className="item-row">
            <span className="item-text">{name}</span>
            <button onClick={handleAdd}>+1</button>
            <span>{count}</span>
            <button onClick={handleSubstract}>-1</button>
        </section>
    )
}

