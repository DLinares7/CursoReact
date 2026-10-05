import type { CSSProperties } from "react";

export function MyAwsomeApp() {

    const myStyles: CSSProperties = {
        backgroundColor: "#cdcdcd",
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        fontSize: 10
    };

    const firstName = "Diego";
    const lastName = "Linares";

    const favoriteGames = ['Elden Ring ', 'Smash ', 'Metal Gear '];
    const isActive = false;

    const address = {
        zipCode: 'ABC-123',
        country: 'Canada',
    };


    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(",")}</p>
            <h1>{isActive ? "Activo" : "No Activo"}</h1>

            <p style={myStyles}>
                {JSON.stringify(address)}</p>
        </>

    )
}