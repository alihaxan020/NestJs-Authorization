import { Injectable } from '@nestjs/common';
import { createCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'test@gmail.com',
      name: 'test',
    },
    {
      id: 2,
      email: 'john@gmail.com',
      name: 'John Doe',
    },
    {
      id: 3,
      email: 'doe@gmail.com',
      name: 'Usman Umer',
    },
  ];
  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }
  createCustomer(createCustomerDto: createCustomerDto) {
    this.customers.push(createCustomerDto);
  }
  getCustomers() {
    return this.customers;
  }
}
