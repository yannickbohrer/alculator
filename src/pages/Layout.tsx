import { useEffect, useState } from 'react'
import Disclaimer from '../components/Disclaimer'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
    const [cookieAccepted, setCookieAccepted] = useState(false)
    useEffect(() => {
        setCookieAccepted(() => document.cookie.includes('disclaimerAccepted=true'))
    }, [])

    if (!cookieAccepted) {
        return (<Disclaimer />)
    }
    else {
        return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        )
    }
}

export default Layout
