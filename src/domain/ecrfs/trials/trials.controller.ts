import { Controller }    from '@nestjs/common';
import { TrialsService } from './trials.service';

@Controller('trials')
export class TrialsController {
  constructor(private readonly trialsService: TrialsService) {}
}
