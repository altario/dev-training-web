/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Report } from '../models';

export const ReportActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Report'), {
  GET_USER: type('[Report] getUser'),
  GET_USER_SUCCESS: type('[Report] getUser success'),
  GET_USER_FAIL: type('[Report] getUser fail'),

  GET_POST: type('[Report] getPost'),
  GET_POST_SUCCESS: type('[Report] getPost success'),
  GET_POST_FAIL: type('[Report] getPost fail'),

  GET_REPLY: type('[Report] getReply'),
  GET_REPLY_SUCCESS: type('[Report] getReply success'),
  GET_REPLY_FAIL: type('[Report] getReply fail'),

  GET_REVIEW: type('[Report] getReview'),
  GET_REVIEW_SUCCESS: type('[Report] getReview success'),
  GET_REVIEW_FAIL: type('[Report] getReview fail'),

  GET_PRODUCT: type('[Report] getProduct'),
  GET_PRODUCT_SUCCESS: type('[Report] getProduct success'),
  GET_PRODUCT_FAIL: type('[Report] getProduct fail'),

  GET_SUBSCRIPTION: type('[Report] getSubscription'),
  GET_SUBSCRIPTION_SUCCESS: type('[Report] getSubscription success'),
  GET_SUBSCRIPTION_FAIL: type('[Report] getSubscription fail'),

});
export const ReportActions =
Object.assign(BaseLoopbackActionsFactory<Report>(ReportActionTypes), {

  /**
   * getUser Action.
   * Fetches belongsTo relation user.
   *
   * @param {any} id Report id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getUser: class implements Action {
    public readonly type = ReportActionTypes.GET_USER;
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
    public readonly type = ReportActionTypes.GET_USER_SUCCESS;
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
    public readonly type = ReportActionTypes.GET_USER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getPost Action.
   * Fetches belongsTo relation post.
   *
   * @param {any} id Report id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getPost: class implements Action {
    public readonly type = ReportActionTypes.GET_POST;
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
    public readonly type = ReportActionTypes.GET_POST_SUCCESS;
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
    public readonly type = ReportActionTypes.GET_POST_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getReply Action.
   * Fetches belongsTo relation reply.
   *
   * @param {any} id Report id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getReply: class implements Action {
    public readonly type = ReportActionTypes.GET_REPLY;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getReplySuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getReplySuccess: class implements Action {
    public readonly type = ReportActionTypes.GET_REPLY_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getReplyFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getReplyFail: class implements Action {
    public readonly type = ReportActionTypes.GET_REPLY_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getReview Action.
   * Fetches belongsTo relation review.
   *
   * @param {any} id Report id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getReview: class implements Action {
    public readonly type = ReportActionTypes.GET_REVIEW;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getReviewSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getReviewSuccess: class implements Action {
    public readonly type = ReportActionTypes.GET_REVIEW_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getReviewFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getReviewFail: class implements Action {
    public readonly type = ReportActionTypes.GET_REVIEW_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getProduct Action.
   * Fetches belongsTo relation product.
   *
   * @param {any} id Report id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getProduct: class implements Action {
    public readonly type = ReportActionTypes.GET_PRODUCT;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getProductSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getProductSuccess: class implements Action {
    public readonly type = ReportActionTypes.GET_PRODUCT_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getProductFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getProductFail: class implements Action {
    public readonly type = ReportActionTypes.GET_PRODUCT_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getSubscription Action.
   * Fetches belongsTo relation subscription.
   *
   * @param {any} id Report id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getSubscription: class implements Action {
    public readonly type = ReportActionTypes.GET_SUBSCRIPTION;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getSubscriptionSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getSubscriptionSuccess: class implements Action {
    public readonly type = ReportActionTypes.GET_SUBSCRIPTION_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getSubscriptionFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getSubscriptionFail: class implements Action {
    public readonly type = ReportActionTypes.GET_SUBSCRIPTION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});