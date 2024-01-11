export interface CategoryInterface {
  id: number;
  name: string;
  slug: string;
}

export interface CategoryToAddInterface
  extends Omit<CategoryInterface, 'id' | 'slug'> {}
