import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order, OrderSchema } from './order.schema';
import { OrderGateway } from './order.gateway';

@Module({
    imports: [
        MongooseModule.forFeature([{ schema: OrderSchema, name: Order.name }]),
    ],
    controllers: [OrderController],
    providers: [OrderService, OrderGateway],
})
export class OrderModule {}