import {AfterViewInit, Component } from '@angular/core';
import {YoutubeVideoService} from '../../../services/youtube-video.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements AfterViewInit{
  src: string = '';

  constructor(
    private readonly youtubeVideoService: YoutubeVideoService
  ) { }

  async ngAfterViewInit() {
    this.src = await this.youtubeVideoService.getLatestVideoLink();
  }
}
