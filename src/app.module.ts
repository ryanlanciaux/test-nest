import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [AuthModule, UsersModule, RecipesModule, GraphQLModule.forRoot({
    installSubscriptionHandlers: true,
    autoSchemaFile: 'schema.gql'
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
