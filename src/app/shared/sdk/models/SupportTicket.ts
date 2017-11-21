/* tslint:disable */
import {
  Organization,
  User
} from '../index';

declare var Object: any;
export interface SupportTicketInterface {
  "name": string;
  "email": string;
  "subject": string;
  "text": string;
  "id"?: any;
  "organizationId"?: any;
  "userId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  organization?: Organization;
  user?: User;
}

export class SupportTicket implements SupportTicketInterface {
  "name": string;
  "email": string;
  "subject": string;
  "text": string;
  "id": any;
  "organizationId": any;
  "userId": any;
  "createdAt": Date;
  "updatedAt": Date;
  organization: Organization;
  user: User;
  constructor(data?: SupportTicketInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SupportTicket`.
   */
  public static getModelName() {
    return "SupportTicket";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SupportTicket for dynamic purposes.
  **/
  public static factory(data: SupportTicketInterface): SupportTicket{
    return new SupportTicket(data);
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
      name: 'SupportTicket',
      plural: 'SupportTickets',
      path: 'SupportTickets',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "subject": {
          name: 'subject',
          type: 'string'
        },
        "text": {
          name: 'text',
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
        "userId": {
          name: 'userId',
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
        organization: {
          name: 'organization',
          type: 'Organization',
          model: 'Organization',
          relationType: 'belongsTo',
                  keyFrom: 'organizationId',
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
