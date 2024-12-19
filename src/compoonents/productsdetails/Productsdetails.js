import Navbar from "../navbar/Navbar";
import { CiHeart } from "react-icons/ci";
import image1 from "../../resources/images/image1.jpeg"
import ContentDropdown from "../productSection/ContentDropdown";
const ProductsDetails = () => {
    return (
        <>
            <Navbar />
            <section className="productDetails-section">
                <div className="container">
                    <div className="productDetails-inner">
                        <div className="product-images-cont">
                            <div className="frontView-image-cont">
                                <img src={image1} alt="" />
                            </div>
                            <div className="backView-image-cont">
                                <img src={image1} alt="" />
                                <img src={image1} alt="" />
                            </div>
                        </div>





                        <div className="product-description-cont">
                            <div className="description-cont">
                                <h2 className="product-name">PURPLE CROPPED COTTON SHIRT</h2>
                                <p className="product-price">$200</p>
                                <p className="product-description">A shirt is a piece of clothing worn on the upper part of your body with a collar, sleeves, and buttons down the front. A shirt is a piece of clothing worn on the upper part of your body with a collar, sleeves, and buttons down the front.</p>
                            </div>

                            <div className="color-cont">
                                <p className="color-heading">COLOR</p>
                                <ul className="color-list">
                                    <li className="color"></li>
                                    <li className="color purple"></li>
                                </ul>
                            </div>

                            <div className="size-cont">
                                <p className="size-heading">SIZE</p>
                                <ul className="size-list">
                                    <li className="size">XXL</li>
                                    <li className="size">XL</li>
                                    <li className="size black">L</li>
                                    <li className="size">M</li>
                                    <li className="size">S</li>
                                </ul>
                            </div>

                            <div className="checkout-cont">
                                <button className="addtocart-btn">ADD TO CART</button><button className="wishlist-btn"><CiHeart /></button>
                            </div>

                            <div className="dropdown-cont">
                                <ContentDropdown/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProductsDetails;