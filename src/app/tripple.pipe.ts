import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tripple'
})
export class TripplePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value*3;
  }

}
