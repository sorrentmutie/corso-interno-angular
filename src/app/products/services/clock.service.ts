import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  constructor() { }


  getDate(): Date {
    return new Date('December 17, 1995 03:24:00');
  }
}
