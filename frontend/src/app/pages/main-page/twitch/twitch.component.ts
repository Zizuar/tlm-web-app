import { Component } from "@angular/core";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { StreamingScheduleService } from "../../../services/streaming-schedule.service";
import { Observable } from "rxjs";
import { StreamingScheduleElement } from "../../../core/models/schedule-day.model";

@Component({
  selector: "app-twitch",
  templateUrl: "./twitch.component.html",
  styleUrls: ["./twitch.component.scss"]
})
export class TwitchComponent {
  twitchIcon: IconDefinition = faTwitch;
  streamingSchedule: Observable<StreamingScheduleElement[]> = this.streamingScheduleService.getSchedule();

  constructor(
    private readonly streamingScheduleService: StreamingScheduleService
  ) {
  }

}
