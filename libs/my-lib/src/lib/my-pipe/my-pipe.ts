import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myPipe', pure: true})
export class MyPipe implements PipeTransform {
  transform(value: string): string {
    return `*** ${value} ***`;
  }

}
