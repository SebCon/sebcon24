import { Pipe, PipeTransform } from '@angular/core';
import { CalculateEuroService } from '../services/calculate-euro.service';

@Pipe({
  name: 'calculateEuro'
})
export class CalculateEuroPipe implements PipeTransform {

  constructor(private readonly calculateEuroService: CalculateEuroService) {}

  transform(value: any, currency: string): any {
    return this.calculateEuroService.calculateInEuro(value, currency);
  }

}
