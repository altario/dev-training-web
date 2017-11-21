/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Invite } from '../models';

export const InviteActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Invite'), {
  GET_USER: type('[Invite] getUser'),
  GET_USER_SUCCESS: type('[Invite] getUser success'),
  GET_USER_FAIL: type('[Invite] getUser fail'),

  GET_INVITEDUSER: type('[Invite] getInvitedUser'),
  GET_INVITEDUSER_SUCCESS: type('[Invite] getInvitedUser success'),
  GET_INVITEDUSER_FAIL: type('[Invite] getInvitedUser fail'),

});
export const InviteActions =
Object.assign(BaseLoopbackActionsFactory<Invite>(InviteActionTypes), {

  /**
   * getUser Action.
   * Fetches belongsTo relation user.
   *
   * @param {any} id Invite id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getUser: class implements Action {
    public readonly type = InviteActionTypes.GET_USER;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getUserSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getUserSuccess: class implements Action {
    public readonly type = InviteActionTypes.GET_USER_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getUserFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getUserFail: class implements Action {
    public readonly type = InviteActionTypes.GET_USER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getInvitedUser Action.
   * Fetches belongsTo relation invitedUser.
   *
   * @param {any} id Invite id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getInvitedUser: class implements Action {
    public readonly type = InviteActionTypes.GET_INVITEDUSER;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getInvitedUserSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getInvitedUserSuccess: class implements Action {
    public readonly type = InviteActionTypes.GET_INVITEDUSER_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getInvitedUserFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getInvitedUserFail: class implements Action {
    public readonly type = InviteActionTypes.GET_INVITEDUSER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});