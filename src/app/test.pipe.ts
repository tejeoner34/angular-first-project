import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe'
})
export class TestPipe implements PipeTransform {

  transform(value: any): any {
    
    return value.toUpperCase();
  }

}
