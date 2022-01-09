import {Component, Input} from '@angular/core';
import {AlbumTrack} from '../../../../../../services/releases.service';

@Component({
  selector: 'app-album-tracklist',
  templateUrl: './album-tracklist.component.html',
  styleUrls: ['./album-tracklist.component.scss']
})
export class AlbumTracklistComponent {
  @Input() tracklist!: AlbumTrack[];
}
