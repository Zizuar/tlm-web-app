import { Pipe, PipeTransform } from '@angular/core';
import { unescape } from 'lodash';

@Pipe({
  name: 'unescape',
})
export class UnescapePipe implements PipeTransform {
  domParser = new DOMParser();

  transform(value: string, ...args: unknown[]): unknown {
    const doc = this.domParser.parseFromString(unescape(value), 'text/html');
    return doc.documentElement.innerHTML;
  }
}
