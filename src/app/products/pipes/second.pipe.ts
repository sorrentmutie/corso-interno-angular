import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'second'
})
export class SecondPipe implements PipeTransform {

  transform(value: Product): string {
    return "Mia formattazione speciale: " + value.id + "  - " + value.description;
  }

}
