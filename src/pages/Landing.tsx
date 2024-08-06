import { useState } from 'react'
import DrinkSelector from '../components/DrinkSelector'
import './Landing.css'


function Landing() {
    const [drinkIsGoodValue, setDrinkIsGoodValue] = useState<boolean | undefined>()
    const [drinkValue, setDrinkValue] = useState<number>(-1)
    const updateDrinkValue = async (val: number) => {
        const valForCalc = val * 10000
        setDrinkValue(valForCalc)
        setDrinkIsGoodValue(valForCalc <= 25)
    }

    return (
        <main>
            <section>
                <DrinkSelector updateDrinkValueFun={updateDrinkValue} />
            </section>
            {
                drinkIsGoodValue != undefined && <section>
                    <h1 className='result'>{drinkIsGoodValue ? 'Good value.' : 'Bad value.'}</h1>
                    {
                        drinkValue > 0 && <h1 className='result'>{drinkValue.toFixed(4)}</h1>
                    }
                </section>
            }
        </main>
    )
}

export default Landing
