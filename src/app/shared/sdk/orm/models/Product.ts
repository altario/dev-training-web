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
import { Product, ProductInterface, LoopBackFilter } from '../../models';
import { ProductActions } from '../../actions';

export class OrmProduct extends OrmBase<Product | ProductInterface> {
  constructor(protected store: Store<Product>, protected realTime?: RealTime) {
    super(store, Product, ProductActions, realTime);
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
  
	public findByIdReviews(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.reviews.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdReviews(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.reviews.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdReviews(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdReviews(id, fk, meta));
  }
  
	public updateByIdReviews(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdReviews(id, fk, data, meta));
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
  
	public findByIdCategories(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.categories.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdCategories(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.categories.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public linkCategories(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.linkCategories(id, fk, data, meta));
  }
  
	public unlinkCategories(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.unlinkCategories(id, fk, meta));
  }
  
	public getS3Photo(id: any, refresh: any = {}, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.s3Photo.model + 's')
        .pipe(
          map((state: any) => state.entities[id]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getS3Photo(id, refresh, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.s3Photo.model + 's')
        .pipe(map((state: any) => state.entities[id]));
    }
    
  }
  
	public createS3Photo(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createS3Photo(id, data, meta));
  }
  
	public updateS3Photo(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateS3Photo(id, data, meta));
  }
  
	public destroyS3Photo(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyS3Photo(id, meta));
  }
  
	public getReviews(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.reviews.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.reviews.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'reviews', Product)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.reviews.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getReviews(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.reviews.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'reviews', Product))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.reviews.model]);
    }
    
  }
	
	public createReviews(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createReviews(id, data, meta));
  }
  
	public deleteReviews(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteReviews(id, meta));
  }
  
	public getReports(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.reports.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.reports.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'reports', Product)),
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
            map((state: any[]) => filterById(state, id, 'reports', Product))
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
  
	public getCategories(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.categories.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.categories.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'categories', Product)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.categories.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getCategories(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.categories.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'categories', Product))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.categories.model]);
    }
    
  }
	
	public s3PUTSignedUrl(id: any, key: any = {}, options: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.s3PUTSignedUrl(id, key, options, meta));
  }
  
	public s3GETSignedUrl(id: any, key: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.s3GETSignedUrl(id, key, meta));
  }
  
	public createManyS3Photo(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyS3Photo(id, data, meta));
  }
  
	public createManyReviews(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyReviews(id, data, meta));
  }
  
	public createManyReports(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyReports(id, data, meta));
  }
  }
