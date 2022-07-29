import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomUserResponse } from '../models/randomuser';

@Injectable({
  providedIn: 'root'
})
export class RandomusersService {

  constructor(private httpClient: HttpClient) { }


  getData(howmany: number): Observable<RandomUserResponse> {
    const url = "https://randomuser.me/api?results=" + howmany;
    return this.httpClient.get<RandomUserResponse>(url);
  }

}
