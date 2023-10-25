import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Services from "./Services";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";


const Home = () => {

    const services = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Services services={services}></Services>
            <ContactUs></ContactUs>\
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;