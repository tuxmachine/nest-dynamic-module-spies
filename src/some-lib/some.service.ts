import { Inject, Injectable } from '@nestjs/common';
import {
  MODULE_OPTIONS_TOKEN,
  SomeLibOptions,
} from './some-lib.module-definition';

@Injectable()
export class SomeService {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) protected readonly config: SomeLibOptions,
  ) {}

  foo() {
    return 'bar'.repeat(this.config.count);
  }
}
