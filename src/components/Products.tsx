import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { products } from './index.js';

const Products = () => {
  return (
    <div className='p-16'>
      <h1 className='text-center mt-8 text-4xl'>Products</h1>
      <p className='text-center mt-4 text-gray-600'>
        Order it for you or your beloved ones
      </p>
      <div className='grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-3'>
        {products.map((products) => (
          <Card key={products.id} className='mt-12'>
            <CardHeader>
              <img
                className='w-full h-full object-cover object-center'
                src={products.image}
                alt={products.label}
              />
            </CardHeader>
            <CardContent>
              <CardTitle className='text-xl'>{products.label}</CardTitle>
            </CardContent>
            <CardFooter>
              <p className='text-gray-600'>{products.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
