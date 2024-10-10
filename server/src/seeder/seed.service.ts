import { Injectable } from '@nestjs/common';
import { CategoryServiceSeed } from '../domain/product/modules/category/category.service.seed';
import {
  CategoryInterface,
  ProductInterface,
  ProductPropertyInterface,
  ProductPropertyValueInterface,
  ProductTypeInterface,
} from '../domain/product/product.domain.interface';
import { CategoryToCategoryService } from '../domain/product/modules/category_to_category/category_to_category.service';
import { ProductService } from '../domain/product/modules/product/product.service';
import { ProductToCategoryService } from '../domain/product/modules/product_to_category/product_to_category.service';
import { ProductTypeService } from '../domain/product/modules/product-type/product-type.service';
import { ProductPropertyService } from '../domain/product/modules/product-property/product-property.service';
import { ProductPropertyValueService } from '../domain/product/modules/product-property-value/product-property-value.service';
import { ProductTypeToPropertiesService } from '../domain/product/modules/product-type_to_properties/product-type_to_properties.service';
import { ProductPropertyToValuesService } from '../domain/product/modules/product-property_to_values/product-property_to_values.service';
import { ProductToPropertyToValueService } from '../domain/product/modules/product_to_property_to_value/product_to_property_to_value.service';
import { CategoryBuilder } from './builders/category.builder';
import { ProductTypeBuilder } from './builders/product-type.builder';
import { ProductPropertyBuilder } from './builders/product-property.builder';
import { ProductPropertiesValuesBuilder } from './builders/product-properties-values.builder';
import { ProductBuilder } from './builders/product.builder';
import { ProductToCategoryBuilder } from './builders/product_to_category.builder';
import { PropertyToProductTypeBuilder } from './builders/property_to_product-type.builder';
import { PropertiesValuesToProductPropertiesBuilder } from './builders/properties-values_to_product-properties.builder';
import { UserBuilder } from './builders/user.builder';
import { UserService } from '../domain/user/modules/user/user.service';
import { UserTypeService } from '../domain/user/modules/user/user-type.service';
import {
  UserInterface,
  UserTypeInterface,
} from '../domain/user/user.interface.domain';

const categoryBuilder = new CategoryBuilder();
const productTypeBuilder = new ProductTypeBuilder();
const productPropertyBuilder = new ProductPropertyBuilder();
const productPropertiesValuesBuilder = new ProductPropertiesValuesBuilder();
const productBuilder = new ProductBuilder();
const productToCategoryBuilder = new ProductToCategoryBuilder();
const propertyToProductTypeBuilder = new PropertyToProductTypeBuilder();
const propertiesValuesToProductPropertiesBuilder =
  new PropertiesValuesToProductPropertiesBuilder();
const userBuilder = new UserBuilder();

const messagesStyles = {
  success:
    'color: green; font-size: 16px; background-color: yellow; padding: 4px; border-radius: 4px;',
};

@Injectable()
export class SeedService {
  productTypes: ProductTypeInterface[];
  productProperties: ProductPropertyInterface[];
  propertiesValues: ProductPropertyValueInterface[];
  categories: CategoryInterface[];
  products: ProductInterface[];
  userTypes: UserTypeInterface[];
  users: UserInterface[];

  constructor(
    private readonly categoryServiceSeed: CategoryServiceSeed,
    private readonly categoryToCategoryService: CategoryToCategoryService,
    private readonly productService: ProductService,
    private readonly productToCategoryService: ProductToCategoryService,
    private readonly productTypeService: ProductTypeService,
    private readonly productPropertyService: ProductPropertyService,
    private readonly productPropertyValueService: ProductPropertyValueService,
    private readonly productTypeToPropertiesService: ProductTypeToPropertiesService,
    private readonly productPropertyToValuesService: ProductPropertyToValuesService,
    private readonly productToPropertyToValueService: ProductToPropertyToValueService,
    private readonly userService: UserService,
    private readonly userTypeService: UserTypeService,
  ) {}

  async seed() {
    await this.clearTables();

    console.log('%c Tables are cleared.', messagesStyles.success);

    await this.seedUsers();

    console.log('%c Users are seeded.', messagesStyles.success);

    await this.seedProductProperties();

    console.log('%c Product properties are seeded.', messagesStyles.success);

    await this.seedCategories();

    console.log('%c Categories are seeded.', messagesStyles.success);

    await this.seedProducts();

    console.log('%c Products are seeded.', messagesStyles.success);

    console.log(
      '%c The seeding process has successfully finished',
      messagesStyles.success,
    );
  }

