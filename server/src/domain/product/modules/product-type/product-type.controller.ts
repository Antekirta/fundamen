import { Controller } from '@nestjs/common';

import { ROUTES } from '../../product.domain.registry';
import { ProductTypeService } from './product-type.service';

@Controller(ROUTES.PRODUCT_TYPE.BASE)
export class ProductTypeController {
  constructor(private productTypeService: ProductTypeService) {}
}
