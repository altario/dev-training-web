/* tslint:disable */
import {
  Category,
  Product
} from '../index';

declare var Object: any;
export interface ProductCategoryInterface {
  "id"?: any;
  "categoryId": any;
  "productId": any;
}

export class ProductCategory implements ProductCategoryInterface {
  "id"?: any;
  "categoryId": any;
  "productId": any;
  constructor(data?: ProductCategoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProductCategory`.
   */
  public static getModelName() {
    return "ProductCategory";
  }
  /**
  * @method factory
  * @author João Ribeiro
  * @license MIT
  * This method creates an instance of ProductCategory for dynamic purposes.
  **/
  public static factory(data: ProductCategoryInterface): ProductCategory{
    return new ProductCategory(data);
  }
  /**
  * @method getModelDefinition
  * @author João Ribeiro
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'ProductCategory',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "categoryId": {
          name: 'categoryId',
          type: 'any'
        },
        "productId": {
          name: 'productId',
          type: 'any'
        }
      }
    }
  }
}
