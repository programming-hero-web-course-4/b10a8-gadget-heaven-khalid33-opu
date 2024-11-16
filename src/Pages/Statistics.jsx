import { useLoaderData } from 'react-router-dom';
import Rechart from './Rechart';
import { DiBackbone } from 'react-icons/di';
import Heading from '../Components/Heading';

const Statistics = () => {
  const data = useLoaderData();

  // Reformat data for the chart
  const chartData = data.map(item => ({
    name: item.product_title, // Show product title on X-axis
    price: item.price,         // Show price on Y-axis
  }));

  return (
    <div>
      <div className='bg-[#9538E2] h-[280px] flex items-center justify-center  rounded-xl mb-10'>
       <div className='flex justify-center text-center items-center text-white'>
       <Heading 
        title={"Statistics"}
        para={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
        ></Heading>
       </div>

      </div>
      <div>
        <Rechart data={chartData} />
      </div>
    </div>
  );
};

export default Statistics;












