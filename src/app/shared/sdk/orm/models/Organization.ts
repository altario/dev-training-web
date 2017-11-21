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
import { Organization, OrganizationInterface, LoopBackFilter } from '../../models';
import { OrganizationActions } from '../../actions';

export class OrmOrganization extends OrmBase<Organization | OrganizationInterface> {
  constructor(protected store: Store<Organization>, protected realTime?: RealTime) {
    super(store, Organization, OrganizationActions, realTime);
  }

	public stripeAuthenticateCallback(req: any = {}, res: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.stripeAuthenticateCallback(req, res, meta));
  }
  
	public stripeAuthenticate(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.stripeAuthenticate(id, meta));
  }
  
	public findByIdUsers(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.users.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdUsers(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.users.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdUsers(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdUsers(id, fk, meta));
  }
  
	public updateByIdUsers(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdUsers(id, fk, data, meta));
  }
  
	public linkUsers(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.linkUsers(id, fk, data, meta));
  }
  
	public unlinkUsers(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.unlinkUsers(id, fk, meta));
  }
  
	public findByIdRoles(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.roles.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdRoles(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.roles.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdRoles(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdRoles(id, fk, meta));
  }
  
	public updateByIdRoles(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdRoles(id, fk, data, meta));
  }
  
	public findByIdNotifications(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.notifications.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdNotifications(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.notifications.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdNotifications(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdNotifications(id, fk, meta));
  }
  
	public updateByIdNotifications(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdNotifications(id, fk, data, meta));
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
  
	public getStripeCustomer(id: any, refresh: any = {}, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeCustomer.model + 's')
        .pipe(
          map((state: any) => state.entities[id]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getStripeCustomer(id, refresh, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeCustomer.model + 's')
        .pipe(map((state: any) => state.entities[id]));
    }
    
  }
  
	public createStripeCustomer(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createStripeCustomer(id, data, meta));
  }
  
	public updateStripeCustomer(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateStripeCustomer(id, data, meta));
  }
  
	public destroyStripeCustomer(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyStripeCustomer(id, meta));
  }
  
	public findByIdStripeSources(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeSources.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdStripeSources(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeSources.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdStripeSources(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdStripeSources(id, fk, meta));
  }
  
	public updateByIdStripeSources(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdStripeSources(id, fk, data, meta));
  }
  
	public findByIdStripeCharges(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeCharges.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdStripeCharges(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeCharges.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdStripeCharges(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdStripeCharges(id, fk, meta));
  }
  
	public updateByIdStripeCharges(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdStripeCharges(id, fk, data, meta));
  }
  
	public getStripeStoreIdentity(id: any, refresh: any = {}, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeStoreIdentity.model + 's')
        .pipe(
          map((state: any) => state.entities[id]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getStripeStoreIdentity(id, refresh, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeStoreIdentity.model + 's')
        .pipe(map((state: any) => state.entities[id]));
    }
    
  }
  
	public createStripeStoreIdentity(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createStripeStoreIdentity(id, data, meta));
  }
  
	public updateStripeStoreIdentity(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateStripeStoreIdentity(id, data, meta));
  }
  
	public destroyStripeStoreIdentity(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyStripeStoreIdentity(id, meta));
  }
  
	public findByIdSupportTickets(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.supportTickets.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdSupportTickets(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.supportTickets.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdSupportTickets(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdSupportTickets(id, fk, meta));
  }
  
	public updateByIdSupportTickets(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdSupportTickets(id, fk, data, meta));
  }
  
	public findByIdPosts(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.posts.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdPosts(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.posts.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdPosts(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdPosts(id, fk, meta));
  }
  
	public updateByIdPosts(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdPosts(id, fk, data, meta));
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
  
	public destroyByIdProducts(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdProducts(id, fk, meta));
  }
  
	public updateByIdProducts(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdProducts(id, fk, data, meta));
  }
  
	public findByIdSubscriptions(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.subscriptions.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdSubscriptions(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.subscriptions.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdSubscriptions(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdSubscriptions(id, fk, meta));
  }
  
	public updateByIdSubscriptions(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdSubscriptions(id, fk, data, meta));
  }
  
	public findByIdOAuthClientApplications(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.oAuthClientApplications.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdOAuthClientApplications(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.oAuthClientApplications.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdOAuthClientApplications(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdOAuthClientApplications(id, fk, meta));
  }
  
	public updateByIdOAuthClientApplications(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdOAuthClientApplications(id, fk, data, meta));
  }
  
	public getUsers(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.users.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.users.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'users', Organization)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.users.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getUsers(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.users.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'users', Organization))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.users.model]);
    }
    
  }
	
	public createUsers(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createUsers(id, data, meta));
  }
  
	public deleteUsers(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteUsers(id, meta));
  }
  
	public getRoles(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.roles.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.roles.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'roles', Organization)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.roles.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getRoles(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.roles.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'roles', Organization))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.roles.model]);
    }
    
  }
	
	public createRoles(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createRoles(id, data, meta));
  }
  
	public deleteRoles(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteRoles(id, meta));
  }
  
	public getNotifications(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.notifications.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.notifications.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'notifications', Organization)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.notifications.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getNotifications(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.notifications.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'notifications', Organization))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.notifications.model]);
    }
    
  }
	
	public createNotifications(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createNotifications(id, data, meta));
  }
  
	public deleteNotifications(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteNotifications(id, meta));
  }
  
	public getStripeSources(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.stripeSources.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.stripeSources.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'stripeSources', Organization)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.stripeSources.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getStripeSources(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.stripeSources.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'stripeSources', Organization))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.stripeSources.model]);
    }
    
  }
	
	public createStripeSources(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createStripeSources(id, data, meta));
  }
  
	public deleteStripeSources(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteStripeSources(id, meta));
  }
  
	public getStripeCharges(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.stripeCharges.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.stripeCharges.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'stripeCharges', Organization)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.stripeCharges.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getStripeCharges(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.stripeCharges.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'stripeCharges', Organization))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.stripeCharges.model]);
    }
    
  }
	
	public createStripeCharges(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createStripeCharges(id, data, meta));
  }
  
	public deleteStripeCharges(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteStripeCharges(id, meta));
  }
  
	public getSupportTickets(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.supportTickets.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.supportTickets.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'supportTickets', Organization)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.supportTickets.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getSupportTickets(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.supportTickets.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'supportTickets', Organization))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.supportTickets.model]);
    }
    
  }
	
	public createSupportTickets(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createSupportTickets(id, data, meta));
  }
  
	public deleteSupportTickets(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteSupportTickets(id, meta));
  }
  
	public getPosts(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.posts.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.posts.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'posts', Organization)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.posts.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getPosts(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.posts.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'posts', Organization))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.posts.model]);
    }
    
  }
	
	public createPosts(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createPosts(id, data, meta));
  }
  
	public deletePosts(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deletePosts(id, meta));
  }
  
	public getProducts(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.products.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.products.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'products', Organization)),
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
            map((state: any[]) => filterById(state, id, 'products', Organization))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.products.model]);
    }
    
  }
	
	public createProducts(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createProducts(id, data, meta));
  }
  
	public deleteProducts(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteProducts(id, meta));
  }
  
	public getSubscriptions(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.subscriptions.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.subscriptions.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'subscriptions', Organization)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.subscriptions.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getSubscriptions(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.subscriptions.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'subscriptions', Organization))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.subscriptions.model]);
    }
    
  }
	
	public createSubscriptions(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createSubscriptions(id, data, meta));
  }
  
	public deleteSubscriptions(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteSubscriptions(id, meta));
  }
  
	public getOAuthClientApplications(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.oAuthClientApplications.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.oAuthClientApplications.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'oAuthClientApplications', Organization)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.oAuthClientApplications.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getOAuthClientApplications(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.oAuthClientApplications.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'oAuthClientApplications', Organization))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.oAuthClientApplications.model]);
    }
    
  }
	
	public createOAuthClientApplications(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createOAuthClientApplications(id, data, meta));
  }
  
	public deleteOAuthClientApplications(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteOAuthClientApplications(id, meta));
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
  
	public createManyStripeCustomer(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyStripeCustomer(id, data, meta));
  }
  
	public createManyStripeStoreIdentity(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyStripeStoreIdentity(id, data, meta));
  }
  
	public createManyUsers(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyUsers(id, data, meta));
  }
  
	public createManyRoles(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyRoles(id, data, meta));
  }
  
	public createManyNotifications(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyNotifications(id, data, meta));
  }
  
	public createManyStripeSources(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyStripeSources(id, data, meta));
  }
  
	public createManyStripeCharges(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyStripeCharges(id, data, meta));
  }
  
	public createManySupportTickets(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManySupportTickets(id, data, meta));
  }
  
	public createManyPosts(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyPosts(id, data, meta));
  }
  
	public createManyProducts(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyProducts(id, data, meta));
  }
  
	public createManySubscriptions(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManySubscriptions(id, data, meta));
  }
  
	public createManyOAuthClientApplications(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyOAuthClientApplications(id, data, meta));
  }
  }
