import { SetMetadata } from "@nestjs/common";



export const TYPEORM_REPOSITORY_ENTITY_INJECTION = "TYPEORM_REPOSITORY_ENTITY_INJECTION";

export const RepositoryInjection = ( entity: Function ): ClassDecorator => {
  return SetMetadata(TYPEORM_REPOSITORY_ENTITY_INJECTION, entity);
};
