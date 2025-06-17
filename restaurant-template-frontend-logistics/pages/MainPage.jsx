import Footer from "../components/Footer"
import Header from "../components/Header"

import {Outlet} from 'react-router-dom'
export default function MainPage(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
            
        </>
    )
}