import { Test, TestingModule } from '@nestjs/testing';
import { EcrfsService }        from './ecrfs.service';

describe('EcrfsService', () => {
  let service: EcrfsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EcrfsService],
    }).compile();

    service = module.get<EcrfsService>(EcrfsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
