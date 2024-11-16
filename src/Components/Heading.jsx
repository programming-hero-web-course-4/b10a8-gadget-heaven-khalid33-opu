const Heading = ({ title,para }) => {
    return (
        <div className="flex flex-col justify-center">
           <h2 className="text-4xl font-bold mx-auto w-[50%] mb-2">{title}</h2>
           <p className="text-bas mx-auto w-[50%] mb-2">{para}</p>
        </div>
    );
};

export default Heading;
