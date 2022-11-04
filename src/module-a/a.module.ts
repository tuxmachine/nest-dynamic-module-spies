import { Module } from '@nestjs/common';
import { SomeLibModule } from '../some-lib/some-lib.module';
import { AController } from './a.controller';

@Module({
  imports: [
    SomeLibModule.registerAsync({
      useFactory: () => ({
        count: 5,
      }),
    }),
  ],
  controllers: [AController],
})
export class AModule {}
