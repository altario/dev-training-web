/* tslint:disable */
import { SDKToken } from './models/BaseModels';

import * as reducers from './reducers/index';

import { LoopbackAuthEffects } from './effects/auth';
import { UserEffects } from './effects/User';
import { DeviceEffects } from './effects/Device';
import { UserNotificationEffects } from './effects/UserNotification';
import { OrganizationEffects } from './effects/Organization';
import { TwoFactorAuthenticationEffects } from './effects/TwoFactorAuthentication';
import { SupportTicketEffects } from './effects/SupportTicket';
import { InviteEffects } from './effects/Invite';
import { FollowEffects } from './effects/Follow';
import { VoteEffects } from './effects/Vote';
import { PostEffects } from './effects/Post';
import { ReplyEffects } from './effects/Reply';
import { ShareEffects } from './effects/Share';
import { ReportEffects } from './effects/Report';
import { ReviewEffects } from './effects/Review';
import { CategoryEffects } from './effects/Category';
import { StripeCustomerEffects } from './effects/StripeCustomer';
import { StripeSourceEffects } from './effects/StripeSource';
import { StripeChargeEffects } from './effects/StripeCharge';
import { StripeStoreIdentityEffects } from './effects/StripeStoreIdentity';
import { ProductEffects } from './effects/Product';
import { SubscriptionEffects } from './effects/Subscription';
import { OAuthAppEffects } from './effects/OAuthApp';

export interface LoopbackStateInterface {
  LoopbackAuth: SDKToken;
  Users: reducers.UsersState;
  Devices: reducers.DevicesState;
  UserNotifications: reducers.UserNotificationsState;
  Organizations: reducers.OrganizationsState;
  TwoFactorAuthentications: reducers.TwoFactorAuthenticationsState;
  SupportTickets: reducers.SupportTicketsState;
  Invites: reducers.InvitesState;
  Follows: reducers.FollowsState;
  Votes: reducers.VotesState;
  Posts: reducers.PostsState;
  Replys: reducers.ReplysState;
  Shares: reducers.SharesState;
  Reports: reducers.ReportsState;
  Reviews: reducers.ReviewsState;
  Categorys: reducers.CategorysState;
  StripeCustomers: reducers.StripeCustomersState;
  StripeSources: reducers.StripeSourcesState;
  StripeCharges: reducers.StripeChargesState;
  StripeStoreIdentitys: reducers.StripeStoreIdentitysState;
  Products: reducers.ProductsState;
  Subscriptions: reducers.SubscriptionsState;
  OAuthApps: reducers.OAuthAppsState;
};

export const LoopbackReducer = {
  LoopbackAuth: reducers.LoopbackAuthReducer,
	Users: reducers.UsersReducer,
	Devices: reducers.DevicesReducer,
	UserNotifications: reducers.UserNotificationsReducer,
	Organizations: reducers.OrganizationsReducer,
	TwoFactorAuthentications: reducers.TwoFactorAuthenticationsReducer,
	SupportTickets: reducers.SupportTicketsReducer,
	Invites: reducers.InvitesReducer,
	Follows: reducers.FollowsReducer,
	Votes: reducers.VotesReducer,
	Posts: reducers.PostsReducer,
	Replys: reducers.ReplysReducer,
	Shares: reducers.SharesReducer,
	Reports: reducers.ReportsReducer,
	Reviews: reducers.ReviewsReducer,
	Categorys: reducers.CategorysReducer,
	StripeCustomers: reducers.StripeCustomersReducer,
	StripeSources: reducers.StripeSourcesReducer,
	StripeCharges: reducers.StripeChargesReducer,
	StripeStoreIdentitys: reducers.StripeStoreIdentitysReducer,
	Products: reducers.ProductsReducer,
	Subscriptions: reducers.SubscriptionsReducer,
	OAuthApps: reducers.OAuthAppsReducer,
	UserRoles: reducers.UserRolesReducer,
	UserProducts: reducers.UserProductsReducer,
	ProductCategorys: reducers.ProductCategorysReducer,
};

export const LoopbackEffects = [
  LoopbackAuthEffects,
  UserEffects,
  DeviceEffects,
  UserNotificationEffects,
  OrganizationEffects,
  TwoFactorAuthenticationEffects,
  SupportTicketEffects,
  InviteEffects,
  FollowEffects,
  VoteEffects,
  PostEffects,
  ReplyEffects,
  ShareEffects,
  ReportEffects,
  ReviewEffects,
  CategoryEffects,
  StripeCustomerEffects,
  StripeSourceEffects,
  StripeChargeEffects,
  StripeStoreIdentityEffects,
  ProductEffects,
  SubscriptionEffects,
  OAuthAppEffects,
];
