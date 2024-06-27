import { features_list } from '../../assets/assets';
import './Features.css';

const Features = () => {
    return (
        <section id='feature' className='section-p1'>
            {features_list.map((item, index) => {
                return(
                    <div key={index} className="feature-box">
                        <img src={item.feature_image} alt="Free Shipping image" />
                        <span className={item.feature_class}>{item.feature_name}</span>
                    </div>
                )
            })}
        </section>
    )
}

export default Features;
