import { Module } from "@nestjs/common";
import { appController } from "./app.controller";
import { userController } from "./user/user.controller";
import { userModule } from "./user/user.module";

@Module({
    controllers: [appController],
    imports: [userModule]
})
export class AppModule{}  