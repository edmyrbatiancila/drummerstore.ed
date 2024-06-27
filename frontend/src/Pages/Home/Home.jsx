
import ExploreProduct from '../../Components/ExploreProduct/ExploreProduct';
import Header from '../../Components/Header/Header';
import './Home.css';

const Home = () => {
    return (
        <section className='home-container'>
            <Header />
            <ExploreProduct />
        </section>
    )
}

export default Home;
