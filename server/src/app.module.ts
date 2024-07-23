import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [MongooseModule.forRoot(process.env.MONGODB_URL), OrderModule, AuthModule, UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
