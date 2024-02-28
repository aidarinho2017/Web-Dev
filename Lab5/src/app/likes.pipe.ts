import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'likes'
})
export class LikesPipe implements PipeTransform {

  transform(value: number): string {
    if (value === 0){
      return "";
    }
    return value + '💛';
  }

}

