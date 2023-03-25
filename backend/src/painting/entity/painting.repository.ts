import { Repository } from 'typeorm';
import { CustomRepository } from './painting.decorator';
import { Painting } from './painting.entity';

@CustomRepository(Painting)
export class PaintingRepository extends Repository<Painting> {}