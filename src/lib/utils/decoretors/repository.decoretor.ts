import { SetMetadata } from "@nestjs/common";
import { Repository }  from "typeorm";



export const TYPEORM_REPOSITORY_ENTITY_INJECTION = "TYPEORM_REPOSITORY_ENTITY_INJECTION";

// export const RepositoryInject = ( entity: Function ): ClassDecorator => {
//   return SetMetadata(TYPEORM_REPOSITORY_ENTITY_INJECTION, entity);
// };

export const TYPEORM_REPOSITORY_INJECTION = "TYPEORM_REPOSITORY_INJECTION";

export const RepositoryInject = ( repository: Function ): ClassDecorator => {
  return SetMetadata(TYPEORM_REPOSITORY_INJECTION, repository);
};
