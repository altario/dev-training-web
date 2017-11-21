/* tslint:disable */
import { map, catchError, mergeMap } from 'rxjs/operators'
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';
import { Injectable, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { LoopbackAction } from '../models/BaseModels';
import { BaseLoopbackEffects } from './base';
import { resolver } from './resolver';

import * as actions from '../actions';
import { UserActionTypes, UserActions } from '../actions/User';
import { LoopbackErrorActions } from '../actions/error';
import { UserApi } from '../services/index';

@Injectable()
export class UserEffects extends BaseLoopbackEffects {
  @Effect()
  public sendVerificationCode$ = this.actions$
    .ofType(UserActionTypes.SEND_VERIFICATION_CODE).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.sendVerificationCode(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.sendVerificationCodeSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.sendVerificationCodeFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public isAdmin$ = this.actions$
    .ofType(UserActionTypes.IS_ADMIN).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.isAdmin(action.payload.id).pipe(
          map((response: any) => new UserActions.isAdminSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.isAdminFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public verifyTwoFactorAuthentication$ = this.actions$
    .ofType(UserActionTypes.VERIFY_TWO_FACTOR_AUTHENTICATION).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.verifyTwoFactorAuthentication(action.payload.id, action.payload.token).pipe(
          map((response: any) => new UserActions.verifyTwoFactorAuthenticationSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.verifyTwoFactorAuthenticationFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdEmails$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_EMAILS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdEmails(action.payload.id, action.payload.fk).pipe(
          map((response: any) => new UserActions.findByIdEmailsSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.findByIdEmailsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdEmails$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_EMAILS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyByIdEmails(action.payload.id, action.payload.fk).pipe(
          map((response: any) => new UserActions.destroyByIdEmailsSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.destroyByIdEmailsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdEmails$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_EMAILS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateByIdEmails(action.payload.id, action.payload.fk, action.payload.data).pipe(
          map((response: any) => new UserActions.updateByIdEmailsSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.updateByIdEmailsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdPhones$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_PHONES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdPhones(action.payload.id, action.payload.fk).pipe(
          map((response: any) => new UserActions.findByIdPhonesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.findByIdPhonesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdPhones$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_PHONES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyByIdPhones(action.payload.id, action.payload.fk).pipe(
          map((response: any) => new UserActions.destroyByIdPhonesSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.destroyByIdPhonesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdPhones$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_PHONES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateByIdPhones(action.payload.id, action.payload.fk, action.payload.data).pipe(
          map((response: any) => new UserActions.updateByIdPhonesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.updateByIdPhonesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getStripeCustomer$ = this.actions$
    .ofType(UserActionTypes.GET_STRIPECUSTOMER).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getStripeCustomer(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'StripeCustomer', 'findSuccess'),
            of(new UserActions.getStripeCustomerSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getStripeCustomerFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createStripeCustomer$ = this.actions$
    .ofType(UserActionTypes.CREATE_STRIPECUSTOMER).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createStripeCustomer(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'StripeCustomer', 'findSuccess'),
            of(new UserActions.createStripeCustomerSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createStripeCustomerFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateStripeCustomer$ = this.actions$
    .ofType(UserActionTypes.UPDATE_STRIPECUSTOMER).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateStripeCustomer(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.updateStripeCustomerSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.updateStripeCustomerFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyStripeCustomer$ = this.actions$
    .ofType(UserActionTypes.DESTROY_STRIPECUSTOMER).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyStripeCustomer(action.payload.id).pipe(
          map((response: any) => new UserActions.destroyStripeCustomerSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.destroyStripeCustomerFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdStripeSources$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_STRIPESOURCES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdStripeSources(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'StripeSource', 'findByIdSuccess'),
            of(new UserActions.findByIdStripeSourcesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.findByIdStripeSourcesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdStripeSources$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_STRIPESOURCES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyByIdStripeSources(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'StripeSource', 'deleteByIdSuccess'),
            of(new UserActions.destroyByIdStripeSourcesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.destroyByIdStripeSourcesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdStripeSources$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_STRIPESOURCES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateByIdStripeSources(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'StripeSource', 'findByIdSuccess'),
            of(new UserActions.updateByIdStripeSourcesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.updateByIdStripeSourcesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdStripeCharges$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_STRIPECHARGES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdStripeCharges(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'StripeCharge', 'findByIdSuccess'),
            of(new UserActions.findByIdStripeChargesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.findByIdStripeChargesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdStripeCharges$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_STRIPECHARGES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyByIdStripeCharges(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'StripeCharge', 'deleteByIdSuccess'),
            of(new UserActions.destroyByIdStripeChargesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.destroyByIdStripeChargesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdStripeCharges$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_STRIPECHARGES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateByIdStripeCharges(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'StripeCharge', 'findByIdSuccess'),
            of(new UserActions.updateByIdStripeChargesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.updateByIdStripeChargesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdIdentities$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_IDENTITIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdIdentities(action.payload.id, action.payload.fk).pipe(
          map((response: any) => new UserActions.findByIdIdentitiesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.findByIdIdentitiesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdIdentities$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_IDENTITIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyByIdIdentities(action.payload.id, action.payload.fk).pipe(
          map((response: any) => new UserActions.destroyByIdIdentitiesSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.destroyByIdIdentitiesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdIdentities$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_IDENTITIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateByIdIdentities(action.payload.id, action.payload.fk, action.payload.data).pipe(
          map((response: any) => new UserActions.updateByIdIdentitiesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.updateByIdIdentitiesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdCredentials$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_CREDENTIALS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdCredentials(action.payload.id, action.payload.fk).pipe(
          map((response: any) => new UserActions.findByIdCredentialsSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.findByIdCredentialsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdCredentials$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_CREDENTIALS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyByIdCredentials(action.payload.id, action.payload.fk).pipe(
          map((response: any) => new UserActions.destroyByIdCredentialsSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.destroyByIdCredentialsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdCredentials$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_CREDENTIALS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateByIdCredentials(action.payload.id, action.payload.fk, action.payload.data).pipe(
          map((response: any) => new UserActions.updateByIdCredentialsSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.updateByIdCredentialsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdAccessTokens$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_ACCESSTOKENS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdAccessTokens(action.payload.id, action.payload.fk).pipe(
          map((response: any) => new UserActions.findByIdAccessTokensSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.findByIdAccessTokensFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdAccessTokens$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_ACCESSTOKENS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyByIdAccessTokens(action.payload.id, action.payload.fk).pipe(
          map((response: any) => new UserActions.destroyByIdAccessTokensSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.destroyByIdAccessTokensFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdAccessTokens$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_ACCESSTOKENS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateByIdAccessTokens(action.payload.id, action.payload.fk, action.payload.data).pipe(
          map((response: any) => new UserActions.updateByIdAccessTokensSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.updateByIdAccessTokensFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdDevices$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_DEVICES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdDevices(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Device', 'findByIdSuccess'),
            of(new UserActions.findByIdDevicesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.findByIdDevicesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdDevices$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_DEVICES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyByIdDevices(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Device', 'deleteByIdSuccess'),
            of(new UserActions.destroyByIdDevicesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.destroyByIdDevicesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdDevices$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_DEVICES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateByIdDevices(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Device', 'findByIdSuccess'),
            of(new UserActions.updateByIdDevicesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.updateByIdDevicesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdNotifications$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_NOTIFICATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdNotifications(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'UserNotification', 'findByIdSuccess'),
            of(new UserActions.findByIdNotificationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.findByIdNotificationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdNotifications$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_NOTIFICATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyByIdNotifications(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'UserNotification', 'deleteByIdSuccess'),
            of(new UserActions.destroyByIdNotificationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.destroyByIdNotificationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdNotifications$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_NOTIFICATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateByIdNotifications(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'UserNotification', 'findByIdSuccess'),
            of(new UserActions.updateByIdNotificationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.updateByIdNotificationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdRoles$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_ROLES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdRoles(action.payload.id, action.payload.fk).pipe(
          map((response: any) => new UserActions.findByIdRolesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.findByIdRolesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdRoles$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_ROLES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyByIdRoles(action.payload.id, action.payload.fk).pipe(
          map((response: any) => new UserActions.destroyByIdRolesSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.destroyByIdRolesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdRoles$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_ROLES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateByIdRoles(action.payload.id, action.payload.fk, action.payload.data).pipe(
          map((response: any) => new UserActions.updateByIdRolesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.updateByIdRolesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getS3Photo$ = this.actions$
    .ofType(UserActionTypes.GET_S3PHOTO).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getS3Photo(action.payload.id, action.payload.refresh).pipe(
          map((response: any) => new UserActions.getS3PhotoSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.getS3PhotoFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createS3Photo$ = this.actions$
    .ofType(UserActionTypes.CREATE_S3PHOTO).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createS3Photo(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.createS3PhotoSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.createS3PhotoFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateS3Photo$ = this.actions$
    .ofType(UserActionTypes.UPDATE_S3PHOTO).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateS3Photo(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.updateS3PhotoSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.updateS3PhotoFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyS3Photo$ = this.actions$
    .ofType(UserActionTypes.DESTROY_S3PHOTO).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyS3Photo(action.payload.id).pipe(
          map((response: any) => new UserActions.destroyS3PhotoSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.destroyS3PhotoFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdOrganizations$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_ORGANIZATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdOrganizations(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Organization', 'findByIdSuccess'),
            of(new UserActions.findByIdOrganizationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.findByIdOrganizationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdOrganizations$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_ORGANIZATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyByIdOrganizations(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Organization', 'deleteByIdSuccess'),
            of(new UserActions.destroyByIdOrganizationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.destroyByIdOrganizationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdOrganizations$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_ORGANIZATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateByIdOrganizations(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Organization', 'findByIdSuccess'),
            of(new UserActions.updateByIdOrganizationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.updateByIdOrganizationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public linkOrganizations$ = this.actions$
    .ofType(UserActionTypes.LINK_ORGANIZATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.linkOrganizations(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
          of(new actions['UserRoleActions'].createSuccess(response, action.meta)),
          of(new UserActions.linkOrganizationsSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new UserActions.linkOrganizationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public unlinkOrganizations$ = this.actions$
    .ofType(UserActionTypes.UNLINK_ORGANIZATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.unlinkOrganizations(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
          of(new actions['UserRoleActions'].deleteByIdSuccess(response.id, action.meta)),
          of(new UserActions.unlinkOrganizationsSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new UserActions.unlinkOrganizationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getTwoFactorAuthentication$ = this.actions$
    .ofType(UserActionTypes.GET_TWOFACTORAUTHENTICATION).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getTwoFactorAuthentication(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'TwoFactorAuthentication', 'findSuccess'),
            of(new UserActions.getTwoFactorAuthenticationSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getTwoFactorAuthenticationFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createTwoFactorAuthentication$ = this.actions$
    .ofType(UserActionTypes.CREATE_TWOFACTORAUTHENTICATION).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createTwoFactorAuthentication(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'TwoFactorAuthentication', 'findSuccess'),
            of(new UserActions.createTwoFactorAuthenticationSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createTwoFactorAuthenticationFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateTwoFactorAuthentication$ = this.actions$
    .ofType(UserActionTypes.UPDATE_TWOFACTORAUTHENTICATION).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateTwoFactorAuthentication(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.updateTwoFactorAuthenticationSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.updateTwoFactorAuthenticationFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyTwoFactorAuthentication$ = this.actions$
    .ofType(UserActionTypes.DESTROY_TWOFACTORAUTHENTICATION).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyTwoFactorAuthentication(action.payload.id).pipe(
          map((response: any) => new UserActions.destroyTwoFactorAuthenticationSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.destroyTwoFactorAuthenticationFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdSupportTickets$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_SUPPORTTICKETS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdSupportTickets(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'SupportTicket', 'findByIdSuccess'),
            of(new UserActions.findByIdSupportTicketsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.findByIdSupportTicketsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdSupportTickets$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_SUPPORTTICKETS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyByIdSupportTickets(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'SupportTicket', 'deleteByIdSuccess'),
            of(new UserActions.destroyByIdSupportTicketsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.destroyByIdSupportTicketsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdSupportTickets$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_SUPPORTTICKETS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateByIdSupportTickets(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'SupportTicket', 'findByIdSuccess'),
            of(new UserActions.updateByIdSupportTicketsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.updateByIdSupportTicketsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdInvites$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_INVITES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdInvites(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Invite', 'findByIdSuccess'),
            of(new UserActions.findByIdInvitesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.findByIdInvitesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdFollowers$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_FOLLOWERS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdFollowers(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'User', 'findByIdSuccess'),
            of(new UserActions.findByIdFollowersSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.findByIdFollowersFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public linkFollowers$ = this.actions$
    .ofType(UserActionTypes.LINK_FOLLOWERS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.linkFollowers(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
          of(new actions['FollowActions'].createSuccess(response, action.meta)),
          of(new UserActions.linkFollowersSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new UserActions.linkFollowersFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public unlinkFollowers$ = this.actions$
    .ofType(UserActionTypes.UNLINK_FOLLOWERS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.unlinkFollowers(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
          of(new actions['FollowActions'].deleteByIdSuccess(response.id, action.meta)),
          of(new UserActions.unlinkFollowersSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new UserActions.unlinkFollowersFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdFollowing$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_FOLLOWING).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdFollowing(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'User', 'findByIdSuccess'),
            of(new UserActions.findByIdFollowingSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.findByIdFollowingFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public linkFollowing$ = this.actions$
    .ofType(UserActionTypes.LINK_FOLLOWING).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.linkFollowing(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
          of(new actions['FollowActions'].createSuccess(response, action.meta)),
          of(new UserActions.linkFollowingSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new UserActions.linkFollowingFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public unlinkFollowing$ = this.actions$
    .ofType(UserActionTypes.UNLINK_FOLLOWING).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.unlinkFollowing(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
          of(new actions['FollowActions'].deleteByIdSuccess(response.id, action.meta)),
          of(new UserActions.unlinkFollowingSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new UserActions.unlinkFollowingFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdPosts$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_POSTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdPosts(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Post', 'findByIdSuccess'),
            of(new UserActions.findByIdPostsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.findByIdPostsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdPosts$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_POSTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyByIdPosts(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Post', 'deleteByIdSuccess'),
            of(new UserActions.destroyByIdPostsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.destroyByIdPostsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdPosts$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_POSTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateByIdPosts(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Post', 'findByIdSuccess'),
            of(new UserActions.updateByIdPostsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.updateByIdPostsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdShares$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_SHARES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdShares(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Post', 'findByIdSuccess'),
            of(new UserActions.findByIdSharesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.findByIdSharesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public linkShares$ = this.actions$
    .ofType(UserActionTypes.LINK_SHARES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.linkShares(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
          of(new actions['ShareActions'].createSuccess(response, action.meta)),
          of(new UserActions.linkSharesSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new UserActions.linkSharesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public unlinkShares$ = this.actions$
    .ofType(UserActionTypes.UNLINK_SHARES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.unlinkShares(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
          of(new actions['ShareActions'].deleteByIdSuccess(response.id, action.meta)),
          of(new UserActions.unlinkSharesSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new UserActions.unlinkSharesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdReports$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdReports(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Report', 'findByIdSuccess'),
            of(new UserActions.findByIdReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.findByIdReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdReports$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyByIdReports(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'deleteByIdSuccess'),
            of(new UserActions.destroyByIdReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.destroyByIdReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdReports$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateByIdReports(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Report', 'findByIdSuccess'),
            of(new UserActions.updateByIdReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.updateByIdReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdShoppingCart$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_SHOPPINGCART).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdShoppingCart(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Product', 'findByIdSuccess'),
            of(new UserActions.findByIdShoppingCartSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.findByIdShoppingCartFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public linkShoppingCart$ = this.actions$
    .ofType(UserActionTypes.LINK_SHOPPINGCART).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.linkShoppingCart(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
          of(new actions['UserProductActions'].createSuccess(response, action.meta)),
          of(new UserActions.linkShoppingCartSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new UserActions.linkShoppingCartFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public unlinkShoppingCart$ = this.actions$
    .ofType(UserActionTypes.UNLINK_SHOPPINGCART).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.unlinkShoppingCart(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
          of(new actions['UserProductActions'].deleteByIdSuccess(response.id, action.meta)),
          of(new UserActions.unlinkShoppingCartSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new UserActions.unlinkShoppingCartFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdWishList$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_WISHLIST).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdWishList(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Product', 'findByIdSuccess'),
            of(new UserActions.findByIdWishListSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.findByIdWishListFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public linkWishList$ = this.actions$
    .ofType(UserActionTypes.LINK_WISHLIST).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.linkWishList(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
          of(new actions['UserProductActions'].createSuccess(response, action.meta)),
          of(new UserActions.linkWishListSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new UserActions.linkWishListFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public unlinkWishList$ = this.actions$
    .ofType(UserActionTypes.UNLINK_WISHLIST).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.unlinkWishList(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
          of(new actions['UserProductActions'].deleteByIdSuccess(response.id, action.meta)),
          of(new UserActions.unlinkWishListSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new UserActions.unlinkWishListFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdReviews$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_REVIEWS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdReviews(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Review', 'findByIdSuccess'),
            of(new UserActions.findByIdReviewsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.findByIdReviewsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdReviews$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_REVIEWS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyByIdReviews(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Review', 'deleteByIdSuccess'),
            of(new UserActions.destroyByIdReviewsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.destroyByIdReviewsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdReviews$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_REVIEWS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateByIdReviews(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Review', 'findByIdSuccess'),
            of(new UserActions.updateByIdReviewsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.updateByIdReviewsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdOAuthClientApplications$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.findByIdOAuthClientApplications(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'OAuthApp', 'findByIdSuccess'),
            of(new UserActions.findByIdOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.findByIdOAuthClientApplicationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdOAuthClientApplications$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.destroyByIdOAuthClientApplications(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'OAuthApp', 'deleteByIdSuccess'),
            of(new UserActions.destroyByIdOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.destroyByIdOAuthClientApplicationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdOAuthClientApplications$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.updateByIdOAuthClientApplications(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'OAuthApp', 'findByIdSuccess'),
            of(new UserActions.updateByIdOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.updateByIdOAuthClientApplicationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getEmails$ = this.actions$
    .ofType(UserActionTypes.GET_EMAILS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getEmails(action.payload.id, action.payload.filter).pipe(
          map((response: any) => new UserActions.getEmailsSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.getEmailsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createEmails$ = this.actions$
    .ofType(UserActionTypes.CREATE_EMAILS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createEmails(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.createEmailsSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.createEmailsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteEmails$ = this.actions$
    .ofType(UserActionTypes.DELETE_EMAILS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.deleteEmails(action.payload.id).pipe(
          map((response: any) => new UserActions.deleteEmailsSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.deleteEmailsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getPhones$ = this.actions$
    .ofType(UserActionTypes.GET_PHONES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getPhones(action.payload.id, action.payload.filter).pipe(
          map((response: any) => new UserActions.getPhonesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.getPhonesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createPhones$ = this.actions$
    .ofType(UserActionTypes.CREATE_PHONES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createPhones(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.createPhonesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.createPhonesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deletePhones$ = this.actions$
    .ofType(UserActionTypes.DELETE_PHONES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.deletePhones(action.payload.id).pipe(
          map((response: any) => new UserActions.deletePhonesSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.deletePhonesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getStripeSources$ = this.actions$
    .ofType(UserActionTypes.GET_STRIPESOURCES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getStripeSources(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'StripeSource', 'findSuccess'),
            of(new UserActions.getStripeSourcesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getStripeSourcesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createStripeSources$ = this.actions$
    .ofType(UserActionTypes.CREATE_STRIPESOURCES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createStripeSources(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'StripeSource', 'findSuccess'),
            of(new UserActions.createStripeSourcesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createStripeSourcesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteStripeSources$ = this.actions$
    .ofType(UserActionTypes.DELETE_STRIPESOURCES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.deleteStripeSources(action.payload.id).pipe(
          map((response: any) => new UserActions.deleteStripeSourcesSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.deleteStripeSourcesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getStripeCharges$ = this.actions$
    .ofType(UserActionTypes.GET_STRIPECHARGES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getStripeCharges(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'StripeCharge', 'findSuccess'),
            of(new UserActions.getStripeChargesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getStripeChargesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createStripeCharges$ = this.actions$
    .ofType(UserActionTypes.CREATE_STRIPECHARGES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createStripeCharges(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'StripeCharge', 'findSuccess'),
            of(new UserActions.createStripeChargesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createStripeChargesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteStripeCharges$ = this.actions$
    .ofType(UserActionTypes.DELETE_STRIPECHARGES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.deleteStripeCharges(action.payload.id).pipe(
          map((response: any) => new UserActions.deleteStripeChargesSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.deleteStripeChargesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getIdentities$ = this.actions$
    .ofType(UserActionTypes.GET_IDENTITIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getIdentities(action.payload.id, action.payload.filter).pipe(
          map((response: any) => new UserActions.getIdentitiesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.getIdentitiesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createIdentities$ = this.actions$
    .ofType(UserActionTypes.CREATE_IDENTITIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createIdentities(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.createIdentitiesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.createIdentitiesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteIdentities$ = this.actions$
    .ofType(UserActionTypes.DELETE_IDENTITIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.deleteIdentities(action.payload.id).pipe(
          map((response: any) => new UserActions.deleteIdentitiesSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.deleteIdentitiesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getCredentials$ = this.actions$
    .ofType(UserActionTypes.GET_CREDENTIALS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getCredentials(action.payload.id, action.payload.filter).pipe(
          map((response: any) => new UserActions.getCredentialsSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.getCredentialsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createCredentials$ = this.actions$
    .ofType(UserActionTypes.CREATE_CREDENTIALS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createCredentials(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.createCredentialsSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.createCredentialsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteCredentials$ = this.actions$
    .ofType(UserActionTypes.DELETE_CREDENTIALS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.deleteCredentials(action.payload.id).pipe(
          map((response: any) => new UserActions.deleteCredentialsSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.deleteCredentialsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getAccessTokens$ = this.actions$
    .ofType(UserActionTypes.GET_ACCESSTOKENS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getAccessTokens(action.payload.id, action.payload.filter).pipe(
          map((response: any) => new UserActions.getAccessTokensSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.getAccessTokensFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createAccessTokens$ = this.actions$
    .ofType(UserActionTypes.CREATE_ACCESSTOKENS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createAccessTokens(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.createAccessTokensSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.createAccessTokensFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteAccessTokens$ = this.actions$
    .ofType(UserActionTypes.DELETE_ACCESSTOKENS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.deleteAccessTokens(action.payload.id).pipe(
          map((response: any) => new UserActions.deleteAccessTokensSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.deleteAccessTokensFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getDevices$ = this.actions$
    .ofType(UserActionTypes.GET_DEVICES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getDevices(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Device', 'findSuccess'),
            of(new UserActions.getDevicesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getDevicesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createDevices$ = this.actions$
    .ofType(UserActionTypes.CREATE_DEVICES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createDevices(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Device', 'findSuccess'),
            of(new UserActions.createDevicesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createDevicesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteDevices$ = this.actions$
    .ofType(UserActionTypes.DELETE_DEVICES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.deleteDevices(action.payload.id).pipe(
          map((response: any) => new UserActions.deleteDevicesSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.deleteDevicesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getNotifications$ = this.actions$
    .ofType(UserActionTypes.GET_NOTIFICATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getNotifications(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'UserNotification', 'findSuccess'),
            of(new UserActions.getNotificationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getNotificationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createNotifications$ = this.actions$
    .ofType(UserActionTypes.CREATE_NOTIFICATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createNotifications(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'UserNotification', 'findSuccess'),
            of(new UserActions.createNotificationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createNotificationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteNotifications$ = this.actions$
    .ofType(UserActionTypes.DELETE_NOTIFICATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.deleteNotifications(action.payload.id).pipe(
          map((response: any) => new UserActions.deleteNotificationsSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.deleteNotificationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getRoles$ = this.actions$
    .ofType(UserActionTypes.GET_ROLES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getRoles(action.payload.id, action.payload.filter).pipe(
          map((response: any) => new UserActions.getRolesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.getRolesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createRoles$ = this.actions$
    .ofType(UserActionTypes.CREATE_ROLES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createRoles(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.createRolesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.createRolesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteRoles$ = this.actions$
    .ofType(UserActionTypes.DELETE_ROLES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.deleteRoles(action.payload.id).pipe(
          map((response: any) => new UserActions.deleteRolesSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.deleteRolesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getOrganizations$ = this.actions$
    .ofType(UserActionTypes.GET_ORGANIZATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getOrganizations(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Organization', 'findSuccess'),
            of(new UserActions.getOrganizationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getOrganizationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createOrganizations$ = this.actions$
    .ofType(UserActionTypes.CREATE_ORGANIZATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createOrganizations(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Organization', 'findSuccess'),
            of(new UserActions.createOrganizationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createOrganizationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteOrganizations$ = this.actions$
    .ofType(UserActionTypes.DELETE_ORGANIZATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.deleteOrganizations(action.payload.id).pipe(
          map((response: any) => new UserActions.deleteOrganizationsSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.deleteOrganizationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getSupportTickets$ = this.actions$
    .ofType(UserActionTypes.GET_SUPPORTTICKETS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getSupportTickets(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'SupportTicket', 'findSuccess'),
            of(new UserActions.getSupportTicketsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getSupportTicketsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createSupportTickets$ = this.actions$
    .ofType(UserActionTypes.CREATE_SUPPORTTICKETS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createSupportTickets(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'SupportTicket', 'findSuccess'),
            of(new UserActions.createSupportTicketsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createSupportTicketsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteSupportTickets$ = this.actions$
    .ofType(UserActionTypes.DELETE_SUPPORTTICKETS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.deleteSupportTickets(action.payload.id).pipe(
          map((response: any) => new UserActions.deleteSupportTicketsSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.deleteSupportTicketsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getInvites$ = this.actions$
    .ofType(UserActionTypes.GET_INVITES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getInvites(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Invite', 'findSuccess'),
            of(new UserActions.getInvitesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getInvitesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createInvites$ = this.actions$
    .ofType(UserActionTypes.CREATE_INVITES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createInvites(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Invite', 'findSuccess'),
            of(new UserActions.createInvitesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createInvitesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getFollowers$ = this.actions$
    .ofType(UserActionTypes.GET_FOLLOWERS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getFollowers(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
            of(new UserActions.getFollowersSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getFollowersFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getFollowing$ = this.actions$
    .ofType(UserActionTypes.GET_FOLLOWING).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getFollowing(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
            of(new UserActions.getFollowingSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getFollowingFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getPosts$ = this.actions$
    .ofType(UserActionTypes.GET_POSTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getPosts(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
            of(new UserActions.getPostsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getPostsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createPosts$ = this.actions$
    .ofType(UserActionTypes.CREATE_POSTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createPosts(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
            of(new UserActions.createPostsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createPostsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deletePosts$ = this.actions$
    .ofType(UserActionTypes.DELETE_POSTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.deletePosts(action.payload.id).pipe(
          map((response: any) => new UserActions.deletePostsSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.deletePostsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getShares$ = this.actions$
    .ofType(UserActionTypes.GET_SHARES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getShares(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
            of(new UserActions.getSharesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getSharesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getReports$ = this.actions$
    .ofType(UserActionTypes.GET_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getReports(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'findSuccess'),
            of(new UserActions.getReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createReports$ = this.actions$
    .ofType(UserActionTypes.CREATE_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createReports(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'findSuccess'),
            of(new UserActions.createReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteReports$ = this.actions$
    .ofType(UserActionTypes.DELETE_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.deleteReports(action.payload.id).pipe(
          map((response: any) => new UserActions.deleteReportsSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.deleteReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getShoppingCart$ = this.actions$
    .ofType(UserActionTypes.GET_SHOPPINGCART).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getShoppingCart(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Product', 'findSuccess'),
            of(new UserActions.getShoppingCartSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getShoppingCartFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getWishList$ = this.actions$
    .ofType(UserActionTypes.GET_WISHLIST).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getWishList(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Product', 'findSuccess'),
            of(new UserActions.getWishListSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getWishListFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getReviews$ = this.actions$
    .ofType(UserActionTypes.GET_REVIEWS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getReviews(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Review', 'findSuccess'),
            of(new UserActions.getReviewsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getReviewsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createReviews$ = this.actions$
    .ofType(UserActionTypes.CREATE_REVIEWS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createReviews(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Review', 'findSuccess'),
            of(new UserActions.createReviewsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createReviewsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteReviews$ = this.actions$
    .ofType(UserActionTypes.DELETE_REVIEWS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.deleteReviews(action.payload.id).pipe(
          map((response: any) => new UserActions.deleteReviewsSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.deleteReviewsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getOAuthClientApplications$ = this.actions$
    .ofType(UserActionTypes.GET_OAUTHCLIENTAPPLICATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.getOAuthClientApplications(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'OAuthApp', 'findSuccess'),
            of(new UserActions.getOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.getOAuthClientApplicationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createOAuthClientApplications$ = this.actions$
    .ofType(UserActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createOAuthClientApplications(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'OAuthApp', 'findSuccess'),
            of(new UserActions.createOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createOAuthClientApplicationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteOAuthClientApplications$ = this.actions$
    .ofType(UserActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.deleteOAuthClientApplications(action.payload.id).pipe(
          map((response: any) => new UserActions.deleteOAuthClientApplicationsSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.deleteOAuthClientApplicationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public login$ = this.actions$
    .ofType(UserActionTypes.LOGIN).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.login(action.payload.credentials, action.payload.include).pipe(
          map((response: any) => new UserActions.loginSuccess(response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.loginFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public logout$ = this.actions$
    .ofType(UserActionTypes.LOGOUT).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.logout().pipe(
          map((response: any) => new UserActions.logoutSuccess(action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.logoutFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public verify$ = this.actions$
    .ofType(UserActionTypes.VERIFY).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.verify(action.payload.id).pipe(
          map((response: any) => new UserActions.verifySuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.verifyFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public confirm$ = this.actions$
    .ofType(UserActionTypes.CONFIRM).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.confirm(action.payload.uid, action.payload.token, action.payload.redirect).pipe(
          map((response: any) => new UserActions.confirmSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.confirmFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public resetPassword$ = this.actions$
    .ofType(UserActionTypes.RESET_PASSWORD).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.resetPassword(action.payload.options).pipe(
          map((response: any) => new UserActions.resetPasswordSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.resetPasswordFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public changePassword$ = this.actions$
    .ofType(UserActionTypes.CHANGE_PASSWORD).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.changePassword(action.payload.oldPassword, action.payload.newPassword).pipe(
          map((response: any) => new UserActions.changePasswordSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.changePasswordFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public setPassword$ = this.actions$
    .ofType(UserActionTypes.SET_PASSWORD).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.setPassword(action.payload.newPassword).pipe(
          map((response: any) => new UserActions.setPasswordSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.setPasswordFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public setPrimaryEmail$ = this.actions$
    .ofType(UserActionTypes.SET_PRIMARY_EMAIL).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.setPrimaryEmail(action.payload.id, action.payload.fk).pipe(
          map((response: any) => new UserActions.setPrimaryEmailSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.setPrimaryEmailFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public setPrimaryPhone$ = this.actions$
    .ofType(UserActionTypes.SET_PRIMARY_PHONE).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.setPrimaryPhone(action.payload.id, action.payload.fk).pipe(
          map((response: any) => new UserActions.setPrimaryPhoneSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.setPrimaryPhoneFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public s3PUTSignedUrl$ = this.actions$
    .ofType(UserActionTypes.S3_P_U_T_SIGNED_URL).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.s3PUTSignedUrl(action.payload.id, action.payload.key, action.payload.options).pipe(
          map((response: any) => new UserActions.s3PUTSignedUrlSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.s3PUTSignedUrlFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public s3GETSignedUrl$ = this.actions$
    .ofType(UserActionTypes.S3_G_E_T_SIGNED_URL).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.s3GETSignedUrl(action.payload.id, action.payload.key).pipe(
          map((response: any) => new UserActions.s3GETSignedUrlSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.s3GETSignedUrlFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public activate$ = this.actions$
    .ofType(UserActionTypes.ACTIVATE).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.activate(action.payload.uid, action.payload.token, action.payload.redirect).pipe(
          map((response: any) => new UserActions.activateSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.activateFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public adminInvite$ = this.actions$
    .ofType(UserActionTypes.ADMIN_INVITE).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.adminInvite(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.adminInviteSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.adminInviteFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyStripeCustomer$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_STRIPECUSTOMER).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyStripeCustomer(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'StripeCustomer', 'findSuccess'),
            of(new UserActions.createManyStripeCustomerSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createManyStripeCustomerFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyS3Photo$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_S3PHOTO).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyS3Photo(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.createManyS3PhotoSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.createManyS3PhotoFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyTwoFactorAuthentication$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_TWOFACTORAUTHENTICATION).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyTwoFactorAuthentication(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'TwoFactorAuthentication', 'findSuccess'),
            of(new UserActions.createManyTwoFactorAuthenticationSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createManyTwoFactorAuthenticationFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyEmails$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_EMAILS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyEmails(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.createManyEmailsSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.createManyEmailsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyPhones$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_PHONES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyPhones(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.createManyPhonesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.createManyPhonesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyStripeSources$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_STRIPESOURCES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyStripeSources(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'StripeSource', 'findSuccess'),
            of(new UserActions.createManyStripeSourcesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createManyStripeSourcesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyStripeCharges$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_STRIPECHARGES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyStripeCharges(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'StripeCharge', 'findSuccess'),
            of(new UserActions.createManyStripeChargesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createManyStripeChargesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyIdentities$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_IDENTITIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyIdentities(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.createManyIdentitiesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.createManyIdentitiesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyCredentials$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_CREDENTIALS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyCredentials(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.createManyCredentialsSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.createManyCredentialsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyAccessTokens$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_ACCESSTOKENS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyAccessTokens(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.createManyAccessTokensSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.createManyAccessTokensFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyDevices$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_DEVICES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyDevices(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Device', 'findSuccess'),
            of(new UserActions.createManyDevicesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createManyDevicesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyNotifications$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_NOTIFICATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyNotifications(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'UserNotification', 'findSuccess'),
            of(new UserActions.createManyNotificationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createManyNotificationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyRoles$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_ROLES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyRoles(action.payload.id, action.payload.data).pipe(
          map((response: any) => new UserActions.createManyRolesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.createManyRolesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyOrganizations$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_ORGANIZATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyOrganizations(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Organization', 'findSuccess'),
            of(new UserActions.createManyOrganizationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createManyOrganizationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManySupportTickets$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_SUPPORTTICKETS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManySupportTickets(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'SupportTicket', 'findSuccess'),
            of(new UserActions.createManySupportTicketsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createManySupportTicketsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyInvites$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_INVITES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyInvites(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Invite', 'findSuccess'),
            of(new UserActions.createManyInvitesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createManyInvitesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyPosts$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_POSTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyPosts(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
            of(new UserActions.createManyPostsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createManyPostsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyReports$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyReports(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'findSuccess'),
            of(new UserActions.createManyReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createManyReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyReviews$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_REVIEWS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyReviews(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Review', 'findSuccess'),
            of(new UserActions.createManyReviewsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createManyReviewsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyOAuthClientApplications$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.createManyOAuthClientApplications(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'OAuthApp', 'findSuccess'),
            of(new UserActions.createManyOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new UserActions.createManyOAuthClientApplicationsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

    /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * User specific actions
   */
  @Effect()
  public signup$ = this.actions$
    .ofType(UserActionTypes.SIGNUP).pipe(
      mergeMap((action: LoopbackAction) =>
        this.user.create(action.payload).pipe(
          map((response: any) => new UserActions.signupSuccess(action.payload, response, action.meta)),
          catchError((error: any) => concat(
            of(new UserActions.signupFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

    /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Decorate base effects metadata
   */
  @Effect() public create$;
  @Effect() public createMany$;
  @Effect() public findById$;
  @Effect() public find$;
  @Effect() public findOne$;
  @Effect() public updateAll$;
  @Effect() public deleteById$;
  @Effect() public updateAttributes$;
  @Effect() public upsert$;
  @Effect() public upsertWithWhere$;
  @Effect() public replaceOrCreate$;
  @Effect() public replaceById$;
  @Effect() public patchOrCreate$;
  @Effect() public patchAttributes$;

  constructor(
    @Inject(Actions) public actions$: Actions,
    @Inject(UserApi) public user: UserApi
  ) {
    super(actions$, user, 'User', UserActionTypes, UserActions);
  }
}
