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
import { Device, DeviceInterface, LoopBackFilter } from '../../models';
import { DeviceActions } from '../../actions';

export class OrmDevice extends OrmBase<Device | DeviceInterface> {
  constructor(protected store: Store<Device>, protected realTime?: RealTime) {
    super(store, Device, DeviceActions, realTime);
  }

	public findByApp(deviceType: any = {}, appId: any = {}, appVersion: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.findByApp(deviceType, appId, appVersion, meta));
  }
  
	public findByUser(deviceType: any = {}, userId: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.findByUser(deviceType, userId, meta));
  }
  
	public findBySubscriptions(deviceType: any = {}, subscriptions: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.findBySubscriptions(deviceType, subscriptions, meta));
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
