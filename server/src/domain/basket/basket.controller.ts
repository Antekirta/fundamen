import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ROUTES } from './basket.registry.domain';
import { BasketService } from './basket.service';
import {
  BasketInterface,
  BasketToAddInterface,
  ProductInBasketInterface,
} from './basket.interface.domain';

@Controller(ROUTES.BASKET.BASE)
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @Get()
  async getBasketByUserId(
    @Query('user_id') user_id: number,
  ): Promise<BasketInterface> {
    return await this.basketService.getBasketByUserId(user_id);
  }

  @Post()
  async createBasket(
    @Query('user_id') user_id: number,
    @Body() basket: BasketToAddInterface,
    @Body() products?: Omit<ProductInBasketInterface, 'basket_id'>[],
  ): Promise<Array<Pick<BasketInterface, 'id'>>> {
    const basketId = await this.basketService.createBasket(basket);

    if (products) {
      await this.basketService.addProductsToBasketBulk(
        products.map((product) => ({
          ...product,
          basket_id: basketId as unknown as number,
        })),
      );
    }

    return basketId;
  }
}
