import { Test, TestingModule } from '@nestjs/testing';
import { EcrfsController }     from './ecrfs.controller';
import { EcrfsService }        from './ecrfs.service';

describe('EcrfsController', () => {
  let controller: EcrfsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EcrfsController],
      providers: [EcrfsService],
    }).compile();

    controller = module.get<EcrfsController>(EcrfsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
