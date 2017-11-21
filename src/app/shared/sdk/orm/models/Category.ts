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
import { Category, CategoryInterface, LoopBackFilter } from '../../models';
import { CategoryActions } from '../../actions';

export class OrmCategory extends OrmBase<Category | CategoryInterface> {
  constructor(protected store: Store<Category>, protected realTime?: RealTime) {
    super(store, Category, CategoryActions, realTime);
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
  
	public destroyByIdCategories(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdCategories(id, fk, meta));
  }
  
	public updateByIdCategories(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdCategories(id, fk, data, meta));
  }
  
	public getParent(id: any, refresh: any = {}, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.parent.model + 's')
        .pipe(
          map((state: any) => state.entities[id]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getParent(id, refresh, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.parent.model + 's')
        .pipe(map((state: any) => state.entities[id]));
    }
    
  }
  
	public findByIdProducts(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.products.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdProducts(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.products.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public getCategories(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.categories.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.categories.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'categories', Category)),
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
            map((state: any[]) => filterById(state, id, 'categories', Category))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.categories.model]);
    }
    
  }
	
	public createCategories(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createCategories(id, data, meta));
  }
  
	public deleteCategories(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteCategories(id, meta));
  }
  
	public getProducts(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.products.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.products.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'products', Category)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.products.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getProducts(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.products.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'products', Category))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.products.model]);
    }
    
  }
	
	public createManyCategories(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyCategories(id, data, meta));
  }
  }
