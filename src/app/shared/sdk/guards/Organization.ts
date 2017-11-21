/* tslint:disable */
import { take, map, switchMap, catchError } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { OrganizationApi } from '../services/index';
import { getOrganizationById } from '../reducers/Organization';
import { OrganizationActions } from '../actions/Organization';

@Injectable()
export class OrganizationExistsGuard implements CanActivate {
  constructor(
    private store: Store<any>,
    private Organization: OrganizationApi
  ) {}

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.hasEntity(route.params['OrganizationId'] || route.params['id']);
  }

  protected hasEntityInStore(id: string): Observable<boolean> {
    return this.store.select(getOrganizationById(id)).pipe(
      map((entitie) => !!entitie),
      take(1)
    );
  }

  protected hasEntityInApi(id: string): Observable<boolean> {
    return this.Organization.exists(id).pipe(
      map((response: any) => !!response.exists),
      catchError(() => {
        this.store.dispatch(new OrganizationActions.guardFail());
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
