type Product = {
  id: number;
  label: string;
  price: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    label: 'Spiced Mint',
    price: '$3.00',
    image: '/src/assets/1.png',
  },
  {
    id: 2,
    label: 'Sweet Rose',
    price: '$6.00',
    image: '/src/assets/1.png',
  },
  {
    id: 3,
    label: 'Lemon Grass',
    price: '$5.00',
    image: '/src/assets/3.png',
  },
  {
    id: 4,
    label: 'Lavender',
    price: '$4.00',
    image: '/src/assets/4.png',
  },
  {
    id: 5,
    label: 'Rosemary',
    price: '$3.00',
    image: '/src/assets/5.png',
  },
  {
    id: 6,
    label: 'Chamomile',
    price: '$3.00',
    image: '/src/assets/6.png',
  },
];
