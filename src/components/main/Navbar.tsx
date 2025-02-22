import { navbarItems } from "../../assets/data/constants";
import LinkItem from "../LinkItem";

const Navbar = () => {
    return (
        <nav className="search-nav">
            {navbarItems.map((item, index) => (
                        <LinkItem key={index} {...item} />
                    ))}
        </nav>
    );
}

export default Navbar;