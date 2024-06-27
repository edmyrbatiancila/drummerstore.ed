import ExploreProduct from '../../Components/ExploreProduct/ExploreProduct';
import Header from '../../Components/Header/Header';
import './Home.css';
import { useState } from 'react';

const Home = () => {

    const [category, setCategory] = useState("All");

    return (
        <section className='home-container'>
            <Header />
            <ExploreProduct category={category} setCategory={setCategory} />
        </section>
    )
}

export default Home;
