import { useParams, useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Heading from "./Heading";

const GadgetDetails = () => {
    const { productId } = useParams();
    const data = useLoaderData();
    const gadget = data.find(item => item.product_id === productId);

    const handleAddToCart = () => {
      
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const isItemInCart = cartItems.some(item => item.product_id === gadget.product_id);

        if (!isItemInCart) {
            cartItems.push(gadget);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            alert("Item added to cart!");
            window.dispatchEvent(new CustomEvent("cartUpdated"));
        } else {
            alert("Item is already in the cart.");
        }
    };

    const handleAddToWishlist = () => {
       
        let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
        const isItemInWishlist = wishlistItems.some(item => item.product_id === gadget.product_id);

        if (!isItemInWishlist) {
            wishlistItems.push(gadget);
            localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
            alert("Item added to wishlist!");
            window.dispatchEvent(new CustomEvent("wishlistUpdated"));
        } else {
            alert("Item is already in the wishlist.");
        }
    };

    return (
        <div>
            <div className="shadow-lg">
                <div className="bg-[#9538E2] h-[280px] flex items-center justify-center mb-96 rounded-xl relative">
                    <div className="flex justify-center text-center items-center text-white">
                        <Heading
                            title={"Statistics"}
                            para={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-2xl h-[530px] p-20 w-[80%] mx-auto rounded-lg absolute top-[260px] left-[150px]">
                <div className="flex">
                    {gadget ? (
                        <div className="flex">
                            <div className="border p-5 rounded-2xl">
                                <img className="w-[424px] h-[350px] rounded-lg bg-cover" src={gadget.product_image} alt={gadget.product_title} />
                            </div>
                            <div className="ml-8 border p-5 border-t-secondary border-b-secondary rounded-2xl">
                                <h2 className="text-[28px] font-bold">{gadget.product_title}</h2>
                                <p className="font-semibold text-[#09080F]">Price: ${gadget.price}</p>
                                <p className="font-medium">Description: {gadget.description}</p>
                                <p className="">Category: {gadget.category}</p>

                                {/* Rating Section */}
                                <div className="flex items-center">
                                    <span className="mr-2 text-secondary font-semibold">Rating:</span>
                                    <ReactStars
                                        count={5}
                                        value={gadget.rating}
                                        size={24}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                </div>

                                {/* Specifications Section */}
                                <h3 className="mt-4 font-bold">Specifications:</h3>
                                <ul className="list-disc list-inside ml-4">
                                    {gadget.Specification && gadget.Specification.map((spec, index) => (
                                        <li key={index}>{spec}</li>
                                    ))}
                                </ul>

                                <div className="flex items-center mt-5">
                                    <button className="flex py-[2px] px-3 items-center ml-3 text-lg font-bold border rounded-lg border-[#9538E2] text-[#9538E2]" onClick={handleAddToCart}>
                                        Add To Cart <FaCartShopping className="text-lg ml-2" />
                                    </button>
                                    <button className="ml-5 border p-2 rounded-full" onClick={handleAddToWishlist}>
                                        <FaRegHeart className="text-lg text-[#9538E2]" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>Product not found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;
