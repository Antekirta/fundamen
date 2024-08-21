import { Controller } from '@nestjs/common';

import { ROUTES } from '../../product.domain.registry';
import { ProductPropertyValueService } from './product-property-value.service';

@Controller(ROUTES.PRODUCT_PROPERTY_VALUE.BASE)
export class ProductPropertyValueController {
  constructor(
    private productPropertyValueService: ProductPropertyValueService,
  ) {}
}
