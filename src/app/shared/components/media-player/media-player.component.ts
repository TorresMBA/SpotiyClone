import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  listObservers$: Array<Subscription> = [];  
  state: string = 'paused';

  constructor(public _MultimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer$ = this._MultimediaService.playerStatus$.subscribe( res => {
      console.log("ngOnInit -> observer$ ", res);
      this.state = res
    });
    this.listObservers$ = [observer$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(x => x.unsubscribe())
  }

  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x //TODO: 1050 - x
    const percentageFromX = (clickX * 100) / width
    console.log(`Click(x): ${percentageFromX}`);
    this._MultimediaService.seekAudio(percentageFromX)

  }
}
