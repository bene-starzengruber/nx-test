import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myPaPipe', pure: true})
export class MyPaPipe implements PipeTransform {
  transform(value: string): string {
    return `$$$ ${value} $$$`;
  }

}
