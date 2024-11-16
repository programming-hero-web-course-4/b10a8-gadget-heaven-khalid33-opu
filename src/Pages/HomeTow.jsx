import { useState, useEffect } from "react";
import Gadget from "../Components/Gadget";

const HomeTow = ({ selectedCategory }) => {
    const [data, setData] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);

    // Fetching data on mount
    useEffect(() => {
        fetch('../Gadgets.json')
            .then(response => response.json())
            .then(fetchedData => setData(fetchedData));
    }, []); // Only runs once when component is mounted

    useEffect(() => {
        // Filter products based on category
        if (selectedCategory === "All Products") {
            setFilteredCategories(data);  // Show all products
        } else {
            const filteredByCategory = data.filter(
                item => item.category === selectedCategory
            );
            setFilteredCategories(filteredByCategory);  // Show filtered products
        }
    }, [data, selectedCategory]); // Runs when data or selectedCategory changes

    return (
        <div className="grid grid-cols-3 gap-2">
            {filteredCategories.map(gadget => (
                <Gadget key={gadget.product_id} gadget={gadget} />
            ))}
        </div>
    );
};

export default HomeTow;
