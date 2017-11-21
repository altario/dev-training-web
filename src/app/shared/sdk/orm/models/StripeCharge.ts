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
import { StripeCharge, StripeChargeInterface, LoopBackFilter } from '../../models';
import { StripeChargeActions } from '../../actions';

export class OrmStripeCharge extends OrmBase<StripeCharge | StripeChargeInterface> {
  constructor(protected store: Store<StripeCharge>, protected realTime?: RealTime) {
    super(store, StripeCharge, StripeChargeActions, realTime);
  }

	public getStripeSource(id: any, refresh: any = {}, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeSource.model + 's')
        .pipe(
          map((state: any) => state.entities[id]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getStripeSource(id, refresh, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeSource.model + 's')
        .pipe(map((state: any) => state.entities[id]));
    }
    
  }
  }
