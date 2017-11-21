/* tslint:disable */

import { map, finalize } from 'rxjs/operators'
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { RealTime } from '../../services';
import { createIO } from '../io';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { OrmBase } from '../base';
import { applyFilter, toArray, filterById } from '../filter';

import * as models from '../../models';
import { TwoFactorAuthentication, TwoFactorAuthenticationInterface, LoopBackFilter } from '../../models';
import { TwoFactorAuthenticationActions } from '../../actions';

export class OrmTwoFactorAuthentication extends OrmBase<TwoFactorAuthentication | TwoFactorAuthenticationInterface> {
  constructor(protected store: Store<TwoFactorAuthentication>, protected realTime?: RealTime) {
    super(store, TwoFactorAuthentication, TwoFactorAuthenticationActions, realTime);
  }

	public verifyTwoFactorAuthentication(id: any, token: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.verifyTwoFactorAuthentication(id, token, meta));
  }
  
	public getTwoFactorAuthentication(id: any, refresh: any = {}, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.twoFactorAuthentication.model + 's')
        .pipe(
          map((state: any) => state.entities[id]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getTwoFactorAuthentication(id, refresh, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.twoFactorAuthentication.model + 's')
        .pipe(map((state: any) => state.entities[id]));
    }
    
  }
  
	public getUser(id: any, refresh: any = {}, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.user.model + 's')
        .pipe(
          map((state: any) => state.entities[id]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getUser(id, refresh, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.user.model + 's')
        .pipe(map((state: any) => state.entities[id]));
    }
    
  }
  }
