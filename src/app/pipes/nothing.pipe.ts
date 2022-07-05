import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nothing'
})
export class NothingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const arg = args;

    if(args.length == 0){
      value = "No hay valores";
      return value;
    }
    return args;
  }

}
