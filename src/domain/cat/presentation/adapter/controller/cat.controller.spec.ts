import { Test, TestingModule }  from '@nestjs/testing';
import { CatController }     from './cat.controller';
import { CatCommandService } from '../../../application/service/cat.command.service';

describe('CatController', () => {
  let controller: CatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ CatController],
      providers: [ CatCommandService],
    }).compile();

    controller = module.get<CatController>(CatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
