/* tslint:disable */
import {
  User,
  Organization
} from '../index';

declare var Object: any;
export interface UserRoleInterface {
  "id"?: any;
  "userId": any;
  "organizationId": any;
}

export class UserRole implements UserRoleInterface {
  "id"?: any;
  "userId": any;
  "organizationId": any;
  constructor(data?: UserRoleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UserRole`.
   */
  public static getModelName() {
    return "UserRole";
  }
  /**
  * @method factory
  * @author João Ribeiro
  * @license MIT
  * This method creates an instance of UserRole for dynamic purposes.
  **/
  public static factory(data: UserRoleInterface): UserRole{
    return new UserRole(data);
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
      name: 'UserRole',
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
        "organizationId": {
          name: 'organizationId',
          type: 'any'
        }
      }
    }
  }
}
