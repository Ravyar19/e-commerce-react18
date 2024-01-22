import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Products = () => {
  return (
    <div className='p-16'>
      <h1 className='text-center mt-8 text-4xl'>Products</h1>
      <p className='text-center mt-4 text-gray-600'>
        Order it for you or your beloved ones
      </p>
      <div className='grid grid-cols-4 grid-rows-2 gap-3'></div>
    </div>
  );
};

export default Products;
