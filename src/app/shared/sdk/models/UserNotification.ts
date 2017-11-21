/* tslint:disable */
import {
  User,
  Organization
} from '../index';

declare var Object: any;
export interface UserNotificationInterface {
  "type": string;
  "notification"?: any;
  "data"?: any;
  "push"?: boolean;
  "read"?: boolean;
  "userId"?: any;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "organizationId"?: any;
  user?: User;
  organization?: Organization;
}

export class UserNotification implements UserNotificationInterface {
  "type": string;
  "notification": any;
  "data": any;
  "push": boolean;
  "read": boolean;
  "userId": any;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  "organizationId": any;
  user: User;
  organization: Organization;
  constructor(data?: UserNotificationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UserNotification`.
   */
  public static getModelName() {
    return "UserNotification";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of UserNotification for dynamic purposes.
  **/
  public static factory(data: UserNotificationInterface): UserNotification{
    return new UserNotification(data);
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
      name: 'UserNotification',
      plural: 'UserNotifications',
      path: 'UserNotifications',
      idName: 'id',
      properties: {
        "type": {
          name: 'type',
          type: 'string'
        },
        "notification": {
          name: 'notification',
          type: 'any'
        },
        "data": {
          name: 'data',
          type: 'any'
        },
        "push": {
          name: 'push',
          type: 'boolean',
          default: false
        },
        "read": {
          name: 'read',
          type: 'boolean',
          default: false
        },
        "userId": {
          name: 'userId',
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
        "organizationId": {
          name: 'organizationId',
          type: 'any'
        },
      },
      relations: {
        user: {
          name: 'user',
          type: 'User',
          model: 'User',
          relationType: 'belongsTo',
                  keyFrom: 'userId',
          keyTo: 'id'
        },
        organization: {
          name: 'organization',
          type: 'Organization',
          model: 'Organization',
          relationType: 'belongsTo',
                  keyFrom: 'organizationId',
          keyTo: 'id'
        },
      }
    }
  }
}
