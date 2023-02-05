import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {AppController} from './app.controller';
import {AppService} from './app.service';
import Joi from "joi";

@Module({
    imports: [ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: process.env.NODE_ENV === 'prod' ? '.env.prod' : '.env.dev',
        validationSchema : Joi.object({
            NODE_ENV: Joi.string().valid('dev', 'prod').required(),
        })
    })],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}