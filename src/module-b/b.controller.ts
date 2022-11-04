import { Controller, Get } from '@nestjs/common';
import { SomeService } from '../some-lib/some.service';

@Controller()
export class BController {
  constructor(private readonly someService: SomeService) {}

  @Get('b')
  hello() {
    return this.someService.foo();
  }
}
