import { Test, TestingModule } from '@nestjs/testing';
import { CatCommandService }   from './cat.command.service';

describe('CatsService', () => {
  let service: CatCommandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ CatCommandService],
    }).compile();

    service = module.get<CatCommandService>(CatCommandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
