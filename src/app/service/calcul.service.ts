import { PropertyRead } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }

  getNumberOf(list:any[], critiria:string, value:any)
  {
    let count = 0;
    const crit = critiria;
    for (let i of list)
    { 
      if (i[critiria]==value)
      {
        count++;
      }
    
    }
    return count;
  }
}
