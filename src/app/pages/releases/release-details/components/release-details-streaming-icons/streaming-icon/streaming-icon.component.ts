import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-streaming-icon',
  templateUrl: './streaming-icon.component.html',
  styleUrls: ['./streaming-icon.component.scss']
})
export class StreamingIconComponent {
  @Input() name: string = '';
  @Input() link: string = '';
  @Input() displayName: string = '';

  navigateToStreaming() {
    window.open(this.link, '_blank');
  }
}
