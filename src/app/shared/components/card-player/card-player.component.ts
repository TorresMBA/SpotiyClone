import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'big';
  @Input() track : TrackModel = {_id:0, name:'', album:'', cover:'', url:''};
  
  constructor(private _MultimediaService: MultimediaService) { }

  ngOnInit(): void {
  }

  sendPlay(track: TrackModel):void{
    console.log("Enviando cancion al reproductor....", track);
    this._MultimediaService.callback.emit(track);
  }
}
