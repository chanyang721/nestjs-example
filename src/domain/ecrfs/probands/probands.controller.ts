import { Controller }      from '@nestjs/common';
import { ProbandsService } from './probands.service';

@Controller('probands')
export class ProbandsController {
  constructor(private readonly probandsService: ProbandsService) {}
}
