import { AfterViewInit, Component } from '@angular/core';
import { YoutubeVideoService } from '../../../services/youtube-video.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent implements AfterViewInit {
  thumbnailSrc: string = '';
  videoSrc: string = '';
  videoTitle: string = '';

  readonly playIconBlack = './assets/svg/yt-play-black.svg';
  readonly playIconRed = './assets/svg/yt-play-red.svg';

  playIconSrc = this.playIconBlack;

  showEmbed = false;

  constructor(private readonly youtubeVideoService: YoutubeVideoService) {}

  async ngAfterViewInit() {
    const thumbnailUrl = await this.youtubeVideoService.getLatestVideoThumbnailUrl();
    this.thumbnailSrc = `url(${thumbnailUrl})`;
    this.videoTitle = await this.youtubeVideoService.getLatestVideoTitle();
    this.videoSrc = await this.youtubeVideoService.getLatestVideoLink();
  }
}
