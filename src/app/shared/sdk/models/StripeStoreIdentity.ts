/* tslint:disable */

declare var Object: any;
export interface StripeStoreIdentityInterface {
  "externalId"?: string;
  "profile"?: any;
  "created"?: Date;
  "modified"?: Date;
  "id"?: any;
}

export class StripeStoreIdentity implements StripeStoreIdentityInterface {
  "externalId": string;
  "profile": any;
  "created": Date;
  "modified": Date;
  "id": any;
  constructor(data?: StripeStoreIdentityInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `StripeStoreIdentity`.
   */
  public static getModelName() {
    return "StripeStoreIdentity";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of StripeStoreIdentity for dynamic purposes.
  **/
  public static factory(data: StripeStoreIdentityInterface): StripeStoreIdentity{
    return new StripeStoreIdentity(data);
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
      name: 'StripeStoreIdentity',
      plural: 'StripeStoreIdentities',
      path: 'StripeStoreIdentities',
      idName: 'id',
      properties: {
        "externalId": {
          name: 'externalId',
          type: 'string'
        },
        "profile": {
          name: 'profile',
          type: 'any'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "modified": {
          name: 'modified',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
