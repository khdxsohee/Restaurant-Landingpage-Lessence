
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Appetizers' | 'Main Course' | 'Desserts' | 'Wines';
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
