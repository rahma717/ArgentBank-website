
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import FeaturesContainer from '../components/featuresSection/FeacturesContainer';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
    return (
        <> 
        <Navbar />
        <Banner/>
        <FeaturesContainer/>
        <Footer/>
        </>
       
    )
}
export default Home;