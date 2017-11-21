/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, OAuthApp } from '../models';

export const OAuthAppActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('OAuthApp'), {
  KEYS_RESET: type('[OAuthApp] keysReset'),
  KEYS_RESET_SUCCESS: type('[OAuthApp] keysReset success'),
  KEYS_RESET_FAIL: type('[OAuthApp] keysReset fail'),

  GET_USER: type('[OAuthApp] getUser'),
  GET_USER_SUCCESS: type('[OAuthApp] getUser success'),
  GET_USER_FAIL: type('[OAuthApp] getUser fail'),

  GET_ORGANIZATION: type('[OAuthApp] getOrganization'),
  GET_ORGANIZATION_SUCCESS: type('[OAuthApp] getOrganization success'),
  GET_ORGANIZATION_FAIL: type('[OAuthApp] getOrganization fail'),

  GET_S3LOGO: type('[OAuthApp] getS3Logo'),
  GET_S3LOGO_SUCCESS: type('[OAuthApp] getS3Logo success'),
  GET_S3LOGO_FAIL: type('[OAuthApp] getS3Logo fail'),

  CREATE_S3LOGO: type('[OAuthApp] createS3Logo'),
  CREATE_S3LOGO_SUCCESS: type('[OAuthApp] createS3Logo success'),
  CREATE_S3LOGO_FAIL: type('[OAuthApp] createS3Logo fail'),

  UPDATE_S3LOGO: type('[OAuthApp] updateS3Logo'),
  UPDATE_S3LOGO_SUCCESS: type('[OAuthApp] updateS3Logo success'),
  UPDATE_S3LOGO_FAIL: type('[OAuthApp] updateS3Logo fail'),

  DESTROY_S3LOGO: type('[OAuthApp] destroyS3Logo'),
  DESTROY_S3LOGO_SUCCESS: type('[OAuthApp] destroyS3Logo success'),
  DESTROY_S3LOGO_FAIL: type('[OAuthApp] destroyS3Logo fail'),

  S3_P_U_T_SIGNED_URL: type('[OAuthApp] s3PUTSignedUrl'),
  S3_P_U_T_SIGNED_URL_SUCCESS: type('[OAuthApp] s3PUTSignedUrl success'),
  S3_P_U_T_SIGNED_URL_FAIL: type('[OAuthApp] s3PUTSignedUrl fail'),

  S3_G_E_T_SIGNED_URL: type('[OAuthApp] s3GETSignedUrl'),
  S3_G_E_T_SIGNED_URL_SUCCESS: type('[OAuthApp] s3GETSignedUrl success'),
  S3_G_E_T_SIGNED_URL_FAIL: type('[OAuthApp] s3GETSignedUrl fail'),

  CREATE_MANY_S3LOGO: type('[OAuthApp] createManyS3Logo'),
  CREATE_MANY_S3LOGO_SUCCESS: type('[OAuthApp] createManyS3Logo success'),
  CREATE_MANY_S3LOGO_FAIL: type('[OAuthApp] createManyS3Logo fail'),

});
export const OAuthAppActions =
Object.assign(BaseLoopbackActionsFactory<OAuthApp>(OAuthAppActionTypes), {

  /**
   * keysReset Action.
   * Reset application Keys.
   *
   * @param {any} id OAuthApp id
   * @param {object} data Request data.
   *
   * This method does not accept any data. Supply an empty object.
   * @param {any} meta (optional).
   * 
   */
  keysReset: class implements Action {
    public readonly type = OAuthAppActionTypes.KEYS_RESET;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * keysResetSuccess Action.
   * 
   * @param {any} id 
   * Data properties:
   *
   *  - `data` – `{object}` - new keys
   * @param {any} meta (optional).
   * 
   */
  keysResetSuccess: class implements Action {
    public readonly type = OAuthAppActionTypes.KEYS_RESET_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * keysResetFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  keysResetFail: class implements Action {
    public readonly type = OAuthAppActionTypes.KEYS_RESET_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getUser Action.
   * Fetches belongsTo relation user.
   *
   * @param {any} id OAuthApp id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getUser: class implements Action {
    public readonly type = OAuthAppActionTypes.GET_USER;
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
    public readonly type = OAuthAppActionTypes.GET_USER_SUCCESS;
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
    public readonly type = OAuthAppActionTypes.GET_USER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getOrganization Action.
   * Fetches belongsTo relation organization.
   *
   * @param {any} id OAuthApp id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getOrganization: class implements Action {
    public readonly type = OAuthAppActionTypes.GET_ORGANIZATION;
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
    public readonly type = OAuthAppActionTypes.GET_ORGANIZATION_SUCCESS;
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
    public readonly type = OAuthAppActionTypes.GET_ORGANIZATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getS3Logo Action.
   * Fetches hasOne relation s3Logo.
   *
   * @param {any} id OAuthApp id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getS3Logo: class implements Action {
    public readonly type = OAuthAppActionTypes.GET_S3LOGO;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getS3LogoSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getS3LogoSuccess: class implements Action {
    public readonly type = OAuthAppActionTypes.GET_S3LOGO_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getS3LogoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getS3LogoFail: class implements Action {
    public readonly type = OAuthAppActionTypes.GET_S3LOGO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createS3Logo Action.
   * Creates a new instance in s3Logo of this model.
   *
   * @param {any} id OAuthApp id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createS3Logo: class implements Action {
    public readonly type = OAuthAppActionTypes.CREATE_S3LOGO;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createS3LogoSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createS3LogoSuccess: class implements Action {
    public readonly type = OAuthAppActionTypes.CREATE_S3LOGO_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createS3LogoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createS3LogoFail: class implements Action {
    public readonly type = OAuthAppActionTypes.CREATE_S3LOGO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateS3Logo Action.
   * Update s3Logo of this model.
   *
   * @param {any} id OAuthApp id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateS3Logo: class implements Action {
    public readonly type = OAuthAppActionTypes.UPDATE_S3LOGO;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateS3LogoSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateS3LogoSuccess: class implements Action {
    public readonly type = OAuthAppActionTypes.UPDATE_S3LOGO_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateS3LogoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateS3LogoFail: class implements Action {
    public readonly type = OAuthAppActionTypes.UPDATE_S3LOGO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyS3Logo Action.
   * Deletes s3Logo of this model.
   *
   * @param {any} id OAuthApp id
   * @param {any} meta (optional).
   * 
   */
  destroyS3Logo: class implements Action {
    public readonly type = OAuthAppActionTypes.DESTROY_S3LOGO;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * destroyS3LogoSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyS3LogoSuccess: class implements Action {
    public readonly type = OAuthAppActionTypes.DESTROY_S3LOGO_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyS3LogoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyS3LogoFail: class implements Action {
    public readonly type = OAuthAppActionTypes.DESTROY_S3LOGO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3PUTSignedUrl Action.
   * Get a S3 Signed URL for direct file uploads.
   *
   * @param {any} id OAuthApp id
   * @param {string} key 
   * @param {object} options 
   * @param {any} meta (optional).
   * 
   */
  s3PUTSignedUrl: class implements Action {
    public readonly type = OAuthAppActionTypes.S3_P_U_T_SIGNED_URL;
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
    public readonly type = OAuthAppActionTypes.S3_P_U_T_SIGNED_URL_SUCCESS;
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
    public readonly type = OAuthAppActionTypes.S3_P_U_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3GETSignedUrl Action.
   * Get a S3 Signed URL for direct file access.
   *
   * @param {any} id OAuthApp id
   * @param {string} key 
   * @param {any} meta (optional).
   * 
   */
  s3GETSignedUrl: class implements Action {
    public readonly type = OAuthAppActionTypes.S3_G_E_T_SIGNED_URL;
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
    public readonly type = OAuthAppActionTypes.S3_G_E_T_SIGNED_URL_SUCCESS;
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
    public readonly type = OAuthAppActionTypes.S3_G_E_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyS3Logo Action.
   * Creates a new instance in s3Logo of this model.
   *
   * @param {any} id OAuthApp id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyS3Logo: class implements Action {
    public readonly type = OAuthAppActionTypes.CREATE_MANY_S3LOGO;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyS3LogoSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyS3LogoSuccess: class implements Action {
    public readonly type = OAuthAppActionTypes.CREATE_MANY_S3LOGO_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyS3LogoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyS3LogoFail: class implements Action {
    public readonly type = OAuthAppActionTypes.CREATE_MANY_S3LOGO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});