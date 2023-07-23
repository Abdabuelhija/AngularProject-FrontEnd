import { Injectable } from '@angular/core';
import { Watch } from './models/Watch';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchesService {
  baseURL: string = 'http://localhost:8000/';
  headers = { 'content-type': 'application/json' };
  
  constructor(private http: HttpClient) { }
  
  popuolarwatches():Observable<any>{
    return this.http.get(this.baseURL + 'popuolarwatches');
  }

  RolexWatches():Observable<any>{
    return this.http.get(this.baseURL + 'RolexWatches');
  }

  ArmaniWatches():Observable<any>{
    return this.http.get(this.baseURL + 'ArmaniWatches');
  }

  Tissotwatches():Observable<any>{
    return this.http.get(this.baseURL + 'Tissotwatches');
  }

}



