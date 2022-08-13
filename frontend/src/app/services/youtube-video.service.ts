import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YoutubeVideoService {
  private videoId: string;

  constructor() {}

  async getLatestVideoLink(): Promise<string> {
    // Embed latest youtube video from channel
    const id = await this.getVideoId();
    return `https://www.youtube-nocookie.com/embed/${id}?showinfo=0&rel=0`;
  }

  async getLatestVideoThumbnail() {}

  private async getVideoId(): Promise<string> {
    if (this.videoId) {
      return this.videoId;
    }

    const channelID = 'UCt9gSAPExmOmecTkO8SJbKw';
    const reqURL = 'https://www.youtube.com/feeds/videos.xml?channel_id=';
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(reqURL)}${channelID}`,
      // browser default headers cause CORS errors in Chrome
      { headers: new Headers() }
    );
    const videosJson = await response.json();
    const link = videosJson.items[0].link;
    return link.substring(link.indexOf('=') + 1);
  }
}
