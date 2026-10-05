import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string,
    quantity: number,
}

const itemsInCart: ItemInCart[] = [
    { productName: "Nintendo", quantity: 5 },
    { productName: "Sega", quantity: 3 },
    { productName: "PlayStation", quantity: 9 },
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de Compras</h1>
            {
                itemsInCart.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))
            }
            {/* <ItemCounter name="Nintendo" quantity={5} />
            <ItemCounter name="Sega" quantity={4} />
            <ItemCounter name="PlayStation" quantity={3} /> */}
        </>

    )
}