/* tslint:disable */
import {
  User,
  Product
} from '../index';

declare var Object: any;
export interface UserProductInterface {
  "id"?: any;
  "userId": any;
  "productId": any;
}

export class UserProduct implements UserProductInterface {
  "id"?: any;
  "userId": any;
  "productId": any;
  constructor(data?: UserProductInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UserProduct`.
   */
  public static getModelName() {
    return "UserProduct";
  }
  /**
  * @method factory
  * @author João Ribeiro
  * @license MIT
  * This method creates an instance of UserProduct for dynamic purposes.
  **/
  public static factory(data: UserProductInterface): UserProduct{
    return new UserProduct(data);
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
      name: 'UserProduct',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "userId": {
          name: 'userId',
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
