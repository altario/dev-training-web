/* tslint:disable */
import {
  User,
  Post
} from '../index';

declare var Object: any;
export interface VoteInterface {
  "type"?: string;
  "id"?: any;
  "userId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "postId"?: any;
  user?: User;
  post?: Post;
}

export class Vote implements VoteInterface {
  "type": string;
  "id": any;
  "userId": any;
  "createdAt": Date;
  "updatedAt": Date;
  "postId": any;
  user: User;
  post: Post;
  constructor(data?: VoteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Vote`.
   */
  public static getModelName() {
    return "Vote";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Vote for dynamic purposes.
  **/
  public static factory(data: VoteInterface): Vote{
    return new Vote(data);
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
      name: 'Vote',
      plural: 'Votes',
      path: 'Votes',
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
        "postId": {
          name: 'postId',
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
        post: {
          name: 'post',
          type: 'Post',
          model: 'Post',
          relationType: 'belongsTo',
                  keyFrom: 'postId',
          keyTo: 'id'
        },
      }
    }
  }
}
