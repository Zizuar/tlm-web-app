import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeVideoService {

  constructor() { }

  async getLatestVideoLink(): Promise<string> {
    // Embed latest youtube video from channel
    const channelID = "UCt9gSAPExmOmecTkO8SJbKw";
    const reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
    const response =
      await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(reqURL)}${channelID}`);
    const videosJson = await response.json();
    const link = videosJson.items[0].link;
    const id = link.substr(link.indexOf("=")+1);
    return `https://www.youtube-nocookie.com/embed/${id}?showinfo=0&rel=0`;
  }
}
