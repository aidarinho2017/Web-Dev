import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dislikes'
})
export class DislikesPipe implements PipeTransform {

  transform(value: number): string {
    if (value === 0){
      return "";
    }
    return value + '🤡';
  }

}
