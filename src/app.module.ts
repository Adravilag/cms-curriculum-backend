import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurriculumModule } from './usuario/curriculum.module';

@Module({
  imports: [CurriculumModule,
            MongooseModule.forRoot('mongodb+srv://root:j2dkUDSX2NYQqMQI@cluster0.fsugp.mongodb.net/curriculum', {
            useNewUrlParser: true, useFindAndModify: false })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
