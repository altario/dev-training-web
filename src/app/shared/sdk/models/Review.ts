/* tslint:disable */
import {
  User,
  Report,
  Product
} from '../index';

declare var Object: any;
export interface ReviewInterface {
  "score"?: number;
  "title"?: string;
  "text"?: string;
  "id"?: any;
  "userId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "productId"?: any;
  user?: User;
  reports?: Report[];
  product?: Product;
}

export class Review implements ReviewInterface {
  "score": number;
  "title": string;
  "text": string;
  "id": any;
  "userId": any;
  "createdAt": Date;
  "updatedAt": Date;
  "productId": any;
  user: User;
  reports: Report[];
  product: Product;
  constructor(data?: ReviewInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Review`.
   */
  public static getModelName() {
    return "Review";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Review for dynamic purposes.
  **/
  public static factory(data: ReviewInterface): Review{
    return new Review(data);
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
      name: 'Review',
      plural: 'Reviews',
      path: 'Reviews',
      idName: 'id',
      properties: {
        "score": {
          name: 'score',
          type: 'number'
        },
        "title": {
          name: 'title',
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
        "productId": {
          name: 'productId',
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
        reports: {
          name: 'reports',
          type: 'Report[]',
          model: 'Report',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'reviewId'
        },
        product: {
          name: 'product',
          type: 'Product',
          model: 'Product',
          relationType: 'belongsTo',
                  keyFrom: 'productId',
          keyTo: 'id'
        },
      }
    }
  }
}
