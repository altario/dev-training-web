/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Share } from '../models';

export const ShareActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Share'), {
  GET_USER: type('[Share] getUser'),
  GET_USER_SUCCESS: type('[Share] getUser success'),
  GET_USER_FAIL: type('[Share] getUser fail'),

  GET_POST: type('[Share] getPost'),
  GET_POST_SUCCESS: type('[Share] getPost success'),
  GET_POST_FAIL: type('[Share] getPost fail'),

});
export const ShareActions =
Object.assign(BaseLoopbackActionsFactory<Share>(ShareActionTypes), {

  /**
   * getUser Action.
   * Fetches belongsTo relation user.
   *
   * @param {any} id Share id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getUser: class implements Action {
    public readonly type = ShareActionTypes.GET_USER;
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
    public readonly type = ShareActionTypes.GET_USER_SUCCESS;
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
    public readonly type = ShareActionTypes.GET_USER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getPost Action.
   * Fetches belongsTo relation post.
   *
   * @param {any} id Share id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getPost: class implements Action {
    public readonly type = ShareActionTypes.GET_POST;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getPostSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getPostSuccess: class implements Action {
    public readonly type = ShareActionTypes.GET_POST_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getPostFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getPostFail: class implements Action {
    public readonly type = ShareActionTypes.GET_POST_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});