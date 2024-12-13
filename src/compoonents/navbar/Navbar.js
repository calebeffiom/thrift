import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
const Navbar = () => {

    return (
        <nav>
            <div className="container">
                <div className="nav-inner">
                    <div className="nav-links-cont">
                        <ul className="nav-link-list">
                            <li className="diff"><a href="#">WOMEN <span className="line"></span></a></li>
                            <li><a href="#">MEN<span className="line"></span></a></li>
                            <li><a href="#">KIDS<span className="line"></span></a></li>
                            <li><a href="#">BRANDS<span className="line"></span></a></li>
                        </ul>
                    </div>
                    <div className="nav-logo-cont">
                        <h2>OKRIKA</h2>
                    </div>
                    <div className="nav-icons-cont">
                        <ul className="nav-icon-list">
                            <li><a href="#"><CiSearch /></a></li>
                            <li><a href="#"><IoPersonOutline /></a></li>
                            <li><a href="#"><CiHeart /></a></li>
                            <li><a href="#"><CiShoppingBasket /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;