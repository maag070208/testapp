import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  setValue(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getValue(key: string): Object | null {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  removeValue(key: string) {
    localStorage.removeItem(key);
  }

  updateValue(key: string, value: any) {
    this.setValue(key, value);
  }

  clear() {
    localStorage.clear();
  }

}
