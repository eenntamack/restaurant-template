import Footer from "../components/footer"
import Header from "../components/header"

import { Outlet,Link } from "react-router-dom" 
export default function Homepage(){
    return(
        <main>
            <Header/>
            <Outlet/>
            <Footer/>
            
        </main>
    )
}