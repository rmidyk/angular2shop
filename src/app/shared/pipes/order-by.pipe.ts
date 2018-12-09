import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  private emptyArray = [];
  transform(value: any[], field: string, asc: boolean = false): any[] {
    if (!value) return this.emptyArray;
    return value.sort((a, b) => asc ? a[field] - b[field] : b[field] - a[field]);
  }

}