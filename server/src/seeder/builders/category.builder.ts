import { CategoryToAddInterface } from '../../domain/product/product.domain.interface';
import { NUMBER_OF_CATEGORIES, NUMBER_OF_PARENT_CATEGORIES } from '../settings';
import { getRandom } from '../../utils/number';

export class CategoryBuilder {
  build() {
    const categories: CategoryToAddInterface[] = Array.from(
      new Array(NUMBER_OF_CATEGORIES),
    ).map((_, i) => {
      return {
        name: `Seeded category ${i + 1}`,
      };
    });

    return categories;
  }

  bindCategories(ids) {
    const numOfParentCategories = NUMBER_OF_PARENT_CATEGORIES;
    const parentCategories = ids.slice(0, numOfParentCategories);
    const childCategories = ids.slice(numOfParentCategories);

    return childCategories.map((childCategory) => {
      return {
        child: childCategory,
        parent: parentCategories[getRandom(0, numOfParentCategories - 1)],
      };
    });
  }
}
