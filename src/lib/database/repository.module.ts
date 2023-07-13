import { DataSource }              from "typeorm";
import { DynamicModule, Provider } from "@nestjs/common";
import { getDataSourceToken }      from "@nestjs/typeorm";
import { MAIN }                    from "../utils/constants";



export class RepositoryModule {
  public static forFeature<T extends new ( ...args: any[] ) => any>( repositories: T[]
    // connectionName: string | DataSource | DataSourceOptions
  ): DynamicModule {
    const providers: Provider[] = [];

    for ( const repository of repositories ) {
      // const entity = Reflect.getMetadata(TYPEORM_REPOSITORY_ENTITY_INJECTION, repository);
      // if ( !entity ) {
      //   continue;
      // }

      providers.push({
        inject    : [ getDataSourceToken(MAIN) ],
        provide   : repository,
        useFactory: ( dataSource: DataSource ): typeof repository => {
          // const baseRepository = dataSource.getRepository<any>(entity);
          return new repository(dataSource);
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
