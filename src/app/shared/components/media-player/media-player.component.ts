import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover:'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
    name: 'Gioli & Assia',
    album: 'BEBE (Oficial)',
    url: '',
    _id:'1'
  };

  listObservers$: Array<Subscription> = [];

  constructor(private _MultimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observable$1 = this._MultimediaService.myObservable$1
    .subscribe(
      (responseOk) => {
        //TODO: next()
        console.log("Llego Perfecto el agua");
      },
      (error) => {
        //TODO: error()
        console.log("Se tapo la tubiería");
      }
    );
  }

  ngOnDestroy(): void {
    console.log('GG');
    this.listObservers$.forEach(x => x.unsubscribe())
  }
}
