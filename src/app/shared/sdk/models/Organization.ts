/* tslint:disable */
import {
  User,
  UserNotification,
  StripeCustomer,
  StripeSource,
  StripeCharge,
  StripeStoreIdentity,
  SupportTicket,
  Post,
  Product,
  Subscription,
  OAuthApp
} from '../index';

declare var Object: any;
export interface OrganizationInterface {
  "name": string;
  "billingEmail": string;
  "description"?: string;
  "pushSettings"?: any;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "slug"?: string;
  "logo"?: any;
  users?: User[];
  roles?: any[];
  notifications?: UserNotification[];
  s3Photo?: any[];
  stripeCustomer?: StripeCustomer;
  stripeSources?: StripeSource[];
  stripeCharges?: StripeCharge[];
  stripeStoreIdentity?: StripeStoreIdentity;
  supportTickets?: SupportTicket[];
  posts?: Post[];
  products?: Product[];
  subscriptions?: Subscription[];
  oAuthClientApplications?: OAuthApp[];
}

export class Organization implements OrganizationInterface {
  "name": string;
  "billingEmail": string;
  "description": string;
  "pushSettings": any;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  "slug": string;
  "logo": any;
  users: User[];
  roles: any[];
  notifications: UserNotification[];
  s3Photo: any[];
  stripeCustomer: StripeCustomer;
  stripeSources: StripeSource[];
  stripeCharges: StripeCharge[];
  stripeStoreIdentity: StripeStoreIdentity;
  supportTickets: SupportTicket[];
  posts: Post[];
  products: Product[];
  subscriptions: Subscription[];
  oAuthClientApplications: OAuthApp[];
  constructor(data?: OrganizationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Organization`.
   */
  public static getModelName() {
    return "Organization";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Organization for dynamic purposes.
  **/
  public static factory(data: OrganizationInterface): Organization{
    return new Organization(data);
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
      name: 'Organization',
      plural: 'Organizations',
      path: 'Organizations',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "billingEmail": {
          name: 'billingEmail',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "pushSettings": {
          name: 'pushSettings',
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
        "slug": {
          name: 'slug',
          type: 'string'
        },
        "logo": {
          name: 'logo',
          type: 'any'
        },
      },
      relations: {
        users: {
          name: 'users',
          type: 'User[]',
          model: 'User',
          relationType: 'hasMany',
          modelThrough: 'UserRole',
          keyThrough: 'userId',
          keyFrom: 'id',
          keyTo: 'organizationId'
        },
        roles: {
          name: 'roles',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'organizationId'
        },
        notifications: {
          name: 'notifications',
          type: 'UserNotification[]',
          model: 'UserNotification',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'organizationId'
        },
        s3Photo: {
          name: 's3Photo',
          type: 'any[]',
          model: '',
          relationType: 'embedsOne',
                  keyFrom: 'logo',
          keyTo: 'id'
        },
        stripeCustomer: {
          name: 'stripeCustomer',
          type: 'StripeCustomer',
          model: 'StripeCustomer',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'organizationId'
        },
        stripeSources: {
          name: 'stripeSources',
          type: 'StripeSource[]',
          model: 'StripeSource',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'customer'
        },
        stripeCharges: {
          name: 'stripeCharges',
          type: 'StripeCharge[]',
          model: 'StripeCharge',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'customer'
        },
        stripeStoreIdentity: {
          name: 'stripeStoreIdentity',
          type: 'StripeStoreIdentity',
          model: 'StripeStoreIdentity',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'organizationId'
        },
        supportTickets: {
          name: 'supportTickets',
          type: 'SupportTicket[]',
          model: 'SupportTicket',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'organizationId'
        },
        posts: {
          name: 'posts',
          type: 'Post[]',
          model: 'Post',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'organizationId'
        },
        products: {
          name: 'products',
          type: 'Product[]',
          model: 'Product',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'organizationId'
        },
        subscriptions: {
          name: 'subscriptions',
          type: 'Subscription[]',
          model: 'Subscription',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'organizationId'
        },
        oAuthClientApplications: {
          name: 'oAuthClientApplications',
          type: 'OAuthApp[]',
          model: 'OAuthApp',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'organizationId'
        },
      }
    }
  }
}
