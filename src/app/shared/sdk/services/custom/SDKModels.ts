/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Device } from '../../models/Device';
import { UserNotification } from '../../models/UserNotification';
import { Organization } from '../../models/Organization';
import { TwoFactorAuthentication } from '../../models/TwoFactorAuthentication';
import { SupportTicket } from '../../models/SupportTicket';
import { Invite } from '../../models/Invite';
import { Follow } from '../../models/Follow';
import { Vote } from '../../models/Vote';
import { Post } from '../../models/Post';
import { Reply } from '../../models/Reply';
import { Share } from '../../models/Share';
import { Report } from '../../models/Report';
import { Review } from '../../models/Review';
import { Category } from '../../models/Category';
import { StripeCustomer } from '../../models/StripeCustomer';
import { StripeSource } from '../../models/StripeSource';
import { StripeCharge } from '../../models/StripeCharge';
import { StripeStoreIdentity } from '../../models/StripeStoreIdentity';
import { Product } from '../../models/Product';
import { Subscription } from '../../models/Subscription';
import { OAuthApp } from '../../models/OAuthApp';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Device: Device,
    UserNotification: UserNotification,
    Organization: Organization,
    TwoFactorAuthentication: TwoFactorAuthentication,
    SupportTicket: SupportTicket,
    Invite: Invite,
    Follow: Follow,
    Vote: Vote,
    Post: Post,
    Reply: Reply,
    Share: Share,
    Report: Report,
    Review: Review,
    Category: Category,
    StripeCustomer: StripeCustomer,
    StripeSource: StripeSource,
    StripeCharge: StripeCharge,
    StripeStoreIdentity: StripeStoreIdentity,
    Product: Product,
    Subscription: Subscription,
    OAuthApp: OAuthApp,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
