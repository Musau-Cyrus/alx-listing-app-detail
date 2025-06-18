import { IMAGES } from '../constants';
import PropertyListing from "../components/common/PropertyListing";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section style={{backgroundImage: `url(${IMAGES.hero})`}} className="w-full h-[480px] bg-no-repeat bg-center bg-cover rounded-3xl">
        <div className='flex flex-col items-center justify-center text-white text-center pt-16 gap-8'>
       
       <p className='text-8xl'>Find your favorite <br/> place here!</p>
        <p className='text-2xl'>The best prices for over 2 million properties worldwide</p>
        
        </div>
      </section>
      <PropertyListing/>
    </div>
  );
};

export default Home;