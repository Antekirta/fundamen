import { Controller } from '@nestjs/common';

import { ROUTES } from '../../product.domain.registry';
import { Product_to_property_to_valueService } from './product_to_property_to_value.service';

@Controller(ROUTES.PRODUCT_TYPE.BASE)
export class Product_to_property_to_valueController {
  constructor(private productTypeService: Product_to_property_to_valueService) {}
}
