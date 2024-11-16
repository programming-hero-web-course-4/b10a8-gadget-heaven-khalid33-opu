import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Heading from "./Heading";
import { FaCartShopping, FaRegHeart } from "react-icons/fa6";

const Navbar = () => {
 

    const location = useLocation();
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
        setCartCount(cartItems.length);
        setWishlistCount(wishlistItems.length);

        const handleCartUpdate = () => {
            const updatedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            setCartCount(updatedCartItems.length);
        };

        const handleWishlistUpdate = () => {
            const updatedWishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
            setWishlistCount(updatedWishlistItems.length);
        };

        window.addEventListener("cartUpdated", handleCartUpdate);
        window.addEventListener("wishlistUpdated", handleWishlistUpdate);

        return () => {
            window.removeEventListener("cartUpdated", handleCartUpdate);
            window.removeEventListener("wishlistUpdated", handleWishlistUpdate);
        };
    }, []);

    return (

        <div>
            <div className={`${location.pathname === '/' ? 'mb-96 container' : ''}`}>
                <div className={`${location.pathname === '/' ? 'bg-[#9538E2] h-[394px] text-white rounded-lg' : 'text-black'}`}>

                    <div className="navbar">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <NavLink to='/dashboard'>Dashboard</NavLink>
                                </ul>
                            </div>
                            <NavLink to="/" className="text-xl ml-5">Gadget Heaven</NavLink>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu items-center menu-horizontal px-1 gap-20">
                                <NavLink className={({isActive})=> isActive? "tab-active border border-white py-[2px] px-5 rounded-lg":''} to='/'>Home</NavLink>
                                <NavLink className={({isActive})=> isActive? "tab-active border text-secondary border-secondary py-[2px] px-5 rounded-lg":''} to='/statistics'>Statistics</NavLink>
                                <NavLink className={({isActive})=> isActive? "tab-active border text-secondary border-secondary py-[2px] px-5 rounded-lg":''} to='/dashboard'>Dashboard</NavLink>
                            </ul>
                        </div>
                        <div className="navbar-end space-x-3 mr-5">
                            <div className="border rounded-full py-[1px] px-2">
                                <NavLink
                                    className='flex items-center'
                                    to=""> <FaCartShopping className="mr-2 text-lg" /> ({cartCount})</NavLink>
                            </div>

                            <div className="flex border p2-[1px] px-3 rounded-full">
                                <NavLink
                                    className='flex items-center '
                                    to="">
                                    < FaRegHeart className="text-lg mr-2" />
                                    ({wishlistCount})</NavLink>
                            </div>


                        </div>

                    </div>
                    {location.pathname === '/' && (
                        <div className="text-center">
                            <Heading title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}></Heading>
                            <Heading para={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading>
                        </div>
                    )}
                    {location.pathname === '/' && (

                        <NavLink className="flex justify-center mb-4 ">
                            <button className="border border-white py-[2px] px-4 rounded-lg bg-transparent">Shop Now</button>
                        </NavLink>
                    )}


                    <div className={`flex left-28 justify-center mb-96 z-50 absolute ${location.pathname === '/' ? "block" : "hidden"} `}>
                        <img className="w-5/6" src="https://i.ibb.co.com/fQ0vR5Q/Frame-8.png" alt="" />
                    </div>





                </div>
            </div>




            <div>


                <Outlet></Outlet>
            </div>
        </div>





    );
};

export default Navbar;
