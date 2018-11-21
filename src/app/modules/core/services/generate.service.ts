import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  generate(n: number) {
    var randomString = '';
    var iterator = this.getRandomSymbol(n);
    var next = iterator.next();
    while (!next.done) {
      randomString += next.value;
      next = iterator.next();
    }
    return randomString;
  }

  private *getRandomSymbol(n: number) {
    while (n--) {
      var type = this.getRandomIntInRange(1, 4);
      switch (type) {
        case 1: {
          //lowercase letters - unicode from 97 to 122
          yield String.fromCharCode(this.getRandomIntInRange(97, 122));
          break;
        }
        case 2: {
          //uppercase letters - unicode from 65 to 90
          yield String.fromCharCode(this.getRandomIntInRange(65, 90));
          break;
        }
        case 3: {
          //digits - unicode from 48 to 57
          yield String.fromCharCode(this.getRandomIntInRange(48, 57));
          break;
        }
      }
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}