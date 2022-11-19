import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import * as dataRaw from '../../../../data/tracks.json';

@Component({
  selector: 'app-history-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> =[];
  tracksRandom: Array<TrackModel> =[];

  listObserver$: Array<Subscription> = [];

  constructor(private _TracksService: TrackService) { }

  ngOnInit(): void {
    const observer1$ = this._TracksService.dataTracksTrending$.subscribe((response: TrackModel[]) => {
      console.log("tracksTrending -> ", observer1$);
      this.tracksTrending = response;
    });

    const observer2$ = this._TracksService.dataTracksRandom$.subscribe((response: TrackModel[]) => {
      console.log("tracksRandom -> ", observer1$);
      this.tracksRandom = [...this.tracksRandom, ...response];
    });

    this.listObserver$ = [observer1$, observer2$];
  }

  ngOnDestroy(): void {
    this.listObserver$.forEach(x => x.unsubscribe());
  }
}
