import { CompaniesModule } from './companies.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
