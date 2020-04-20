import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CustomerDto } from './dto/customer.dto';
import { Customer } from './interfaces/customer.interface';
import { CustomerService } from './customer.service';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @ApiCreatedResponse({ description: 'The record has been successfully created.' })
  @ApiBadRequestResponse({ description: 'Validation is not passed.' })
  create(@Body() customerDto: CustomerDto) {
    return this.customerService.create(customerDto);
  }

  @Get()
  @ApiOkResponse({ description: 'All reqords have been seleced.' })
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Single record has been selected by id.' })
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(id);
  }

  @Put(':id')
  @ApiOkResponse({ description: 'The record has been successfully updated.' })
  @ApiBadRequestResponse({ description: 'Validation is not passed.' })
  update(@Param('id') id: string, @Body() customerDto: CustomerDto) {
    return this.customerService.update(id, customerDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'The record has been successfully removed.' })
  remove(@Param('id') id: string) {
    return this.customerService.remove(id);
  }
}
