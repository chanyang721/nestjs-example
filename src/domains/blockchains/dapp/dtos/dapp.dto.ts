import { PickType } from '@nestjs/mapped-types';
import { Dapp } from '../entities/dapp.entity';
import { Expose } from 'class-transformer';

export class DappDto extends PickType(Dapp, [
  'id',
  'name',
  'url',
  'logo',
  'description',
  'claim_address',
  'auth',
]) {
  @Expose()
  get validationCode() {
    return `${this.auth.prefix}-${this.auth.verification_code}`;
  }

  constructor(inputData: Partial<Dapp>) {
    super();
    this.name = inputData.name;
    this.url = inputData.url;
    this.logo = inputData.logo;
    this.description = inputData.description;
    this.claim_address = inputData.claim_address;
    this.auth = inputData.auth;
  }
}
