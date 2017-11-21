/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Product } from '../models';

export const ProductActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Product'), {
  GET_ORGANIZATION: type('[Product] getOrganization'),
  GET_ORGANIZATION_SUCCESS: type('[Product] getOrganization success'),
  GET_ORGANIZATION_FAIL: type('[Product] getOrganization fail'),

  FIND_BY_ID_REVIEWS: type('[Product] findByIdReviews'),
  FIND_BY_ID_REVIEWS_SUCCESS: type('[Product] findByIdReviews success'),
  FIND_BY_ID_REVIEWS_FAIL: type('[Product] findByIdReviews fail'),

  DESTROY_BY_ID_REVIEWS: type('[Product] destroyByIdReviews'),
  DESTROY_BY_ID_REVIEWS_SUCCESS: type('[Product] destroyByIdReviews success'),
  DESTROY_BY_ID_REVIEWS_FAIL: type('[Product] destroyByIdReviews fail'),

  UPDATE_BY_ID_REVIEWS: type('[Product] updateByIdReviews'),
  UPDATE_BY_ID_REVIEWS_SUCCESS: type('[Product] updateByIdReviews success'),
  UPDATE_BY_ID_REVIEWS_FAIL: type('[Product] updateByIdReviews fail'),

  FIND_BY_ID_REPORTS: type('[Product] findByIdReports'),
  FIND_BY_ID_REPORTS_SUCCESS: type('[Product] findByIdReports success'),
  FIND_BY_ID_REPORTS_FAIL: type('[Product] findByIdReports fail'),

  DESTROY_BY_ID_REPORTS: type('[Product] destroyByIdReports'),
  DESTROY_BY_ID_REPORTS_SUCCESS: type('[Product] destroyByIdReports success'),
  DESTROY_BY_ID_REPORTS_FAIL: type('[Product] destroyByIdReports fail'),

  UPDATE_BY_ID_REPORTS: type('[Product] updateByIdReports'),
  UPDATE_BY_ID_REPORTS_SUCCESS: type('[Product] updateByIdReports success'),
  UPDATE_BY_ID_REPORTS_FAIL: type('[Product] updateByIdReports fail'),

  FIND_BY_ID_CATEGORIES: type('[Product] findByIdCategories'),
  FIND_BY_ID_CATEGORIES_SUCCESS: type('[Product] findByIdCategories success'),
  FIND_BY_ID_CATEGORIES_FAIL: type('[Product] findByIdCategories fail'),

  LINK_CATEGORIES: type('[Product] linkCategories'),
  LINK_CATEGORIES_SUCCESS: type('[Product] linkCategories success'),
  LINK_CATEGORIES_FAIL: type('[Product] linkCategories fail'),

  UNLINK_CATEGORIES: type('[Product] unlinkCategories'),
  UNLINK_CATEGORIES_SUCCESS: type('[Product] unlinkCategories success'),
  UNLINK_CATEGORIES_FAIL: type('[Product] unlinkCategories fail'),

  GET_S3PHOTO: type('[Product] getS3Photo'),
  GET_S3PHOTO_SUCCESS: type('[Product] getS3Photo success'),
  GET_S3PHOTO_FAIL: type('[Product] getS3Photo fail'),

  CREATE_S3PHOTO: type('[Product] createS3Photo'),
  CREATE_S3PHOTO_SUCCESS: type('[Product] createS3Photo success'),
  CREATE_S3PHOTO_FAIL: type('[Product] createS3Photo fail'),

  UPDATE_S3PHOTO: type('[Product] updateS3Photo'),
  UPDATE_S3PHOTO_SUCCESS: type('[Product] updateS3Photo success'),
  UPDATE_S3PHOTO_FAIL: type('[Product] updateS3Photo fail'),

  DESTROY_S3PHOTO: type('[Product] destroyS3Photo'),
  DESTROY_S3PHOTO_SUCCESS: type('[Product] destroyS3Photo success'),
  DESTROY_S3PHOTO_FAIL: type('[Product] destroyS3Photo fail'),

  GET_REVIEWS: type('[Product] getReviews'),
  GET_REVIEWS_SUCCESS: type('[Product] getReviews success'),
  GET_REVIEWS_FAIL: type('[Product] getReviews fail'),

  CREATE_REVIEWS: type('[Product] createReviews'),
  CREATE_REVIEWS_SUCCESS: type('[Product] createReviews success'),
  CREATE_REVIEWS_FAIL: type('[Product] createReviews fail'),

  DELETE_REVIEWS: type('[Product] deleteReviews'),
  DELETE_REVIEWS_SUCCESS: type('[Product] deleteReviews success'),
  DELETE_REVIEWS_FAIL: type('[Product] deleteReviews fail'),

  GET_REPORTS: type('[Product] getReports'),
  GET_REPORTS_SUCCESS: type('[Product] getReports success'),
  GET_REPORTS_FAIL: type('[Product] getReports fail'),

  CREATE_REPORTS: type('[Product] createReports'),
  CREATE_REPORTS_SUCCESS: type('[Product] createReports success'),
  CREATE_REPORTS_FAIL: type('[Product] createReports fail'),

  DELETE_REPORTS: type('[Product] deleteReports'),
  DELETE_REPORTS_SUCCESS: type('[Product] deleteReports success'),
  DELETE_REPORTS_FAIL: type('[Product] deleteReports fail'),

  GET_CATEGORIES: type('[Product] getCategories'),
  GET_CATEGORIES_SUCCESS: type('[Product] getCategories success'),
  GET_CATEGORIES_FAIL: type('[Product] getCategories fail'),

  S3_P_U_T_SIGNED_URL: type('[Product] s3PUTSignedUrl'),
  S3_P_U_T_SIGNED_URL_SUCCESS: type('[Product] s3PUTSignedUrl success'),
  S3_P_U_T_SIGNED_URL_FAIL: type('[Product] s3PUTSignedUrl fail'),

  S3_G_E_T_SIGNED_URL: type('[Product] s3GETSignedUrl'),
  S3_G_E_T_SIGNED_URL_SUCCESS: type('[Product] s3GETSignedUrl success'),
  S3_G_E_T_SIGNED_URL_FAIL: type('[Product] s3GETSignedUrl fail'),

  CREATE_MANY_S3PHOTO: type('[Product] createManyS3Photo'),
  CREATE_MANY_S3PHOTO_SUCCESS: type('[Product] createManyS3Photo success'),
  CREATE_MANY_S3PHOTO_FAIL: type('[Product] createManyS3Photo fail'),

  CREATE_MANY_REVIEWS: type('[Product] createManyReviews'),
  CREATE_MANY_REVIEWS_SUCCESS: type('[Product] createManyReviews success'),
  CREATE_MANY_REVIEWS_FAIL: type('[Product] createManyReviews fail'),

  CREATE_MANY_REPORTS: type('[Product] createManyReports'),
  CREATE_MANY_REPORTS_SUCCESS: type('[Product] createManyReports success'),
  CREATE_MANY_REPORTS_FAIL: type('[Product] createManyReports fail'),

});
export const ProductActions =
Object.assign(BaseLoopbackActionsFactory<Product>(ProductActionTypes), {

  /**
   * getOrganization Action.
   * Fetches belongsTo relation organization.
   *
   * @param {any} id Product id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getOrganization: class implements Action {
    public readonly type = ProductActionTypes.GET_ORGANIZATION;
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
    public readonly type = ProductActionTypes.GET_ORGANIZATION_SUCCESS;
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
    public readonly type = ProductActionTypes.GET_ORGANIZATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdReviews Action.
   * Find a related item by id for reviews.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for reviews
   * @param {any} meta (optional).
   * 
   */
  findByIdReviews: class implements Action {
    public readonly type = ProductActionTypes.FIND_BY_ID_REVIEWS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdReviewsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdReviewsSuccess: class implements Action {
    public readonly type = ProductActionTypes.FIND_BY_ID_REVIEWS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdReviewsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdReviewsFail: class implements Action {
    public readonly type = ProductActionTypes.FIND_BY_ID_REVIEWS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdReviews Action.
   * Delete a related item by id for reviews.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for reviews
   * @param {any} meta (optional).
   * 
   */
  destroyByIdReviews: class implements Action {
    public readonly type = ProductActionTypes.DESTROY_BY_ID_REVIEWS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdReviewsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdReviewsSuccess: class implements Action {
    public readonly type = ProductActionTypes.DESTROY_BY_ID_REVIEWS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdReviewsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdReviewsFail: class implements Action {
    public readonly type = ProductActionTypes.DESTROY_BY_ID_REVIEWS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdReviews Action.
   * Update a related item by id for reviews.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for reviews
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdReviews: class implements Action {
    public readonly type = ProductActionTypes.UPDATE_BY_ID_REVIEWS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdReviewsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdReviewsSuccess: class implements Action {
    public readonly type = ProductActionTypes.UPDATE_BY_ID_REVIEWS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdReviewsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdReviewsFail: class implements Action {
    public readonly type = ProductActionTypes.UPDATE_BY_ID_REVIEWS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdReports Action.
   * Find a related item by id for reports.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for reports
   * @param {any} meta (optional).
   * 
   */
  findByIdReports: class implements Action {
    public readonly type = ProductActionTypes.FIND_BY_ID_REPORTS;
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
    public readonly type = ProductActionTypes.FIND_BY_ID_REPORTS_SUCCESS;
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
    public readonly type = ProductActionTypes.FIND_BY_ID_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdReports Action.
   * Delete a related item by id for reports.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for reports
   * @param {any} meta (optional).
   * 
   */
  destroyByIdReports: class implements Action {
    public readonly type = ProductActionTypes.DESTROY_BY_ID_REPORTS;
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
    public readonly type = ProductActionTypes.DESTROY_BY_ID_REPORTS_SUCCESS;
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
    public readonly type = ProductActionTypes.DESTROY_BY_ID_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdReports Action.
   * Update a related item by id for reports.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for reports
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdReports: class implements Action {
    public readonly type = ProductActionTypes.UPDATE_BY_ID_REPORTS;
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
    public readonly type = ProductActionTypes.UPDATE_BY_ID_REPORTS_SUCCESS;
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
    public readonly type = ProductActionTypes.UPDATE_BY_ID_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdCategories Action.
   * Find a related item by id for categories.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for categories
   * @param {any} meta (optional).
   * 
   */
  findByIdCategories: class implements Action {
    public readonly type = ProductActionTypes.FIND_BY_ID_CATEGORIES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdCategoriesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdCategoriesSuccess: class implements Action {
    public readonly type = ProductActionTypes.FIND_BY_ID_CATEGORIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdCategoriesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdCategoriesFail: class implements Action {
    public readonly type = ProductActionTypes.FIND_BY_ID_CATEGORIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * linkCategories Action.
   * Add a related item by id for categories.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for categories
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  linkCategories: class implements Action {
    public readonly type = ProductActionTypes.LINK_CATEGORIES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * linkCategoriesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  linkCategoriesSuccess: class implements Action {
    public readonly type = ProductActionTypes.LINK_CATEGORIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * linkCategoriesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  linkCategoriesFail: class implements Action {
    public readonly type = ProductActionTypes.LINK_CATEGORIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * unlinkCategories Action.
   * Remove the categories relation to an item by id.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for categories
   * @param {any} meta (optional).
   * 
   */
  unlinkCategories: class implements Action {
    public readonly type = ProductActionTypes.UNLINK_CATEGORIES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkCategoriesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  unlinkCategoriesSuccess: class implements Action {
    public readonly type = ProductActionTypes.UNLINK_CATEGORIES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkCategoriesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  unlinkCategoriesFail: class implements Action {
    public readonly type = ProductActionTypes.UNLINK_CATEGORIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getS3Photo Action.
   * Fetches hasOne relation s3Photo.
   *
   * @param {any} id Product id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getS3Photo: class implements Action {
    public readonly type = ProductActionTypes.GET_S3PHOTO;
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
    public readonly type = ProductActionTypes.GET_S3PHOTO_SUCCESS;
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
    public readonly type = ProductActionTypes.GET_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createS3Photo Action.
   * Creates a new instance in s3Photo of this model.
   *
   * @param {any} id Product id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createS3Photo: class implements Action {
    public readonly type = ProductActionTypes.CREATE_S3PHOTO;
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
    public readonly type = ProductActionTypes.CREATE_S3PHOTO_SUCCESS;
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
    public readonly type = ProductActionTypes.CREATE_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateS3Photo Action.
   * Update s3Photo of this model.
   *
   * @param {any} id Product id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateS3Photo: class implements Action {
    public readonly type = ProductActionTypes.UPDATE_S3PHOTO;
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
    public readonly type = ProductActionTypes.UPDATE_S3PHOTO_SUCCESS;
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
    public readonly type = ProductActionTypes.UPDATE_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyS3Photo Action.
   * Deletes s3Photo of this model.
   *
   * @param {any} id Product id
   * @param {any} meta (optional).
   * 
   */
  destroyS3Photo: class implements Action {
    public readonly type = ProductActionTypes.DESTROY_S3PHOTO;
      
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
    public readonly type = ProductActionTypes.DESTROY_S3PHOTO_SUCCESS;
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
    public readonly type = ProductActionTypes.DESTROY_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getReviews Action.
   * Queries reviews of Product.
   *
   * @param {any} id Product id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getReviews: class implements Action {
    public readonly type = ProductActionTypes.GET_REVIEWS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getReviewsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getReviewsSuccess: class implements Action {
    public readonly type = ProductActionTypes.GET_REVIEWS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getReviewsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getReviewsFail: class implements Action {
    public readonly type = ProductActionTypes.GET_REVIEWS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createReviews Action.
   * Creates a new instance in reviews of this model.
   *
   * @param {any} id Product id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createReviews: class implements Action {
    public readonly type = ProductActionTypes.CREATE_REVIEWS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createReviewsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createReviewsSuccess: class implements Action {
    public readonly type = ProductActionTypes.CREATE_REVIEWS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createReviewsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createReviewsFail: class implements Action {
    public readonly type = ProductActionTypes.CREATE_REVIEWS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteReviews Action.
   * Deletes all reviews of this model.
   *
   * @param {any} id Product id
   * @param {any} meta (optional).
   * 
   */
  deleteReviews: class implements Action {
    public readonly type = ProductActionTypes.DELETE_REVIEWS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteReviewsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteReviewsSuccess: class implements Action {
    public readonly type = ProductActionTypes.DELETE_REVIEWS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteReviewsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteReviewsFail: class implements Action {
    public readonly type = ProductActionTypes.DELETE_REVIEWS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getReports Action.
   * Queries reports of Product.
   *
   * @param {any} id Product id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getReports: class implements Action {
    public readonly type = ProductActionTypes.GET_REPORTS;
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
    public readonly type = ProductActionTypes.GET_REPORTS_SUCCESS;
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
    public readonly type = ProductActionTypes.GET_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createReports Action.
   * Creates a new instance in reports of this model.
   *
   * @param {any} id Product id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createReports: class implements Action {
    public readonly type = ProductActionTypes.CREATE_REPORTS;
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
    public readonly type = ProductActionTypes.CREATE_REPORTS_SUCCESS;
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
    public readonly type = ProductActionTypes.CREATE_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteReports Action.
   * Deletes all reports of this model.
   *
   * @param {any} id Product id
   * @param {any} meta (optional).
   * 
   */
  deleteReports: class implements Action {
    public readonly type = ProductActionTypes.DELETE_REPORTS;
      
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
    public readonly type = ProductActionTypes.DELETE_REPORTS_SUCCESS;
  
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
    public readonly type = ProductActionTypes.DELETE_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getCategories Action.
   * Queries categories of Product.
   *
   * @param {any} id Product id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getCategories: class implements Action {
    public readonly type = ProductActionTypes.GET_CATEGORIES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getCategoriesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getCategoriesSuccess: class implements Action {
    public readonly type = ProductActionTypes.GET_CATEGORIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getCategoriesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getCategoriesFail: class implements Action {
    public readonly type = ProductActionTypes.GET_CATEGORIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3PUTSignedUrl Action.
   * Get a S3 Signed URL for direct file uploads.
   *
   * @param {any} id Product id
   * @param {string} key 
   * @param {object} options 
   * @param {any} meta (optional).
   * 
   */
  s3PUTSignedUrl: class implements Action {
    public readonly type = ProductActionTypes.S3_P_U_T_SIGNED_URL;
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
    public readonly type = ProductActionTypes.S3_P_U_T_SIGNED_URL_SUCCESS;
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
    public readonly type = ProductActionTypes.S3_P_U_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3GETSignedUrl Action.
   * Get a S3 Signed URL for direct file access.
   *
   * @param {any} id Product id
   * @param {string} key 
   * @param {any} meta (optional).
   * 
   */
  s3GETSignedUrl: class implements Action {
    public readonly type = ProductActionTypes.S3_G_E_T_SIGNED_URL;
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
    public readonly type = ProductActionTypes.S3_G_E_T_SIGNED_URL_SUCCESS;
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
    public readonly type = ProductActionTypes.S3_G_E_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyS3Photo Action.
   * Creates a new instance in s3Photo of this model.
   *
   * @param {any} id Product id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyS3Photo: class implements Action {
    public readonly type = ProductActionTypes.CREATE_MANY_S3PHOTO;
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
    public readonly type = ProductActionTypes.CREATE_MANY_S3PHOTO_SUCCESS;
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
    public readonly type = ProductActionTypes.CREATE_MANY_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyReviews Action.
   * Creates a new instance in reviews of this model.
   *
   * @param {any} id Product id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyReviews: class implements Action {
    public readonly type = ProductActionTypes.CREATE_MANY_REVIEWS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyReviewsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyReviewsSuccess: class implements Action {
    public readonly type = ProductActionTypes.CREATE_MANY_REVIEWS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyReviewsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyReviewsFail: class implements Action {
    public readonly type = ProductActionTypes.CREATE_MANY_REVIEWS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyReports Action.
   * Creates a new instance in reports of this model.
   *
   * @param {any} id Product id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyReports: class implements Action {
    public readonly type = ProductActionTypes.CREATE_MANY_REPORTS;
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
    public readonly type = ProductActionTypes.CREATE_MANY_REPORTS_SUCCESS;
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
    public readonly type = ProductActionTypes.CREATE_MANY_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});