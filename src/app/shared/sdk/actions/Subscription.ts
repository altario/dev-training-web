/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Subscription } from '../models';

export const SubscriptionActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Subscription'), {
  GET_ORGANIZATION: type('[Subscription] getOrganization'),
  GET_ORGANIZATION_SUCCESS: type('[Subscription] getOrganization success'),
  GET_ORGANIZATION_FAIL: type('[Subscription] getOrganization fail'),

  FIND_BY_ID_REPORTS: type('[Subscription] findByIdReports'),
  FIND_BY_ID_REPORTS_SUCCESS: type('[Subscription] findByIdReports success'),
  FIND_BY_ID_REPORTS_FAIL: type('[Subscription] findByIdReports fail'),

  DESTROY_BY_ID_REPORTS: type('[Subscription] destroyByIdReports'),
  DESTROY_BY_ID_REPORTS_SUCCESS: type('[Subscription] destroyByIdReports success'),
  DESTROY_BY_ID_REPORTS_FAIL: type('[Subscription] destroyByIdReports fail'),

  UPDATE_BY_ID_REPORTS: type('[Subscription] updateByIdReports'),
  UPDATE_BY_ID_REPORTS_SUCCESS: type('[Subscription] updateByIdReports success'),
  UPDATE_BY_ID_REPORTS_FAIL: type('[Subscription] updateByIdReports fail'),

  GET_REPORTS: type('[Subscription] getReports'),
  GET_REPORTS_SUCCESS: type('[Subscription] getReports success'),
  GET_REPORTS_FAIL: type('[Subscription] getReports fail'),

  CREATE_REPORTS: type('[Subscription] createReports'),
  CREATE_REPORTS_SUCCESS: type('[Subscription] createReports success'),
  CREATE_REPORTS_FAIL: type('[Subscription] createReports fail'),

  DELETE_REPORTS: type('[Subscription] deleteReports'),
  DELETE_REPORTS_SUCCESS: type('[Subscription] deleteReports success'),
  DELETE_REPORTS_FAIL: type('[Subscription] deleteReports fail'),

  CREATE_MANY_REPORTS: type('[Subscription] createManyReports'),
  CREATE_MANY_REPORTS_SUCCESS: type('[Subscription] createManyReports success'),
  CREATE_MANY_REPORTS_FAIL: type('[Subscription] createManyReports fail'),

});
export const SubscriptionActions =
Object.assign(BaseLoopbackActionsFactory<Subscription>(SubscriptionActionTypes), {

  /**
   * getOrganization Action.
   * Fetches belongsTo relation organization.
   *
   * @param {any} id Subscription id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getOrganization: class implements Action {
    public readonly type = SubscriptionActionTypes.GET_ORGANIZATION;
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
    public readonly type = SubscriptionActionTypes.GET_ORGANIZATION_SUCCESS;
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
    public readonly type = SubscriptionActionTypes.GET_ORGANIZATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdReports Action.
   * Find a related item by id for reports.
   *
   * @param {any} id Subscription id
   * @param {any} fk Foreign key for reports
   * @param {any} meta (optional).
   * 
   */
  findByIdReports: class implements Action {
    public readonly type = SubscriptionActionTypes.FIND_BY_ID_REPORTS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdReportsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdReportsSuccess: class implements Action {
    public readonly type = SubscriptionActionTypes.FIND_BY_ID_REPORTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdReportsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdReportsFail: class implements Action {
    public readonly type = SubscriptionActionTypes.FIND_BY_ID_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdReports Action.
   * Delete a related item by id for reports.
   *
   * @param {any} id Subscription id
   * @param {any} fk Foreign key for reports
   * @param {any} meta (optional).
   * 
   */
  destroyByIdReports: class implements Action {
    public readonly type = SubscriptionActionTypes.DESTROY_BY_ID_REPORTS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdReportsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdReportsSuccess: class implements Action {
    public readonly type = SubscriptionActionTypes.DESTROY_BY_ID_REPORTS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdReportsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdReportsFail: class implements Action {
    public readonly type = SubscriptionActionTypes.DESTROY_BY_ID_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdReports Action.
   * Update a related item by id for reports.
   *
   * @param {any} id Subscription id
   * @param {any} fk Foreign key for reports
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdReports: class implements Action {
    public readonly type = SubscriptionActionTypes.UPDATE_BY_ID_REPORTS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdReportsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdReportsSuccess: class implements Action {
    public readonly type = SubscriptionActionTypes.UPDATE_BY_ID_REPORTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdReportsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdReportsFail: class implements Action {
    public readonly type = SubscriptionActionTypes.UPDATE_BY_ID_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getReports Action.
   * Queries reports of Subscription.
   *
   * @param {any} id Subscription id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getReports: class implements Action {
    public readonly type = SubscriptionActionTypes.GET_REPORTS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getReportsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getReportsSuccess: class implements Action {
    public readonly type = SubscriptionActionTypes.GET_REPORTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getReportsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getReportsFail: class implements Action {
    public readonly type = SubscriptionActionTypes.GET_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createReports Action.
   * Creates a new instance in reports of this model.
   *
   * @param {any} id Subscription id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createReports: class implements Action {
    public readonly type = SubscriptionActionTypes.CREATE_REPORTS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createReportsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createReportsSuccess: class implements Action {
    public readonly type = SubscriptionActionTypes.CREATE_REPORTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createReportsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createReportsFail: class implements Action {
    public readonly type = SubscriptionActionTypes.CREATE_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteReports Action.
   * Deletes all reports of this model.
   *
   * @param {any} id Subscription id
   * @param {any} meta (optional).
   * 
   */
  deleteReports: class implements Action {
    public readonly type = SubscriptionActionTypes.DELETE_REPORTS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteReportsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteReportsSuccess: class implements Action {
    public readonly type = SubscriptionActionTypes.DELETE_REPORTS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteReportsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteReportsFail: class implements Action {
    public readonly type = SubscriptionActionTypes.DELETE_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyReports Action.
   * Creates a new instance in reports of this model.
   *
   * @param {any} id Subscription id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyReports: class implements Action {
    public readonly type = SubscriptionActionTypes.CREATE_MANY_REPORTS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyReportsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyReportsSuccess: class implements Action {
    public readonly type = SubscriptionActionTypes.CREATE_MANY_REPORTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyReportsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyReportsFail: class implements Action {
    public readonly type = SubscriptionActionTypes.CREATE_MANY_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});