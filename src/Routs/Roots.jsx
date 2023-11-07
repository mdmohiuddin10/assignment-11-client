
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedRouts/Navbar/Navbar";
import Footer from "../Pages/SharedRouts/Footer/Footer";



const Roots = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        
        
        </div>
    );
};

export default Roots;