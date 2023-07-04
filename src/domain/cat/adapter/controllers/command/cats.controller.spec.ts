import { Test, TestingModule }  from '@nestjs/testing';
import { CatCommandController } from './cats.command.controller';
import { CatsCommandService }   from '../../../usecase/service/cats.command.service';

describe('CatsController', () => {
  let controller: CatCommandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ CatCommandController],
      providers: [ CatsCommandService],
    }).compile();

    controller = module.get<CatCommandController>(CatCommandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
