import { Pipe, PipeTransform } from '@angular/core';
import { OrderFormDataService } from '../services/order-form-data.service';

@Pipe({
  name: 'countryCodeToName',
})
export class CountryCodeToNamePipe implements PipeTransform {
  constructor(private readonly orderFormDataService: OrderFormDataService) {}

  transform(value: string, ...args: unknown[]): string {
    return this.orderFormDataService.getCountryName(value);
  }
}
