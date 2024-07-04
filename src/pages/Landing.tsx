import { useState } from 'react'
import DrinkSelector from '../components/DrinkSelector'
import './Landing.css'


function Landing() {
    const [drinkIsGoodValue, setDrinkIsGoodValue] = useState<boolean | undefined>()

    const updateDrinkValue = async (val: number) => {
        console.log(`value: ${val}`)
        setDrinkIsGoodValue(val <= 1e-3)
    }

    return (
        <main>
            <section>
                <DrinkSelector updateDrinkValueFun={updateDrinkValue} />
            </section>
            {drinkIsGoodValue != undefined && <section>
                <h1>{drinkIsGoodValue ? 'Good value.' : 'Bad value.'}</h1>
            </section>}
        </main>
    )
}

export default Landing
