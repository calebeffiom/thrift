import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";
const ContentDropdown = () => {
    const [isPressed, setIsPressed] = useState(false)
    const [isPressed2, setIsPressed2] = useState(false)
    const [isPressed3, setIsPressed3] = useState(false)
    const showDropDownContent = () =>{
        if (isPressed === false) {
            setIsPressed(true)
        } else {
           setIsPressed(false) 
        }
    }
    const showDropDownContent2 = () =>{
        if (isPressed2 === false) {
            setIsPressed2(true)
        } else {
           setIsPressed2(false) 
        }
    }

    const showDropDownContent3 = () =>{
        if (isPressed3 === false) {
            setIsPressed3(true)
        } else {
           setIsPressed3(false) 
        }
    }
    return (
        <>
        <div className="contentDropdown-cont" onClick={showDropDownContent}>
            <div className="dropDown-btn">
                <p className="dropDown-heading">CHARACTERISTICS</p>
                <span>
                    {
                        isPressed === true ? <IoChevronUpOutline className="dropDownBtn-icon"/> : <IoChevronDownOutline className="dropDownBtn-icon" />
                    }
                    
                </span>
            </div>
          {
            isPressed === true && (  <div className="characteristics-cont">
                <ul className="characteristics-list">
                    <li className="characteristics-list-item"><span className="characteristic">Brand</span> <span className="characteristic-value">Pinko</span></li>
                    <li className="characteristics-list-item"><span className="characteristic">Collection</span> <span className="characteristic-value">2023</span></li>
                    <li className="characteristics-list-item"><span className="characteristic">Item no.</span> <span className="characteristic-value">12435547</span></li>
                    <li className="characteristics-list-item"><span className="characteristic">Material</span> <span className="characteristic-value">Cotton 100%</span></li>
                    <li className="characteristics-list-item"><span className="characteristic">Care Recommendations</span> <span className="characteristic-value">Machine Wash</span></li>
                </ul>
            </div>)
          }
        </div>

        <div className="contentDropdown-cont" onClick={showDropDownContent2}>
            <div className="dropDown-btn">
                <p className="dropDown-heading">PAYMENT & DELIVERY</p>
                <span>
                    {
                        isPressed2 === true ? <IoChevronUpOutline className="dropDownBtn-icon"/> : <IoChevronDownOutline className="dropDownBtn-icon" />
                    }
                    
                </span>
            </div>
          {
            isPressed2 === true && (  <div className="characteristics-cont">
                <ul className="characteristics-list">
                    <li className="characteristics-list-item"><span className="characteristic">Brand</span> <span className="characteristic-value">Pinko</span></li>
                    <li className="characteristics-list-item"><span className="characteristic">Collection</span> <span className="characteristic-value">2023</span></li>
                    <li className="characteristics-list-item"><span className="characteristic">Item no.</span> <span className="characteristic-value">12435547</span></li>
                    <li className="characteristics-list-item"><span className="characteristic">Material</span> <span className="characteristic-value">Cotton 100%</span></li>
                    <li className="characteristics-list-item"><span className="characteristic">Care Recommendations</span> <span className="characteristic-value">Machine Wash</span></li>
                </ul>
            </div>)
          }
        </div>

        <div className="contentDropdown-cont" onClick={showDropDownContent3}>
            <div className="dropDown-btn">
                <p className="dropDown-heading">RETURNS</p>
                <span>
                    {
                        isPressed3 === true ? <IoChevronUpOutline className="dropDownBtn-icon"/> : <IoChevronDownOutline className="dropDownBtn-icon" />
                    }
                    
                </span>
            </div>
          {
            isPressed3 === true && (  <div className="characteristics-cont">
                <ul className="characteristics-list">
                    <li className="characteristics-list-item"><span className="characteristic">Brand</span> <span className="characteristic-value">Pinko</span></li>
                    <li className="characteristics-list-item"><span className="characteristic">Collection</span> <span className="characteristic-value">2023</span></li>
                    <li className="characteristics-list-item"><span className="characteristic">Item no.</span> <span className="characteristic-value">12435547</span></li>
                    <li className="characteristics-list-item"><span className="characteristic">Material</span> <span className="characteristic-value">Cotton 100%</span></li>
                    <li className="characteristics-list-item"><span className="characteristic">Care Recommendations</span> <span className="characteristic-value">Machine Wash</span></li>
                </ul>
            </div>)
          }
        </div>
        </>
    )
}
export default ContentDropdown;