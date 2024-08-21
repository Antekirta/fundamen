import { Controller } from '@nestjs/common';

import { ROUTES } from '../../product.domain.registry';
import { ProductPropertyService } from './product-property.service';

@Controller(ROUTES.PRODUCT_PROPERTY.BASE)
export class ProductPropertyController {
  constructor(private productPropertyService: ProductPropertyService) {}
}
