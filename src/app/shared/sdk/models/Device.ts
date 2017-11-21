/* tslint:disable */
import {
  User
} from '../index';

declare var Object: any;
export interface DeviceInterface {
  "deviceUID": string;
  "realDeviceType"?: string;
  "appId": string;
  "appVersion"?: string;
  "badge"?: number;
  "created"?: Date;
  "deviceToken": string;
  "deviceType": string;
  "modified"?: Date;
  "status"?: string;
  "subscriptions"?: Array<any>;
  "timeZone"?: string;
  "userId"?: any;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  user?: User;
}

export class Device implements DeviceInterface {
  "deviceUID": string;
  "realDeviceType": string;
  "appId": string;
  "appVersion": string;
  "badge": number;
  "created": Date;
  "deviceToken": string;
  "deviceType": string;
  "modified": Date;
  "status": string;
  "subscriptions": Array<any>;
  "timeZone": string;
  "userId": any;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  user: User;
  constructor(data?: DeviceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Device`.
   */
  public static getModelName() {
    return "Device";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Device for dynamic purposes.
  **/
  public static factory(data: DeviceInterface): Device{
    return new Device(data);
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
      name: 'Device',
      plural: 'Devices',
      path: 'Devices',
      idName: 'id',
      properties: {
        "deviceUID": {
          name: 'deviceUID',
          type: 'string'
        },
        "realDeviceType": {
          name: 'realDeviceType',
          type: 'string'
        },
        "appId": {
          name: 'appId',
          type: 'string'
        },
        "appVersion": {
          name: 'appVersion',
          type: 'string'
        },
        "badge": {
          name: 'badge',
          type: 'number'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "deviceToken": {
          name: 'deviceToken',
          type: 'string'
        },
        "deviceType": {
          name: 'deviceType',
          type: 'string'
        },
        "modified": {
          name: 'modified',
          type: 'Date'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "subscriptions": {
          name: 'subscriptions',
          type: 'Array&lt;any&gt;'
        },
        "timeZone": {
          name: 'timeZone',
          type: 'string'
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
      }
    }
  }
}
