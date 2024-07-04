import './DrinkSelector.css'
import EuroSharpIcon from '@mui/icons-material/EuroSharp'
import SportsBarSharpIcon from '@mui/icons-material/SportsBarSharp'
import WaterDropSharpIcon from '@mui/icons-material/WaterDropSharp'
import { Alert, Box, Button, Slide, Snackbar, TextField } from '@mui/material'
import { Drink, INPUT_CATEGORY } from '../types/DrinkTypes'
import { useState } from 'react';
import { TransitionProps } from '@mui/material/transitions'

type Props = {
    updateDrinkValueFun: (val: number) => void
}

function DrinkSelector({ updateDrinkValueFun }: Props) {
    const [selectedDrink, setSelectedDrink] = useState<Drink>({
        ml: 0,
        horsepower: 0,
        price: 0
    })
    const [snackBarState, setSnackBarState] = useState<{
        open: boolean,
        Transition: React.ComponentType<
            TransitionProps & {
                children: React.ReactElement<any, any>
            }
        >
    }>({
        open: false,
        Transition: Slide
    })

    const handleSelection = async (value: number, category: INPUT_CATEGORY) => {
        switch (category) {
            case "ml":
                setSelectedDrink(prev => ({
                    ...prev, ml: value
                }))
                break
            case "horsepower":
                setSelectedDrink(prev => ({
                    ...prev, horsepower: value
                }))
                break
            case "price":
                setSelectedDrink(prev => ({
                    ...prev, price: value
                }))
                break
        }
    }

    const handleSubmit = (): void => {
        const val = selectedDrink.price / (selectedDrink.ml * selectedDrink.horsepower)
        if (!val) {
            setSnackBarState(prev => ({
                ...prev, open: true
            }))
            return
        }
        updateDrinkValueFun(val)
    }

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={snackBarState.open}
                TransitionComponent={snackBarState.Transition}
                key={snackBarState.Transition.name}
                autoHideDuration={3000}
                onClose={() => setSnackBarState(prev => ({
                    ...prev, open: false
                }))}
            >
                <Alert
                    onClose={() => setSnackBarState(prev => ({
                        ...prev, open: false
                    }))}
                    severity="warning"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    <b>Erst alles ausfüllen, Sie Esel</b>
                </Alert>
            </Snackbar>
            <div className='inputs-container'>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <WaterDropSharpIcon sx={{ color: 'var(--color-primary)', mr: 1, my: 0.5 }} />
                    <TextField
                        onChange={
                            async (event: React.ChangeEvent<HTMLInputElement>) => {
                                try {
                                    await handleSelection(event.target.valueAsNumber, "ml")
                                } catch (err) {
                                    console.error(err)
                                }
                            }
                        }
                        id="ml"
                        label="Milliliter"
                        type="number"
                        variant="standard"
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <SportsBarSharpIcon sx={{ color: 'var(--color-primary)', mr: 1, my: 0.5 }} />
                    <TextField
                        onChange={
                            async (event: React.ChangeEvent<HTMLInputElement>) => {
                                try {
                                    await handleSelection(event.target.valueAsNumber, "horsepower")
                                } catch (err) {
                                    console.error(err)
                                }
                            }
                        }
                        id="horsepower"
                        label="Alkoholgehalt [&permil;]"
                        type="number"
                        variant="standard"
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <EuroSharpIcon sx={{ color: 'var(--color-primary)', mr: 1, my: 0.5 }} />
                    <TextField
                        onChange={
                            async (event: React.ChangeEvent<HTMLInputElement>) => {
                                try {
                                    await handleSelection(event.target.valueAsNumber, "price")
                                } catch (err) {
                                    console.error(err)
                                }
                            }
                        }
                        id="price"
                        label="Preis"
                        type="number"
                        variant="standard"
                    />
                </Box>
                <Button variant="contained" onClick={handleSubmit}>alculate</Button>
            </div>
        </>
    )
}

export default DrinkSelector
