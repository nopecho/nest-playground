import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import Joi from "joi";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PostgresConfigModule} from "./config/database/config.module";
import {PostgresConfigProvider} from "./config/database/config.provider";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: process.env.NODE_ENV === 'prod' ? '.env.prod' : '.env.dev',
            validationSchema: Joi.object({
                NODE_ENV: Joi.string().valid('dev', 'prod').required(),
            })
        }),
        TypeOrmModule.forRootAsync({
            imports: [PostgresConfigModule],
            useClass: PostgresConfigProvider,
            inject: [PostgresConfigProvider]
        })
    ],
})
export class AppModule {
}