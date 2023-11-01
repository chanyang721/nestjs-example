import { Module }             from '@nestjs/common';
import { ProbandsService }    from './probands.service';
import { ProbandsController } from './probands.controller';

@Module({
  controllers: [ProbandsController],
  providers: [ProbandsService],
})
export class ProbandsModule {}
