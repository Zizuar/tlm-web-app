import { Component } from '@angular/core';
import * as moment from 'moment/moment';
import { Social, SocialsService } from '../../services/socials.service';
import { Observable } from 'rxjs';
import packageJson from '../../../../package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  socials: Observable<Social[]> = this.socialsService.getSocials();
  year: number = moment().year();
  version: string = packageJson.version;

  constructor(private readonly socialsService: SocialsService) {}
}
