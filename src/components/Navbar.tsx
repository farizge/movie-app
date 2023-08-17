import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
    return (
        <nav className="grid place-items-center py-4 w-full ">
            <NavLink to="/">
                <Logo />
            </NavLink>
        </nav>
    );
}

export default Navbar;
