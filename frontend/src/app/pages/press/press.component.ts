import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExistingRelease } from '../../core/models/release.model';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss'],
})
export class PressComponent {
  releases: ExistingRelease[] = this.activatedRoute.snapshot.data['releases'];

  constructor(private activatedRoute: ActivatedRoute) {}
}
