/* tslint:disable */
import {
  User
} from '../index';

declare var Object: any;
export interface FollowInterface {
  "type"?: string;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "userId"?: any;
  "followeeId"?: any;
  user?: User;
  followee?: User;
}

export class Follow implements FollowInterface {
  "type": string;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  "userId": any;
  "followeeId": any;
  user: User;
  followee: User;
  constructor(data?: FollowInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Follow`.
   */
  public static getModelName() {
    return "Follow";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Follow for dynamic purposes.
  **/
  public static factory(data: FollowInterface): Follow{
    return new Follow(data);
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
      name: 'Follow',
      plural: 'Follows',
      path: 'Follows',
      idName: 'id',
      properties: {
        "type": {
          name: 'type',
          type: 'string'
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
        "userId": {
          name: 'userId',
          type: 'any'
        },
        "followeeId": {
          name: 'followeeId',
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
        followee: {
          name: 'followee',
          type: 'User',
          model: 'User',
          relationType: 'belongsTo',
                  keyFrom: 'followeeId',
          keyTo: 'id'
        },
      }
    }
  }
}
