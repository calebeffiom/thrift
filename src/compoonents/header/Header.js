import { IoArrowForwardSharp } from "react-icons/io5";
// import { FaXmark } from "react-icons/fa6";
import { HiOutlineXMark } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-inner">
                    <div className="breadcrum-cont">
                        <span>WOMEN</span> <span className="breadcrum"> <IoArrowForwardSharp className="icon" /> CLOTHES</span> <span className="breadcrum"><IoArrowForwardSharp className="icon" /> TOPS</span>
                    </div>
                    <div className="heading-cont"><h2>WOMEN'S TOPS</h2><span>139</span></div>
                    <div className="filter-cont">
                        <div className="filter-flex-cont1">
                            <span className="filters">FILTERS <span className="number-of-filters">3</span></span>
                            <span className="divider"></span>
                            <span className="filter-name">TOPS <HiOutlineXMark  className="filter-icon"/></span>
                            <span className="filter-name">SIZE M <HiOutlineXMark  className="filter-icon"/></span>
                            <span className="filter-name">$300 - $720 <HiOutlineXMark  className="filter-icon"/></span>
                        </div>
                        
                        <div className="filter-flex-cont2">
                        <span className="sort">SORT BY <FiPlus className="filter-icon"/></span>
                    </div>
                    </div>
                    
                </div>
            </div>
        </header>
    )
}
export default Header;