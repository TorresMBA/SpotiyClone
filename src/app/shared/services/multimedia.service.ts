import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>();

  myObservable$1: Observable<any> = new Observable();

  constructor() { 
    this.myObservable$1 = new Observable((observer: Observer<any>) => {
      observer.next("Enviando agua");
      setTimeout(() => {
         observer.next("Enviando agua");        
       }, 3000);
    });
  }

  private listenAllEvent(): void{

  }
}
