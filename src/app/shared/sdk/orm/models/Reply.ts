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
import { Reply, ReplyInterface, LoopBackFilter } from '../../models';
import { ReplyActions } from '../../actions';

export class OrmReply extends OrmBase<Reply | ReplyInterface> {
  constructor(protected store: Store<Reply>, protected realTime?: RealTime) {
    super(store, Reply, ReplyActions, realTime);
  }

	public getReply(id: any, refresh: any = {}, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.reply.model + 's')
        .pipe(
          map((state: any) => state.entities[id]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getReply(id, refresh, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.reply.model + 's')
        .pipe(map((state: any) => state.entities[id]));
    }
    
  }
  
	public getReplying(id: any, refresh: any = {}, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.replying.model + 's')
        .pipe(
          map((state: any) => state.entities[id]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getReplying(id, refresh, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.replying.model + 's')
        .pipe(map((state: any) => state.entities[id]));
    }
    
  }
  
	public findByIdReports(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.reports.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdReports(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.reports.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdReports(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdReports(id, fk, meta));
  }
  
	public updateByIdReports(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdReports(id, fk, data, meta));
  }
  
	public getReports(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.reports.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.reports.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'reports', Reply)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.reports.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getReports(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.reports.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'reports', Reply))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.reports.model]);
    }
    
  }
	
	public createReports(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createReports(id, data, meta));
  }
  
	public deleteReports(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteReports(id, meta));
  }
  
	public createManyReports(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyReports(id, data, meta));
  }
  }
