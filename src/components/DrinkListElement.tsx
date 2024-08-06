import './DrinkListElement.css'

function DrinkListElement<Drink>(drink: Drink) {
    return (
        <>
            <h3>{drink.price}</h3>
        </>
    )
}

export default DrinkListElement
