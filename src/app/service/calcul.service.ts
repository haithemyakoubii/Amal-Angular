import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }

  getNumberOf(list:any[], critiria:string, value:any): number {
    return list.filter(t => t[critiria] == value).length;
  }
}
