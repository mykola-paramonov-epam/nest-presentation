import { Model, Document } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Repository } from '../common/interfaces/repository';
import { CustomerDto } from './dto/customer.dto';
import { Customer } from './interfaces/customer.interface';

@Injectable()
export class CustomerRepository implements Repository<CustomerDto, Customer> {
  constructor(@InjectModel('Customer') private readonly CustomerModel: Model<Customer & Document>) {}

  async create(customerDto: CustomerDto): Promise<Customer> {
    return (await (new this.CustomerModel(customerDto)).save()).toJSON();
  }

  async findAll(): Promise<Customer[]> {
    return this.CustomerModel.find().lean().exec();
  }

  async findOne(id: string): Promise<Customer> {
    return this.CustomerModel.findById(id).lean().exec();
  }

  async update(id: string, customerDto: CustomerDto): Promise<Customer> {
    return this.CustomerModel.findByIdAndUpdate(id, customerDto, { new: true }).lean().exec();
  }

  async remove(id: string): Promise<null> {
    await this.CustomerModel.findByIdAndDelete(id).exec();
    return null;
  }
}
