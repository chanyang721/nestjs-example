import { Module }          from '@nestjs/common';
import { EcrfsService }    from './ecrfs.service';
import { EcrfsController } from './ecrfs.controller';

@Module({
  controllers: [EcrfsController],
  providers: [EcrfsService],
})
export class EcrfsModule {}
