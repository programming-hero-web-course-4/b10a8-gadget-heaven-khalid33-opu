import './css/Category.css'
const Categoryes = ({ onSelectCategory }) => {
    const categories = ["All Products", "Laptops", "Smartphones", "Accessories"]; // Example categories

    return (
        <div className="flex flex-col p-7">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className="block p-2 border border-secondary space-x-5 mb-3 rounded-lg text-secondary font-semibold hover:bg-secondary hover:text-white hover:border-white hover:duration-500 ">
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categoryes;
