/* tslint:disable */
import {
  User,
  Organization,
  Vote,
  Report
} from '../index';

declare var Object: any;
export interface PostInterface {
  "title"?: string;
  "text"?: string;
  "video"?: string;
  "id"?: any;
  "userId"?: any;
  "organizationId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "slug"?: string;
  "replyerId"?: any;
  user?: User;
  organization?: Organization;
  votes?: Vote[];
  s3Images?: any[];
  replies?: Post[];
  replying?: Post;
  shared?: User[];
  reports?: Report[];
}

export class Post implements PostInterface {
  "title": string;
  "text": string;
  "video": string;
  "id": any;
  "userId": any;
  "organizationId": any;
  "createdAt": Date;
  "updatedAt": Date;
  "slug": string;
  "replyerId": any;
  user: User;
  organization: Organization;
  votes: Vote[];
  s3Images: any[];
  replies: Post[];
  replying: Post;
  shared: User[];
  reports: Report[];
  constructor(data?: PostInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Post`.
   */
  public static getModelName() {
    return "Post";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Post for dynamic purposes.
  **/
  public static factory(data: PostInterface): Post{
    return new Post(data);
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
      name: 'Post',
      plural: 'Posts',
      path: 'Posts',
      idName: 'id',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "text": {
          name: 'text',
          type: 'string'
        },
        "video": {
          name: 'video',
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
        "organizationId": {
          name: 'organizationId',
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
        "slug": {
          name: 'slug',
          type: 'string'
        },
        "replyerId": {
          name: 'replyerId',
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
        organization: {
          name: 'organization',
          type: 'Organization',
          model: 'Organization',
          relationType: 'belongsTo',
                  keyFrom: 'organizationId',
          keyTo: 'id'
        },
        votes: {
          name: 'votes',
          type: 'Vote[]',
          model: 'Vote',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'postId'
        },
        s3Images: {
          name: 's3Images',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'postId'
        },
        replies: {
          name: 'replies',
          type: 'Post[]',
          model: 'Post',
          relationType: 'hasMany',
          modelThrough: 'Reply',
          keyThrough: 'replyerId',
          keyFrom: 'id',
          keyTo: 'replyingId'
        },
        replying: {
          name: 'replying',
          type: 'Post',
          model: 'Post',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'replyerId'
        },
        shared: {
          name: 'shared',
          type: 'User[]',
          model: 'User',
          relationType: 'hasMany',
          modelThrough: 'Share',
          keyThrough: 'postId',
          keyFrom: 'id',
          keyTo: 'userId'
        },
        reports: {
          name: 'reports',
          type: 'Report[]',
          model: 'Report',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'postId'
        },
      }
    }
  }
}
