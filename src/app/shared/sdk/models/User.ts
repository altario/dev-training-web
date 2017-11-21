/* tslint:disable */
import {
  StripeCustomer,
  StripeSource,
  StripeCharge,
  Device,
  UserNotification,
  Organization,
  TwoFactorAuthentication,
  SupportTicket,
  Invite,
  Post,
  Report,
  Product,
  Review,
  OAuthApp
} from '../index';

declare var Object: any;
export interface UserInterface {
  "name"?: string;
  "emailPreferences"?: string;
  "realm"?: string;
  "username"?: string;
  "emailVerified"?: boolean;
  "id"?: any;
  "emailAddresses"?: Array<any>;
  "phoneNumbers"?: Array<any>;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "slug"?: string;
  "photo"?: any;
  "active"?: boolean;
  "password"?: string;
  emails?: any[];
  phones?: any[];
  stripeCustomer?: StripeCustomer;
  stripeSources?: StripeSource[];
  stripeCharges?: StripeCharge[];
  identities?: any[];
  credentials?: any[];
  accessTokens?: any[];
  devices?: Device[];
  notifications?: UserNotification[];
  roles?: any[];
  s3Photo?: any[];
  organizations?: Organization[];
  twoFactorAuthentication?: TwoFactorAuthentication;
  supportTickets?: SupportTicket[];
  invites?: Invite[];
  followers?: User[];
  following?: User[];
  posts?: Post[];
  shares?: Post[];
  reports?: Report[];
  shoppingCart?: Product[];
  wishList?: Product[];
  reviews?: Review[];
  oAuthClientApplications?: OAuthApp[];
}

export class User implements UserInterface {
  "name": string;
  "emailPreferences": string;
  "realm": string;
  "username": string;
  "emailVerified": boolean;
  "id": any;
  "emailAddresses": Array<any>;
  "phoneNumbers": Array<any>;
  "createdAt": Date;
  "updatedAt": Date;
  "slug": string;
  "photo": any;
  "active": boolean;
  "password": string;
  emails: any[];
  phones: any[];
  stripeCustomer: StripeCustomer;
  stripeSources: StripeSource[];
  stripeCharges: StripeCharge[];
  identities: any[];
  credentials: any[];
  accessTokens: any[];
  devices: Device[];
  notifications: UserNotification[];
  roles: any[];
  s3Photo: any[];
  organizations: Organization[];
  twoFactorAuthentication: TwoFactorAuthentication;
  supportTickets: SupportTicket[];
  invites: Invite[];
  followers: User[];
  following: User[];
  posts: Post[];
  shares: Post[];
  reports: Report[];
  shoppingCart: Product[];
  wishList: Product[];
  reviews: Review[];
  oAuthClientApplications: OAuthApp[];
  constructor(data?: UserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `User`.
   */
  public static getModelName() {
    return "User";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of User for dynamic purposes.
  **/
  public static factory(data: UserInterface): User{
    return new User(data);
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
      name: 'User',
      plural: 'users',
      path: 'users',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "emailPreferences": {
          name: 'emailPreferences',
          type: 'string',
          default: 'marketing'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "emailAddresses": {
          name: 'emailAddresses',
          type: 'Array&lt;any&gt;',
          default: <any>[]
        },
        "phoneNumbers": {
          name: 'phoneNumbers',
          type: 'Array&lt;any&gt;',
          default: <any>[]
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
        "photo": {
          name: 'photo',
          type: 'any'
        },
        "active": {
          name: 'active',
          type: 'boolean',
          default: false
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        emails: {
          name: 'emails',
          type: 'any[]',
          model: '',
          relationType: 'embedsMany',
                  keyFrom: 'emailAddresses',
          keyTo: 'id'
        },
        phones: {
          name: 'phones',
          type: 'any[]',
          model: '',
          relationType: 'embedsMany',
                  keyFrom: 'phoneNumbers',
          keyTo: 'id'
        },
        stripeCustomer: {
          name: 'stripeCustomer',
          type: 'StripeCustomer',
          model: 'StripeCustomer',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'userId'
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
        identities: {
          name: 'identities',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        credentials: {
          name: 'credentials',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        devices: {
          name: 'devices',
          type: 'Device[]',
          model: 'Device',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        notifications: {
          name: 'notifications',
          type: 'UserNotification[]',
          model: 'UserNotification',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        roles: {
          name: 'roles',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        s3Photo: {
          name: 's3Photo',
          type: 'any[]',
          model: '',
          relationType: 'embedsOne',
                  keyFrom: 'photo',
          keyTo: 'id'
        },
        organizations: {
          name: 'organizations',
          type: 'Organization[]',
          model: 'Organization',
          relationType: 'hasMany',
          modelThrough: 'UserRole',
          keyThrough: 'organizationId',
          keyFrom: 'id',
          keyTo: 'userId'
        },
        twoFactorAuthentication: {
          name: 'twoFactorAuthentication',
          type: 'TwoFactorAuthentication',
          model: 'TwoFactorAuthentication',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        supportTickets: {
          name: 'supportTickets',
          type: 'SupportTicket[]',
          model: 'SupportTicket',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        invites: {
          name: 'invites',
          type: 'Invite[]',
          model: 'Invite',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        followers: {
          name: 'followers',
          type: 'User[]',
          model: 'User',
          relationType: 'hasMany',
          modelThrough: 'Follow',
          keyThrough: 'userId',
          keyFrom: 'id',
          keyTo: 'followeeId'
        },
        following: {
          name: 'following',
          type: 'User[]',
          model: 'User',
          relationType: 'hasMany',
          modelThrough: 'Follow',
          keyThrough: 'followeeId',
          keyFrom: 'id',
          keyTo: 'userId'
        },
        posts: {
          name: 'posts',
          type: 'Post[]',
          model: 'Post',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        shares: {
          name: 'shares',
          type: 'Post[]',
          model: 'Post',
          relationType: 'hasMany',
          modelThrough: 'Share',
          keyThrough: 'userId',
          keyFrom: 'id',
          keyTo: 'postId'
        },
        reports: {
          name: 'reports',
          type: 'Report[]',
          model: 'Report',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        shoppingCart: {
          name: 'shoppingCart',
          type: 'Product[]',
          model: 'Product',
          relationType: 'hasMany',
          modelThrough: 'UserProduct',
          keyThrough: 'productId',
          keyFrom: 'id',
          keyTo: 'userId'
        },
        wishList: {
          name: 'wishList',
          type: 'Product[]',
          model: 'Product',
          relationType: 'hasMany',
          modelThrough: 'UserProduct',
          keyThrough: 'productId',
          keyFrom: 'id',
          keyTo: 'userId'
        },
        reviews: {
          name: 'reviews',
          type: 'Review[]',
          model: 'Review',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        oAuthClientApplications: {
          name: 'oAuthClientApplications',
          type: 'OAuthApp[]',
          model: 'OAuthApp',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
      }
    }
  }
}
