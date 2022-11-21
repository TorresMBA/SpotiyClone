import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

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
    this.loadDataAll();
    this.loadDataRandom();
  }

  loadDataAll(): void{
    this._TracksService.getAllTracks$().subscribe((response:TrackModel[]) => {
      this.tracksTrending = response;
      console.log("_TracksService  getAllTracks ->", response);
     });
  }

  loadDataRandom(): void{
    this._TracksService.getAllRandom$().subscribe((response:TrackModel[]) => {
      this.tracksRandom = response;
     });
  }

  ngOnDestroy(): void {
    //this.listObserver$.forEach(x => x.unsubscribe());
  }
}
