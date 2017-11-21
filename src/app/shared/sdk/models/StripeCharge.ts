/* tslint:disable */
import {
  StripeSource
} from '../index';

declare var Object: any;
export interface StripeChargeInterface {
  "id": string;
  "object"?: string;
  "amount": number;
  "amount_refunded"?: number;
  "application"?: string;
  "application_fee"?: string;
  "balance_transaction"?: string;
  "captured": boolean;
  "created": number;
  "currency"?: string;
  "customer": string;
  "description"?: string;
  "destination"?: string;
  "dispute"?: string;
  "failure_code"?: string;
  "failure_message"?: string;
  "fraud_details"?: any;
  "invoice"?: string;
  "livemode"?: boolean;
  "metadata"?: any;
  "on_behalf_of"?: string;
  "order"?: string;
  "outcome"?: any;
  "paid"?: boolean;
  "receipt_email"?: string;
  "receipt_number"?: string;
  "refunded"?: boolean;
  "refunds"?: any;
  "review"?: string;
  "shipping"?: any;
  "source"?: any;
  "source_transfer"?: string;
  "statement_descriptor"?: string;
  "status"?: string;
  "transfer"?: string;
  "transfer_group"?: string;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  stripeSource?: StripeSource;
}

export class StripeCharge implements StripeChargeInterface {
  "id": string;
  "object": string;
  "amount": number;
  "amount_refunded": number;
  "application": string;
  "application_fee": string;
  "balance_transaction": string;
  "captured": boolean;
  "created": number;
  "currency": string;
  "customer": string;
  "description": string;
  "destination": string;
  "dispute": string;
  "failure_code": string;
  "failure_message": string;
  "fraud_details": any;
  "invoice": string;
  "livemode": boolean;
  "metadata": any;
  "on_behalf_of": string;
  "order": string;
  "outcome": any;
  "paid": boolean;
  "receipt_email": string;
  "receipt_number": string;
  "refunded": boolean;
  "refunds": any;
  "review": string;
  "shipping": any;
  "source": any;
  "source_transfer": string;
  "statement_descriptor": string;
  "status": string;
  "transfer": string;
  "transfer_group": string;
  "createdAt": Date;
  "updatedAt": Date;
  stripeSource: StripeSource;
  constructor(data?: StripeChargeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `StripeCharge`.
   */
  public static getModelName() {
    return "StripeCharge";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of StripeCharge for dynamic purposes.
  **/
  public static factory(data: StripeChargeInterface): StripeCharge{
    return new StripeCharge(data);
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
      name: 'StripeCharge',
      plural: 'StripeCharges',
      path: 'StripeCharges',
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
        "amount": {
          name: 'amount',
          type: 'number'
        },
        "amount_refunded": {
          name: 'amount_refunded',
          type: 'number'
        },
        "application": {
          name: 'application',
          type: 'string'
        },
        "application_fee": {
          name: 'application_fee',
          type: 'string'
        },
        "balance_transaction": {
          name: 'balance_transaction',
          type: 'string'
        },
        "captured": {
          name: 'captured',
          type: 'boolean'
        },
        "created": {
          name: 'created',
          type: 'number'
        },
        "currency": {
          name: 'currency',
          type: 'string'
        },
        "customer": {
          name: 'customer',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "destination": {
          name: 'destination',
          type: 'string'
        },
        "dispute": {
          name: 'dispute',
          type: 'string'
        },
        "failure_code": {
          name: 'failure_code',
          type: 'string'
        },
        "failure_message": {
          name: 'failure_message',
          type: 'string'
        },
        "fraud_details": {
          name: 'fraud_details',
          type: 'any'
        },
        "invoice": {
          name: 'invoice',
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
        "on_behalf_of": {
          name: 'on_behalf_of',
          type: 'string'
        },
        "order": {
          name: 'order',
          type: 'string'
        },
        "outcome": {
          name: 'outcome',
          type: 'any'
        },
        "paid": {
          name: 'paid',
          type: 'boolean'
        },
        "receipt_email": {
          name: 'receipt_email',
          type: 'string'
        },
        "receipt_number": {
          name: 'receipt_number',
          type: 'string'
        },
        "refunded": {
          name: 'refunded',
          type: 'boolean'
        },
        "refunds": {
          name: 'refunds',
          type: 'any'
        },
        "review": {
          name: 'review',
          type: 'string'
        },
        "shipping": {
          name: 'shipping',
          type: 'any'
        },
        "source": {
          name: 'source',
          type: 'any'
        },
        "source_transfer": {
          name: 'source_transfer',
          type: 'string'
        },
        "statement_descriptor": {
          name: 'statement_descriptor',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "transfer": {
          name: 'transfer',
          type: 'string'
        },
        "transfer_group": {
          name: 'transfer_group',
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
        stripeSource: {
          name: 'stripeSource',
          type: 'StripeSource',
          model: 'StripeSource',
          relationType: 'belongsTo',
                  keyFrom: 'stripeSourceId',
          keyTo: 'id'
        },
      }
    }
  }
}
