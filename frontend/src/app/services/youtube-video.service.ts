import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YoutubeVideoService {
  private videoId: string;
  private videoTitle: string;

  private CHANNEL_ID = 'UCt9gSAPExmOmecTkO8SJbKw';

  constructor() {}

  async getLatestVideoLink(): Promise<string> {
    // Embed the latest YouTube video from channel
    const id = await this.getVideoId();
    return `https://www.youtube-nocookie.com/embed/${id}?showinfo=0&autoplay=1&rel=0`;
  }

  async getLatestVideoThumbnailUrl() {
    const id = await this.getVideoId();
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  }

  async getLatestVideoTitle(): Promise<string> {
    if (this.videoTitle) {
      return this.videoTitle;
    }
    await this.fetchVideoData();
    return this.videoTitle;
  }

  private async getVideoId(): Promise<string> {
    if (this.videoId) {
      return this.videoId;
    }
    await this.fetchVideoData();
    return this.videoId;
  }

  private async fetchVideoData(): Promise<void> {
    const reqURL = 'https://www.youtube.com/feeds/videos.xml?channel_id=';
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(reqURL)}${this.CHANNEL_ID}`,
      // browser default headers cause CORS errors in Chrome
      { headers: new Headers() },
    );
    const videosJson = await response.json();
    const link = videosJson.items[0].link;
    this.videoId = link.substring(link.indexOf('=') + 1);
    this.videoTitle = videosJson.items[0].title;
  }
}
