import { featured_products } from '../../assets/assets';
import './FeatureProduct.css';

const FeatureProduct = () => {
    return (
        <section id='product' className='section-p1'>
            <h2>Featured Products</h2>
            <p>Brand New drumset, accessories and drum kits</p>
            <div className="pro-container">
                {featured_products.map((item, index) => {
                    return(
                        <div key={index} className='pro'>
                            <img src={item.product_image} alt="Images of featured products" />
                            <div className="description">
                                <span>{item.product_brand}</span>
                                <h5>{item.product_name}</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>{item.product_price}</h4>
                            </div>
                            <a href="#"><i className="fa-solid fa-cart-plus shopping-cart"></i></a>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default FeatureProduct;