  async clearTables() {
    await this.productToPropertyToValueService.clearTable();
    await this.productPropertyToValuesService.clearTable();
    await this.productTypeToPropertiesService.clearTable();
    await this.productPropertyValueService.clearTable();
    await this.productPropertyService.clearTable();
    await this.productTypeService.clearTable();

    await this.productToCategoryService.clearTable();
    await this.categoryToCategoryService.clearTable();

    await this.categoryServiceSeed.clearTable();
    await this.productService.clearTable();
    await this.userService.clearTable();
    await this.userTypeService.clearTable();
  }

  async seedUsers() {
    /** User types */
    for (const userType of userBuilder.buildUserTypes()) {
      await this.userTypeService.addUserType(userType);
    }

    this.userTypes = await this.userTypeService.getUserTypes();

    /** Users */
    userBuilder.userTypes = this.userTypes;

    for (const user of userBuilder.buildUsers()) {
      await this.userService.addUser(user);
    }
  }

  async seedCategories(): Promise<void> {
    /** Categories */
    const categoriesToAdd = categoryBuilder.build();

    await this.categoryServiceSeed.addCategories(categoriesToAdd);

    const response = await this.categoryServiceSeed.getCategoriesSeed();

    console.log('response: ', response);

    this.categories = response;

    /** Categories to categories */
    const boundCategories = categoryBuilder.bindCategories(
      this.categories.map((row) => row.id),
    );

    for (const { parent, child } of boundCategories) {
      await this.categoryToCategoryService.addCategoryToCategory(parent, child);
    }
  }

  async seedProducts() {
    productBuilder.init(
      this.productTypes.map((row) => row.id),
      this.propertiesValues.map((row) => row.id),
    );

    /** Products */
    await this.productService.addProductsBase(productBuilder.build());

    this.products = await this.productService.getProducts();

    /** Products to categories */
    productToCategoryBuilder.init(
      this.products.map((row) => row.id),
      this.categories.map((row) => row.id),
    );

    const productsBoundToCategories = productToCategoryBuilder.build();

    for (const { productId, categoryId } of productsBoundToCategories) {
      await this.productToCategoryService.addProductToCategory(
        categoryId,
        productId,
      );
    }

    let propertiesForParticularProductType;
    const propertiesProductTypeMap = new Map<
      number,
      ProductPropertyInterface[]
    >();

    for (const product of this.products) {
      if (propertiesProductTypeMap.has(product.product_type)) {
        propertiesForParticularProductType = propertiesProductTypeMap.get(
          product.product_type,
        );
      } else {
        propertiesForParticularProductType =
          await this.productTypeToPropertiesService.getPropertiesByProductTypeId(
            product.product_type,
          );

        propertiesProductTypeMap.set(
          product.product_type,
          propertiesForParticularProductType,
        );
      }

      await this.productToPropertyToValueService.addValuesToPropertiesOfProduct(
        product.id,
        productBuilder.buildProductsProperties(
          propertiesForParticularProductType,
        ),
      );
    }
  }

  async seedProductProperties() {
    /** Product types */
    await this.productTypeService.addProductTypes(productTypeBuilder.build());

    this.productTypes = await this.productTypeService.getProductTypes();

    /** Product properties */
    await this.productPropertyService.addProductProperties(
      productPropertyBuilder.build(),
    );

    this.productProperties =
      await this.productPropertyService.getProductProperties();

    /** Product values */
    await this.productPropertyValueService.addProductPropertyValues(
      productPropertiesValuesBuilder.build(),
    );

    this.propertiesValues =
      await this.productPropertyValueService.getProductPropertyValues();

    /** Properties to product types */
    propertyToProductTypeBuilder.init(
      this.productTypes.map((row) => row.id),
      this.productProperties.map((row) => row.name),
    );

    const propertiesBoundToProductTypes = propertyToProductTypeBuilder.build();

    await this.productTypeToPropertiesService.addPropertiesToProductType(
      propertiesBoundToProductTypes,
    );

    /** Values to properties */
    propertiesValuesToProductPropertiesBuilder.init(
      this.productProperties.map((row) => row.name),
      this.propertiesValues.map((row) => row.id),
    );

    const valuesBoundToProperties =
      propertiesValuesToProductPropertiesBuilder.build();

    await this.productPropertyToValuesService.addValuesToProperties(
      valuesBoundToProperties,
    );
  }
}
