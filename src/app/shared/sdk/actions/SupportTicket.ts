/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, SupportTicket } from '../models';

export const SupportTicketActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('SupportTicket'), {
  GET_ORGANIZATION: type('[SupportTicket] getOrganization'),
  GET_ORGANIZATION_SUCCESS: type('[SupportTicket] getOrganization success'),
  GET_ORGANIZATION_FAIL: type('[SupportTicket] getOrganization fail'),

  GET_USER: type('[SupportTicket] getUser'),
  GET_USER_SUCCESS: type('[SupportTicket] getUser success'),
  GET_USER_FAIL: type('[SupportTicket] getUser fail'),

});
export const SupportTicketActions =
Object.assign(BaseLoopbackActionsFactory<SupportTicket>(SupportTicketActionTypes), {

  /**
   * getOrganization Action.
   * Fetches belongsTo relation organization.
   *
   * @param {any} id SupportTicket id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getOrganization: class implements Action {
    public readonly type = SupportTicketActionTypes.GET_ORGANIZATION;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getOrganizationSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getOrganizationSuccess: class implements Action {
    public readonly type = SupportTicketActionTypes.GET_ORGANIZATION_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getOrganizationFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getOrganizationFail: class implements Action {
    public readonly type = SupportTicketActionTypes.GET_ORGANIZATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getUser Action.
   * Fetches belongsTo relation user.
   *
   * @param {any} id SupportTicket id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getUser: class implements Action {
    public readonly type = SupportTicketActionTypes.GET_USER;
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
    public readonly type = SupportTicketActionTypes.GET_USER_SUCCESS;
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
    public readonly type = SupportTicketActionTypes.GET_USER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});