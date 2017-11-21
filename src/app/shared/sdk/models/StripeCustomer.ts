/* tslint:disable */

declare var Object: any;
export interface StripeCustomerInterface {
  "id"?: string;
  "object"?: string;
  "account_balance"?: number;
  "business_vat_id"?: string;
  "created"?: number;
  "default_source"?: string;
  "delinquent"?: boolean;
  "description"?: string;
  "discount"?: any;
  "email"?: string;
  "livemode"?: boolean;
  "metadata"?: any;
  "shipping"?: any;
  "sources"?: any;
  "subscriptions"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class StripeCustomer implements StripeCustomerInterface {
  "id": string;
  "object": string;
  "account_balance": number;
  "business_vat_id": string;
  "created": number;
  "default_source": string;
  "delinquent": boolean;
  "description": string;
  "discount": any;
  "email": string;
  "livemode": boolean;
  "metadata": any;
  "shipping": any;
  "sources": any;
  "subscriptions": any;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: StripeCustomerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `StripeCustomer`.
   */
  public static getModelName() {
    return "StripeCustomer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of StripeCustomer for dynamic purposes.
  **/
  public static factory(data: StripeCustomerInterface): StripeCustomer{
    return new StripeCustomer(data);
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
      name: 'StripeCustomer',
      plural: 'StripeCustomers',
      path: 'StripeCustomers',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "object": {
          name: 'object',
          type: 'string'
        },
        "account_balance": {
          name: 'account_balance',
          type: 'number'
        },
        "business_vat_id": {
          name: 'business_vat_id',
          type: 'string'
        },
        "created": {
          name: 'created',
          type: 'number'
        },
        "default_source": {
          name: 'default_source',
          type: 'string'
        },
        "delinquent": {
          name: 'delinquent',
          type: 'boolean'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "discount": {
          name: 'discount',
          type: 'any'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "livemode": {
          name: 'livemode',
          type: 'boolean'
        },
        "metadata": {
          name: 'metadata',
          type: 'any'
        },
        "shipping": {
          name: 'shipping',
          type: 'any'
        },
        "sources": {
          name: 'sources',
          type: 'any'
        },
        "subscriptions": {
          name: 'subscriptions',
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
      }
    }
  }
}
