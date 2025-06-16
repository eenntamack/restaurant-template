import {Link} from "react-router-dom"

export default function HeaderLinks(){
    return(
        <nav>
            <li><Link to = "/main">Home</Link></li>
            <li><Link to = "/order">Order</Link></li>
            <li><Link to = "/reservation">Reservation</Link></li>
        </nav>
    )
}