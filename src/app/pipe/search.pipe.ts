import { Pipe, PipeTransform } from '@angular/core';
import { Bird } from '../model/bird';

@Pipe({
  name: 'search'
})
export class SearchPipe<T extends { [x: string]: any }> implements PipeTransform {

  transform(birdlist: Bird[], phrase: string = '', key: string = 'name'): Bird[] {

    if (!phrase)
      return birdlist

    phrase = phrase.toLowerCase()
    return birdlist.filter(item => String(item[key]).toLowerCase().includes(phrase))
  }
}
