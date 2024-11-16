import { NavLink } from "react-router-dom";

const Gadget = ({ gadget }) => {
    
    const { product_id, product_title, product_image, price } = gadget;
    return (




      
        <div id="target-section" className="card  w-96 shadow-2xl ">
          
        <figure className="px-5 pt-5">
          <img
            src={product_image} 
         
            className="rounded-xl" />
        </figure>
        <div className="px-5 pt-5 pb-7 ml-2">
          <h2 className="text-lg font-bold ml-1">{product_title}</h2>
          <p className="text-base font-medium text-[#09080F99] ml-1" >Price: ${price}</p>
          <div className="card-actions">
          <NavLink to={`/gadget/${product_id}`}>
               <div className="border border-[#9538E2] py-[2px] px-3 rounded-xl mt-1">
               <button className="text-sm text-[#9538E2]">  View Details</button>
               </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default Gadget;









