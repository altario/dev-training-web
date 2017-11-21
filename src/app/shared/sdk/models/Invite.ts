/* tslint:disable */
import {
  User
} from '../index';

declare var Object: any;
export interface InviteInterface {
  "name"?: string;
  "email": string;
  "used"?: boolean;
  "admin"?: boolean;
  "userId": any;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "invitedUserId"?: any;
  user?: User;
  invitedUser?: User;
}

export class Invite implements InviteInterface {
  "name": string;
  "email": string;
  "used": boolean;
  "admin": boolean;
  "userId": any;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  "invitedUserId": any;
  user: User;
  invitedUser: User;
  constructor(data?: InviteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Invite`.
   */
  public static getModelName() {
    return "Invite";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Invite for dynamic purposes.
  **/
  public static factory(data: InviteInterface): Invite{
    return new Invite(data);
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
      name: 'Invite',
      plural: 'Invites',
      path: 'Invites',
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
        "used": {
          name: 'used',
          type: 'boolean',
          default: false
        },
        "admin": {
          name: 'admin',
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
        "invitedUserId": {
          name: 'invitedUserId',
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
        invitedUser: {
          name: 'invitedUser',
          type: 'User',
          model: 'User',
          relationType: 'belongsTo',
                  keyFrom: 'invitedUserId',
          keyTo: 'id'
        },
      }
    }
  }
}
