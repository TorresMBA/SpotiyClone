import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService { 
  private readonly URL = environment.api;

  constructor(private HttpClient: HttpClient) {     
  }

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]>{
    return new Promise((resolve, reject) => {
      const listTemp = listTracks.filter(a => a._id !== id);
      resolve(listTemp)
    });
  }


  getAllTracks$(): Observable<any>{
    return this.HttpClient.get(`${this.URL}/tracks`)
      .pipe(
        map((dataRaw: any) => {
          return dataRaw.data
        })
      );
  }

  /**
   * 
   * @returns Devuelve lista de musica randoms
   */
  getAllRandom$(): Observable<any>{
    return this.HttpClient.get(`${this.URL}/tracks`)
      .pipe(
        mergeMap(({data}: any) => {
          return this.skipById(data, 1)
        }),
        catchError((err) => {
          console.log("algo paso acá ", err);
          return of([]);
        })
      );
  }
}
