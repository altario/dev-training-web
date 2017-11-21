/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Reply } from '../models';

export const ReplyActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Reply'), {
  GET_REPLY: type('[Reply] getReply'),
  GET_REPLY_SUCCESS: type('[Reply] getReply success'),
  GET_REPLY_FAIL: type('[Reply] getReply fail'),

  GET_REPLYING: type('[Reply] getReplying'),
  GET_REPLYING_SUCCESS: type('[Reply] getReplying success'),
  GET_REPLYING_FAIL: type('[Reply] getReplying fail'),

  FIND_BY_ID_REPORTS: type('[Reply] findByIdReports'),
  FIND_BY_ID_REPORTS_SUCCESS: type('[Reply] findByIdReports success'),
  FIND_BY_ID_REPORTS_FAIL: type('[Reply] findByIdReports fail'),

  DESTROY_BY_ID_REPORTS: type('[Reply] destroyByIdReports'),
  DESTROY_BY_ID_REPORTS_SUCCESS: type('[Reply] destroyByIdReports success'),
  DESTROY_BY_ID_REPORTS_FAIL: type('[Reply] destroyByIdReports fail'),

  UPDATE_BY_ID_REPORTS: type('[Reply] updateByIdReports'),
  UPDATE_BY_ID_REPORTS_SUCCESS: type('[Reply] updateByIdReports success'),
  UPDATE_BY_ID_REPORTS_FAIL: type('[Reply] updateByIdReports fail'),

  GET_REPORTS: type('[Reply] getReports'),
  GET_REPORTS_SUCCESS: type('[Reply] getReports success'),
  GET_REPORTS_FAIL: type('[Reply] getReports fail'),

  CREATE_REPORTS: type('[Reply] createReports'),
  CREATE_REPORTS_SUCCESS: type('[Reply] createReports success'),
  CREATE_REPORTS_FAIL: type('[Reply] createReports fail'),

  DELETE_REPORTS: type('[Reply] deleteReports'),
  DELETE_REPORTS_SUCCESS: type('[Reply] deleteReports success'),
  DELETE_REPORTS_FAIL: type('[Reply] deleteReports fail'),

  CREATE_MANY_REPORTS: type('[Reply] createManyReports'),
  CREATE_MANY_REPORTS_SUCCESS: type('[Reply] createManyReports success'),
  CREATE_MANY_REPORTS_FAIL: type('[Reply] createManyReports fail'),

});
export const ReplyActions =
Object.assign(BaseLoopbackActionsFactory<Reply>(ReplyActionTypes), {

  /**
   * getReply Action.
   * Fetches belongsTo relation reply.
   *
   * @param {any} id Reply id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getReply: class implements Action {
    public readonly type = ReplyActionTypes.GET_REPLY;
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
    public readonly type = ReplyActionTypes.GET_REPLY_SUCCESS;
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
    public readonly type = ReplyActionTypes.GET_REPLY_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getReplying Action.
   * Fetches belongsTo relation replying.
   *
   * @param {any} id Reply id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getReplying: class implements Action {
    public readonly type = ReplyActionTypes.GET_REPLYING;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getReplyingSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getReplyingSuccess: class implements Action {
    public readonly type = ReplyActionTypes.GET_REPLYING_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getReplyingFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getReplyingFail: class implements Action {
    public readonly type = ReplyActionTypes.GET_REPLYING_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdReports Action.
   * Find a related item by id for reports.
   *
   * @param {any} id Reply id
   * @param {any} fk Foreign key for reports
   * @param {any} meta (optional).
   * 
   */
  findByIdReports: class implements Action {
    public readonly type = ReplyActionTypes.FIND_BY_ID_REPORTS;
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
    public readonly type = ReplyActionTypes.FIND_BY_ID_REPORTS_SUCCESS;
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
    public readonly type = ReplyActionTypes.FIND_BY_ID_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdReports Action.
   * Delete a related item by id for reports.
   *
   * @param {any} id Reply id
   * @param {any} fk Foreign key for reports
   * @param {any} meta (optional).
   * 
   */
  destroyByIdReports: class implements Action {
    public readonly type = ReplyActionTypes.DESTROY_BY_ID_REPORTS;
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
    public readonly type = ReplyActionTypes.DESTROY_BY_ID_REPORTS_SUCCESS;
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
    public readonly type = ReplyActionTypes.DESTROY_BY_ID_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdReports Action.
   * Update a related item by id for reports.
   *
   * @param {any} id Reply id
   * @param {any} fk Foreign key for reports
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdReports: class implements Action {
    public readonly type = ReplyActionTypes.UPDATE_BY_ID_REPORTS;
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
    public readonly type = ReplyActionTypes.UPDATE_BY_ID_REPORTS_SUCCESS;
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
    public readonly type = ReplyActionTypes.UPDATE_BY_ID_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getReports Action.
   * Queries reports of Reply.
   *
   * @param {any} id Reply id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getReports: class implements Action {
    public readonly type = ReplyActionTypes.GET_REPORTS;
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
    public readonly type = ReplyActionTypes.GET_REPORTS_SUCCESS;
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
    public readonly type = ReplyActionTypes.GET_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createReports Action.
   * Creates a new instance in reports of this model.
   *
   * @param {any} id Reply id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createReports: class implements Action {
    public readonly type = ReplyActionTypes.CREATE_REPORTS;
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
    public readonly type = ReplyActionTypes.CREATE_REPORTS_SUCCESS;
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
    public readonly type = ReplyActionTypes.CREATE_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteReports Action.
   * Deletes all reports of this model.
   *
   * @param {any} id Reply id
   * @param {any} meta (optional).
   * 
   */
  deleteReports: class implements Action {
    public readonly type = ReplyActionTypes.DELETE_REPORTS;
      
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
    public readonly type = ReplyActionTypes.DELETE_REPORTS_SUCCESS;
  
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
    public readonly type = ReplyActionTypes.DELETE_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyReports Action.
   * Creates a new instance in reports of this model.
   *
   * @param {any} id Reply id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyReports: class implements Action {
    public readonly type = ReplyActionTypes.CREATE_MANY_REPORTS;
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
    public readonly type = ReplyActionTypes.CREATE_MANY_REPORTS_SUCCESS;
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
    public readonly type = ReplyActionTypes.CREATE_MANY_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});