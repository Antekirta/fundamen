import { Controller } from '@nestjs/common';

import { ROUTES } from '../../product.domain.registry';
import { ProductTypeToPropertiesService } from './product-type_to_properties.service';

@Controller(ROUTES.PRODUCT_TYPE_TO_PROPERTY.BASE)
export class ProductTypeToPropertiesController {
  constructor(
    private productTypeToPropertiesService: ProductTypeToPropertiesService,
  ) {}
}
