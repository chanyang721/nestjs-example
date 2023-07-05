import { Test, TestingModule }  from '@nestjs/testing';
import { CatController }      from './cat.controller';
import { CatsCommandService } from '../../../application/service/cats.command.service';

describe('CatController', () => {
  let controller: CatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ CatController],
      providers: [ CatsCommandService],
    }).compile();

    controller = module.get<CatController>(CatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
