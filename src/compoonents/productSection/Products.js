import image1 from "../../resources/images/image1.jpeg"
import image2 from "../../resources/images/image2.jpeg"
import image3 from "../../resources/images/image3.jpeg"
import image4 from "../../resources/images/image4.jpeg"
const Products = () => {
    return (
        <section className="products-section">
            <div className="container">
                <div className="products-inner">
                    <div className="product-cont">
                        <div className="product-image-cont">
                            <img src={image1} alt="" />
                        </div>
                        <div className="product-details-cont">
                            <p className="brand">BALENCIAGA</p>
                            <p className="coth-name">FLORAL-PINK SILK SHIRT</p>
                            <p className="price">$1,000</p>
                        </div>
                    </div>



                    <div className="product-cont">
                        <div className="product-image-cont">
                            <img src={image2} alt="" />
                        </div>
                        <div className="product-details-cont">
                            <p className="brand">D & G</p>
                            <p className="coth-name">FLORAL_PINK SILK SHIRT</p>
                            <p className="price">$10,000</p>
                        </div>
                    </div>


                    <div className="product-cont">
                        <div className="product-image-cont">
                            <img src={image3} alt="" />
                        </div>
                        <div className="product-details-cont">
                            <p className="brand">Balenciaga</p>
                            <p className="coth-name">FLORAL_PINK SILK SHIRT</p>
                            <p className="price">$3,000</p>
                        </div>
                    </div>



                    <div className="product-cont">
                        <div className="product-image-cont">
                            <img src={image4} alt="" />
                        </div>
                        <div className="product-details-cont">
                            <p className="brand">Balenciaga</p>
                            <p className="coth-name">FLORAL_PINK SILK SHIRT</p>
                            <p className="price">$5,000</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Products