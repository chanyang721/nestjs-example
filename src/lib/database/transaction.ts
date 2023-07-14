import { DataSource, QueryRunner }   from "typeorm";
import { HttpException, HttpStatus } from "@nestjs/common";


export async function transaction<T>(
    dataSources: DataSource[],
    tryBlock: ( ...queryRunners: QueryRunner[] ) => Promise<T>,
    catchBlock?: () => Promise<Error>
): Promise<T> {
  const queryRunners: QueryRunner[] = [];
  for ( const dataSource of dataSources ) {
      const queryRunner = dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();
      queryRunners.push(queryRunner);
  }

  try {
    const result = await tryBlock(...queryRunners);
    for ( const queryRunner of queryRunners ) {
        await queryRunner.commitTransaction();
    }

    return result
  }
  catch ( error ) {
    await catchBlock?.();
    for ( const queryRunner of queryRunners ) {
        await queryRunner.rollbackTransaction();
    }

    throw error;
  }
  finally {
    for ( const queryRunner of queryRunners ) {
        await queryRunner.release();
    }
  }
}
