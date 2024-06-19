import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PressReleaseService } from '../../../../services/press-release.service';
import { ExistingPressRelease } from '../../../../core/models/press-release.model';

@Injectable({
  providedIn: 'root',
})
export class PressReleaseDetailsResolver {
  constructor(
    private readonly pressReleasesService: PressReleaseService,
    private readonly router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ExistingPressRelease | null> {
    return this.pressReleasesService.getPressReleases().pipe(
      map<ExistingPressRelease[], ExistingPressRelease | null>((releases) => {
        const release = releases.find((release) => release.songId === route.params['songId']);
        if (release) {
          return release;
        }
        this.router.navigateByUrl('/press', { replaceUrl: true });
        return null;
      }),
    );
  }
}
