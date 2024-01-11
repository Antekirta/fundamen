export interface ProductInterface {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  stock_quantity: number;
  images_urls: string[];
  added_at: string;
  updated_at: string;
  is_active: boolean;
}

export interface ProductToAddInterface
  extends Omit<ProductInterface, 'id' | 'slug' | 'added_at' | 'updated_at'> {}
