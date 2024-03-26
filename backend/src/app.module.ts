import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
import { UserModule } from './user/user.module';
import { ServerModule } from './server/server.module';
import {User} from "./user/entities/user.entity";
import {Server} from "./server/entities/server.entity";

export const entities = [];

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          type: 'postgres',
          host: configService.get('DATABASE_HOST'),
          port: +configService.get('DATABASE_PORT'),
          username: configService.get('DATABASE_USERNAME'),
          password: configService.get('DATABASE_PASSWORD'),
          database: configService.get('DATABASE_NAME'),
          entities: [User, Server],
          synchronize: true,
          logging: false,
          ssl: undefined,
        }),
        inject: [ConfigService],
      }),
      UserModule,
      ServerModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
