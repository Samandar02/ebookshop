import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangesService {
  coatigorieChanges = new Subject<number>();
  constructor() { }
  setAboutBook(name:number){
    this.coatigorieChanges.next(name);
  }
  getAboutBook(){
    this.coatigorieChanges.asObservable();
  }
}
