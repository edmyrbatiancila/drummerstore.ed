import { small_banner } from '../../assets/assets';
import './SmallBanner.css';

const SmallBanner = () => {
    return (
        <section id='sm-banner' className='section-p1'>
            {small_banner.map((item, index) => {
                return(
                    <div key={index} className={index === 1 ? "banner-box banner-box2" : "banner-box"}>
                        <h4>{item.title}</h4>
                        <h2 id={index === 1 ? "box2" : ""}>{item.sub_title}</h2>
                        <span>{item.description}</span>
                        <button className="transparent">{item.button}</button>
                    </div>
                );
            })}
        </section>
    )
}

export default SmallBanner;
