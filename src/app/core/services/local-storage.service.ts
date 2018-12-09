import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  setItem(key: string, item: any) {
    localStorage.setItem(key, JSON.stringify(item));
  }
  getItem(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
