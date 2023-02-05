import {Injectable} from "@nestjs/common";
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from "@nestjs/typeorm";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class PostgresConfigProvider implements TypeOrmOptionsFactory {
    constructor(private config: ConfigService) {}

    createTypeOrmOptions(connectionName?: string):  TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.config.get<string>('PLAY_DATASOURCE_HOST'),
            port: this.config.get<number>('PLAY_DATASOURCE_PORT'),
            username: this.config.get<string>('PLAY_DATASOURCE_USERNAME'),
            password: this.config.get<string>('PLAY_DATASOURCE_PASSWORD'),
            database: this.config.get<string>('PLAY_DATASOURCE_DB'),
            entities: [],
            autoLoadEntities: true,
            charset: 'utf8mb4',
            logging: true,
            synchronize: true,
        }
    }
}