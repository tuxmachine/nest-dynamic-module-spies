import { ConfigurableModuleBuilder } from '@nestjs/common';

export type SomeLibOptions = {
  count?: number;
};

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<SomeLibOptions>().build();
