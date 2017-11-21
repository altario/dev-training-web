/* tslint:disable */
import { take, map, switchMap, catchError } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { TwoFactorAuthenticationApi } from '../services/index';
import { getTwoFactorAuthenticationById } from '../reducers/TwoFactorAuthentication';
import { TwoFactorAuthenticationActions } from '../actions/TwoFactorAuthentication';

@Injectable()
export class TwoFactorAuthenticationExistsGuard implements CanActivate {
  constructor(
    private store: Store<any>,
    private TwoFactorAuthentication: TwoFactorAuthenticationApi
  ) {}

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.hasEntity(route.params['TwoFactorAuthenticationId'] || route.params['id']);
  }

  protected hasEntityInStore(id: string): Observable<boolean> {
    return this.store.select(getTwoFactorAuthenticationById(id)).pipe(
      map((entitie) => !!entitie),
      take(1)
    );
  }

  protected hasEntityInApi(id: string): Observable<boolean> {
    return this.TwoFactorAuthentication.exists(id).pipe(
      map((response: any) => !!response.exists),
      catchError(() => {
        this.store.dispatch(new TwoFactorAuthenticationActions.guardFail());
        return of(false);
      })
    );
  }

  protected hasEntity(id: string): Observable<boolean> {
    return this.hasEntityInStore(id).pipe(
      switchMap((inStore) => {
        if (inStore) {
          return of(inStore);
        }

        return this.hasEntityInApi(id);
      })
    );
  }
}
