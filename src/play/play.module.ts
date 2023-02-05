import {Module} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";

@Module({
    imports: [Ty],
    exports: [PlayModule]
})
export class PlayModule {}