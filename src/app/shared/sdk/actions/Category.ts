/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Category } from '../models';

export const CategoryActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Category'), {
  FIND_BY_ID_CATEGORIES: type('[Category] findByIdCategories'),
  FIND_BY_ID_CATEGORIES_SUCCESS: type('[Category] findByIdCategories success'),
  FIND_BY_ID_CATEGORIES_FAIL: type('[Category] findByIdCategories fail'),

  DESTROY_BY_ID_CATEGORIES: type('[Category] destroyByIdCategories'),
  DESTROY_BY_ID_CATEGORIES_SUCCESS: type('[Category] destroyByIdCategories success'),
  DESTROY_BY_ID_CATEGORIES_FAIL: type('[Category] destroyByIdCategories fail'),

  UPDATE_BY_ID_CATEGORIES: type('[Category] updateByIdCategories'),
  UPDATE_BY_ID_CATEGORIES_SUCCESS: type('[Category] updateByIdCategories success'),
  UPDATE_BY_ID_CATEGORIES_FAIL: type('[Category] updateByIdCategories fail'),

  GET_PARENT: type('[Category] getParent'),
  GET_PARENT_SUCCESS: type('[Category] getParent success'),
  GET_PARENT_FAIL: type('[Category] getParent fail'),

  FIND_BY_ID_PRODUCTS: type('[Category] findByIdProducts'),
  FIND_BY_ID_PRODUCTS_SUCCESS: type('[Category] findByIdProducts success'),
  FIND_BY_ID_PRODUCTS_FAIL: type('[Category] findByIdProducts fail'),

  GET_CATEGORIES: type('[Category] getCategories'),
  GET_CATEGORIES_SUCCESS: type('[Category] getCategories success'),
  GET_CATEGORIES_FAIL: type('[Category] getCategories fail'),

  CREATE_CATEGORIES: type('[Category] createCategories'),
  CREATE_CATEGORIES_SUCCESS: type('[Category] createCategories success'),
  CREATE_CATEGORIES_FAIL: type('[Category] createCategories fail'),

  DELETE_CATEGORIES: type('[Category] deleteCategories'),
  DELETE_CATEGORIES_SUCCESS: type('[Category] deleteCategories success'),
  DELETE_CATEGORIES_FAIL: type('[Category] deleteCategories fail'),

  GET_PRODUCTS: type('[Category] getProducts'),
  GET_PRODUCTS_SUCCESS: type('[Category] getProducts success'),
  GET_PRODUCTS_FAIL: type('[Category] getProducts fail'),

  CREATE_MANY_CATEGORIES: type('[Category] createManyCategories'),
  CREATE_MANY_CATEGORIES_SUCCESS: type('[Category] createManyCategories success'),
  CREATE_MANY_CATEGORIES_FAIL: type('[Category] createManyCategories fail'),

});
export const CategoryActions =
Object.assign(BaseLoopbackActionsFactory<Category>(CategoryActionTypes), {

  /**
   * findByIdCategories Action.
   * Find a related item by id for categories.
   *
   * @param {any} id Category id
   * @param {any} fk Foreign key for categories
   * @param {any} meta (optional).
   * 
   */
  findByIdCategories: class implements Action {
    public readonly type = CategoryActionTypes.FIND_BY_ID_CATEGORIES;
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
    public readonly type = CategoryActionTypes.FIND_BY_ID_CATEGORIES_SUCCESS;
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
    public readonly type = CategoryActionTypes.FIND_BY_ID_CATEGORIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdCategories Action.
   * Delete a related item by id for categories.
   *
   * @param {any} id Category id
   * @param {any} fk Foreign key for categories
   * @param {any} meta (optional).
   * 
   */
  destroyByIdCategories: class implements Action {
    public readonly type = CategoryActionTypes.DESTROY_BY_ID_CATEGORIES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdCategoriesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdCategoriesSuccess: class implements Action {
    public readonly type = CategoryActionTypes.DESTROY_BY_ID_CATEGORIES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdCategoriesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdCategoriesFail: class implements Action {
    public readonly type = CategoryActionTypes.DESTROY_BY_ID_CATEGORIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdCategories Action.
   * Update a related item by id for categories.
   *
   * @param {any} id Category id
   * @param {any} fk Foreign key for categories
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdCategories: class implements Action {
    public readonly type = CategoryActionTypes.UPDATE_BY_ID_CATEGORIES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdCategoriesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdCategoriesSuccess: class implements Action {
    public readonly type = CategoryActionTypes.UPDATE_BY_ID_CATEGORIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdCategoriesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdCategoriesFail: class implements Action {
    public readonly type = CategoryActionTypes.UPDATE_BY_ID_CATEGORIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getParent Action.
   * Fetches belongsTo relation parent.
   *
   * @param {any} id Category id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getParent: class implements Action {
    public readonly type = CategoryActionTypes.GET_PARENT;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getParentSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getParentSuccess: class implements Action {
    public readonly type = CategoryActionTypes.GET_PARENT_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getParentFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getParentFail: class implements Action {
    public readonly type = CategoryActionTypes.GET_PARENT_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdProducts Action.
   * Find a related item by id for products.
   *
   * @param {any} id Category id
   * @param {any} fk Foreign key for products
   * @param {any} meta (optional).
   * 
   */
  findByIdProducts: class implements Action {
    public readonly type = CategoryActionTypes.FIND_BY_ID_PRODUCTS;
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
    public readonly type = CategoryActionTypes.FIND_BY_ID_PRODUCTS_SUCCESS;
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
    public readonly type = CategoryActionTypes.FIND_BY_ID_PRODUCTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getCategories Action.
   * Queries categories of Category.
   *
   * @param {any} id Category id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getCategories: class implements Action {
    public readonly type = CategoryActionTypes.GET_CATEGORIES;
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
    public readonly type = CategoryActionTypes.GET_CATEGORIES_SUCCESS;
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
    public readonly type = CategoryActionTypes.GET_CATEGORIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createCategories Action.
   * Creates a new instance in categories of this model.
   *
   * @param {any} id Category id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createCategories: class implements Action {
    public readonly type = CategoryActionTypes.CREATE_CATEGORIES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createCategoriesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createCategoriesSuccess: class implements Action {
    public readonly type = CategoryActionTypes.CREATE_CATEGORIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createCategoriesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createCategoriesFail: class implements Action {
    public readonly type = CategoryActionTypes.CREATE_CATEGORIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteCategories Action.
   * Deletes all categories of this model.
   *
   * @param {any} id Category id
   * @param {any} meta (optional).
   * 
   */
  deleteCategories: class implements Action {
    public readonly type = CategoryActionTypes.DELETE_CATEGORIES;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteCategoriesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteCategoriesSuccess: class implements Action {
    public readonly type = CategoryActionTypes.DELETE_CATEGORIES_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteCategoriesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteCategoriesFail: class implements Action {
    public readonly type = CategoryActionTypes.DELETE_CATEGORIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getProducts Action.
   * Queries products of Category.
   *
   * @param {any} id Category id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getProducts: class implements Action {
    public readonly type = CategoryActionTypes.GET_PRODUCTS;
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
    public readonly type = CategoryActionTypes.GET_PRODUCTS_SUCCESS;
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
    public readonly type = CategoryActionTypes.GET_PRODUCTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyCategories Action.
   * Creates a new instance in categories of this model.
   *
   * @param {any} id Category id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyCategories: class implements Action {
    public readonly type = CategoryActionTypes.CREATE_MANY_CATEGORIES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyCategoriesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyCategoriesSuccess: class implements Action {
    public readonly type = CategoryActionTypes.CREATE_MANY_CATEGORIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyCategoriesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyCategoriesFail: class implements Action {
    public readonly type = CategoryActionTypes.CREATE_MANY_CATEGORIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});