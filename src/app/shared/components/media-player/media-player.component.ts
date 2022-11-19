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
    //El valor que guarda la consta creada es de tipo Subcription
    const observer1$: Subscription = this._MultimediaService.callback
    .subscribe((response: TrackModel) => {
      console.log("Recibiendo canción....", response);
    });
    this.listObservers$ =[observer1$]
  }

  ngOnDestroy(): void {
    console.log('GG');
    this.listObservers$.forEach(x => x.unsubscribe())
  }
}
