import { Controller } from '@nestjs/common';

import { ROUTES } from '../../product.domain.registry';
import { ProductToPropertyToValueService } from './product_to_property_to_value.service';

@Controller(ROUTES.PRODUCT_TYPE.BASE)
export class ProductToPropertyToValueController {
  constructor(
    private productToPropertyToValueService: ProductToPropertyToValueService,
  ) {}
}
