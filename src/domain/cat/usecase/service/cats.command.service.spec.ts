import { Test, TestingModule } from '@nestjs/testing';
import { CatsCommandService }  from './cats.command.service';

describe('CatsService', () => {
  let service: CatsCommandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ CatsCommandService],
    }).compile();

    service = module.get<CatsCommandService>(CatsCommandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
