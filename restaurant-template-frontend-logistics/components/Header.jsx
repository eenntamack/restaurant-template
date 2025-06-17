export default function Header(){
    return(
        <nav>
            <li>
                <Link to="/order"></Link>
            </li>
            <li>
                <Link to="/products"></Link>
            </li>
            <li>
                <Link to="/update"></Link>
            </li>
        </nav>
    )
}