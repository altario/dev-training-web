/* tslint:disable */
import {
  User,
  Post,
  Reply,
  Review,
  Product,
  Subscription
} from '../index';

declare var Object: any;
export interface ReportInterface {
  "type"?: string;
  "text"?: string;
  "id"?: any;
  "userId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "postId"?: any;
  "replyId"?: any;
  "reviewId"?: any;
  "productId"?: any;
  "subscriptionId"?: any;
  user?: User;
  post?: Post;
  reply?: Reply;
  review?: Review;
  product?: Product;
  subscription?: Subscription;
}

export class Report implements ReportInterface {
  "type": string;
  "text": string;
  "id": any;
  "userId": any;
  "createdAt": Date;
  "updatedAt": Date;
  "postId": any;
  "replyId": any;
  "reviewId": any;
  "productId": any;
  "subscriptionId": any;
  user: User;
  post: Post;
  reply: Reply;
  review: Review;
  product: Product;
  subscription: Subscription;
  constructor(data?: ReportInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Report`.
   */
  public static getModelName() {
    return "Report";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Report for dynamic purposes.
  **/
  public static factory(data: ReportInterface): Report{
    return new Report(data);
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
      name: 'Report',
      plural: 'Reports',
      path: 'Reports',
      idName: 'id',
      properties: {
        "type": {
          name: 'type',
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
        "replyId": {
          name: 'replyId',
          type: 'any'
        },
        "reviewId": {
          name: 'reviewId',
          type: 'any'
        },
        "productId": {
          name: 'productId',
          type: 'any'
        },
        "subscriptionId": {
          name: 'subscriptionId',
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
        reply: {
          name: 'reply',
          type: 'Reply',
          model: 'Reply',
          relationType: 'belongsTo',
                  keyFrom: 'replyId',
          keyTo: 'id'
        },
        review: {
          name: 'review',
          type: 'Review',
          model: 'Review',
          relationType: 'belongsTo',
                  keyFrom: 'reviewId',
          keyTo: 'id'
        },
        product: {
          name: 'product',
          type: 'Product',
          model: 'Product',
          relationType: 'belongsTo',
                  keyFrom: 'productId',
          keyTo: 'id'
        },
        subscription: {
          name: 'subscription',
          type: 'Subscription',
          model: 'Subscription',
          relationType: 'belongsTo',
                  keyFrom: 'subscriptionId',
          keyTo: 'id'
        },
      }
    }
  }
}
