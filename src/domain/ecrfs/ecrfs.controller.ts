import { Controller }   from '@nestjs/common';
import { EcrfsService } from './ecrfs.service';

@Controller('ecrfs')
export class EcrfsController {
  constructor(private readonly ecrfsService: EcrfsService) {}
}
