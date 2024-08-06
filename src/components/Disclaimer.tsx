import { Button } from '@mui/material'
import './Disclaimer.css'

function Disclaimer() {

    const acceptCookie = (): void => {
        document.cookie = 'disclaimerAccepted=true'
        window.location.reload()
    }

    return (
        <>
            <div className='disclaimer'>
                <h1>Disclaimer</h1>
                <div className='disclaimer-card'>
                    <p>
                        <b>Cheers to love and booze!</b>
                    </p>
                    <p>
                        This app promotes and encourages alcohol comsumption.<br />
                        Users respoonsible for their own wellbeing. SLT GbR is not liable for any consequences of excessive drinking, however we support such behavior.<br />
                    </p>
                    <p>
                        <b>Remember: Always drink & drive!</b>
                    </p>
                </div>
                <Button className='cookie-button' variant="contained" onClick={acceptCookie}>Let's drink</Button>
            </div>
        </>
    )
}

export default Disclaimer
