import { Test, TestingModule } from '@nestjs/testing';
import { ProbandsController }  from './probands.controller';
import { ProbandsService }     from './probands.service';

describe('ProbandsController', () => {
  let controller: ProbandsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProbandsController],
      providers: [ProbandsService],
    }).compile();

    controller = module.get<ProbandsController>(ProbandsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
