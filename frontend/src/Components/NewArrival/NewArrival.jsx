import { new_arrival } from '../../assets/assets';
import './NewArrival.css';

const NewArrival = () => {
    return (
        <section id="product" className='section-p1'>
            <h2>New Arrivals</h2>
            <p>Fresh Drums and Accessories for you!</p>
            <div className="pro-container">
                {new_arrival.map((item, index) => {
                    return(
                        <div key={index} className="pro">
                            <img src={item.product_image} alt="Featured Products" />
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

export default NewArrival;
