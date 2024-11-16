
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Main = () => {
    return (
        <div className="container mx-auto">
            {/* <Navbar></Navbar>
            <OutLet></OutLet>
            <Footer></Footer> */}
            <Navbar></Navbar>
            
            <div className="py-12">               
                      
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Main;