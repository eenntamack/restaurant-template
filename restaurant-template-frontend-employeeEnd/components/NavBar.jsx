export default function NavBar(){
    return(
        <nav>
            <li>
                <Link to="/info"></Link>
            </li>
            <li>
                <Link to="/report"></Link>
            </li>
            <li>
                <Link to="/tasks"></Link>
            </li>
            <li>
                <Link to="/logs"></Link>
            </li>
        </nav>
    )
}