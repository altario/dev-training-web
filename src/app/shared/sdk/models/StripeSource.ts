/* tslint:disable */

declare var Object: any;
export interface StripeSourceInterface {
  "id": string;
  "card"?: any;
  "amount"?: string;
  "created": number;
  "currency"?: string;
  "flow": string;
  "livemode": boolean;
  "metadata"?: any;
  "object": string;
  "owner": any;
  "statement_descriptor"?: string;
  "status": string;
  "type": string;
  "usage": string;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class StripeSource implements StripeSourceInterface {
  "id": string;
  "card": any;
  "amount": string;
  "created": number;
  "currency": string;
  "flow": string;
  "livemode": boolean;
  "metadata": any;
  "object": string;
  "owner": any;
  "statement_descriptor": string;
  "status": string;
  "type": string;
  "usage": string;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: StripeSourceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `StripeSource`.
   */
  public static getModelName() {
    return "StripeSource";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of StripeSource for dynamic purposes.
  **/
  public static factory(data: StripeSourceInterface): StripeSource{
    return new StripeSource(data);
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
      name: 'StripeSource',
      plural: 'StripeSources',
      path: 'StripeSources',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "card": {
          name: 'card',
          type: 'any'
        },
        "amount": {
          name: 'amount',
          type: 'string'
        },
        "created": {
          name: 'created',
          type: 'number'
        },
        "currency": {
          name: 'currency',
          type: 'string'
        },
        "flow": {
          name: 'flow',
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
        "object": {
          name: 'object',
          type: 'string'
        },
        "owner": {
          name: 'owner',
          type: 'any'
        },
        "statement_descriptor": {
          name: 'statement_descriptor',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "type": {
          name: 'type',
          type: 'string'
        },
        "usage": {
          name: 'usage',
          type: 'string'
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
