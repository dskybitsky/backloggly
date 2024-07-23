import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.schema';
import { Public } from '../app.decorator.is_public';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Public()
    @Get()
    async findAll(): Promise<Order[]> {
        return this.orderService.getAll();
    }

    @Public()
    @Post()
    async create(@Body() orderData: Order): Promise<Order> {
        return this.orderService.create(orderData);
    }
}
