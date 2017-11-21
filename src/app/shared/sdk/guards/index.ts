/* tslint:disable */
import { AuthGuard } from './auth.guard';
import { UserExistsGuard } from './User';
import { DeviceExistsGuard } from './Device';
import { UserNotificationExistsGuard } from './UserNotification';
import { OrganizationExistsGuard } from './Organization';
import { TwoFactorAuthenticationExistsGuard } from './TwoFactorAuthentication';
import { SupportTicketExistsGuard } from './SupportTicket';
import { InviteExistsGuard } from './Invite';
import { FollowExistsGuard } from './Follow';
import { VoteExistsGuard } from './Vote';
import { PostExistsGuard } from './Post';
import { ReplyExistsGuard } from './Reply';
import { ShareExistsGuard } from './Share';
import { ReportExistsGuard } from './Report';
import { ReviewExistsGuard } from './Review';
import { CategoryExistsGuard } from './Category';
import { StripeCustomerExistsGuard } from './StripeCustomer';
import { StripeSourceExistsGuard } from './StripeSource';
import { StripeChargeExistsGuard } from './StripeCharge';
import { StripeStoreIdentityExistsGuard } from './StripeStoreIdentity';
import { ProductExistsGuard } from './Product';
import { SubscriptionExistsGuard } from './Subscription';
import { OAuthAppExistsGuard } from './OAuthApp';

export const LOOPBACK_GUARDS_PROVIDERS = [
  AuthGuard,
	UserExistsGuard,
	DeviceExistsGuard,
	UserNotificationExistsGuard,
	OrganizationExistsGuard,
	TwoFactorAuthenticationExistsGuard,
	SupportTicketExistsGuard,
	InviteExistsGuard,
	FollowExistsGuard,
	VoteExistsGuard,
	PostExistsGuard,
	ReplyExistsGuard,
	ShareExistsGuard,
	ReportExistsGuard,
	ReviewExistsGuard,
	CategoryExistsGuard,
	StripeCustomerExistsGuard,
	StripeSourceExistsGuard,
	StripeChargeExistsGuard,
	StripeStoreIdentityExistsGuard,
	ProductExistsGuard,
	SubscriptionExistsGuard,
	OAuthAppExistsGuard,
];

export * from './auth.guard';
export * from './User';
export * from './Device';
export * from './UserNotification';
export * from './Organization';
export * from './TwoFactorAuthentication';
export * from './SupportTicket';
export * from './Invite';
export * from './Follow';
export * from './Vote';
export * from './Post';
export * from './Reply';
export * from './Share';
export * from './Report';
export * from './Review';
export * from './Category';
export * from './StripeCustomer';
export * from './StripeSource';
export * from './StripeCharge';
export * from './StripeStoreIdentity';
export * from './Product';
export * from './Subscription';
export * from './OAuthApp';
