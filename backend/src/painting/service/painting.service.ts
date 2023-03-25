import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Painting } from '../entity/painting.entity';
import { PaintingRepository } from '../entity/painting.repository';

@Injectable()
export class PaintingService {
  constructor(
    @InjectRepository(Painting)
    private paintingRepository: PaintingRepository,
  ) {}

  findAll(): Promise<Painting[]> {
    return this.paintingRepository.find();
  }
}