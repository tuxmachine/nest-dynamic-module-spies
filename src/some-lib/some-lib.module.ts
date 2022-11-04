import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './some-lib.module-definition';
import { SomeService } from './some.service';

@Module({
  providers: [SomeService],
  exports: [SomeService],
})
export class SomeLibModule extends ConfigurableModuleClass {}
