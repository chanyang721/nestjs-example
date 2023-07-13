import { DynamicModule, Provider }             from "@nestjs/common";
import { TYPEORM_REPOSITORY_ENTITY_INJECTION } from "../utils/decoretors/repository.decoretor";
import { getDataSourceToken }                  from "@nestjs/typeorm";
import { DataSource }                          from "typeorm";



export class RepositoryModule {
  public static forRoot<T extends new ( ...args: any[] ) => any>(
    repositories: T[],
    connectionName: string
  ): DynamicModule {
    const providers: Provider[] = [];

    for ( const repository of repositories ) {
      const entity = Reflect.getMetadata(TYPEORM_REPOSITORY_ENTITY_INJECTION, repository);
      if ( !entity ) {
        continue;
      }

      providers.push({
        inject    : [ getDataSourceToken(connectionName) ],
        provide   : repository,
        useFactory: ( dataSource: DataSource ): typeof repository => {
          const baseRepository = dataSource.getRepository(entity);
          return new repository(baseRepository.target, baseRepository.manager, baseRepository.queryRunner);
        }
      });

    }

    return {
      exports  : providers,
      providers: providers,
      module   : RepositoryModule
    };
  }
}
