import { Controller } from '@nestjs/common';

import { ROUTES } from '../../product.domain.registry';
import { ProductDescriptionService } from './productDescription.service';

@Controller(ROUTES.PRODUCT_TYPES.BASE)
export class ProductDescriptionController {
  constructor(private categoryService: ProductDescriptionService) {}
}

// Get product types
// Add product type
// Update product type
// Delete product type

// get all product properties
// get product properties by product type id
// get product properties by product id
// add product property
// update product property
// delete product property

// get all property values
// get property values by property id
// add product property value
// update product property value
// delete product property value

// add property to product type
// delete property from product type

// add property value to property
// delete property value from property

// get values of properties of particular product
// set value to property of particular product
