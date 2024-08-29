import { Injectable } from '@nestjs/common';
import { CategoryService } from '../../domain/product/modules/category/category.service';
import { ProductToCategoryService } from '../../domain/product/modules/product_to_category/product_to_category.service';
import { ProductService } from '../../domain/product/modules/product/product.service';
import { BasketService } from '../../domain/basket/basket.service';
import { OrderService } from '../../domain/order/modules/order.service';
import { ORDER_STATUSES } from '../../domain/order/order.registry.domain';

@Injectable()
export class BuyProductService {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly productService: ProductService,
    private readonly productToCategoryService: ProductToCategoryService,
    private readonly basketService: BasketService,
    private readonly orderService: OrderService,
  ) {}

  async run() {
    const userId = 2;

    /** Main page */
    const categories = await this.categoryService.getCategories();

    const categoryId = 1;

    /** Category page */
    const selectCategory =
      await this.categoryService.getCategoryById(categoryId);

    const products =
      await this.productToCategoryService.getProductsOfCategory(categoryId);

    const productId = 1;

    /** Product page */
    const productToBuy = await this.productService.getProductById(productId);

    console.log('Selected product:', productToBuy);

    /** Add to basket */
    const basketId = (
      await this.basketService.createBasket({
        user_id: userId,
      })
    )[0]?.id;

    await this.basketService.addProductToBasket({
      basket_id: basketId,
      product_id: productToBuy.id,
      quantity: 1,
    });

    await this.basketService.addProductToBasket({
      basket_id: basketId,
      product_id: 2,
      quantity: 2,
    });

    const productInBasket =
      await this.basketService.getProductsInBasket(basketId);

    console.log('productInBasket: ', productInBasket);

    /** ORDER */
    // create order
    const orderId = await this.orderService.createOrder({
      status: '',
      total: 0,
      user_id: userId,
    })[0]?.id;

    await this.orderService.setOrderStatus(orderId, ORDER_STATUSES.PENDING);

    // add products to order
    await this.orderService.addProductsToOrder(orderId, [productToBuy.id]);

    // checkout process
    // shipping information
    // payment information
  }
}
