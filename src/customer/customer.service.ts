import { Injectable } from '@nestjs/common';
import { Service } from '../common/interfaces/service';
import { CustomerDto } from './dto/customer.dto';
import { Customer } from './interfaces/customer.interface';
import { CustomerRepository } from './customer.repository';

@Injectable()
export class CustomerService implements Service<CustomerDto, Customer> {
  constructor(private readonly customerRepository: CustomerRepository) {}

  create(customerDto: CustomerDto): Promise<Customer> {
    return this.customerRepository.create(customerDto);
  }

  findAll(): Promise<Customer[]> {
    return this.customerRepository.findAll();
  }

  findOne(id: string): Promise<Customer> {
    return this.customerRepository.findOne(id);
  }

  update(id: string, customerDto: CustomerDto): Promise<Customer> {
    return this.customerRepository.update(id, customerDto);
  }

  remove(id: string): Promise<null> {
    return this.customerRepository.remove(id);
  }
}
