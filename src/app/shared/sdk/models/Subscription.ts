/* tslint:disable */
import {
  Organization,
  Report
} from '../index';

declare var Object: any;
export interface SubscriptionInterface {
  "name"?: string;
  "description"?: string;
  "price"?: number;
  "currency"?: string;
  "id"?: any;
  "organizationId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "slug"?: string;
  organization?: Organization;
  reports?: Report[];
}

export class Subscription implements SubscriptionInterface {
  "name": string;
  "description": string;
  "price": number;
  "currency": string;
  "id": any;
  "organizationId": any;
  "createdAt": Date;
  "updatedAt": Date;
  "slug": string;
  organization: Organization;
  reports: Report[];
  constructor(data?: SubscriptionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Subscription`.
   */
  public static getModelName() {
    return "Subscription";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Subscription for dynamic purposes.
  **/
  public static factory(data: SubscriptionInterface): Subscription{
    return new Subscription(data);
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
      name: 'Subscription',
      plural: 'Subscriptions',
      path: 'Subscriptions',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "price": {
          name: 'price',
          type: 'number'
        },
        "currency": {
          name: 'currency',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "organizationId": {
          name: 'organizationId',
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
        "slug": {
          name: 'slug',
          type: 'string'
        },
      },
      relations: {
        organization: {
          name: 'organization',
          type: 'Organization',
          model: 'Organization',
          relationType: 'belongsTo',
                  keyFrom: 'organizationId',
          keyTo: 'id'
        },
        reports: {
          name: 'reports',
          type: 'Report[]',
          model: 'Report',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'subscriptionId'
        },
      }
    }
  }
}
