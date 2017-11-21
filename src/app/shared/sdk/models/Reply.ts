/* tslint:disable */
import {
  Post,
  Report
} from '../index';

declare var Object: any;
export interface ReplyInterface {
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "replyerId"?: any;
  "replyingId"?: any;
  reply?: Post;
  replying?: Post;
  reports?: Report[];
}

export class Reply implements ReplyInterface {
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  "replyerId": any;
  "replyingId": any;
  reply: Post;
  replying: Post;
  reports: Report[];
  constructor(data?: ReplyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Reply`.
   */
  public static getModelName() {
    return "Reply";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Reply for dynamic purposes.
  **/
  public static factory(data: ReplyInterface): Reply{
    return new Reply(data);
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
      name: 'Reply',
      plural: 'Replys',
      path: 'Replys',
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
        "replyerId": {
          name: 'replyerId',
          type: 'any'
        },
        "replyingId": {
          name: 'replyingId',
          type: 'any'
        },
      },
      relations: {
        reply: {
          name: 'reply',
          type: 'Post',
          model: 'Post',
          relationType: 'belongsTo',
                  keyFrom: 'replyerId',
          keyTo: 'id'
        },
        replying: {
          name: 'replying',
          type: 'Post',
          model: 'Post',
          relationType: 'belongsTo',
                  keyFrom: 'replyingId',
          keyTo: 'id'
        },
        reports: {
          name: 'reports',
          type: 'Report[]',
          model: 'Report',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'replyId'
        },
      }
    }
  }
}
