/* tslint:disable */
import {
  Product
} from '../index';

declare var Object: any;
export interface CategoryInterface {
  "text"?: string;
  "code"?: string;
  "type"?: string;
  "id"?: any;
  "parentId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  categories?: Category[];
  parent?: Category;
  products?: Product[];
}

export class Category implements CategoryInterface {
  "text": string;
  "code": string;
  "type": string;
  "id": any;
  "parentId": any;
  "createdAt": Date;
  "updatedAt": Date;
  categories: Category[];
  parent: Category;
  products: Product[];
  constructor(data?: CategoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Category`.
   */
  public static getModelName() {
    return "Category";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Category for dynamic purposes.
  **/
  public static factory(data: CategoryInterface): Category{
    return new Category(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Category',
      plural: 'Categories',
      path: 'Categories',
      idName: 'id',
      properties: {
        "text": {
          name: 'text',
          type: 'string'
        },
        "code": {
          name: 'code',
          type: 'string'
        },
        "type": {
          name: 'type',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "parentId": {
          name: 'parentId',
          type: 'any'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
      },
      relations: {
        categories: {
          name: 'categories',
          type: 'Category[]',
          model: 'Category',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'parentId'
        },
        parent: {
          name: 'parent',
          type: 'Category',
          model: 'Category',
          relationType: 'belongsTo',
                  keyFrom: 'parentId',
          keyTo: 'id'
        },
        products: {
          name: 'products',
          type: 'Product[]',
          model: 'Product',
          relationType: 'hasMany',
          modelThrough: 'ProductCategory',
          keyThrough: 'productId',
          keyFrom: 'id',
          keyTo: 'categoryId'
        },
      }
    }
  }
}
