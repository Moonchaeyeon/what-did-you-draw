import { SetMetadata } from "@nestjs/common";

export const TYPEORM_USER_REPOSITORY = "TYPEORM_USER_REPOSITORY";

export function CustomRepository(entity: Function): ClassDecorator {
  return SetMetadata(TYPEORM_USER_REPOSITORY, entity);
}