import './ExploreProduct.css';
import { product_list } from '../../assets/assets';

const ExploreProduct = ({category, setCategory}) => {



  return (
    <section className='explore-product section-p1' id='explore-product'>
        <h1>Explore our products</h1>
        <p className='explore-product-text'>Check category of the product that you want to buy. From full drum sets to drum accessories. We have it all for you!</p>
        <div className='explore-product-categ'>
          {product_list.map((item, index) => {
            return (
              <div onClick={() => setCategory(prev => prev === item.product_name ? "All" : item.product_name)} key={index} className='explore-product-list-item'>
                  <img className={category === item.product_name ? "active" : ""} src={item.product_image} alt="Picture of category products" />
                  <p>{item.product_name}</p>
              </div>
            )
          })}
        </div>
        <hr />
    </section>
  )
}

export default ExploreProduct;
