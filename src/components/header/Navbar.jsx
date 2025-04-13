import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="navbar">
            <p><Link to="/">Home</Link></p>
            <p><a href="about">About</a></p>
            <p><a href="contact">Contact</a></p>
        </div>
    );
    };
export default NavBar;