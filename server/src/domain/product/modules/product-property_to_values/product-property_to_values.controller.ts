import { Controller } from '@nestjs/common';

import { ROUTES } from '../../product.domain.registry';
import { ProductPropertyToValuesService } from './product-property_to_values.service';

@Controller(ROUTES.PRODUCT_PROPERTY_TO_VALUE.BASE)
export class ProductPropertyToValuesController {
  constructor(
    private productPropertyToValuesService: ProductPropertyToValuesService,
  ) {}
}
