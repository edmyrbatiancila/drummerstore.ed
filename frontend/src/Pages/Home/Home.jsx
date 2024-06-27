// import ExploreProduct from '../../Components/ExploreProduct/ExploreProduct';
import Features from '../../Components/Features/Features';
import Header from '../../Components/Header/Header';
import './Home.css';
// import { useState } from 'react';

const Home = () => {

    // const [category, setCategory] = useState("All");

    return (
        <section className='home-container'>
            <Header />
            {/* <ExploreProduct category={category} setCategory={setCategory} /> */}
            <Features />
        </section>
    )
}

export default Home;
