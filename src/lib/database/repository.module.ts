import { DataSource, DataSourceOptions } from "typeorm";
import { DynamicModule, Provider }       from "@nestjs/common";
import { getDataSourceToken }            from "@nestjs/typeorm";



export class RepositoryModule {
  public static forFeature<T extends new ( ...args: any[] ) => any>(
    repositories: T[],
    connectionName: string | DataSource | DataSourceOptions
  ): DynamicModule {
    const providers: Provider[] = [];

    for ( const repository of repositories ) {
      providers.push({
        inject    : [ getDataSourceToken(connectionName) ],
        provide   : repository,
        useFactory: ( dataSource: DataSource ): typeof repository => {
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
