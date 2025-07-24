import { Outlet, Link } from "react-router-dom";
import './Resources/app.css';
const Nav: React.FC = () => {
    return (
        <>
            <nav className="header">
                <ul className="nav-links">
                <li>
                        <Link  className="projects link" to="/">about me </Link>
                    </li>
                    <li>
                    <Link  className="blog link" to="/Blog">projects</Link>
                    </li>
                    <li>
                        <Link  className="projects link" to="/Projects">blog</Link>
                    </li>
                    <li>
                    <Link  className="blog link" to="/Blog">contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Nav;