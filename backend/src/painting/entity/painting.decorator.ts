import { SetMetadata } from "@nestjs/common";

export const TYPEORM_PAINTING_REPOSITORY = "TYPEORM_PAINTING_REPOSITORY";

export function CustomRepository(entity: Function): ClassDecorator {
  return SetMetadata(TYPEORM_PAINTING_REPOSITORY, entity);
}