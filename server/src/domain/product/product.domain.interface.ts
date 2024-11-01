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
  primary_image_url?: string;
}

export interface CategoryToAddInterface extends Omit<CategoryInterface, 'id'> {}

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
  name: string;
  title: string;
  description: string;
  has_predefined_values: boolean;
}

export interface ProductPropertyToAddInterface
  extends ProductPropertyInterface {}

export interface ProductPropertyValueInterface {
  id: number;
  value: string;
}

export interface ProductPropertyValueToAddInterface
  extends Omit<ProductPropertyValueInterface, 'id'> {}

export interface ProductTypeToPropertyInterface {
  product_type_id: number;
  product_property_name: string;
}

export interface ProductPropertyToValueInterface {
  product_property_name: string;
  product_property_value_id: number;
}

export interface ProductToPropertyToValueInterface {
  product_id: number;
  product_property_name: string;
  product_property_value_id?: number;
  raw_value?: string;
}

export interface ProductPropertiesModelInterface {
  [key: string]: number | string;
}
