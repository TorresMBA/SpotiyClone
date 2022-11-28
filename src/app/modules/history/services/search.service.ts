import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api;

  constructor(private _httpCliente: HttpClient) { }

  searchTracks$(search: string):Observable<any>{
    return this._httpCliente.get(`${this.URL}/tracks?src=${search}`)
    .pipe(
      map((dataRaw: any) => {
        dataRaw.data
        console.log(dataRaw.data); 
      })
    )
  }
}
