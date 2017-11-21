/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Post } from '../models';

export const PostActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Post'), {
  GET_USER: type('[Post] getUser'),
  GET_USER_SUCCESS: type('[Post] getUser success'),
  GET_USER_FAIL: type('[Post] getUser fail'),

  GET_ORGANIZATION: type('[Post] getOrganization'),
  GET_ORGANIZATION_SUCCESS: type('[Post] getOrganization success'),
  GET_ORGANIZATION_FAIL: type('[Post] getOrganization fail'),

  FIND_BY_ID_VOTES: type('[Post] findByIdVotes'),
  FIND_BY_ID_VOTES_SUCCESS: type('[Post] findByIdVotes success'),
  FIND_BY_ID_VOTES_FAIL: type('[Post] findByIdVotes fail'),

  FIND_BY_ID_S3IMAGES: type('[Post] findByIdS3Images'),
  FIND_BY_ID_S3IMAGES_SUCCESS: type('[Post] findByIdS3Images success'),
  FIND_BY_ID_S3IMAGES_FAIL: type('[Post] findByIdS3Images fail'),

  DESTROY_BY_ID_S3IMAGES: type('[Post] destroyByIdS3Images'),
  DESTROY_BY_ID_S3IMAGES_SUCCESS: type('[Post] destroyByIdS3Images success'),
  DESTROY_BY_ID_S3IMAGES_FAIL: type('[Post] destroyByIdS3Images fail'),

  UPDATE_BY_ID_S3IMAGES: type('[Post] updateByIdS3Images'),
  UPDATE_BY_ID_S3IMAGES_SUCCESS: type('[Post] updateByIdS3Images success'),
  UPDATE_BY_ID_S3IMAGES_FAIL: type('[Post] updateByIdS3Images fail'),

  FIND_BY_ID_REPLIES: type('[Post] findByIdReplies'),
  FIND_BY_ID_REPLIES_SUCCESS: type('[Post] findByIdReplies success'),
  FIND_BY_ID_REPLIES_FAIL: type('[Post] findByIdReplies fail'),

  LINK_REPLIES: type('[Post] linkReplies'),
  LINK_REPLIES_SUCCESS: type('[Post] linkReplies success'),
  LINK_REPLIES_FAIL: type('[Post] linkReplies fail'),

  UNLINK_REPLIES: type('[Post] unlinkReplies'),
  UNLINK_REPLIES_SUCCESS: type('[Post] unlinkReplies success'),
  UNLINK_REPLIES_FAIL: type('[Post] unlinkReplies fail'),

  GET_REPLYING: type('[Post] getReplying'),
  GET_REPLYING_SUCCESS: type('[Post] getReplying success'),
  GET_REPLYING_FAIL: type('[Post] getReplying fail'),

  UPDATE_REPLYING: type('[Post] updateReplying'),
  UPDATE_REPLYING_SUCCESS: type('[Post] updateReplying success'),
  UPDATE_REPLYING_FAIL: type('[Post] updateReplying fail'),

  DESTROY_REPLYING: type('[Post] destroyReplying'),
  DESTROY_REPLYING_SUCCESS: type('[Post] destroyReplying success'),
  DESTROY_REPLYING_FAIL: type('[Post] destroyReplying fail'),

  FIND_BY_ID_SHARED: type('[Post] findByIdShared'),
  FIND_BY_ID_SHARED_SUCCESS: type('[Post] findByIdShared success'),
  FIND_BY_ID_SHARED_FAIL: type('[Post] findByIdShared fail'),

  LINK_SHARED: type('[Post] linkShared'),
  LINK_SHARED_SUCCESS: type('[Post] linkShared success'),
  LINK_SHARED_FAIL: type('[Post] linkShared fail'),

  UNLINK_SHARED: type('[Post] unlinkShared'),
  UNLINK_SHARED_SUCCESS: type('[Post] unlinkShared success'),
  UNLINK_SHARED_FAIL: type('[Post] unlinkShared fail'),

  FIND_BY_ID_REPORTS: type('[Post] findByIdReports'),
  FIND_BY_ID_REPORTS_SUCCESS: type('[Post] findByIdReports success'),
  FIND_BY_ID_REPORTS_FAIL: type('[Post] findByIdReports fail'),

  DESTROY_BY_ID_REPORTS: type('[Post] destroyByIdReports'),
  DESTROY_BY_ID_REPORTS_SUCCESS: type('[Post] destroyByIdReports success'),
  DESTROY_BY_ID_REPORTS_FAIL: type('[Post] destroyByIdReports fail'),

  UPDATE_BY_ID_REPORTS: type('[Post] updateByIdReports'),
  UPDATE_BY_ID_REPORTS_SUCCESS: type('[Post] updateByIdReports success'),
  UPDATE_BY_ID_REPORTS_FAIL: type('[Post] updateByIdReports fail'),

  GET_VOTES: type('[Post] getVotes'),
  GET_VOTES_SUCCESS: type('[Post] getVotes success'),
  GET_VOTES_FAIL: type('[Post] getVotes fail'),

  GET_S3IMAGES: type('[Post] getS3Images'),
  GET_S3IMAGES_SUCCESS: type('[Post] getS3Images success'),
  GET_S3IMAGES_FAIL: type('[Post] getS3Images fail'),

  CREATE_S3IMAGES: type('[Post] createS3Images'),
  CREATE_S3IMAGES_SUCCESS: type('[Post] createS3Images success'),
  CREATE_S3IMAGES_FAIL: type('[Post] createS3Images fail'),

  DELETE_S3IMAGES: type('[Post] deleteS3Images'),
  DELETE_S3IMAGES_SUCCESS: type('[Post] deleteS3Images success'),
  DELETE_S3IMAGES_FAIL: type('[Post] deleteS3Images fail'),

  GET_REPLIES: type('[Post] getReplies'),
  GET_REPLIES_SUCCESS: type('[Post] getReplies success'),
  GET_REPLIES_FAIL: type('[Post] getReplies fail'),

  GET_SHARED: type('[Post] getShared'),
  GET_SHARED_SUCCESS: type('[Post] getShared success'),
  GET_SHARED_FAIL: type('[Post] getShared fail'),

  GET_REPORTS: type('[Post] getReports'),
  GET_REPORTS_SUCCESS: type('[Post] getReports success'),
  GET_REPORTS_FAIL: type('[Post] getReports fail'),

  CREATE_REPORTS: type('[Post] createReports'),
  CREATE_REPORTS_SUCCESS: type('[Post] createReports success'),
  CREATE_REPORTS_FAIL: type('[Post] createReports fail'),

  DELETE_REPORTS: type('[Post] deleteReports'),
  DELETE_REPORTS_SUCCESS: type('[Post] deleteReports success'),
  DELETE_REPORTS_FAIL: type('[Post] deleteReports fail'),

  S3_P_U_T_SIGNED_URL: type('[Post] s3PUTSignedUrl'),
  S3_P_U_T_SIGNED_URL_SUCCESS: type('[Post] s3PUTSignedUrl success'),
  S3_P_U_T_SIGNED_URL_FAIL: type('[Post] s3PUTSignedUrl fail'),

  S3_G_E_T_SIGNED_URL: type('[Post] s3GETSignedUrl'),
  S3_G_E_T_SIGNED_URL_SUCCESS: type('[Post] s3GETSignedUrl success'),
  S3_G_E_T_SIGNED_URL_FAIL: type('[Post] s3GETSignedUrl fail'),

  CREATE_MANY_S3IMAGES: type('[Post] createManyS3Images'),
  CREATE_MANY_S3IMAGES_SUCCESS: type('[Post] createManyS3Images success'),
  CREATE_MANY_S3IMAGES_FAIL: type('[Post] createManyS3Images fail'),

  CREATE_MANY_REPORTS: type('[Post] createManyReports'),
  CREATE_MANY_REPORTS_SUCCESS: type('[Post] createManyReports success'),
  CREATE_MANY_REPORTS_FAIL: type('[Post] createManyReports fail'),

});
export const PostActions =
Object.assign(BaseLoopbackActionsFactory<Post>(PostActionTypes), {

  /**
   * getUser Action.
   * Fetches belongsTo relation user.
   *
   * @param {any} id Post id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getUser: class implements Action {
    public readonly type = PostActionTypes.GET_USER;
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
    public readonly type = PostActionTypes.GET_USER_SUCCESS;
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
    public readonly type = PostActionTypes.GET_USER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getOrganization Action.
   * Fetches belongsTo relation organization.
   *
   * @param {any} id Post id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getOrganization: class implements Action {
    public readonly type = PostActionTypes.GET_ORGANIZATION;
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
    public readonly type = PostActionTypes.GET_ORGANIZATION_SUCCESS;
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
    public readonly type = PostActionTypes.GET_ORGANIZATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdVotes Action.
   * Find a related item by id for votes.
   *
   * @param {any} id Post id
   * @param {any} fk Foreign key for votes
   * @param {any} meta (optional).
   * 
   */
  findByIdVotes: class implements Action {
    public readonly type = PostActionTypes.FIND_BY_ID_VOTES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdVotesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdVotesSuccess: class implements Action {
    public readonly type = PostActionTypes.FIND_BY_ID_VOTES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdVotesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdVotesFail: class implements Action {
    public readonly type = PostActionTypes.FIND_BY_ID_VOTES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdS3Images Action.
   * Find a related item by id for s3Images.
   *
   * @param {any} id Post id
   * @param {any} fk Foreign key for s3Images
   * @param {any} meta (optional).
   * 
   */
  findByIdS3Images: class implements Action {
    public readonly type = PostActionTypes.FIND_BY_ID_S3IMAGES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdS3ImagesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdS3ImagesSuccess: class implements Action {
    public readonly type = PostActionTypes.FIND_BY_ID_S3IMAGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdS3ImagesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdS3ImagesFail: class implements Action {
    public readonly type = PostActionTypes.FIND_BY_ID_S3IMAGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdS3Images Action.
   * Delete a related item by id for s3Images.
   *
   * @param {any} id Post id
   * @param {any} fk Foreign key for s3Images
   * @param {any} meta (optional).
   * 
   */
  destroyByIdS3Images: class implements Action {
    public readonly type = PostActionTypes.DESTROY_BY_ID_S3IMAGES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdS3ImagesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdS3ImagesSuccess: class implements Action {
    public readonly type = PostActionTypes.DESTROY_BY_ID_S3IMAGES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdS3ImagesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdS3ImagesFail: class implements Action {
    public readonly type = PostActionTypes.DESTROY_BY_ID_S3IMAGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdS3Images Action.
   * Update a related item by id for s3Images.
   *
   * @param {any} id Post id
   * @param {any} fk Foreign key for s3Images
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdS3Images: class implements Action {
    public readonly type = PostActionTypes.UPDATE_BY_ID_S3IMAGES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdS3ImagesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdS3ImagesSuccess: class implements Action {
    public readonly type = PostActionTypes.UPDATE_BY_ID_S3IMAGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdS3ImagesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdS3ImagesFail: class implements Action {
    public readonly type = PostActionTypes.UPDATE_BY_ID_S3IMAGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdReplies Action.
   * Find a related item by id for replies.
   *
   * @param {any} id Post id
   * @param {any} fk Foreign key for replies
   * @param {any} meta (optional).
   * 
   */
  findByIdReplies: class implements Action {
    public readonly type = PostActionTypes.FIND_BY_ID_REPLIES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdRepliesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdRepliesSuccess: class implements Action {
    public readonly type = PostActionTypes.FIND_BY_ID_REPLIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdRepliesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdRepliesFail: class implements Action {
    public readonly type = PostActionTypes.FIND_BY_ID_REPLIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * linkReplies Action.
   * Add a related item by id for replies.
   *
   * @param {any} id Post id
   * @param {any} fk Foreign key for replies
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  linkReplies: class implements Action {
    public readonly type = PostActionTypes.LINK_REPLIES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * linkRepliesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  linkRepliesSuccess: class implements Action {
    public readonly type = PostActionTypes.LINK_REPLIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * linkRepliesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  linkRepliesFail: class implements Action {
    public readonly type = PostActionTypes.LINK_REPLIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * unlinkReplies Action.
   * Remove the replies relation to an item by id.
   *
   * @param {any} id Post id
   * @param {any} fk Foreign key for replies
   * @param {any} meta (optional).
   * 
   */
  unlinkReplies: class implements Action {
    public readonly type = PostActionTypes.UNLINK_REPLIES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkRepliesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  unlinkRepliesSuccess: class implements Action {
    public readonly type = PostActionTypes.UNLINK_REPLIES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkRepliesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  unlinkRepliesFail: class implements Action {
    public readonly type = PostActionTypes.UNLINK_REPLIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getReplying Action.
   * Fetches hasOne relation replying.
   *
   * @param {any} id Post id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getReplying: class implements Action {
    public readonly type = PostActionTypes.GET_REPLYING;
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
    public readonly type = PostActionTypes.GET_REPLYING_SUCCESS;
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
    public readonly type = PostActionTypes.GET_REPLYING_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateReplying Action.
   * Update replying of this model.
   *
   * @param {any} id Post id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateReplying: class implements Action {
    public readonly type = PostActionTypes.UPDATE_REPLYING;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateReplyingSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateReplyingSuccess: class implements Action {
    public readonly type = PostActionTypes.UPDATE_REPLYING_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateReplyingFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateReplyingFail: class implements Action {
    public readonly type = PostActionTypes.UPDATE_REPLYING_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyReplying Action.
   * Deletes replying of this model.
   *
   * @param {any} id Post id
   * @param {any} meta (optional).
   * 
   */
  destroyReplying: class implements Action {
    public readonly type = PostActionTypes.DESTROY_REPLYING;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * destroyReplyingSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyReplyingSuccess: class implements Action {
    public readonly type = PostActionTypes.DESTROY_REPLYING_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyReplyingFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyReplyingFail: class implements Action {
    public readonly type = PostActionTypes.DESTROY_REPLYING_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdShared Action.
   * Find a related item by id for shared.
   *
   * @param {any} id Post id
   * @param {any} fk Foreign key for shared
   * @param {any} meta (optional).
   * 
   */
  findByIdShared: class implements Action {
    public readonly type = PostActionTypes.FIND_BY_ID_SHARED;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdSharedSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdSharedSuccess: class implements Action {
    public readonly type = PostActionTypes.FIND_BY_ID_SHARED_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdSharedFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdSharedFail: class implements Action {
    public readonly type = PostActionTypes.FIND_BY_ID_SHARED_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * linkShared Action.
   * Add a related item by id for shared.
   *
   * @param {any} id Post id
   * @param {any} fk Foreign key for shared
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  linkShared: class implements Action {
    public readonly type = PostActionTypes.LINK_SHARED;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * linkSharedSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  linkSharedSuccess: class implements Action {
    public readonly type = PostActionTypes.LINK_SHARED_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * linkSharedFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  linkSharedFail: class implements Action {
    public readonly type = PostActionTypes.LINK_SHARED_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * unlinkShared Action.
   * Remove the shared relation to an item by id.
   *
   * @param {any} id Post id
   * @param {any} fk Foreign key for shared
   * @param {any} meta (optional).
   * 
   */
  unlinkShared: class implements Action {
    public readonly type = PostActionTypes.UNLINK_SHARED;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkSharedSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  unlinkSharedSuccess: class implements Action {
    public readonly type = PostActionTypes.UNLINK_SHARED_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkSharedFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  unlinkSharedFail: class implements Action {
    public readonly type = PostActionTypes.UNLINK_SHARED_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdReports Action.
   * Find a related item by id for reports.
   *
   * @param {any} id Post id
   * @param {any} fk Foreign key for reports
   * @param {any} meta (optional).
   * 
   */
  findByIdReports: class implements Action {
    public readonly type = PostActionTypes.FIND_BY_ID_REPORTS;
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
    public readonly type = PostActionTypes.FIND_BY_ID_REPORTS_SUCCESS;
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
    public readonly type = PostActionTypes.FIND_BY_ID_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdReports Action.
   * Delete a related item by id for reports.
   *
   * @param {any} id Post id
   * @param {any} fk Foreign key for reports
   * @param {any} meta (optional).
   * 
   */
  destroyByIdReports: class implements Action {
    public readonly type = PostActionTypes.DESTROY_BY_ID_REPORTS;
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
    public readonly type = PostActionTypes.DESTROY_BY_ID_REPORTS_SUCCESS;
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
    public readonly type = PostActionTypes.DESTROY_BY_ID_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdReports Action.
   * Update a related item by id for reports.
   *
   * @param {any} id Post id
   * @param {any} fk Foreign key for reports
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdReports: class implements Action {
    public readonly type = PostActionTypes.UPDATE_BY_ID_REPORTS;
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
    public readonly type = PostActionTypes.UPDATE_BY_ID_REPORTS_SUCCESS;
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
    public readonly type = PostActionTypes.UPDATE_BY_ID_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getVotes Action.
   * Queries votes of Post.
   *
   * @param {any} id Post id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getVotes: class implements Action {
    public readonly type = PostActionTypes.GET_VOTES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getVotesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getVotesSuccess: class implements Action {
    public readonly type = PostActionTypes.GET_VOTES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getVotesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getVotesFail: class implements Action {
    public readonly type = PostActionTypes.GET_VOTES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getS3Images Action.
   * Queries s3Images of Post.
   *
   * @param {any} id Post id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getS3Images: class implements Action {
    public readonly type = PostActionTypes.GET_S3IMAGES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getS3ImagesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getS3ImagesSuccess: class implements Action {
    public readonly type = PostActionTypes.GET_S3IMAGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getS3ImagesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getS3ImagesFail: class implements Action {
    public readonly type = PostActionTypes.GET_S3IMAGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createS3Images Action.
   * Creates a new instance in s3Images of this model.
   *
   * @param {any} id Post id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createS3Images: class implements Action {
    public readonly type = PostActionTypes.CREATE_S3IMAGES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createS3ImagesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createS3ImagesSuccess: class implements Action {
    public readonly type = PostActionTypes.CREATE_S3IMAGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createS3ImagesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createS3ImagesFail: class implements Action {
    public readonly type = PostActionTypes.CREATE_S3IMAGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteS3Images Action.
   * Deletes all s3Images of this model.
   *
   * @param {any} id Post id
   * @param {any} meta (optional).
   * 
   */
  deleteS3Images: class implements Action {
    public readonly type = PostActionTypes.DELETE_S3IMAGES;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteS3ImagesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteS3ImagesSuccess: class implements Action {
    public readonly type = PostActionTypes.DELETE_S3IMAGES_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteS3ImagesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteS3ImagesFail: class implements Action {
    public readonly type = PostActionTypes.DELETE_S3IMAGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getReplies Action.
   * Queries replies of Post.
   *
   * @param {any} id Post id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getReplies: class implements Action {
    public readonly type = PostActionTypes.GET_REPLIES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getRepliesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getRepliesSuccess: class implements Action {
    public readonly type = PostActionTypes.GET_REPLIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getRepliesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getRepliesFail: class implements Action {
    public readonly type = PostActionTypes.GET_REPLIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getShared Action.
   * Queries shared of Post.
   *
   * @param {any} id Post id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getShared: class implements Action {
    public readonly type = PostActionTypes.GET_SHARED;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getSharedSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getSharedSuccess: class implements Action {
    public readonly type = PostActionTypes.GET_SHARED_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getSharedFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getSharedFail: class implements Action {
    public readonly type = PostActionTypes.GET_SHARED_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getReports Action.
   * Queries reports of Post.
   *
   * @param {any} id Post id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getReports: class implements Action {
    public readonly type = PostActionTypes.GET_REPORTS;
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
    public readonly type = PostActionTypes.GET_REPORTS_SUCCESS;
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
    public readonly type = PostActionTypes.GET_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createReports Action.
   * Creates a new instance in reports of this model.
   *
   * @param {any} id Post id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createReports: class implements Action {
    public readonly type = PostActionTypes.CREATE_REPORTS;
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
    public readonly type = PostActionTypes.CREATE_REPORTS_SUCCESS;
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
    public readonly type = PostActionTypes.CREATE_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteReports Action.
   * Deletes all reports of this model.
   *
   * @param {any} id Post id
   * @param {any} meta (optional).
   * 
   */
  deleteReports: class implements Action {
    public readonly type = PostActionTypes.DELETE_REPORTS;
      
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
    public readonly type = PostActionTypes.DELETE_REPORTS_SUCCESS;
  
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
    public readonly type = PostActionTypes.DELETE_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3PUTSignedUrl Action.
   * Get a S3 Signed URL for direct file uploads.
   *
   * @param {any} id Post id
   * @param {string} key 
   * @param {object} options 
   * @param {any} meta (optional).
   * 
   */
  s3PUTSignedUrl: class implements Action {
    public readonly type = PostActionTypes.S3_P_U_T_SIGNED_URL;
      public payload: {id: any, key: any, options: any};

    constructor(id: any, key: any = {}, options: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, key, options};
    }
  },
  /**
   * s3PUTSignedUrlSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  s3PUTSignedUrlSuccess: class implements Action {
    public readonly type = PostActionTypes.S3_P_U_T_SIGNED_URL_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * s3PUTSignedUrlFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  s3PUTSignedUrlFail: class implements Action {
    public readonly type = PostActionTypes.S3_P_U_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3GETSignedUrl Action.
   * Get a S3 Signed URL for direct file access.
   *
   * @param {any} id Post id
   * @param {string} key 
   * @param {any} meta (optional).
   * 
   */
  s3GETSignedUrl: class implements Action {
    public readonly type = PostActionTypes.S3_G_E_T_SIGNED_URL;
      public payload: {id: any, key: any};

    constructor(id: any, key: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, key};
    }
  },
  /**
   * s3GETSignedUrlSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  s3GETSignedUrlSuccess: class implements Action {
    public readonly type = PostActionTypes.S3_G_E_T_SIGNED_URL_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * s3GETSignedUrlFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  s3GETSignedUrlFail: class implements Action {
    public readonly type = PostActionTypes.S3_G_E_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyS3Images Action.
   * Creates a new instance in s3Images of this model.
   *
   * @param {any} id Post id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyS3Images: class implements Action {
    public readonly type = PostActionTypes.CREATE_MANY_S3IMAGES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyS3ImagesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyS3ImagesSuccess: class implements Action {
    public readonly type = PostActionTypes.CREATE_MANY_S3IMAGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyS3ImagesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyS3ImagesFail: class implements Action {
    public readonly type = PostActionTypes.CREATE_MANY_S3IMAGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyReports Action.
   * Creates a new instance in reports of this model.
   *
   * @param {any} id Post id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyReports: class implements Action {
    public readonly type = PostActionTypes.CREATE_MANY_REPORTS;
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
    public readonly type = PostActionTypes.CREATE_MANY_REPORTS_SUCCESS;
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
    public readonly type = PostActionTypes.CREATE_MANY_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});