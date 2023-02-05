import {Module} from "@nestjs/common";
import {PostgresConfigProvider} from "./config.provider";

@Module({
    providers: [PostgresConfigProvider],
})
export class PostgresConfigModule {}