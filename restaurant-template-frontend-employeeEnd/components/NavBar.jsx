import { Link } from "react-router-dom"
export default function NavBar(){
    return(
        <nav>
            <li>
                <Link to="/employee/info">Info</Link>
            </li>
            <li>
                <Link to="/employee/reports">Reports</Link>
            </li>
            <li>
                <Link to="/employee/tasks">Tasks</Link>
            </li>
            <li>
                <Link to="/employee/logs">Logs</Link>
            </li>
        </nav>
    )
}