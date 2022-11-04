import { Controller, Get } from '@nestjs/common';
import { SomeService } from '../some-lib/some.service';

@Controller()
export class CController {
  constructor(private readonly someService: SomeService) {}

  @Get('c')
  hello() {
    return this.someService.foo();
  }
}
