import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ROUTES } from '../order.registry.domain';
import { OrderInterface, OrderToAddInterface } from '../order.interface.domain';
import { OrderService } from './order.service';

@Controller(ROUTES.ORDERS.BASE)
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  async getProducts(
    @Query() searchParams: Partial<OrderInterface>,
  ): Promise<OrderInterface[]> {
    return await this.orderService.getOrders(searchParams);
  }

  @Get(`${ROUTES.ORDERS.ID}/:id`)
  async getOrderById(@Param('id') id: number): Promise<OrderInterface> {
    return await this.orderService.getOrderById(id);
  }

  @Post()
  async createOrder(@Body() Order: OrderToAddInterface): Promise<void> {
    await this.orderService.createOrder(Order);
  }

  @Put(':id')
  async updateOrder(
    @Param('id') id: number,
    @Body() Order: Partial<OrderToAddInterface>,
  ): Promise<void> {
    await this.orderService.updateOrder(id, Order);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    await this.orderService.deleteOrder(id);
  }
}
