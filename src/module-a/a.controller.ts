import { Controller, Get } from '@nestjs/common';
import { SomeService } from '../some-lib/some.service';

@Controller()
export class AController {
  constructor(private readonly someService: SomeService) {}

  @Get('a')
  hello() {
    return this.someService.foo();
  }
}
