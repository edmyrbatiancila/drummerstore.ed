import { small_banner } from '../../assets/assets';
import './SmallBanner.css';

const SmallBanner = () => {
    return (
        <section id='sm-banner' className='section-p1'>
            {small_banner.map((item, index) => {
                return(
                    <div key={index} className="banner-box">
                        <h4>Price Beats Down!</h4>
                        <h2>get our price drop deals</h2>
                        <span>The affordable drum kits and accessories are on sale here!!</span>
                        <button className="transparent">Learn More</button>
                    </div>
                );
            })}
        </section>
    )
}

export default SmallBanner;
