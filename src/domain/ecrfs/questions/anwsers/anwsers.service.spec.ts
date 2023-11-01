import { Test, TestingModule } from '@nestjs/testing';
import { AnwsersService }      from './anwsers.service';

describe('AnwsersService', () => {
  let service: AnwsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnwsersService],
    }).compile();

    service = module.get<AnwsersService>(AnwsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
