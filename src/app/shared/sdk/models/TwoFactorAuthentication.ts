/* tslint:disable */
import {
  User
} from '../index';

declare var Object: any;
export interface TwoFactorAuthenticationInterface {
  "type"?: any;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "twofactorauthenticationId"?: any;
  "twoFactorAuthenticationId"?: any;
  "userId"?: any;
  twoFactorAuthentication?: TwoFactorAuthentication;
  user?: User;
}

export class TwoFactorAuthentication implements TwoFactorAuthenticationInterface {
  "type": any;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  "twofactorauthenticationId": any;
  "twoFactorAuthenticationId": any;
  "userId": any;
  twoFactorAuthentication: TwoFactorAuthentication;
  user: User;
  constructor(data?: TwoFactorAuthenticationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TwoFactorAuthentication`.
   */
  public static getModelName() {
    return "TwoFactorAuthentication";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TwoFactorAuthentication for dynamic purposes.
  **/
  public static factory(data: TwoFactorAuthenticationInterface): TwoFactorAuthentication{
    return new TwoFactorAuthentication(data);
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
      name: 'TwoFactorAuthentication',
      plural: 'TwoFactorAuthentication',
      path: 'TwoFactorAuthentication',
      idName: 'id',
      properties: {
        "type": {
          name: 'type',
          type: 'any'
        },
        "id": {
          name: 'id',
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
        "twofactorauthenticationId": {
          name: 'twofactorauthenticationId',
          type: 'any'
        },
        "twoFactorAuthenticationId": {
          name: 'twoFactorAuthenticationId',
          type: 'any'
        },
        "userId": {
          name: 'userId',
          type: 'any'
        },
      },
      relations: {
        twoFactorAuthentication: {
          name: 'twoFactorAuthentication',
          type: 'TwoFactorAuthentication',
          model: 'TwoFactorAuthentication',
          relationType: 'belongsTo',
                  keyFrom: 'twoFactorAuthenticationId',
          keyTo: 'id'
        },
        user: {
          name: 'user',
          type: 'User',
          model: 'User',
          relationType: 'belongsTo',
                  keyFrom: 'userId',
          keyTo: 'id'
        },
      }
    }
  }
}
