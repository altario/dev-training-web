/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Organization } from '../models';

export const OrganizationActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Organization'), {
  STRIPE_AUTHENTICATE_CALLBACK: type('[Organization] stripeAuthenticateCallback'),
  STRIPE_AUTHENTICATE_CALLBACK_SUCCESS: type('[Organization] stripeAuthenticateCallback success'),
  STRIPE_AUTHENTICATE_CALLBACK_FAIL: type('[Organization] stripeAuthenticateCallback fail'),

  STRIPE_AUTHENTICATE: type('[Organization] stripeAuthenticate'),
  STRIPE_AUTHENTICATE_SUCCESS: type('[Organization] stripeAuthenticate success'),
  STRIPE_AUTHENTICATE_FAIL: type('[Organization] stripeAuthenticate fail'),

  FIND_BY_ID_USERS: type('[Organization] findByIdUsers'),
  FIND_BY_ID_USERS_SUCCESS: type('[Organization] findByIdUsers success'),
  FIND_BY_ID_USERS_FAIL: type('[Organization] findByIdUsers fail'),

  DESTROY_BY_ID_USERS: type('[Organization] destroyByIdUsers'),
  DESTROY_BY_ID_USERS_SUCCESS: type('[Organization] destroyByIdUsers success'),
  DESTROY_BY_ID_USERS_FAIL: type('[Organization] destroyByIdUsers fail'),

  UPDATE_BY_ID_USERS: type('[Organization] updateByIdUsers'),
  UPDATE_BY_ID_USERS_SUCCESS: type('[Organization] updateByIdUsers success'),
  UPDATE_BY_ID_USERS_FAIL: type('[Organization] updateByIdUsers fail'),

  LINK_USERS: type('[Organization] linkUsers'),
  LINK_USERS_SUCCESS: type('[Organization] linkUsers success'),
  LINK_USERS_FAIL: type('[Organization] linkUsers fail'),

  UNLINK_USERS: type('[Organization] unlinkUsers'),
  UNLINK_USERS_SUCCESS: type('[Organization] unlinkUsers success'),
  UNLINK_USERS_FAIL: type('[Organization] unlinkUsers fail'),

  FIND_BY_ID_ROLES: type('[Organization] findByIdRoles'),
  FIND_BY_ID_ROLES_SUCCESS: type('[Organization] findByIdRoles success'),
  FIND_BY_ID_ROLES_FAIL: type('[Organization] findByIdRoles fail'),

  DESTROY_BY_ID_ROLES: type('[Organization] destroyByIdRoles'),
  DESTROY_BY_ID_ROLES_SUCCESS: type('[Organization] destroyByIdRoles success'),
  DESTROY_BY_ID_ROLES_FAIL: type('[Organization] destroyByIdRoles fail'),

  UPDATE_BY_ID_ROLES: type('[Organization] updateByIdRoles'),
  UPDATE_BY_ID_ROLES_SUCCESS: type('[Organization] updateByIdRoles success'),
  UPDATE_BY_ID_ROLES_FAIL: type('[Organization] updateByIdRoles fail'),

  FIND_BY_ID_NOTIFICATIONS: type('[Organization] findByIdNotifications'),
  FIND_BY_ID_NOTIFICATIONS_SUCCESS: type('[Organization] findByIdNotifications success'),
  FIND_BY_ID_NOTIFICATIONS_FAIL: type('[Organization] findByIdNotifications fail'),

  DESTROY_BY_ID_NOTIFICATIONS: type('[Organization] destroyByIdNotifications'),
  DESTROY_BY_ID_NOTIFICATIONS_SUCCESS: type('[Organization] destroyByIdNotifications success'),
  DESTROY_BY_ID_NOTIFICATIONS_FAIL: type('[Organization] destroyByIdNotifications fail'),

  UPDATE_BY_ID_NOTIFICATIONS: type('[Organization] updateByIdNotifications'),
  UPDATE_BY_ID_NOTIFICATIONS_SUCCESS: type('[Organization] updateByIdNotifications success'),
  UPDATE_BY_ID_NOTIFICATIONS_FAIL: type('[Organization] updateByIdNotifications fail'),

  GET_S3PHOTO: type('[Organization] getS3Photo'),
  GET_S3PHOTO_SUCCESS: type('[Organization] getS3Photo success'),
  GET_S3PHOTO_FAIL: type('[Organization] getS3Photo fail'),

  CREATE_S3PHOTO: type('[Organization] createS3Photo'),
  CREATE_S3PHOTO_SUCCESS: type('[Organization] createS3Photo success'),
  CREATE_S3PHOTO_FAIL: type('[Organization] createS3Photo fail'),

  UPDATE_S3PHOTO: type('[Organization] updateS3Photo'),
  UPDATE_S3PHOTO_SUCCESS: type('[Organization] updateS3Photo success'),
  UPDATE_S3PHOTO_FAIL: type('[Organization] updateS3Photo fail'),

  DESTROY_S3PHOTO: type('[Organization] destroyS3Photo'),
  DESTROY_S3PHOTO_SUCCESS: type('[Organization] destroyS3Photo success'),
  DESTROY_S3PHOTO_FAIL: type('[Organization] destroyS3Photo fail'),

  GET_STRIPECUSTOMER: type('[Organization] getStripeCustomer'),
  GET_STRIPECUSTOMER_SUCCESS: type('[Organization] getStripeCustomer success'),
  GET_STRIPECUSTOMER_FAIL: type('[Organization] getStripeCustomer fail'),

  CREATE_STRIPECUSTOMER: type('[Organization] createStripeCustomer'),
  CREATE_STRIPECUSTOMER_SUCCESS: type('[Organization] createStripeCustomer success'),
  CREATE_STRIPECUSTOMER_FAIL: type('[Organization] createStripeCustomer fail'),

  UPDATE_STRIPECUSTOMER: type('[Organization] updateStripeCustomer'),
  UPDATE_STRIPECUSTOMER_SUCCESS: type('[Organization] updateStripeCustomer success'),
  UPDATE_STRIPECUSTOMER_FAIL: type('[Organization] updateStripeCustomer fail'),

  DESTROY_STRIPECUSTOMER: type('[Organization] destroyStripeCustomer'),
  DESTROY_STRIPECUSTOMER_SUCCESS: type('[Organization] destroyStripeCustomer success'),
  DESTROY_STRIPECUSTOMER_FAIL: type('[Organization] destroyStripeCustomer fail'),

  FIND_BY_ID_STRIPESOURCES: type('[Organization] findByIdStripeSources'),
  FIND_BY_ID_STRIPESOURCES_SUCCESS: type('[Organization] findByIdStripeSources success'),
  FIND_BY_ID_STRIPESOURCES_FAIL: type('[Organization] findByIdStripeSources fail'),

  DESTROY_BY_ID_STRIPESOURCES: type('[Organization] destroyByIdStripeSources'),
  DESTROY_BY_ID_STRIPESOURCES_SUCCESS: type('[Organization] destroyByIdStripeSources success'),
  DESTROY_BY_ID_STRIPESOURCES_FAIL: type('[Organization] destroyByIdStripeSources fail'),

  UPDATE_BY_ID_STRIPESOURCES: type('[Organization] updateByIdStripeSources'),
  UPDATE_BY_ID_STRIPESOURCES_SUCCESS: type('[Organization] updateByIdStripeSources success'),
  UPDATE_BY_ID_STRIPESOURCES_FAIL: type('[Organization] updateByIdStripeSources fail'),

  FIND_BY_ID_STRIPECHARGES: type('[Organization] findByIdStripeCharges'),
  FIND_BY_ID_STRIPECHARGES_SUCCESS: type('[Organization] findByIdStripeCharges success'),
  FIND_BY_ID_STRIPECHARGES_FAIL: type('[Organization] findByIdStripeCharges fail'),

  DESTROY_BY_ID_STRIPECHARGES: type('[Organization] destroyByIdStripeCharges'),
  DESTROY_BY_ID_STRIPECHARGES_SUCCESS: type('[Organization] destroyByIdStripeCharges success'),
  DESTROY_BY_ID_STRIPECHARGES_FAIL: type('[Organization] destroyByIdStripeCharges fail'),

  UPDATE_BY_ID_STRIPECHARGES: type('[Organization] updateByIdStripeCharges'),
  UPDATE_BY_ID_STRIPECHARGES_SUCCESS: type('[Organization] updateByIdStripeCharges success'),
  UPDATE_BY_ID_STRIPECHARGES_FAIL: type('[Organization] updateByIdStripeCharges fail'),

  GET_STRIPESTOREIDENTITY: type('[Organization] getStripeStoreIdentity'),
  GET_STRIPESTOREIDENTITY_SUCCESS: type('[Organization] getStripeStoreIdentity success'),
  GET_STRIPESTOREIDENTITY_FAIL: type('[Organization] getStripeStoreIdentity fail'),

  CREATE_STRIPESTOREIDENTITY: type('[Organization] createStripeStoreIdentity'),
  CREATE_STRIPESTOREIDENTITY_SUCCESS: type('[Organization] createStripeStoreIdentity success'),
  CREATE_STRIPESTOREIDENTITY_FAIL: type('[Organization] createStripeStoreIdentity fail'),

  UPDATE_STRIPESTOREIDENTITY: type('[Organization] updateStripeStoreIdentity'),
  UPDATE_STRIPESTOREIDENTITY_SUCCESS: type('[Organization] updateStripeStoreIdentity success'),
  UPDATE_STRIPESTOREIDENTITY_FAIL: type('[Organization] updateStripeStoreIdentity fail'),

  DESTROY_STRIPESTOREIDENTITY: type('[Organization] destroyStripeStoreIdentity'),
  DESTROY_STRIPESTOREIDENTITY_SUCCESS: type('[Organization] destroyStripeStoreIdentity success'),
  DESTROY_STRIPESTOREIDENTITY_FAIL: type('[Organization] destroyStripeStoreIdentity fail'),

  FIND_BY_ID_SUPPORTTICKETS: type('[Organization] findByIdSupportTickets'),
  FIND_BY_ID_SUPPORTTICKETS_SUCCESS: type('[Organization] findByIdSupportTickets success'),
  FIND_BY_ID_SUPPORTTICKETS_FAIL: type('[Organization] findByIdSupportTickets fail'),

  DESTROY_BY_ID_SUPPORTTICKETS: type('[Organization] destroyByIdSupportTickets'),
  DESTROY_BY_ID_SUPPORTTICKETS_SUCCESS: type('[Organization] destroyByIdSupportTickets success'),
  DESTROY_BY_ID_SUPPORTTICKETS_FAIL: type('[Organization] destroyByIdSupportTickets fail'),

  UPDATE_BY_ID_SUPPORTTICKETS: type('[Organization] updateByIdSupportTickets'),
  UPDATE_BY_ID_SUPPORTTICKETS_SUCCESS: type('[Organization] updateByIdSupportTickets success'),
  UPDATE_BY_ID_SUPPORTTICKETS_FAIL: type('[Organization] updateByIdSupportTickets fail'),

  FIND_BY_ID_POSTS: type('[Organization] findByIdPosts'),
  FIND_BY_ID_POSTS_SUCCESS: type('[Organization] findByIdPosts success'),
  FIND_BY_ID_POSTS_FAIL: type('[Organization] findByIdPosts fail'),

  DESTROY_BY_ID_POSTS: type('[Organization] destroyByIdPosts'),
  DESTROY_BY_ID_POSTS_SUCCESS: type('[Organization] destroyByIdPosts success'),
  DESTROY_BY_ID_POSTS_FAIL: type('[Organization] destroyByIdPosts fail'),

  UPDATE_BY_ID_POSTS: type('[Organization] updateByIdPosts'),
  UPDATE_BY_ID_POSTS_SUCCESS: type('[Organization] updateByIdPosts success'),
  UPDATE_BY_ID_POSTS_FAIL: type('[Organization] updateByIdPosts fail'),

  FIND_BY_ID_PRODUCTS: type('[Organization] findByIdProducts'),
  FIND_BY_ID_PRODUCTS_SUCCESS: type('[Organization] findByIdProducts success'),
  FIND_BY_ID_PRODUCTS_FAIL: type('[Organization] findByIdProducts fail'),

  DESTROY_BY_ID_PRODUCTS: type('[Organization] destroyByIdProducts'),
  DESTROY_BY_ID_PRODUCTS_SUCCESS: type('[Organization] destroyByIdProducts success'),
  DESTROY_BY_ID_PRODUCTS_FAIL: type('[Organization] destroyByIdProducts fail'),

  UPDATE_BY_ID_PRODUCTS: type('[Organization] updateByIdProducts'),
  UPDATE_BY_ID_PRODUCTS_SUCCESS: type('[Organization] updateByIdProducts success'),
  UPDATE_BY_ID_PRODUCTS_FAIL: type('[Organization] updateByIdProducts fail'),

  FIND_BY_ID_SUBSCRIPTIONS: type('[Organization] findByIdSubscriptions'),
  FIND_BY_ID_SUBSCRIPTIONS_SUCCESS: type('[Organization] findByIdSubscriptions success'),
  FIND_BY_ID_SUBSCRIPTIONS_FAIL: type('[Organization] findByIdSubscriptions fail'),

  DESTROY_BY_ID_SUBSCRIPTIONS: type('[Organization] destroyByIdSubscriptions'),
  DESTROY_BY_ID_SUBSCRIPTIONS_SUCCESS: type('[Organization] destroyByIdSubscriptions success'),
  DESTROY_BY_ID_SUBSCRIPTIONS_FAIL: type('[Organization] destroyByIdSubscriptions fail'),

  UPDATE_BY_ID_SUBSCRIPTIONS: type('[Organization] updateByIdSubscriptions'),
  UPDATE_BY_ID_SUBSCRIPTIONS_SUCCESS: type('[Organization] updateByIdSubscriptions success'),
  UPDATE_BY_ID_SUBSCRIPTIONS_FAIL: type('[Organization] updateByIdSubscriptions fail'),

  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[Organization] findByIdOAuthClientApplications'),
  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] findByIdOAuthClientApplications success'),
  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] findByIdOAuthClientApplications fail'),

  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[Organization] destroyByIdOAuthClientApplications'),
  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] destroyByIdOAuthClientApplications success'),
  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] destroyByIdOAuthClientApplications fail'),

  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[Organization] updateByIdOAuthClientApplications'),
  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] updateByIdOAuthClientApplications success'),
  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] updateByIdOAuthClientApplications fail'),

  GET_USERS: type('[Organization] getUsers'),
  GET_USERS_SUCCESS: type('[Organization] getUsers success'),
  GET_USERS_FAIL: type('[Organization] getUsers fail'),

  CREATE_USERS: type('[Organization] createUsers'),
  CREATE_USERS_SUCCESS: type('[Organization] createUsers success'),
  CREATE_USERS_FAIL: type('[Organization] createUsers fail'),

  DELETE_USERS: type('[Organization] deleteUsers'),
  DELETE_USERS_SUCCESS: type('[Organization] deleteUsers success'),
  DELETE_USERS_FAIL: type('[Organization] deleteUsers fail'),

  GET_ROLES: type('[Organization] getRoles'),
  GET_ROLES_SUCCESS: type('[Organization] getRoles success'),
  GET_ROLES_FAIL: type('[Organization] getRoles fail'),

  CREATE_ROLES: type('[Organization] createRoles'),
  CREATE_ROLES_SUCCESS: type('[Organization] createRoles success'),
  CREATE_ROLES_FAIL: type('[Organization] createRoles fail'),

  DELETE_ROLES: type('[Organization] deleteRoles'),
  DELETE_ROLES_SUCCESS: type('[Organization] deleteRoles success'),
  DELETE_ROLES_FAIL: type('[Organization] deleteRoles fail'),

  GET_NOTIFICATIONS: type('[Organization] getNotifications'),
  GET_NOTIFICATIONS_SUCCESS: type('[Organization] getNotifications success'),
  GET_NOTIFICATIONS_FAIL: type('[Organization] getNotifications fail'),

  CREATE_NOTIFICATIONS: type('[Organization] createNotifications'),
  CREATE_NOTIFICATIONS_SUCCESS: type('[Organization] createNotifications success'),
  CREATE_NOTIFICATIONS_FAIL: type('[Organization] createNotifications fail'),

  DELETE_NOTIFICATIONS: type('[Organization] deleteNotifications'),
  DELETE_NOTIFICATIONS_SUCCESS: type('[Organization] deleteNotifications success'),
  DELETE_NOTIFICATIONS_FAIL: type('[Organization] deleteNotifications fail'),

  GET_STRIPESOURCES: type('[Organization] getStripeSources'),
  GET_STRIPESOURCES_SUCCESS: type('[Organization] getStripeSources success'),
  GET_STRIPESOURCES_FAIL: type('[Organization] getStripeSources fail'),

  CREATE_STRIPESOURCES: type('[Organization] createStripeSources'),
  CREATE_STRIPESOURCES_SUCCESS: type('[Organization] createStripeSources success'),
  CREATE_STRIPESOURCES_FAIL: type('[Organization] createStripeSources fail'),

  DELETE_STRIPESOURCES: type('[Organization] deleteStripeSources'),
  DELETE_STRIPESOURCES_SUCCESS: type('[Organization] deleteStripeSources success'),
  DELETE_STRIPESOURCES_FAIL: type('[Organization] deleteStripeSources fail'),

  GET_STRIPECHARGES: type('[Organization] getStripeCharges'),
  GET_STRIPECHARGES_SUCCESS: type('[Organization] getStripeCharges success'),
  GET_STRIPECHARGES_FAIL: type('[Organization] getStripeCharges fail'),

  CREATE_STRIPECHARGES: type('[Organization] createStripeCharges'),
  CREATE_STRIPECHARGES_SUCCESS: type('[Organization] createStripeCharges success'),
  CREATE_STRIPECHARGES_FAIL: type('[Organization] createStripeCharges fail'),

  DELETE_STRIPECHARGES: type('[Organization] deleteStripeCharges'),
  DELETE_STRIPECHARGES_SUCCESS: type('[Organization] deleteStripeCharges success'),
  DELETE_STRIPECHARGES_FAIL: type('[Organization] deleteStripeCharges fail'),

  GET_SUPPORTTICKETS: type('[Organization] getSupportTickets'),
  GET_SUPPORTTICKETS_SUCCESS: type('[Organization] getSupportTickets success'),
  GET_SUPPORTTICKETS_FAIL: type('[Organization] getSupportTickets fail'),

  CREATE_SUPPORTTICKETS: type('[Organization] createSupportTickets'),
  CREATE_SUPPORTTICKETS_SUCCESS: type('[Organization] createSupportTickets success'),
  CREATE_SUPPORTTICKETS_FAIL: type('[Organization] createSupportTickets fail'),

  DELETE_SUPPORTTICKETS: type('[Organization] deleteSupportTickets'),
  DELETE_SUPPORTTICKETS_SUCCESS: type('[Organization] deleteSupportTickets success'),
  DELETE_SUPPORTTICKETS_FAIL: type('[Organization] deleteSupportTickets fail'),

  GET_POSTS: type('[Organization] getPosts'),
  GET_POSTS_SUCCESS: type('[Organization] getPosts success'),
  GET_POSTS_FAIL: type('[Organization] getPosts fail'),

  CREATE_POSTS: type('[Organization] createPosts'),
  CREATE_POSTS_SUCCESS: type('[Organization] createPosts success'),
  CREATE_POSTS_FAIL: type('[Organization] createPosts fail'),

  DELETE_POSTS: type('[Organization] deletePosts'),
  DELETE_POSTS_SUCCESS: type('[Organization] deletePosts success'),
  DELETE_POSTS_FAIL: type('[Organization] deletePosts fail'),

  GET_PRODUCTS: type('[Organization] getProducts'),
  GET_PRODUCTS_SUCCESS: type('[Organization] getProducts success'),
  GET_PRODUCTS_FAIL: type('[Organization] getProducts fail'),

  CREATE_PRODUCTS: type('[Organization] createProducts'),
  CREATE_PRODUCTS_SUCCESS: type('[Organization] createProducts success'),
  CREATE_PRODUCTS_FAIL: type('[Organization] createProducts fail'),

  DELETE_PRODUCTS: type('[Organization] deleteProducts'),
  DELETE_PRODUCTS_SUCCESS: type('[Organization] deleteProducts success'),
  DELETE_PRODUCTS_FAIL: type('[Organization] deleteProducts fail'),

  GET_SUBSCRIPTIONS: type('[Organization] getSubscriptions'),
  GET_SUBSCRIPTIONS_SUCCESS: type('[Organization] getSubscriptions success'),
  GET_SUBSCRIPTIONS_FAIL: type('[Organization] getSubscriptions fail'),

  CREATE_SUBSCRIPTIONS: type('[Organization] createSubscriptions'),
  CREATE_SUBSCRIPTIONS_SUCCESS: type('[Organization] createSubscriptions success'),
  CREATE_SUBSCRIPTIONS_FAIL: type('[Organization] createSubscriptions fail'),

  DELETE_SUBSCRIPTIONS: type('[Organization] deleteSubscriptions'),
  DELETE_SUBSCRIPTIONS_SUCCESS: type('[Organization] deleteSubscriptions success'),
  DELETE_SUBSCRIPTIONS_FAIL: type('[Organization] deleteSubscriptions fail'),

  GET_OAUTHCLIENTAPPLICATIONS: type('[Organization] getOAuthClientApplications'),
  GET_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] getOAuthClientApplications success'),
  GET_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] getOAuthClientApplications fail'),

  CREATE_OAUTHCLIENTAPPLICATIONS: type('[Organization] createOAuthClientApplications'),
  CREATE_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] createOAuthClientApplications success'),
  CREATE_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] createOAuthClientApplications fail'),

  DELETE_OAUTHCLIENTAPPLICATIONS: type('[Organization] deleteOAuthClientApplications'),
  DELETE_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] deleteOAuthClientApplications success'),
  DELETE_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] deleteOAuthClientApplications fail'),

  S3_P_U_T_SIGNED_URL: type('[Organization] s3PUTSignedUrl'),
  S3_P_U_T_SIGNED_URL_SUCCESS: type('[Organization] s3PUTSignedUrl success'),
  S3_P_U_T_SIGNED_URL_FAIL: type('[Organization] s3PUTSignedUrl fail'),

  S3_G_E_T_SIGNED_URL: type('[Organization] s3GETSignedUrl'),
  S3_G_E_T_SIGNED_URL_SUCCESS: type('[Organization] s3GETSignedUrl success'),
  S3_G_E_T_SIGNED_URL_FAIL: type('[Organization] s3GETSignedUrl fail'),

  CREATE_MANY_S3PHOTO: type('[Organization] createManyS3Photo'),
  CREATE_MANY_S3PHOTO_SUCCESS: type('[Organization] createManyS3Photo success'),
  CREATE_MANY_S3PHOTO_FAIL: type('[Organization] createManyS3Photo fail'),

  CREATE_MANY_STRIPECUSTOMER: type('[Organization] createManyStripeCustomer'),
  CREATE_MANY_STRIPECUSTOMER_SUCCESS: type('[Organization] createManyStripeCustomer success'),
  CREATE_MANY_STRIPECUSTOMER_FAIL: type('[Organization] createManyStripeCustomer fail'),

  CREATE_MANY_STRIPESTOREIDENTITY: type('[Organization] createManyStripeStoreIdentity'),
  CREATE_MANY_STRIPESTOREIDENTITY_SUCCESS: type('[Organization] createManyStripeStoreIdentity success'),
  CREATE_MANY_STRIPESTOREIDENTITY_FAIL: type('[Organization] createManyStripeStoreIdentity fail'),

  CREATE_MANY_USERS: type('[Organization] createManyUsers'),
  CREATE_MANY_USERS_SUCCESS: type('[Organization] createManyUsers success'),
  CREATE_MANY_USERS_FAIL: type('[Organization] createManyUsers fail'),

  CREATE_MANY_ROLES: type('[Organization] createManyRoles'),
  CREATE_MANY_ROLES_SUCCESS: type('[Organization] createManyRoles success'),
  CREATE_MANY_ROLES_FAIL: type('[Organization] createManyRoles fail'),

  CREATE_MANY_NOTIFICATIONS: type('[Organization] createManyNotifications'),
  CREATE_MANY_NOTIFICATIONS_SUCCESS: type('[Organization] createManyNotifications success'),
  CREATE_MANY_NOTIFICATIONS_FAIL: type('[Organization] createManyNotifications fail'),

  CREATE_MANY_STRIPESOURCES: type('[Organization] createManyStripeSources'),
  CREATE_MANY_STRIPESOURCES_SUCCESS: type('[Organization] createManyStripeSources success'),
  CREATE_MANY_STRIPESOURCES_FAIL: type('[Organization] createManyStripeSources fail'),

  CREATE_MANY_STRIPECHARGES: type('[Organization] createManyStripeCharges'),
  CREATE_MANY_STRIPECHARGES_SUCCESS: type('[Organization] createManyStripeCharges success'),
  CREATE_MANY_STRIPECHARGES_FAIL: type('[Organization] createManyStripeCharges fail'),

  CREATE_MANY_SUPPORTTICKETS: type('[Organization] createManySupportTickets'),
  CREATE_MANY_SUPPORTTICKETS_SUCCESS: type('[Organization] createManySupportTickets success'),
  CREATE_MANY_SUPPORTTICKETS_FAIL: type('[Organization] createManySupportTickets fail'),

  CREATE_MANY_POSTS: type('[Organization] createManyPosts'),
  CREATE_MANY_POSTS_SUCCESS: type('[Organization] createManyPosts success'),
  CREATE_MANY_POSTS_FAIL: type('[Organization] createManyPosts fail'),

  CREATE_MANY_PRODUCTS: type('[Organization] createManyProducts'),
  CREATE_MANY_PRODUCTS_SUCCESS: type('[Organization] createManyProducts success'),
  CREATE_MANY_PRODUCTS_FAIL: type('[Organization] createManyProducts fail'),

  CREATE_MANY_SUBSCRIPTIONS: type('[Organization] createManySubscriptions'),
  CREATE_MANY_SUBSCRIPTIONS_SUCCESS: type('[Organization] createManySubscriptions success'),
  CREATE_MANY_SUBSCRIPTIONS_FAIL: type('[Organization] createManySubscriptions fail'),

  CREATE_MANY_OAUTHCLIENTAPPLICATIONS: type('[Organization] createManyOAuthClientApplications'),
  CREATE_MANY_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] createManyOAuthClientApplications success'),
  CREATE_MANY_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] createManyOAuthClientApplications fail'),

});
export const OrganizationActions =
Object.assign(BaseLoopbackActionsFactory<Organization>(OrganizationActionTypes), {

  /**
   * stripeAuthenticateCallback Action.
   * Purchase a Batch
   *
   * @param {object} req 
   * @param {object} res 
   * @param {any} meta (optional).
   * 
   */
  stripeAuthenticateCallback: class implements Action {
    public readonly type = OrganizationActionTypes.STRIPE_AUTHENTICATE_CALLBACK;
      public payload: {req: any, res: any};

    constructor(req: any = {}, res: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {req, res};
    }
  },
  /**
   * stripeAuthenticateCallbackSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  stripeAuthenticateCallbackSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.STRIPE_AUTHENTICATE_CALLBACK_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * stripeAuthenticateCallbackFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  stripeAuthenticateCallbackFail: class implements Action {
    public readonly type = OrganizationActionTypes.STRIPE_AUTHENTICATE_CALLBACK_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * stripeAuthenticate Action.
   * Purchase a Batch
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  stripeAuthenticate: class implements Action {
    public readonly type = OrganizationActionTypes.STRIPE_AUTHENTICATE;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * stripeAuthenticateSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  stripeAuthenticateSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.STRIPE_AUTHENTICATE_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * stripeAuthenticateFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  stripeAuthenticateFail: class implements Action {
    public readonly type = OrganizationActionTypes.STRIPE_AUTHENTICATE_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdUsers Action.
   * Find a related item by id for users.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for users
   * @param {any} meta (optional).
   * 
   */
  findByIdUsers: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_USERS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdUsersSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_USERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdUsers Action.
   * Delete a related item by id for users.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for users
   * @param {any} meta (optional).
   * 
   */
  destroyByIdUsers: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_USERS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdUsersSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_USERS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdUsers Action.
   * Update a related item by id for users.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for users
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdUsers: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_USERS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdUsersSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_USERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * linkUsers Action.
   * Add a related item by id for users.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for users
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  linkUsers: class implements Action {
    public readonly type = OrganizationActionTypes.LINK_USERS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * linkUsersSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  linkUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.LINK_USERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * linkUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  linkUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.LINK_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * unlinkUsers Action.
   * Remove the users relation to an item by id.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for users
   * @param {any} meta (optional).
   * 
   */
  unlinkUsers: class implements Action {
    public readonly type = OrganizationActionTypes.UNLINK_USERS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkUsersSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  unlinkUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UNLINK_USERS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  unlinkUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.UNLINK_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdRoles Action.
   * Find a related item by id for roles.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for roles
   * @param {any} meta (optional).
   * 
   */
  findByIdRoles: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_ROLES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdRolesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_ROLES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdRoles Action.
   * Delete a related item by id for roles.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for roles
   * @param {any} meta (optional).
   * 
   */
  destroyByIdRoles: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_ROLES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdRolesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_ROLES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdRoles Action.
   * Update a related item by id for roles.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for roles
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdRoles: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_ROLES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdRolesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_ROLES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdNotifications Action.
   * Find a related item by id for notifications.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for notifications
   * @param {any} meta (optional).
   * 
   */
  findByIdNotifications: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_NOTIFICATIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdNotificationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdNotificationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_NOTIFICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdNotificationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdNotificationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_NOTIFICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdNotifications Action.
   * Delete a related item by id for notifications.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for notifications
   * @param {any} meta (optional).
   * 
   */
  destroyByIdNotifications: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_NOTIFICATIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdNotificationsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdNotificationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_NOTIFICATIONS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdNotificationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdNotificationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_NOTIFICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdNotifications Action.
   * Update a related item by id for notifications.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for notifications
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdNotifications: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_NOTIFICATIONS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdNotificationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdNotificationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_NOTIFICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdNotificationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdNotificationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_NOTIFICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getS3Photo Action.
   * Fetches hasOne relation s3Photo.
   *
   * @param {any} id Organization id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getS3Photo: class implements Action {
    public readonly type = OrganizationActionTypes.GET_S3PHOTO;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getS3PhotoSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getS3PhotoSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_S3PHOTO_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getS3PhotoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getS3PhotoFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createS3Photo Action.
   * Creates a new instance in s3Photo of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createS3Photo: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_S3PHOTO;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createS3PhotoSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createS3PhotoSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_S3PHOTO_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createS3PhotoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createS3PhotoFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateS3Photo Action.
   * Update s3Photo of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateS3Photo: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_S3PHOTO;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateS3PhotoSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateS3PhotoSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_S3PHOTO_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateS3PhotoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateS3PhotoFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyS3Photo Action.
   * Deletes s3Photo of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  destroyS3Photo: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_S3PHOTO;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * destroyS3PhotoSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyS3PhotoSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_S3PHOTO_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyS3PhotoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyS3PhotoFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getStripeCustomer Action.
   * Fetches hasOne relation stripeCustomer.
   *
   * @param {any} id Organization id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getStripeCustomer: class implements Action {
    public readonly type = OrganizationActionTypes.GET_STRIPECUSTOMER;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getStripeCustomerSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getStripeCustomerSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_STRIPECUSTOMER_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getStripeCustomerFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getStripeCustomerFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_STRIPECUSTOMER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createStripeCustomer Action.
   * Creates a new instance in stripeCustomer of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createStripeCustomer: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_STRIPECUSTOMER;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createStripeCustomerSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createStripeCustomerSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_STRIPECUSTOMER_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createStripeCustomerFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createStripeCustomerFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_STRIPECUSTOMER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateStripeCustomer Action.
   * Update stripeCustomer of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateStripeCustomer: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_STRIPECUSTOMER;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateStripeCustomerSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateStripeCustomerSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_STRIPECUSTOMER_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateStripeCustomerFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateStripeCustomerFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_STRIPECUSTOMER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyStripeCustomer Action.
   * Deletes stripeCustomer of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  destroyStripeCustomer: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_STRIPECUSTOMER;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * destroyStripeCustomerSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyStripeCustomerSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_STRIPECUSTOMER_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyStripeCustomerFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyStripeCustomerFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_STRIPECUSTOMER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdStripeSources Action.
   * Find a related item by id for stripeSources.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for stripeSources
   * @param {any} meta (optional).
   * 
   */
  findByIdStripeSources: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_STRIPESOURCES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdStripeSourcesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdStripeSourcesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_STRIPESOURCES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdStripeSourcesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdStripeSourcesFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_STRIPESOURCES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdStripeSources Action.
   * Delete a related item by id for stripeSources.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for stripeSources
   * @param {any} meta (optional).
   * 
   */
  destroyByIdStripeSources: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_STRIPESOURCES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdStripeSourcesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdStripeSourcesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_STRIPESOURCES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdStripeSourcesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdStripeSourcesFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_STRIPESOURCES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdStripeSources Action.
   * Update a related item by id for stripeSources.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for stripeSources
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdStripeSources: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_STRIPESOURCES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdStripeSourcesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdStripeSourcesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_STRIPESOURCES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdStripeSourcesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdStripeSourcesFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_STRIPESOURCES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdStripeCharges Action.
   * Find a related item by id for stripeCharges.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for stripeCharges
   * @param {any} meta (optional).
   * 
   */
  findByIdStripeCharges: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_STRIPECHARGES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdStripeChargesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdStripeChargesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_STRIPECHARGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdStripeChargesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdStripeChargesFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_STRIPECHARGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdStripeCharges Action.
   * Delete a related item by id for stripeCharges.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for stripeCharges
   * @param {any} meta (optional).
   * 
   */
  destroyByIdStripeCharges: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_STRIPECHARGES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdStripeChargesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdStripeChargesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_STRIPECHARGES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdStripeChargesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdStripeChargesFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_STRIPECHARGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdStripeCharges Action.
   * Update a related item by id for stripeCharges.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for stripeCharges
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdStripeCharges: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_STRIPECHARGES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdStripeChargesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdStripeChargesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_STRIPECHARGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdStripeChargesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdStripeChargesFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_STRIPECHARGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getStripeStoreIdentity Action.
   * Fetches hasOne relation stripeStoreIdentity.
   *
   * @param {any} id Organization id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getStripeStoreIdentity: class implements Action {
    public readonly type = OrganizationActionTypes.GET_STRIPESTOREIDENTITY;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getStripeStoreIdentitySuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getStripeStoreIdentitySuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_STRIPESTOREIDENTITY_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getStripeStoreIdentityFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getStripeStoreIdentityFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_STRIPESTOREIDENTITY_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createStripeStoreIdentity Action.
   * Creates a new instance in stripeStoreIdentity of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createStripeStoreIdentity: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_STRIPESTOREIDENTITY;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createStripeStoreIdentitySuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createStripeStoreIdentitySuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_STRIPESTOREIDENTITY_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createStripeStoreIdentityFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createStripeStoreIdentityFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_STRIPESTOREIDENTITY_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateStripeStoreIdentity Action.
   * Update stripeStoreIdentity of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateStripeStoreIdentity: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_STRIPESTOREIDENTITY;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateStripeStoreIdentitySuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateStripeStoreIdentitySuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_STRIPESTOREIDENTITY_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateStripeStoreIdentityFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateStripeStoreIdentityFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_STRIPESTOREIDENTITY_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyStripeStoreIdentity Action.
   * Deletes stripeStoreIdentity of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  destroyStripeStoreIdentity: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_STRIPESTOREIDENTITY;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * destroyStripeStoreIdentitySuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyStripeStoreIdentitySuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_STRIPESTOREIDENTITY_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyStripeStoreIdentityFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyStripeStoreIdentityFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_STRIPESTOREIDENTITY_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdSupportTickets Action.
   * Find a related item by id for supportTickets.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for supportTickets
   * @param {any} meta (optional).
   * 
   */
  findByIdSupportTickets: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_SUPPORTTICKETS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdSupportTicketsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdSupportTicketsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_SUPPORTTICKETS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdSupportTicketsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdSupportTicketsFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_SUPPORTTICKETS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdSupportTickets Action.
   * Delete a related item by id for supportTickets.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for supportTickets
   * @param {any} meta (optional).
   * 
   */
  destroyByIdSupportTickets: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_SUPPORTTICKETS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdSupportTicketsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdSupportTicketsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_SUPPORTTICKETS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdSupportTicketsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdSupportTicketsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_SUPPORTTICKETS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdSupportTickets Action.
   * Update a related item by id for supportTickets.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for supportTickets
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdSupportTickets: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_SUPPORTTICKETS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdSupportTicketsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdSupportTicketsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_SUPPORTTICKETS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdSupportTicketsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdSupportTicketsFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_SUPPORTTICKETS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdPosts Action.
   * Find a related item by id for posts.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for posts
   * @param {any} meta (optional).
   * 
   */
  findByIdPosts: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_POSTS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdPostsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdPostsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_POSTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdPostsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdPostsFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_POSTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdPosts Action.
   * Delete a related item by id for posts.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for posts
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPosts: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_POSTS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdPostsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPostsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_POSTS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdPostsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPostsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_POSTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdPosts Action.
   * Update a related item by id for posts.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for posts
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdPosts: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_POSTS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdPostsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdPostsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_POSTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdPostsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdPostsFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_POSTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdProducts Action.
   * Find a related item by id for products.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for products
   * @param {any} meta (optional).
   * 
   */
  findByIdProducts: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_PRODUCTS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdProductsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdProductsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_PRODUCTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdProductsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdProductsFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_PRODUCTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdProducts Action.
   * Delete a related item by id for products.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for products
   * @param {any} meta (optional).
   * 
   */
  destroyByIdProducts: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_PRODUCTS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdProductsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdProductsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_PRODUCTS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdProductsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdProductsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_PRODUCTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdProducts Action.
   * Update a related item by id for products.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for products
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdProducts: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_PRODUCTS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdProductsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdProductsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_PRODUCTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdProductsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdProductsFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_PRODUCTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdSubscriptions Action.
   * Find a related item by id for subscriptions.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for subscriptions
   * @param {any} meta (optional).
   * 
   */
  findByIdSubscriptions: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_SUBSCRIPTIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdSubscriptionsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdSubscriptionsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_SUBSCRIPTIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdSubscriptionsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdSubscriptionsFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_SUBSCRIPTIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdSubscriptions Action.
   * Delete a related item by id for subscriptions.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for subscriptions
   * @param {any} meta (optional).
   * 
   */
  destroyByIdSubscriptions: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_SUBSCRIPTIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdSubscriptionsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdSubscriptionsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_SUBSCRIPTIONS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdSubscriptionsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdSubscriptionsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_SUBSCRIPTIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdSubscriptions Action.
   * Update a related item by id for subscriptions.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for subscriptions
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdSubscriptions: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_SUBSCRIPTIONS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdSubscriptionsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdSubscriptionsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_SUBSCRIPTIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdSubscriptionsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdSubscriptionsFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_SUBSCRIPTIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdOAuthClientApplications Action.
   * Find a related item by id for oAuthClientApplications.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for oAuthClientApplications
   * @param {any} meta (optional).
   * 
   */
  findByIdOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdOAuthClientApplications Action.
   * Delete a related item by id for oAuthClientApplications.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for oAuthClientApplications
   * @param {any} meta (optional).
   * 
   */
  destroyByIdOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdOAuthClientApplications Action.
   * Update a related item by id for oAuthClientApplications.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for oAuthClientApplications
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getUsers Action.
   * Queries users of Organization.
   *
   * @param {any} id Organization id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getUsers: class implements Action {
    public readonly type = OrganizationActionTypes.GET_USERS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getUsersSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_USERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createUsers Action.
   * Creates a new instance in users of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createUsers: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_USERS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createUsersSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_USERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteUsers Action.
   * Deletes all users of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  deleteUsers: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_USERS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteUsersSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_USERS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getRoles Action.
   * Queries roles of Organization.
   *
   * @param {any} id Organization id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getRoles: class implements Action {
    public readonly type = OrganizationActionTypes.GET_ROLES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getRolesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_ROLES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createRoles Action.
   * Creates a new instance in roles of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createRoles: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_ROLES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createRolesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_ROLES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteRoles Action.
   * Deletes all roles of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  deleteRoles: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_ROLES;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteRolesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_ROLES_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getNotifications Action.
   * Queries notifications of Organization.
   *
   * @param {any} id Organization id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getNotifications: class implements Action {
    public readonly type = OrganizationActionTypes.GET_NOTIFICATIONS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getNotificationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getNotificationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_NOTIFICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getNotificationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getNotificationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_NOTIFICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createNotifications Action.
   * Creates a new instance in notifications of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createNotifications: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_NOTIFICATIONS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createNotificationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createNotificationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_NOTIFICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createNotificationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createNotificationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_NOTIFICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteNotifications Action.
   * Deletes all notifications of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  deleteNotifications: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_NOTIFICATIONS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteNotificationsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteNotificationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_NOTIFICATIONS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteNotificationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteNotificationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_NOTIFICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getStripeSources Action.
   * Queries stripeSources of Organization.
   *
   * @param {any} id Organization id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getStripeSources: class implements Action {
    public readonly type = OrganizationActionTypes.GET_STRIPESOURCES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getStripeSourcesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getStripeSourcesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_STRIPESOURCES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getStripeSourcesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getStripeSourcesFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_STRIPESOURCES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createStripeSources Action.
   * Creates a new instance in stripeSources of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createStripeSources: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_STRIPESOURCES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createStripeSourcesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createStripeSourcesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_STRIPESOURCES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createStripeSourcesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createStripeSourcesFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_STRIPESOURCES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteStripeSources Action.
   * Deletes all stripeSources of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  deleteStripeSources: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_STRIPESOURCES;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteStripeSourcesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteStripeSourcesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_STRIPESOURCES_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteStripeSourcesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteStripeSourcesFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_STRIPESOURCES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getStripeCharges Action.
   * Queries stripeCharges of Organization.
   *
   * @param {any} id Organization id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getStripeCharges: class implements Action {
    public readonly type = OrganizationActionTypes.GET_STRIPECHARGES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getStripeChargesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getStripeChargesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_STRIPECHARGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getStripeChargesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getStripeChargesFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_STRIPECHARGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createStripeCharges Action.
   * Creates a new instance in stripeCharges of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createStripeCharges: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_STRIPECHARGES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createStripeChargesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createStripeChargesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_STRIPECHARGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createStripeChargesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createStripeChargesFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_STRIPECHARGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteStripeCharges Action.
   * Deletes all stripeCharges of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  deleteStripeCharges: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_STRIPECHARGES;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteStripeChargesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteStripeChargesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_STRIPECHARGES_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteStripeChargesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteStripeChargesFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_STRIPECHARGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getSupportTickets Action.
   * Queries supportTickets of Organization.
   *
   * @param {any} id Organization id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getSupportTickets: class implements Action {
    public readonly type = OrganizationActionTypes.GET_SUPPORTTICKETS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getSupportTicketsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getSupportTicketsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_SUPPORTTICKETS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getSupportTicketsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getSupportTicketsFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_SUPPORTTICKETS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createSupportTickets Action.
   * Creates a new instance in supportTickets of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createSupportTickets: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_SUPPORTTICKETS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createSupportTicketsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createSupportTicketsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_SUPPORTTICKETS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createSupportTicketsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createSupportTicketsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_SUPPORTTICKETS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteSupportTickets Action.
   * Deletes all supportTickets of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  deleteSupportTickets: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_SUPPORTTICKETS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteSupportTicketsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteSupportTicketsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_SUPPORTTICKETS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteSupportTicketsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteSupportTicketsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_SUPPORTTICKETS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getPosts Action.
   * Queries posts of Organization.
   *
   * @param {any} id Organization id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getPosts: class implements Action {
    public readonly type = OrganizationActionTypes.GET_POSTS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getPostsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getPostsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_POSTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getPostsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getPostsFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_POSTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createPosts Action.
   * Creates a new instance in posts of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createPosts: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_POSTS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createPostsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createPostsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_POSTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createPostsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createPostsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_POSTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deletePosts Action.
   * Deletes all posts of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  deletePosts: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_POSTS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deletePostsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deletePostsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_POSTS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deletePostsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deletePostsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_POSTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getProducts Action.
   * Queries products of Organization.
   *
   * @param {any} id Organization id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getProducts: class implements Action {
    public readonly type = OrganizationActionTypes.GET_PRODUCTS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getProductsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getProductsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_PRODUCTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getProductsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getProductsFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_PRODUCTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createProducts Action.
   * Creates a new instance in products of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createProducts: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_PRODUCTS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createProductsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createProductsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_PRODUCTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createProductsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createProductsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_PRODUCTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteProducts Action.
   * Deletes all products of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  deleteProducts: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_PRODUCTS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteProductsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteProductsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_PRODUCTS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteProductsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteProductsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_PRODUCTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getSubscriptions Action.
   * Queries subscriptions of Organization.
   *
   * @param {any} id Organization id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getSubscriptions: class implements Action {
    public readonly type = OrganizationActionTypes.GET_SUBSCRIPTIONS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getSubscriptionsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getSubscriptionsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_SUBSCRIPTIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getSubscriptionsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getSubscriptionsFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_SUBSCRIPTIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createSubscriptions Action.
   * Creates a new instance in subscriptions of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createSubscriptions: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_SUBSCRIPTIONS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createSubscriptionsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createSubscriptionsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_SUBSCRIPTIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createSubscriptionsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createSubscriptionsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_SUBSCRIPTIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteSubscriptions Action.
   * Deletes all subscriptions of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  deleteSubscriptions: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_SUBSCRIPTIONS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteSubscriptionsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteSubscriptionsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_SUBSCRIPTIONS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteSubscriptionsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteSubscriptionsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_SUBSCRIPTIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getOAuthClientApplications Action.
   * Queries oAuthClientApplications of Organization.
   *
   * @param {any} id Organization id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.GET_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createOAuthClientApplications Action.
   * Creates a new instance in oAuthClientApplications of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteOAuthClientApplications Action.
   * Deletes all oAuthClientApplications of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  deleteOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3PUTSignedUrl Action.
   * Get a S3 Signed URL for direct file uploads.
   *
   * @param {any} id Organization id
   * @param {string} key 
   * @param {object} options 
   * @param {any} meta (optional).
   * 
   */
  s3PUTSignedUrl: class implements Action {
    public readonly type = OrganizationActionTypes.S3_P_U_T_SIGNED_URL;
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
    public readonly type = OrganizationActionTypes.S3_P_U_T_SIGNED_URL_SUCCESS;
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
    public readonly type = OrganizationActionTypes.S3_P_U_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3GETSignedUrl Action.
   * Get a S3 Signed URL for direct file access.
   *
   * @param {any} id Organization id
   * @param {string} key 
   * @param {any} meta (optional).
   * 
   */
  s3GETSignedUrl: class implements Action {
    public readonly type = OrganizationActionTypes.S3_G_E_T_SIGNED_URL;
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
    public readonly type = OrganizationActionTypes.S3_G_E_T_SIGNED_URL_SUCCESS;
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
    public readonly type = OrganizationActionTypes.S3_G_E_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyS3Photo Action.
   * Creates a new instance in s3Photo of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyS3Photo: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_S3PHOTO;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyS3PhotoSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyS3PhotoSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_S3PHOTO_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyS3PhotoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyS3PhotoFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyStripeCustomer Action.
   * Creates a new instance in stripeCustomer of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyStripeCustomer: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_STRIPECUSTOMER;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyStripeCustomerSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyStripeCustomerSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_STRIPECUSTOMER_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyStripeCustomerFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyStripeCustomerFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_STRIPECUSTOMER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyStripeStoreIdentity Action.
   * Creates a new instance in stripeStoreIdentity of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyStripeStoreIdentity: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_STRIPESTOREIDENTITY;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyStripeStoreIdentitySuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyStripeStoreIdentitySuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_STRIPESTOREIDENTITY_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyStripeStoreIdentityFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyStripeStoreIdentityFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_STRIPESTOREIDENTITY_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyUsers Action.
   * Creates a new instance in users of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyUsers: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_USERS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyUsersSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_USERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyRoles Action.
   * Creates a new instance in roles of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyRoles: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_ROLES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyRolesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_ROLES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyNotifications Action.
   * Creates a new instance in notifications of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyNotifications: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_NOTIFICATIONS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyNotificationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyNotificationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_NOTIFICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyNotificationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyNotificationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_NOTIFICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyStripeSources Action.
   * Creates a new instance in stripeSources of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyStripeSources: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_STRIPESOURCES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyStripeSourcesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyStripeSourcesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_STRIPESOURCES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyStripeSourcesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyStripeSourcesFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_STRIPESOURCES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyStripeCharges Action.
   * Creates a new instance in stripeCharges of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyStripeCharges: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_STRIPECHARGES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyStripeChargesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyStripeChargesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_STRIPECHARGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyStripeChargesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyStripeChargesFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_STRIPECHARGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManySupportTickets Action.
   * Creates a new instance in supportTickets of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManySupportTickets: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_SUPPORTTICKETS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManySupportTicketsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManySupportTicketsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_SUPPORTTICKETS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManySupportTicketsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManySupportTicketsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_SUPPORTTICKETS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyPosts Action.
   * Creates a new instance in posts of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyPosts: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_POSTS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyPostsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyPostsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_POSTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyPostsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyPostsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_POSTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyProducts Action.
   * Creates a new instance in products of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyProducts: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_PRODUCTS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyProductsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyProductsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_PRODUCTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyProductsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyProductsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_PRODUCTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManySubscriptions Action.
   * Creates a new instance in subscriptions of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManySubscriptions: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_SUBSCRIPTIONS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManySubscriptionsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManySubscriptionsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_SUBSCRIPTIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManySubscriptionsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManySubscriptionsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_SUBSCRIPTIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyOAuthClientApplications Action.
   * Creates a new instance in oAuthClientApplications of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});