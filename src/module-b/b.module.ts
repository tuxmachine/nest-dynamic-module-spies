import { Module } from '@nestjs/common';
import { SomeLibModule } from '../some-lib/some-lib.module';
import { BController } from './b.controller';

@Module({
  imports: [
    SomeLibModule.registerAsync({
      useFactory: () => ({
        count: 8,
      }),
    }),
  ],
  controllers: [BController],
})
export class BModule {}
