import { Outlet, Link } from "react-router-dom";

const Nav: React.FC = () => {
    return (
        <>
            <nav className="header">
                <Link to="/">RILEY ANDERSON</Link>
                <ul className="nav-links">
                    <li>
                        <Link  className="projects link" to="/Projects">projects</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Nav;