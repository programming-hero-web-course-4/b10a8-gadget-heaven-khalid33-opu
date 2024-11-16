import { useState } from "react";
import Categoryes from "../Components/Categoryes";
import HomeTow from "./HomeTow";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Products");

    // Callback to update category from Categoryes component
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="flex">
            {/* Sidebar for categories */}
            <div className="border w-[200px] rounded-lg">
                <Categoryes onSelectCategory={handleCategorySelect} />
            </div>

            {/* Conditionally render HomeTow based on selected category */}
            <div className="flex-grow">
                <HomeTow selectedCategory={selectedCategory} />
            </div>
        </div>
    );
};

export default Home;
