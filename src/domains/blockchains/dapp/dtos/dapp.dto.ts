import { RolesGuard } from '@/libs/fundamentals/guards/role/roles.guard';
import { USER_ROLE } from '@/users/infrastructure/entities/enums';
import { PickType } from '@nestjs/mapped-types';
import { Exclude, Expose, Transform } from 'class-transformer';
import { Dapp } from '../entities/dapp.entity';



export class DappDto extends PickType( Dapp, [
  'id',
  'name',
  'url',
  'logo',
  'description',
  'claim_address',
  'auth'
] ) {
  
  @Expose()
  get verificationCode(): string {
    return `${this.auth.prefix}-${this.auth.verification_code}`
  }
  
  @Transform(({ value }) => value.name)
  role: { id: 1, name: 'Role Test' }
  
  constructor( inputData: Partial<Dapp> ) {
    super();
    this.name = inputData.name;
    this.url = inputData.url;
    this.logo = inputData.logo;
    this.description = inputData.description;
    this.claim_address = inputData.claim_address;
    this.auth = inputData.auth
  }
}


export class TestDto {
  firstName: string;
  lastName: string;
  
  @Exclude()
  password: string
  
  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  
  constructor(partial: Partial<TestDto>) {
    Object.assign(this, partial);
  }
}