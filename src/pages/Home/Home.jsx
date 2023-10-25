import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Services from "./Services";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Footer from "../../components/Footer/Footer";


const Home = () => {

    const services = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Services services={services}></Services>
            <ContactUs></ContactUs>\
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;