import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor() { }

  stringify(obj: any): string {
    const cache = new WeakSet();
    return JSON.stringify(obj, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (cache.has(value)) {
          return; // eliminar la referencia circular
        }
        cache.add(value);
      }
      return value;
    });
  }
}
