import { Module } from '@nestjs/common';
import { AModule } from './module-a/a.module';
import { BModule } from './module-b/b.module';
import { CModule } from './module-c/c.module';

@Module({
  imports: [AModule, BModule, CModule],
})
export class AppModule {}
