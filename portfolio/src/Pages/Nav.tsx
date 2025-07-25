import { Outlet, Link } from "react-router-dom";
import './Resources/app.css';
const Nav: React.FC = () => {
    return (
        <>
            <nav className="header">
                <ul className="nav-links">
                <li>
                        <Link  className="about link" to="/">about me </Link>
                    </li>
                    <li>
                    <a  className="projects link" href="/#projects">projects</a>
                    </li>
                    <li>
                        <Link  className="blog link" to="/Blog">blog</Link>
                    </li>
                    <li>
                    <a  className="contact link" href="/#contact">contact</a>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Nav;