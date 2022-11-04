import { Module } from '@nestjs/common';
import { SomeLibModule } from '../some-lib/some-lib.module';
import { CController } from './c.controller';

@Module({
  imports: [
    SomeLibModule.registerAsync({
      useFactory: () => ({
        count: 5,
      }),
    }),
  ],
  controllers: [CController],
})
export class CModule {}
