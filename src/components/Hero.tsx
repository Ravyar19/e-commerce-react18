import { LuLeaf } from 'react-icons/lu';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className=' bg-cover h-screen bg-hero  flex justify-center items-center		  '>
      <div className='bg-white opacity-70 mb-[200px] sm:max-w-[600px] max-w-[350px] p-16 flex flex-col items-center space-y-4'>
        <LuLeaf className='text-3xl text-green-600' />
        <h1 className='text-2xl'>The Nature Candle</h1>
        <p className='text-center text-sm sm:text-base '>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          laborum nam autem at laudantium ea dolore obcaecati vero nihil illum,
          perspiciatis cum similique doloremque eligendi ipsa nobis eum
          accusantium dicta.{' '}
        </p>
        <Button className='bg-green-600 sm:px-24 px-12 text-white font-bold  '>
          Discover our collection
        </Button>
      </div>
    </div>
  );
};

export default Hero;
