import { Logger as NestLogger } from '@nestjs/common';
import { Logger as TypeOrmLogger } from 'typeorm';



export class SqlLogger implements TypeOrmLogger {
  private readonly logger = new NestLogger( 'SQL Logger' );
  
  
  logQuery( query: string, parameters?: unknown[] ): any {
    this.logger.log( `${ query } -- Parameters: ${ this.stringifyParameters( parameters ) }` );
  }
  
  
  logQueryError( error: string | Error, query: string, parameters?: unknown[] ): any {
    this.logger.error( `${ query } -- Parameters: ${ this.stringifyParameters( parameters ) } -- ${ error }` );
  }
  
  
  logQuerySlow( time: number, query: string, parameters?: unknown[] ) {
    this.logger.warn( `Time: ${ time } -- Parameters: ${ this.stringifyParameters( parameters ) } -- ${ query }` );
  }
  
  
  logMigration( message: string ) {
    this.logger.log( message );
  }
  
  
  logSchemaBuild( message: string ) {
    this.logger.log( message );
  }
  
  
  log( level: 'log' | 'info' | 'warn', message: string ) {
    if ( level === 'log' ) {
      return this.logger.log( message );
    }
    if ( level === 'info' ) {
      return this.logger.debug( message );
    }
    if ( level === 'warn' ) {
      return this.logger.warn( message );
    }
  }
  
  
  private stringifyParameters( parameters?: unknown[] ) {
    try {
      return JSON.stringify( parameters );
    }
    catch {
      return '';
    }
  }
}
