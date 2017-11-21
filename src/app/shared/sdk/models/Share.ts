/* tslint:disable */
import {
  User,
  Post
} from '../index';

declare var Object: any;
export interface ShareInterface {
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "userId"?: any;
  "postId"?: any;
  user?: User;
  post?: Post;
}

export class Share implements ShareInterface {
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  "userId": any;
  "postId": any;
  user: User;
  post: Post;
  constructor(data?: ShareInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Share`.
   */
  public static getModelName() {
    return "Share";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Share for dynamic purposes.
  **/
  public static factory(data: ShareInterface): Share{
    return new Share(data);
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
      name: 'Share',
      plural: 'Shares',
      path: 'Shares',
      idName: 'id',
      properties: {
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
