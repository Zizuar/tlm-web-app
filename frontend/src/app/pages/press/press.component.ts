import { Component } from '@angular/core';
import { Release } from '../../services/releases.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss'],
})
export class PressComponent {
  releases: Release[] = this.activatedRoute.snapshot.data['releases'];
  constructor(private activatedRoute: ActivatedRoute) {}
}
