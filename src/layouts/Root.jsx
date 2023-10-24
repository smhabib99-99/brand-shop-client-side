import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import ContactUs from "../pages/Home/ContactUs";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <ContactUs></ContactUs> */}
            <Footer></Footer>
        </div>
    );
};

export default Root;