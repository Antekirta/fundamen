// IMPORTANT: keep it synced with product.domain.interface.client.ts

export interface ProductInterface {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  stock_quantity: number;
  images_urls: string[];
  primary_image_url: string;
  added_at: string;
  updated_at: string;
  is_active: boolean;
  product_type: number;
}

export interface ProductToAddInterface
  extends Omit<ProductInterface, 'id' | 'slug' | 'added_at' | 'updated_at'> {}

export interface ProductsToCategoriesInterface {
  category_id: number;
  product_id: number;
}

export interface CategoryInterface {
  id: number;
  name: string;
  slug: string;
}

export interface CategoryToAddInterface
  extends Omit<CategoryInterface, 'id' | 'slug'> {}

export interface CategoryToCategoriesInterface {
  category_id: number;
  subcategory_id: number;
}

export interface ProductTypeInterface {
  id: number;
  name: string;
}

export interface ProductTypeToAddInterface
  extends Omit<ProductTypeInterface, 'id'> {}

export interface ProductPropertyInterface {
  id: number;
  name: string;
  description: string;
}

export interface ProductPropertyToAddInterface
  extends Omit<ProductPropertyInterface, 'id'> {}

export interface ProductPropertyValueInterface {
  id: number;
  value: string;
}

export interface ProductPropertyValueToAddInterface
  extends Omit<ProductPropertyValueInterface, 'id'> {}

export interface ProductTypeToPropertyInterface {
  product_type_id: number;
  product_property_id: number;
}

export interface ProductPropertyToValueInterface {
  product_property_id: number;
  product_property_value_id: number;
}

export interface ProductToPropertyToValueInterface {
  product_id: number;
  product_property_id: number;
  product_property_value_id: number;
}
