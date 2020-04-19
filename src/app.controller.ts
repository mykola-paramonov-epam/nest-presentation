import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiHeader, ApiTags } from '@nestjs/swagger';

@ApiTags('Default')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
