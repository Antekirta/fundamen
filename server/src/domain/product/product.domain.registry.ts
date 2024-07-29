enum TABLES {
  P = 'products',
  C = 'categories',
  PTC = 'product_to_categories',
  CTC = 'categories_to_categories',
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
