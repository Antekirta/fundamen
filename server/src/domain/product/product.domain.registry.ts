enum TABLES {
  P = 'products',
  C = 'categories',
  PTC = 'product_to_categories',
  CTC = 'categories_to_categories',
  PRODUCT_TYPES = 'product_types',
  PRODUCT_PROPERTIES = 'product_properties',
  PRODUCT_PROPERTY_VALUES = 'product_property_values',
  PRODUCT_TYPE_TO_PROPERTIES = 'product_type_to_properties',
  PRODUCT_PROPERTY_TO_VALUE = 'product_property_to_value',
}

export const DB = {
  TABLES,
};

export const ROUTES = {
  PRODUCTS: {
    BASE: 'products',
    ID: 'id',
    SLUG: 'slug',
  },
  CATEGORIES: {
    BASE: 'categories',
    ID: 'id',
    SLUG: 'slug',
  },
  PRODUCTS_TO_CATEGORIES: {
    BASE: 'products-to-categories',
  },
  CATEGORIES_TO_CATEGORIES: {
    BASE: 'categories-to-categories',
  },
};
