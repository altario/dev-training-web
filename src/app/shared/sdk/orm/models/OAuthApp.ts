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
import { OAuthApp, OAuthAppInterface, LoopBackFilter } from '../../models';
import { OAuthAppActions } from '../../actions';

export class OrmOAuthApp extends OrmBase<OAuthApp | OAuthAppInterface> {
  constructor(protected store: Store<OAuthApp>, protected realTime?: RealTime) {
    super(store, OAuthApp, OAuthAppActions, realTime);
  }

	public keysReset(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.keysReset(id, meta));
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
  
	public getOrganization(id: any, refresh: any = {}, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.organization.model + 's')
        .pipe(
          map((state: any) => state.entities[id]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getOrganization(id, refresh, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.organization.model + 's')
        .pipe(map((state: any) => state.entities[id]));
    }
    
  }
  
	public getS3Logo(id: any, refresh: any = {}, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.s3Logo.model + 's')
        .pipe(
          map((state: any) => state.entities[id]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getS3Logo(id, refresh, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.s3Logo.model + 's')
        .pipe(map((state: any) => state.entities[id]));
    }
    
  }
  
	public createS3Logo(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createS3Logo(id, data, meta));
  }
  
	public updateS3Logo(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateS3Logo(id, data, meta));
  }
  
	public destroyS3Logo(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyS3Logo(id, meta));
  }
  
	public s3PUTSignedUrl(id: any, key: any = {}, options: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.s3PUTSignedUrl(id, key, options, meta));
  }
  
	public s3GETSignedUrl(id: any, key: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.s3GETSignedUrl(id, key, meta));
  }
  
	public createManyS3Logo(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyS3Logo(id, data, meta));
  }
  }
