
import { MenuItem, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Truffle Scallops',
    description: 'Hokkaido scallops, black truffle carpaccio, parsnip purée, herb oil.',
    price: '$34',
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80',
    tags: ['Signature', 'Gluten Free']
  },
  {
    id: '2',
    name: 'Wagyu A5 Striploin',
    description: 'Miyazaki Wagyu, smoked bone marrow butter, seasonal heritage vegetables.',
    price: '$120',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tags: ['Premium']
  },
  {
    id: '3',
    name: 'Wild Sea Bass',
    description: 'Pan-seared sea bass, saffron risotto, fennel citrus salad.',
    price: '$48',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    tags: ['Fresh Catch']
  },
  {
    id: '4',
    name: 'Gold Leaf Chocolate Ganache',
    description: '70% Valrhona dark chocolate, edible 24k gold, hazelnut brittle.',
    price: '$22',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    tags: ['Luxe']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Elena Vance',
    text: "The Wagyu was transcendent. An absolute masterclass in flavor and presentation.",
    rating: 5
  },
  {
    id: 't2',
    author: 'Marcus Thorne',
    text: "Finally, a restaurant that understands the balance of modern aesthetics and soul-warming food.",
    rating: 5
  }
];
