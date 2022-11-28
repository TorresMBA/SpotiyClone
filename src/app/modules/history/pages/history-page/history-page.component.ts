import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  listsResult$: Observable<any> = of([]);

  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
  }

  receiveData(search: string){
    this.listsResult$ = this._searchService.searchTracks$(search);
  }
}
