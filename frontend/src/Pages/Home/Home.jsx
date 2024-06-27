// import ExploreProduct from '../../Components/ExploreProduct/ExploreProduct';
import FeatureProduct from '../../Components/FeatureProduct/FeatureProduct';
import Features from '../../Components/Features/Features';
import Header from '../../Components/Header/Header';
import NewArrival from '../../Components/NewArrival/NewArrival';
import RepairServices from '../../Components/RepairServices/RepairServices';
import SmallBanner from '../../Components/SmallBanner/SmallBanner';
import './Home.css';
// import { useState } from 'react';

const Home = () => {

    // const [category, setCategory] = useState("All");

    return (
        <section className='home-container'>
            <Header />
            {/* <ExploreProduct category={category} setCategory={setCategory} /> */}
            <Features />
            <FeatureProduct />
            <RepairServices />
            <NewArrival />
            <SmallBanner />
        </section>
    )
}

export default Home;
