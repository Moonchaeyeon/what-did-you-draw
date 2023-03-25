import { Repository } from 'typeorm';
import { CustomRepository } from './user.decorator';
import { User } from './user.entity';

@CustomRepository(User)
export class UserRepository extends Repository<User> {}