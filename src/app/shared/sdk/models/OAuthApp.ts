/* tslint:disable */
import {
  User,
  Organization
} from '../index';

declare var Object: any;
export interface OAuthAppInterface {
  "id"?: string;
  "clientType"?: string;
  "redirectURIs"?: Array<any>;
  "tokenEndpointAuthMethod"?: string;
  "grantTypes"?: Array<any>;
  "responseTypes"?: Array<any>;
  "tokenType"?: string;
  "clientSecret"?: string;
  "clientName"?: string;
  "clientURI"?: string;
  "logoURI"?: string;
  "scopes"?: Array<any>;
  "contacts"?: Array<any>;
  "tosURI"?: string;
  "policyURI"?: string;
  "jwksURI"?: string;
  "jwks"?: string;
  "softwareId"?: string;
  "softwareVersion"?: string;
  "realm"?: string;
  "name": string;
  "description"?: string;
  "owner"?: string;
  "collaborators"?: Array<any>;
  "email"?: string;
  "emailVerified"?: boolean;
  "clientKey"?: string;
  "javaScriptKey"?: string;
  "restApiKey"?: string;
  "windowsKey"?: string;
  "masterKey"?: string;
  "pushSettings"?: any;
  "status"?: string;
  "created"?: Date;
  "modified"?: Date;
  "userId"?: any;
  "organizationId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "slug"?: string;
  "logo"?: any;
  user?: User;
  organization?: Organization;
  s3Logo?: any[];
}

export class OAuthApp implements OAuthAppInterface {
  "id": string;
  "clientType": string;
  "redirectURIs": Array<any>;
  "tokenEndpointAuthMethod": string;
  "grantTypes": Array<any>;
  "responseTypes": Array<any>;
  "tokenType": string;
  "clientSecret": string;
  "clientName": string;
  "clientURI": string;
  "logoURI": string;
  "scopes": Array<any>;
  "contacts": Array<any>;
  "tosURI": string;
  "policyURI": string;
  "jwksURI": string;
  "jwks": string;
  "softwareId": string;
  "softwareVersion": string;
  "realm": string;
  "name": string;
  "description": string;
  "owner": string;
  "collaborators": Array<any>;
  "email": string;
  "emailVerified": boolean;
  "clientKey": string;
  "javaScriptKey": string;
  "restApiKey": string;
  "windowsKey": string;
  "masterKey": string;
  "pushSettings": any;
  "status": string;
  "created": Date;
  "modified": Date;
  "userId": any;
  "organizationId": any;
  "createdAt": Date;
  "updatedAt": Date;
  "slug": string;
  "logo": any;
  user: User;
  organization: Organization;
  s3Logo: any[];
  constructor(data?: OAuthAppInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OAuthApp`.
   */
  public static getModelName() {
    return "OAuthApp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OAuthApp for dynamic purposes.
  **/
  public static factory(data: OAuthAppInterface): OAuthApp{
    return new OAuthApp(data);
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
      name: 'OAuthApp',
      plural: 'OAuthApps',
      path: 'OAuthApps',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "clientType": {
          name: 'clientType',
          type: 'string'
        },
        "redirectURIs": {
          name: 'redirectURIs',
          type: 'Array&lt;any&gt;'
        },
        "tokenEndpointAuthMethod": {
          name: 'tokenEndpointAuthMethod',
          type: 'string'
        },
        "grantTypes": {
          name: 'grantTypes',
          type: 'Array&lt;any&gt;'
        },
        "responseTypes": {
          name: 'responseTypes',
          type: 'Array&lt;any&gt;'
        },
        "tokenType": {
          name: 'tokenType',
          type: 'string'
        },
        "clientSecret": {
          name: 'clientSecret',
          type: 'string'
        },
        "clientName": {
          name: 'clientName',
          type: 'string'
        },
        "clientURI": {
          name: 'clientURI',
          type: 'string'
        },
        "logoURI": {
          name: 'logoURI',
          type: 'string'
        },
        "scopes": {
          name: 'scopes',
          type: 'Array&lt;any&gt;'
        },
        "contacts": {
          name: 'contacts',
          type: 'Array&lt;any&gt;'
        },
        "tosURI": {
          name: 'tosURI',
          type: 'string'
        },
        "policyURI": {
          name: 'policyURI',
          type: 'string'
        },
        "jwksURI": {
          name: 'jwksURI',
          type: 'string'
        },
        "jwks": {
          name: 'jwks',
          type: 'string'
        },
        "softwareId": {
          name: 'softwareId',
          type: 'string'
        },
        "softwareVersion": {
          name: 'softwareVersion',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "owner": {
          name: 'owner',
          type: 'string'
        },
        "collaborators": {
          name: 'collaborators',
          type: 'Array&lt;any&gt;'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "clientKey": {
          name: 'clientKey',
          type: 'string'
        },
        "javaScriptKey": {
          name: 'javaScriptKey',
          type: 'string'
        },
        "restApiKey": {
          name: 'restApiKey',
          type: 'string'
        },
        "windowsKey": {
          name: 'windowsKey',
          type: 'string'
        },
        "masterKey": {
          name: 'masterKey',
          type: 'string'
        },
        "pushSettings": {
          name: 'pushSettings',
          type: 'any'
        },
        "status": {
          name: 'status',
          type: 'string',
          default: 'sandbox'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "modified": {
          name: 'modified',
          type: 'Date'
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
        "logo": {
          name: 'logo',
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
        s3Logo: {
          name: 's3Logo',
          type: 'any[]',
          model: '',
          relationType: 'embedsOne',
                  keyFrom: 'logo',
          keyTo: 'id'
        },
      }
    }
  }
}
