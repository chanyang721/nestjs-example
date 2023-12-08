import { Injectable } from '@nestjs/common';
import { CreateDappDto } from './dto/create-dapp.dto';
import { UpdateDappDto } from './dto/update-dapp.dto';

@Injectable()
export class DappService {
  create(createDappDto: CreateDappDto) {
    return 'This action adds a new dapp';
  }

  findAll() {
    return `This action returns all dapp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dapp`;
  }

  update(id: number, updateDappDto: UpdateDappDto) {
    return `This action updates a #${id} dapp`;
  }

  remove(id: number) {
    return `This action removes a #${id} dapp`;
  }
}
