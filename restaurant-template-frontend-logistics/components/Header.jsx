import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/order">Order</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/update">Update</Link>
                </li>
            </ul>
        </nav>
    )
}