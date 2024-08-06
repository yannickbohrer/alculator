import { useEffect, useState } from 'react'
import './DrinkList.css'
import { Drink } from '../types/DrinkTypes'
import DrinkListElement from './DrinkListElement'

function DrinkList() {
    const [drinkList, setDrinkList] = useState<Drink[]>([])

    useEffect(() => {
        const storedList = localStorage.getItem('drinkList')
        storedList && setDrinkList(JSON.parse(storedList))

    }, [])
    return (
        <>
            {
                drinkList.length == 0
                    ? <h3>Leere Liste</h3>
                    : (drinkList.map(drink => {
                        return <DrinkListElement drink={{drink}} />
                    }))
            }
        </>
    )
}

export default DrinkList
