import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { ExistingRelease } from '../../../../core/models/release.model';

@Component({
  selector: 'app-release-item',
  templateUrl: './release-item.component.html',
  styleUrls: ['./release-item.component.scss'],
})
export class ReleaseItemComponent implements OnInit {
  @Input() release!: ExistingRelease;
  now = Date.now();
  isReleased: boolean = true;

  environment = environment;

  ngOnInit(): void {
    this.isReleased = Date.parse(this.release.releaseDate.toString()) < this.now;
  }
}
