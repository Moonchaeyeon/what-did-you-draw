import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Painting } from './entity/painting.entity';
import { PaintingService } from './service/painting.service';
import { PaintingController } from './painting.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Painting])],
  controllers: [PaintingController],
  providers: [PaintingService],
})
export class PaintingModule {}