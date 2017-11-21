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
import { User, UserInterface, LoopBackFilter } from '../../models';
import { UserActions } from '../../actions';

export class OrmUser extends OrmBase<User | UserInterface> {
  constructor(protected store: Store<User>, protected realTime?: RealTime) {
    super(store, User, UserActions, realTime);
  }

	public sendVerificationCode(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.sendVerificationCode(id, data, meta));
  }
  
	public isAdmin(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.isAdmin(id, meta));
  }
  
	public verifyTwoFactorAuthentication(id: any, token: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.verifyTwoFactorAuthentication(id, token, meta));
  }
  
	public findByIdEmails(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.emails.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdEmails(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.emails.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdEmails(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdEmails(id, fk, meta));
  }
  
	public updateByIdEmails(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdEmails(id, fk, data, meta));
  }
  
	public findByIdPhones(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.phones.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdPhones(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.phones.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdPhones(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdPhones(id, fk, meta));
  }
  
	public updateByIdPhones(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdPhones(id, fk, data, meta));
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
  
	public findByIdIdentities(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.identities.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdIdentities(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.identities.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdIdentities(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdIdentities(id, fk, meta));
  }
  
	public updateByIdIdentities(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdIdentities(id, fk, data, meta));
  }
  
	public findByIdCredentials(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.credentials.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdCredentials(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.credentials.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdCredentials(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdCredentials(id, fk, meta));
  }
  
	public updateByIdCredentials(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdCredentials(id, fk, data, meta));
  }
  
	public findByIdAccessTokens(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.accessTokens.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdAccessTokens(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.accessTokens.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdAccessTokens(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdAccessTokens(id, fk, meta));
  }
  
	public updateByIdAccessTokens(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdAccessTokens(id, fk, data, meta));
  }
  
	public findByIdDevices(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.devices.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdDevices(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.devices.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdDevices(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdDevices(id, fk, meta));
  }
  
	public updateByIdDevices(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdDevices(id, fk, data, meta));
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
  
	public findByIdOrganizations(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.organizations.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdOrganizations(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.organizations.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public destroyByIdOrganizations(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdOrganizations(id, fk, meta));
  }
  
	public updateByIdOrganizations(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdOrganizations(id, fk, data, meta));
  }
  
	public linkOrganizations(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.linkOrganizations(id, fk, data, meta));
  }
  
	public unlinkOrganizations(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.unlinkOrganizations(id, fk, meta));
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
  
	public createTwoFactorAuthentication(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createTwoFactorAuthentication(id, data, meta));
  }
  
	public updateTwoFactorAuthentication(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateTwoFactorAuthentication(id, data, meta));
  }
  
	public destroyTwoFactorAuthentication(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyTwoFactorAuthentication(id, meta));
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
  
	public findByIdInvites(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.invites.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdInvites(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.invites.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public findByIdFollowers(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.followers.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdFollowers(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.followers.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public linkFollowers(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.linkFollowers(id, fk, data, meta));
  }
  
	public unlinkFollowers(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.unlinkFollowers(id, fk, meta));
  }
  
	public findByIdFollowing(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.following.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdFollowing(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.following.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public linkFollowing(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.linkFollowing(id, fk, data, meta));
  }
  
	public unlinkFollowing(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.unlinkFollowing(id, fk, meta));
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
  
	public findByIdShares(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.shares.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdShares(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.shares.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public linkShares(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.linkShares(id, fk, data, meta));
  }
  
	public unlinkShares(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.unlinkShares(id, fk, meta));
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
  
	public findByIdShoppingCart(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.shoppingCart.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdShoppingCart(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.shoppingCart.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public linkShoppingCart(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.linkShoppingCart(id, fk, data, meta));
  }
  
	public unlinkShoppingCart(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.unlinkShoppingCart(id, fk, meta));
  }
  
	public findByIdWishList(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.wishList.model + 's')
        .pipe(
          map((state: any) => state.entities[fk]),
          finalize(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        );
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdWishList(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.wishList.model + 's')
        .pipe(map((state: any) => state.entities[fk]));
    }
    
  }
  
	public linkWishList(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.linkWishList(id, fk, data, meta));
  }
  
	public unlinkWishList(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.unlinkWishList(id, fk, meta));
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
  
	public getEmails(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.emails.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.emails.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'emails', User)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.emails.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getEmails(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.emails.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'emails', User))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.emails.model]);
    }
    
  }
	
	public createEmails(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createEmails(id, data, meta));
  }
  
	public deleteEmails(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteEmails(id, meta));
  }
  
	public getPhones(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.phones.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.phones.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'phones', User)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.phones.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getPhones(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.phones.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'phones', User))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.phones.model]);
    }
    
  }
	
	public createPhones(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createPhones(id, data, meta));
  }
  
	public deletePhones(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deletePhones(id, meta));
  }
  
	public getStripeSources(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.stripeSources.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.stripeSources.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'stripeSources', User)),
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
            map((state: any[]) => filterById(state, id, 'stripeSources', User))
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
            map((state: any[]) => filterById(state, id, 'stripeCharges', User)),
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
            map((state: any[]) => filterById(state, id, 'stripeCharges', User))
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
  
	public getIdentities(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.identities.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.identities.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'identities', User)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.identities.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getIdentities(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.identities.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'identities', User))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.identities.model]);
    }
    
  }
	
	public createIdentities(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createIdentities(id, data, meta));
  }
  
	public deleteIdentities(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteIdentities(id, meta));
  }
  
	public getCredentials(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.credentials.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.credentials.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'credentials', User)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.credentials.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getCredentials(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.credentials.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'credentials', User))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.credentials.model]);
    }
    
  }
	
	public createCredentials(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createCredentials(id, data, meta));
  }
  
	public deleteCredentials(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteCredentials(id, meta));
  }
  
	public getAccessTokens(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.accessTokens.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.accessTokens.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'accessTokens', User)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.accessTokens.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getAccessTokens(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.accessTokens.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'accessTokens', User))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.accessTokens.model]);
    }
    
  }
	
	public createAccessTokens(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createAccessTokens(id, data, meta));
  }
  
	public deleteAccessTokens(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteAccessTokens(id, meta));
  }
  
	public getDevices(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.devices.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.devices.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'devices', User)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.devices.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getDevices(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.devices.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'devices', User))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.devices.model]);
    }
    
  }
	
	public createDevices(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createDevices(id, data, meta));
  }
  
	public deleteDevices(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteDevices(id, meta));
  }
  
	public getNotifications(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.notifications.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.notifications.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'notifications', User)),
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
            map((state: any[]) => filterById(state, id, 'notifications', User))
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
  
	public getRoles(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.roles.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.roles.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'roles', User)),
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
            map((state: any[]) => filterById(state, id, 'roles', User))
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
  
	public getOrganizations(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.organizations.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.organizations.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'organizations', User)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.organizations.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getOrganizations(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.organizations.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'organizations', User))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.organizations.model]);
    }
    
  }
	
	public createOrganizations(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createOrganizations(id, data, meta));
  }
  
	public deleteOrganizations(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteOrganizations(id, meta));
  }
  
	public getSupportTickets(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.supportTickets.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.supportTickets.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'supportTickets', User)),
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
            map((state: any[]) => filterById(state, id, 'supportTickets', User))
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
  
	public getInvites(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.invites.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.invites.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'invites', User)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.invites.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getInvites(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.invites.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'invites', User))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.invites.model]);
    }
    
  }
	
	public createInvites(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createInvites(id, data, meta));
  }
  
	public getFollowers(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.followers.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.followers.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'followers', User)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.followers.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getFollowers(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.followers.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'followers', User))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.followers.model]);
    }
    
  }
	
	public getFollowing(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.following.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.following.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'following', User)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.following.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getFollowing(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.following.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'following', User))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.following.model]);
    }
    
  }
	
	public getPosts(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.posts.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.posts.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'posts', User)),
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
            map((state: any[]) => filterById(state, id, 'posts', User))
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
  
	public getShares(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.shares.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.shares.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'shares', User)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.shares.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getShares(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.shares.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'shares', User))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.shares.model]);
    }
    
  }
	
	public getReports(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.reports.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.reports.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'reports', User)),
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
            map((state: any[]) => filterById(state, id, 'reports', User))
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
  
	public getShoppingCart(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.shoppingCart.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.shoppingCart.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'shoppingCart', User)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.shoppingCart.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getShoppingCart(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.shoppingCart.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'shoppingCart', User))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.shoppingCart.model]);
    }
    
  }
	
	public getWishList(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.wishList.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.wishList.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'wishList', User)),
            finalize(() => {
              destroyStream$.next(1);
              destroyStream$.complete();
            })
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.wishList.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getWishList(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.wishList.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'wishList', User))
          )
        , filter, this.store, models[this.model.getModelDefinition().relations.wishList.model]);
    }
    
  }
	
	public getReviews(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.reviews.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.reviews.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'reviews', User)),
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
            map((state: any[]) => filterById(state, id, 'reviews', User))
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
  
	public getOAuthClientApplications(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.oAuthClientApplications.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.oAuthClientApplications.model + 's')
          .pipe(
            map(toArray),
            map((state: any[]) => filterById(state, id, 'oAuthClientApplications', User)),
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
            map((state: any[]) => filterById(state, id, 'oAuthClientApplications', User))
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
  
	public login(credentials: any, include: any = 'user', rememberMe: boolean = true, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.login(credentials, include, meta));
  }
  
	public logout(meta?: any): void {
    this.store.dispatch(new this.actions.logout(meta));
  }
  
	public verify(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.verify(id, meta));
  }
  
	public confirm(uid: any, token: any, redirect: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.confirm(uid, token, redirect, meta));
  }
  
	public resetPassword(options: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.resetPassword(options, meta));
  }
  
	public changePassword(oldPassword: any, newPassword: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.changePassword(oldPassword, newPassword, meta));
  }
  
	public setPassword(newPassword: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.setPassword(newPassword, meta));
  }
  
	public setPrimaryEmail(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.setPrimaryEmail(id, fk, meta));
  }
  
	public setPrimaryPhone(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.setPrimaryPhone(id, fk, meta));
  }
  
	public s3PUTSignedUrl(id: any, key: any = {}, options: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.s3PUTSignedUrl(id, key, options, meta));
  }
  
	public s3GETSignedUrl(id: any, key: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.s3GETSignedUrl(id, key, meta));
  }
  
	public activate(uid: any, token: any, redirect: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.activate(uid, token, redirect, meta));
  }
  
	public adminInvite(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.adminInvite(id, data, meta));
  }
  
	public createManyStripeCustomer(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyStripeCustomer(id, data, meta));
  }
  
	public createManyS3Photo(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyS3Photo(id, data, meta));
  }
  
	public createManyTwoFactorAuthentication(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyTwoFactorAuthentication(id, data, meta));
  }
  
	public createManyEmails(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyEmails(id, data, meta));
  }
  
	public createManyPhones(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyPhones(id, data, meta));
  }
  
	public createManyStripeSources(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyStripeSources(id, data, meta));
  }
  
	public createManyStripeCharges(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyStripeCharges(id, data, meta));
  }
  
	public createManyIdentities(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyIdentities(id, data, meta));
  }
  
	public createManyCredentials(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyCredentials(id, data, meta));
  }
  
	public createManyAccessTokens(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyAccessTokens(id, data, meta));
  }
  
	public createManyDevices(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyDevices(id, data, meta));
  }
  
	public createManyNotifications(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyNotifications(id, data, meta));
  }
  
	public createManyRoles(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyRoles(id, data, meta));
  }
  
	public createManyOrganizations(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyOrganizations(id, data, meta));
  }
  
	public createManySupportTickets(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManySupportTickets(id, data, meta));
  }
  
	public createManyInvites(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyInvites(id, data, meta));
  }
  
	public createManyPosts(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyPosts(id, data, meta));
  }
  
	public createManyReports(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyReports(id, data, meta));
  }
  
	public createManyReviews(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyReviews(id, data, meta));
  }
  
	public createManyOAuthClientApplications(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyOAuthClientApplications(id, data, meta));
  }
  
  public signup(credentials: any, meta?: any): void {
    this.store.dispatch(new this.actions.signup(credentials, meta));
  }

}
