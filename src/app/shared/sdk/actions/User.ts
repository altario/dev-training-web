/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, User } from '../models';

export const UserActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('User'), {
  SEND_VERIFICATION_CODE: type('[User] sendVerificationCode'),
  SEND_VERIFICATION_CODE_SUCCESS: type('[User] sendVerificationCode success'),
  SEND_VERIFICATION_CODE_FAIL: type('[User] sendVerificationCode fail'),

  IS_ADMIN: type('[User] isAdmin'),
  IS_ADMIN_SUCCESS: type('[User] isAdmin success'),
  IS_ADMIN_FAIL: type('[User] isAdmin fail'),

  VERIFY_TWO_FACTOR_AUTHENTICATION: type('[User] verifyTwoFactorAuthentication'),
  VERIFY_TWO_FACTOR_AUTHENTICATION_SUCCESS: type('[User] verifyTwoFactorAuthentication success'),
  VERIFY_TWO_FACTOR_AUTHENTICATION_FAIL: type('[User] verifyTwoFactorAuthentication fail'),

  FIND_BY_ID_EMAILS: type('[User] findByIdEmails'),
  FIND_BY_ID_EMAILS_SUCCESS: type('[User] findByIdEmails success'),
  FIND_BY_ID_EMAILS_FAIL: type('[User] findByIdEmails fail'),

  DESTROY_BY_ID_EMAILS: type('[User] destroyByIdEmails'),
  DESTROY_BY_ID_EMAILS_SUCCESS: type('[User] destroyByIdEmails success'),
  DESTROY_BY_ID_EMAILS_FAIL: type('[User] destroyByIdEmails fail'),

  UPDATE_BY_ID_EMAILS: type('[User] updateByIdEmails'),
  UPDATE_BY_ID_EMAILS_SUCCESS: type('[User] updateByIdEmails success'),
  UPDATE_BY_ID_EMAILS_FAIL: type('[User] updateByIdEmails fail'),

  FIND_BY_ID_PHONES: type('[User] findByIdPhones'),
  FIND_BY_ID_PHONES_SUCCESS: type('[User] findByIdPhones success'),
  FIND_BY_ID_PHONES_FAIL: type('[User] findByIdPhones fail'),

  DESTROY_BY_ID_PHONES: type('[User] destroyByIdPhones'),
  DESTROY_BY_ID_PHONES_SUCCESS: type('[User] destroyByIdPhones success'),
  DESTROY_BY_ID_PHONES_FAIL: type('[User] destroyByIdPhones fail'),

  UPDATE_BY_ID_PHONES: type('[User] updateByIdPhones'),
  UPDATE_BY_ID_PHONES_SUCCESS: type('[User] updateByIdPhones success'),
  UPDATE_BY_ID_PHONES_FAIL: type('[User] updateByIdPhones fail'),

  GET_STRIPECUSTOMER: type('[User] getStripeCustomer'),
  GET_STRIPECUSTOMER_SUCCESS: type('[User] getStripeCustomer success'),
  GET_STRIPECUSTOMER_FAIL: type('[User] getStripeCustomer fail'),

  CREATE_STRIPECUSTOMER: type('[User] createStripeCustomer'),
  CREATE_STRIPECUSTOMER_SUCCESS: type('[User] createStripeCustomer success'),
  CREATE_STRIPECUSTOMER_FAIL: type('[User] createStripeCustomer fail'),

  UPDATE_STRIPECUSTOMER: type('[User] updateStripeCustomer'),
  UPDATE_STRIPECUSTOMER_SUCCESS: type('[User] updateStripeCustomer success'),
  UPDATE_STRIPECUSTOMER_FAIL: type('[User] updateStripeCustomer fail'),

  DESTROY_STRIPECUSTOMER: type('[User] destroyStripeCustomer'),
  DESTROY_STRIPECUSTOMER_SUCCESS: type('[User] destroyStripeCustomer success'),
  DESTROY_STRIPECUSTOMER_FAIL: type('[User] destroyStripeCustomer fail'),

  FIND_BY_ID_STRIPESOURCES: type('[User] findByIdStripeSources'),
  FIND_BY_ID_STRIPESOURCES_SUCCESS: type('[User] findByIdStripeSources success'),
  FIND_BY_ID_STRIPESOURCES_FAIL: type('[User] findByIdStripeSources fail'),

  DESTROY_BY_ID_STRIPESOURCES: type('[User] destroyByIdStripeSources'),
  DESTROY_BY_ID_STRIPESOURCES_SUCCESS: type('[User] destroyByIdStripeSources success'),
  DESTROY_BY_ID_STRIPESOURCES_FAIL: type('[User] destroyByIdStripeSources fail'),

  UPDATE_BY_ID_STRIPESOURCES: type('[User] updateByIdStripeSources'),
  UPDATE_BY_ID_STRIPESOURCES_SUCCESS: type('[User] updateByIdStripeSources success'),
  UPDATE_BY_ID_STRIPESOURCES_FAIL: type('[User] updateByIdStripeSources fail'),

  FIND_BY_ID_STRIPECHARGES: type('[User] findByIdStripeCharges'),
  FIND_BY_ID_STRIPECHARGES_SUCCESS: type('[User] findByIdStripeCharges success'),
  FIND_BY_ID_STRIPECHARGES_FAIL: type('[User] findByIdStripeCharges fail'),

  DESTROY_BY_ID_STRIPECHARGES: type('[User] destroyByIdStripeCharges'),
  DESTROY_BY_ID_STRIPECHARGES_SUCCESS: type('[User] destroyByIdStripeCharges success'),
  DESTROY_BY_ID_STRIPECHARGES_FAIL: type('[User] destroyByIdStripeCharges fail'),

  UPDATE_BY_ID_STRIPECHARGES: type('[User] updateByIdStripeCharges'),
  UPDATE_BY_ID_STRIPECHARGES_SUCCESS: type('[User] updateByIdStripeCharges success'),
  UPDATE_BY_ID_STRIPECHARGES_FAIL: type('[User] updateByIdStripeCharges fail'),

  FIND_BY_ID_IDENTITIES: type('[User] findByIdIdentities'),
  FIND_BY_ID_IDENTITIES_SUCCESS: type('[User] findByIdIdentities success'),
  FIND_BY_ID_IDENTITIES_FAIL: type('[User] findByIdIdentities fail'),

  DESTROY_BY_ID_IDENTITIES: type('[User] destroyByIdIdentities'),
  DESTROY_BY_ID_IDENTITIES_SUCCESS: type('[User] destroyByIdIdentities success'),
  DESTROY_BY_ID_IDENTITIES_FAIL: type('[User] destroyByIdIdentities fail'),

  UPDATE_BY_ID_IDENTITIES: type('[User] updateByIdIdentities'),
  UPDATE_BY_ID_IDENTITIES_SUCCESS: type('[User] updateByIdIdentities success'),
  UPDATE_BY_ID_IDENTITIES_FAIL: type('[User] updateByIdIdentities fail'),

  FIND_BY_ID_CREDENTIALS: type('[User] findByIdCredentials'),
  FIND_BY_ID_CREDENTIALS_SUCCESS: type('[User] findByIdCredentials success'),
  FIND_BY_ID_CREDENTIALS_FAIL: type('[User] findByIdCredentials fail'),

  DESTROY_BY_ID_CREDENTIALS: type('[User] destroyByIdCredentials'),
  DESTROY_BY_ID_CREDENTIALS_SUCCESS: type('[User] destroyByIdCredentials success'),
  DESTROY_BY_ID_CREDENTIALS_FAIL: type('[User] destroyByIdCredentials fail'),

  UPDATE_BY_ID_CREDENTIALS: type('[User] updateByIdCredentials'),
  UPDATE_BY_ID_CREDENTIALS_SUCCESS: type('[User] updateByIdCredentials success'),
  UPDATE_BY_ID_CREDENTIALS_FAIL: type('[User] updateByIdCredentials fail'),

  FIND_BY_ID_ACCESSTOKENS: type('[User] findByIdAccessTokens'),
  FIND_BY_ID_ACCESSTOKENS_SUCCESS: type('[User] findByIdAccessTokens success'),
  FIND_BY_ID_ACCESSTOKENS_FAIL: type('[User] findByIdAccessTokens fail'),

  DESTROY_BY_ID_ACCESSTOKENS: type('[User] destroyByIdAccessTokens'),
  DESTROY_BY_ID_ACCESSTOKENS_SUCCESS: type('[User] destroyByIdAccessTokens success'),
  DESTROY_BY_ID_ACCESSTOKENS_FAIL: type('[User] destroyByIdAccessTokens fail'),

  UPDATE_BY_ID_ACCESSTOKENS: type('[User] updateByIdAccessTokens'),
  UPDATE_BY_ID_ACCESSTOKENS_SUCCESS: type('[User] updateByIdAccessTokens success'),
  UPDATE_BY_ID_ACCESSTOKENS_FAIL: type('[User] updateByIdAccessTokens fail'),

  FIND_BY_ID_DEVICES: type('[User] findByIdDevices'),
  FIND_BY_ID_DEVICES_SUCCESS: type('[User] findByIdDevices success'),
  FIND_BY_ID_DEVICES_FAIL: type('[User] findByIdDevices fail'),

  DESTROY_BY_ID_DEVICES: type('[User] destroyByIdDevices'),
  DESTROY_BY_ID_DEVICES_SUCCESS: type('[User] destroyByIdDevices success'),
  DESTROY_BY_ID_DEVICES_FAIL: type('[User] destroyByIdDevices fail'),

  UPDATE_BY_ID_DEVICES: type('[User] updateByIdDevices'),
  UPDATE_BY_ID_DEVICES_SUCCESS: type('[User] updateByIdDevices success'),
  UPDATE_BY_ID_DEVICES_FAIL: type('[User] updateByIdDevices fail'),

  FIND_BY_ID_NOTIFICATIONS: type('[User] findByIdNotifications'),
  FIND_BY_ID_NOTIFICATIONS_SUCCESS: type('[User] findByIdNotifications success'),
  FIND_BY_ID_NOTIFICATIONS_FAIL: type('[User] findByIdNotifications fail'),

  DESTROY_BY_ID_NOTIFICATIONS: type('[User] destroyByIdNotifications'),
  DESTROY_BY_ID_NOTIFICATIONS_SUCCESS: type('[User] destroyByIdNotifications success'),
  DESTROY_BY_ID_NOTIFICATIONS_FAIL: type('[User] destroyByIdNotifications fail'),

  UPDATE_BY_ID_NOTIFICATIONS: type('[User] updateByIdNotifications'),
  UPDATE_BY_ID_NOTIFICATIONS_SUCCESS: type('[User] updateByIdNotifications success'),
  UPDATE_BY_ID_NOTIFICATIONS_FAIL: type('[User] updateByIdNotifications fail'),

  FIND_BY_ID_ROLES: type('[User] findByIdRoles'),
  FIND_BY_ID_ROLES_SUCCESS: type('[User] findByIdRoles success'),
  FIND_BY_ID_ROLES_FAIL: type('[User] findByIdRoles fail'),

  DESTROY_BY_ID_ROLES: type('[User] destroyByIdRoles'),
  DESTROY_BY_ID_ROLES_SUCCESS: type('[User] destroyByIdRoles success'),
  DESTROY_BY_ID_ROLES_FAIL: type('[User] destroyByIdRoles fail'),

  UPDATE_BY_ID_ROLES: type('[User] updateByIdRoles'),
  UPDATE_BY_ID_ROLES_SUCCESS: type('[User] updateByIdRoles success'),
  UPDATE_BY_ID_ROLES_FAIL: type('[User] updateByIdRoles fail'),

  GET_S3PHOTO: type('[User] getS3Photo'),
  GET_S3PHOTO_SUCCESS: type('[User] getS3Photo success'),
  GET_S3PHOTO_FAIL: type('[User] getS3Photo fail'),

  CREATE_S3PHOTO: type('[User] createS3Photo'),
  CREATE_S3PHOTO_SUCCESS: type('[User] createS3Photo success'),
  CREATE_S3PHOTO_FAIL: type('[User] createS3Photo fail'),

  UPDATE_S3PHOTO: type('[User] updateS3Photo'),
  UPDATE_S3PHOTO_SUCCESS: type('[User] updateS3Photo success'),
  UPDATE_S3PHOTO_FAIL: type('[User] updateS3Photo fail'),

  DESTROY_S3PHOTO: type('[User] destroyS3Photo'),
  DESTROY_S3PHOTO_SUCCESS: type('[User] destroyS3Photo success'),
  DESTROY_S3PHOTO_FAIL: type('[User] destroyS3Photo fail'),

  FIND_BY_ID_ORGANIZATIONS: type('[User] findByIdOrganizations'),
  FIND_BY_ID_ORGANIZATIONS_SUCCESS: type('[User] findByIdOrganizations success'),
  FIND_BY_ID_ORGANIZATIONS_FAIL: type('[User] findByIdOrganizations fail'),

  DESTROY_BY_ID_ORGANIZATIONS: type('[User] destroyByIdOrganizations'),
  DESTROY_BY_ID_ORGANIZATIONS_SUCCESS: type('[User] destroyByIdOrganizations success'),
  DESTROY_BY_ID_ORGANIZATIONS_FAIL: type('[User] destroyByIdOrganizations fail'),

  UPDATE_BY_ID_ORGANIZATIONS: type('[User] updateByIdOrganizations'),
  UPDATE_BY_ID_ORGANIZATIONS_SUCCESS: type('[User] updateByIdOrganizations success'),
  UPDATE_BY_ID_ORGANIZATIONS_FAIL: type('[User] updateByIdOrganizations fail'),

  LINK_ORGANIZATIONS: type('[User] linkOrganizations'),
  LINK_ORGANIZATIONS_SUCCESS: type('[User] linkOrganizations success'),
  LINK_ORGANIZATIONS_FAIL: type('[User] linkOrganizations fail'),

  UNLINK_ORGANIZATIONS: type('[User] unlinkOrganizations'),
  UNLINK_ORGANIZATIONS_SUCCESS: type('[User] unlinkOrganizations success'),
  UNLINK_ORGANIZATIONS_FAIL: type('[User] unlinkOrganizations fail'),

  GET_TWOFACTORAUTHENTICATION: type('[User] getTwoFactorAuthentication'),
  GET_TWOFACTORAUTHENTICATION_SUCCESS: type('[User] getTwoFactorAuthentication success'),
  GET_TWOFACTORAUTHENTICATION_FAIL: type('[User] getTwoFactorAuthentication fail'),

  CREATE_TWOFACTORAUTHENTICATION: type('[User] createTwoFactorAuthentication'),
  CREATE_TWOFACTORAUTHENTICATION_SUCCESS: type('[User] createTwoFactorAuthentication success'),
  CREATE_TWOFACTORAUTHENTICATION_FAIL: type('[User] createTwoFactorAuthentication fail'),

  UPDATE_TWOFACTORAUTHENTICATION: type('[User] updateTwoFactorAuthentication'),
  UPDATE_TWOFACTORAUTHENTICATION_SUCCESS: type('[User] updateTwoFactorAuthentication success'),
  UPDATE_TWOFACTORAUTHENTICATION_FAIL: type('[User] updateTwoFactorAuthentication fail'),

  DESTROY_TWOFACTORAUTHENTICATION: type('[User] destroyTwoFactorAuthentication'),
  DESTROY_TWOFACTORAUTHENTICATION_SUCCESS: type('[User] destroyTwoFactorAuthentication success'),
  DESTROY_TWOFACTORAUTHENTICATION_FAIL: type('[User] destroyTwoFactorAuthentication fail'),

  FIND_BY_ID_SUPPORTTICKETS: type('[User] findByIdSupportTickets'),
  FIND_BY_ID_SUPPORTTICKETS_SUCCESS: type('[User] findByIdSupportTickets success'),
  FIND_BY_ID_SUPPORTTICKETS_FAIL: type('[User] findByIdSupportTickets fail'),

  DESTROY_BY_ID_SUPPORTTICKETS: type('[User] destroyByIdSupportTickets'),
  DESTROY_BY_ID_SUPPORTTICKETS_SUCCESS: type('[User] destroyByIdSupportTickets success'),
  DESTROY_BY_ID_SUPPORTTICKETS_FAIL: type('[User] destroyByIdSupportTickets fail'),

  UPDATE_BY_ID_SUPPORTTICKETS: type('[User] updateByIdSupportTickets'),
  UPDATE_BY_ID_SUPPORTTICKETS_SUCCESS: type('[User] updateByIdSupportTickets success'),
  UPDATE_BY_ID_SUPPORTTICKETS_FAIL: type('[User] updateByIdSupportTickets fail'),

  FIND_BY_ID_INVITES: type('[User] findByIdInvites'),
  FIND_BY_ID_INVITES_SUCCESS: type('[User] findByIdInvites success'),
  FIND_BY_ID_INVITES_FAIL: type('[User] findByIdInvites fail'),

  FIND_BY_ID_FOLLOWERS: type('[User] findByIdFollowers'),
  FIND_BY_ID_FOLLOWERS_SUCCESS: type('[User] findByIdFollowers success'),
  FIND_BY_ID_FOLLOWERS_FAIL: type('[User] findByIdFollowers fail'),

  LINK_FOLLOWERS: type('[User] linkFollowers'),
  LINK_FOLLOWERS_SUCCESS: type('[User] linkFollowers success'),
  LINK_FOLLOWERS_FAIL: type('[User] linkFollowers fail'),

  UNLINK_FOLLOWERS: type('[User] unlinkFollowers'),
  UNLINK_FOLLOWERS_SUCCESS: type('[User] unlinkFollowers success'),
  UNLINK_FOLLOWERS_FAIL: type('[User] unlinkFollowers fail'),

  FIND_BY_ID_FOLLOWING: type('[User] findByIdFollowing'),
  FIND_BY_ID_FOLLOWING_SUCCESS: type('[User] findByIdFollowing success'),
  FIND_BY_ID_FOLLOWING_FAIL: type('[User] findByIdFollowing fail'),

  LINK_FOLLOWING: type('[User] linkFollowing'),
  LINK_FOLLOWING_SUCCESS: type('[User] linkFollowing success'),
  LINK_FOLLOWING_FAIL: type('[User] linkFollowing fail'),

  UNLINK_FOLLOWING: type('[User] unlinkFollowing'),
  UNLINK_FOLLOWING_SUCCESS: type('[User] unlinkFollowing success'),
  UNLINK_FOLLOWING_FAIL: type('[User] unlinkFollowing fail'),

  FIND_BY_ID_POSTS: type('[User] findByIdPosts'),
  FIND_BY_ID_POSTS_SUCCESS: type('[User] findByIdPosts success'),
  FIND_BY_ID_POSTS_FAIL: type('[User] findByIdPosts fail'),

  DESTROY_BY_ID_POSTS: type('[User] destroyByIdPosts'),
  DESTROY_BY_ID_POSTS_SUCCESS: type('[User] destroyByIdPosts success'),
  DESTROY_BY_ID_POSTS_FAIL: type('[User] destroyByIdPosts fail'),

  UPDATE_BY_ID_POSTS: type('[User] updateByIdPosts'),
  UPDATE_BY_ID_POSTS_SUCCESS: type('[User] updateByIdPosts success'),
  UPDATE_BY_ID_POSTS_FAIL: type('[User] updateByIdPosts fail'),

  FIND_BY_ID_SHARES: type('[User] findByIdShares'),
  FIND_BY_ID_SHARES_SUCCESS: type('[User] findByIdShares success'),
  FIND_BY_ID_SHARES_FAIL: type('[User] findByIdShares fail'),

  LINK_SHARES: type('[User] linkShares'),
  LINK_SHARES_SUCCESS: type('[User] linkShares success'),
  LINK_SHARES_FAIL: type('[User] linkShares fail'),

  UNLINK_SHARES: type('[User] unlinkShares'),
  UNLINK_SHARES_SUCCESS: type('[User] unlinkShares success'),
  UNLINK_SHARES_FAIL: type('[User] unlinkShares fail'),

  FIND_BY_ID_REPORTS: type('[User] findByIdReports'),
  FIND_BY_ID_REPORTS_SUCCESS: type('[User] findByIdReports success'),
  FIND_BY_ID_REPORTS_FAIL: type('[User] findByIdReports fail'),

  DESTROY_BY_ID_REPORTS: type('[User] destroyByIdReports'),
  DESTROY_BY_ID_REPORTS_SUCCESS: type('[User] destroyByIdReports success'),
  DESTROY_BY_ID_REPORTS_FAIL: type('[User] destroyByIdReports fail'),

  UPDATE_BY_ID_REPORTS: type('[User] updateByIdReports'),
  UPDATE_BY_ID_REPORTS_SUCCESS: type('[User] updateByIdReports success'),
  UPDATE_BY_ID_REPORTS_FAIL: type('[User] updateByIdReports fail'),

  FIND_BY_ID_SHOPPINGCART: type('[User] findByIdShoppingCart'),
  FIND_BY_ID_SHOPPINGCART_SUCCESS: type('[User] findByIdShoppingCart success'),
  FIND_BY_ID_SHOPPINGCART_FAIL: type('[User] findByIdShoppingCart fail'),

  LINK_SHOPPINGCART: type('[User] linkShoppingCart'),
  LINK_SHOPPINGCART_SUCCESS: type('[User] linkShoppingCart success'),
  LINK_SHOPPINGCART_FAIL: type('[User] linkShoppingCart fail'),

  UNLINK_SHOPPINGCART: type('[User] unlinkShoppingCart'),
  UNLINK_SHOPPINGCART_SUCCESS: type('[User] unlinkShoppingCart success'),
  UNLINK_SHOPPINGCART_FAIL: type('[User] unlinkShoppingCart fail'),

  FIND_BY_ID_WISHLIST: type('[User] findByIdWishList'),
  FIND_BY_ID_WISHLIST_SUCCESS: type('[User] findByIdWishList success'),
  FIND_BY_ID_WISHLIST_FAIL: type('[User] findByIdWishList fail'),

  LINK_WISHLIST: type('[User] linkWishList'),
  LINK_WISHLIST_SUCCESS: type('[User] linkWishList success'),
  LINK_WISHLIST_FAIL: type('[User] linkWishList fail'),

  UNLINK_WISHLIST: type('[User] unlinkWishList'),
  UNLINK_WISHLIST_SUCCESS: type('[User] unlinkWishList success'),
  UNLINK_WISHLIST_FAIL: type('[User] unlinkWishList fail'),

  FIND_BY_ID_REVIEWS: type('[User] findByIdReviews'),
  FIND_BY_ID_REVIEWS_SUCCESS: type('[User] findByIdReviews success'),
  FIND_BY_ID_REVIEWS_FAIL: type('[User] findByIdReviews fail'),

  DESTROY_BY_ID_REVIEWS: type('[User] destroyByIdReviews'),
  DESTROY_BY_ID_REVIEWS_SUCCESS: type('[User] destroyByIdReviews success'),
  DESTROY_BY_ID_REVIEWS_FAIL: type('[User] destroyByIdReviews fail'),

  UPDATE_BY_ID_REVIEWS: type('[User] updateByIdReviews'),
  UPDATE_BY_ID_REVIEWS_SUCCESS: type('[User] updateByIdReviews success'),
  UPDATE_BY_ID_REVIEWS_FAIL: type('[User] updateByIdReviews fail'),

  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[User] findByIdOAuthClientApplications'),
  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] findByIdOAuthClientApplications success'),
  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] findByIdOAuthClientApplications fail'),

  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[User] destroyByIdOAuthClientApplications'),
  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] destroyByIdOAuthClientApplications success'),
  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] destroyByIdOAuthClientApplications fail'),

  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[User] updateByIdOAuthClientApplications'),
  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] updateByIdOAuthClientApplications success'),
  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] updateByIdOAuthClientApplications fail'),

  GET_EMAILS: type('[User] getEmails'),
  GET_EMAILS_SUCCESS: type('[User] getEmails success'),
  GET_EMAILS_FAIL: type('[User] getEmails fail'),

  CREATE_EMAILS: type('[User] createEmails'),
  CREATE_EMAILS_SUCCESS: type('[User] createEmails success'),
  CREATE_EMAILS_FAIL: type('[User] createEmails fail'),

  DELETE_EMAILS: type('[User] deleteEmails'),
  DELETE_EMAILS_SUCCESS: type('[User] deleteEmails success'),
  DELETE_EMAILS_FAIL: type('[User] deleteEmails fail'),

  GET_PHONES: type('[User] getPhones'),
  GET_PHONES_SUCCESS: type('[User] getPhones success'),
  GET_PHONES_FAIL: type('[User] getPhones fail'),

  CREATE_PHONES: type('[User] createPhones'),
  CREATE_PHONES_SUCCESS: type('[User] createPhones success'),
  CREATE_PHONES_FAIL: type('[User] createPhones fail'),

  DELETE_PHONES: type('[User] deletePhones'),
  DELETE_PHONES_SUCCESS: type('[User] deletePhones success'),
  DELETE_PHONES_FAIL: type('[User] deletePhones fail'),

  GET_STRIPESOURCES: type('[User] getStripeSources'),
  GET_STRIPESOURCES_SUCCESS: type('[User] getStripeSources success'),
  GET_STRIPESOURCES_FAIL: type('[User] getStripeSources fail'),

  CREATE_STRIPESOURCES: type('[User] createStripeSources'),
  CREATE_STRIPESOURCES_SUCCESS: type('[User] createStripeSources success'),
  CREATE_STRIPESOURCES_FAIL: type('[User] createStripeSources fail'),

  DELETE_STRIPESOURCES: type('[User] deleteStripeSources'),
  DELETE_STRIPESOURCES_SUCCESS: type('[User] deleteStripeSources success'),
  DELETE_STRIPESOURCES_FAIL: type('[User] deleteStripeSources fail'),

  GET_STRIPECHARGES: type('[User] getStripeCharges'),
  GET_STRIPECHARGES_SUCCESS: type('[User] getStripeCharges success'),
  GET_STRIPECHARGES_FAIL: type('[User] getStripeCharges fail'),

  CREATE_STRIPECHARGES: type('[User] createStripeCharges'),
  CREATE_STRIPECHARGES_SUCCESS: type('[User] createStripeCharges success'),
  CREATE_STRIPECHARGES_FAIL: type('[User] createStripeCharges fail'),

  DELETE_STRIPECHARGES: type('[User] deleteStripeCharges'),
  DELETE_STRIPECHARGES_SUCCESS: type('[User] deleteStripeCharges success'),
  DELETE_STRIPECHARGES_FAIL: type('[User] deleteStripeCharges fail'),

  GET_IDENTITIES: type('[User] getIdentities'),
  GET_IDENTITIES_SUCCESS: type('[User] getIdentities success'),
  GET_IDENTITIES_FAIL: type('[User] getIdentities fail'),

  CREATE_IDENTITIES: type('[User] createIdentities'),
  CREATE_IDENTITIES_SUCCESS: type('[User] createIdentities success'),
  CREATE_IDENTITIES_FAIL: type('[User] createIdentities fail'),

  DELETE_IDENTITIES: type('[User] deleteIdentities'),
  DELETE_IDENTITIES_SUCCESS: type('[User] deleteIdentities success'),
  DELETE_IDENTITIES_FAIL: type('[User] deleteIdentities fail'),

  GET_CREDENTIALS: type('[User] getCredentials'),
  GET_CREDENTIALS_SUCCESS: type('[User] getCredentials success'),
  GET_CREDENTIALS_FAIL: type('[User] getCredentials fail'),

  CREATE_CREDENTIALS: type('[User] createCredentials'),
  CREATE_CREDENTIALS_SUCCESS: type('[User] createCredentials success'),
  CREATE_CREDENTIALS_FAIL: type('[User] createCredentials fail'),

  DELETE_CREDENTIALS: type('[User] deleteCredentials'),
  DELETE_CREDENTIALS_SUCCESS: type('[User] deleteCredentials success'),
  DELETE_CREDENTIALS_FAIL: type('[User] deleteCredentials fail'),

  GET_ACCESSTOKENS: type('[User] getAccessTokens'),
  GET_ACCESSTOKENS_SUCCESS: type('[User] getAccessTokens success'),
  GET_ACCESSTOKENS_FAIL: type('[User] getAccessTokens fail'),

  CREATE_ACCESSTOKENS: type('[User] createAccessTokens'),
  CREATE_ACCESSTOKENS_SUCCESS: type('[User] createAccessTokens success'),
  CREATE_ACCESSTOKENS_FAIL: type('[User] createAccessTokens fail'),

  DELETE_ACCESSTOKENS: type('[User] deleteAccessTokens'),
  DELETE_ACCESSTOKENS_SUCCESS: type('[User] deleteAccessTokens success'),
  DELETE_ACCESSTOKENS_FAIL: type('[User] deleteAccessTokens fail'),

  GET_DEVICES: type('[User] getDevices'),
  GET_DEVICES_SUCCESS: type('[User] getDevices success'),
  GET_DEVICES_FAIL: type('[User] getDevices fail'),

  CREATE_DEVICES: type('[User] createDevices'),
  CREATE_DEVICES_SUCCESS: type('[User] createDevices success'),
  CREATE_DEVICES_FAIL: type('[User] createDevices fail'),

  DELETE_DEVICES: type('[User] deleteDevices'),
  DELETE_DEVICES_SUCCESS: type('[User] deleteDevices success'),
  DELETE_DEVICES_FAIL: type('[User] deleteDevices fail'),

  GET_NOTIFICATIONS: type('[User] getNotifications'),
  GET_NOTIFICATIONS_SUCCESS: type('[User] getNotifications success'),
  GET_NOTIFICATIONS_FAIL: type('[User] getNotifications fail'),

  CREATE_NOTIFICATIONS: type('[User] createNotifications'),
  CREATE_NOTIFICATIONS_SUCCESS: type('[User] createNotifications success'),
  CREATE_NOTIFICATIONS_FAIL: type('[User] createNotifications fail'),

  DELETE_NOTIFICATIONS: type('[User] deleteNotifications'),
  DELETE_NOTIFICATIONS_SUCCESS: type('[User] deleteNotifications success'),
  DELETE_NOTIFICATIONS_FAIL: type('[User] deleteNotifications fail'),

  GET_ROLES: type('[User] getRoles'),
  GET_ROLES_SUCCESS: type('[User] getRoles success'),
  GET_ROLES_FAIL: type('[User] getRoles fail'),

  CREATE_ROLES: type('[User] createRoles'),
  CREATE_ROLES_SUCCESS: type('[User] createRoles success'),
  CREATE_ROLES_FAIL: type('[User] createRoles fail'),

  DELETE_ROLES: type('[User] deleteRoles'),
  DELETE_ROLES_SUCCESS: type('[User] deleteRoles success'),
  DELETE_ROLES_FAIL: type('[User] deleteRoles fail'),

  GET_ORGANIZATIONS: type('[User] getOrganizations'),
  GET_ORGANIZATIONS_SUCCESS: type('[User] getOrganizations success'),
  GET_ORGANIZATIONS_FAIL: type('[User] getOrganizations fail'),

  CREATE_ORGANIZATIONS: type('[User] createOrganizations'),
  CREATE_ORGANIZATIONS_SUCCESS: type('[User] createOrganizations success'),
  CREATE_ORGANIZATIONS_FAIL: type('[User] createOrganizations fail'),

  DELETE_ORGANIZATIONS: type('[User] deleteOrganizations'),
  DELETE_ORGANIZATIONS_SUCCESS: type('[User] deleteOrganizations success'),
  DELETE_ORGANIZATIONS_FAIL: type('[User] deleteOrganizations fail'),

  GET_SUPPORTTICKETS: type('[User] getSupportTickets'),
  GET_SUPPORTTICKETS_SUCCESS: type('[User] getSupportTickets success'),
  GET_SUPPORTTICKETS_FAIL: type('[User] getSupportTickets fail'),

  CREATE_SUPPORTTICKETS: type('[User] createSupportTickets'),
  CREATE_SUPPORTTICKETS_SUCCESS: type('[User] createSupportTickets success'),
  CREATE_SUPPORTTICKETS_FAIL: type('[User] createSupportTickets fail'),

  DELETE_SUPPORTTICKETS: type('[User] deleteSupportTickets'),
  DELETE_SUPPORTTICKETS_SUCCESS: type('[User] deleteSupportTickets success'),
  DELETE_SUPPORTTICKETS_FAIL: type('[User] deleteSupportTickets fail'),

  GET_INVITES: type('[User] getInvites'),
  GET_INVITES_SUCCESS: type('[User] getInvites success'),
  GET_INVITES_FAIL: type('[User] getInvites fail'),

  CREATE_INVITES: type('[User] createInvites'),
  CREATE_INVITES_SUCCESS: type('[User] createInvites success'),
  CREATE_INVITES_FAIL: type('[User] createInvites fail'),

  GET_FOLLOWERS: type('[User] getFollowers'),
  GET_FOLLOWERS_SUCCESS: type('[User] getFollowers success'),
  GET_FOLLOWERS_FAIL: type('[User] getFollowers fail'),

  GET_FOLLOWING: type('[User] getFollowing'),
  GET_FOLLOWING_SUCCESS: type('[User] getFollowing success'),
  GET_FOLLOWING_FAIL: type('[User] getFollowing fail'),

  GET_POSTS: type('[User] getPosts'),
  GET_POSTS_SUCCESS: type('[User] getPosts success'),
  GET_POSTS_FAIL: type('[User] getPosts fail'),

  CREATE_POSTS: type('[User] createPosts'),
  CREATE_POSTS_SUCCESS: type('[User] createPosts success'),
  CREATE_POSTS_FAIL: type('[User] createPosts fail'),

  DELETE_POSTS: type('[User] deletePosts'),
  DELETE_POSTS_SUCCESS: type('[User] deletePosts success'),
  DELETE_POSTS_FAIL: type('[User] deletePosts fail'),

  GET_SHARES: type('[User] getShares'),
  GET_SHARES_SUCCESS: type('[User] getShares success'),
  GET_SHARES_FAIL: type('[User] getShares fail'),

  GET_REPORTS: type('[User] getReports'),
  GET_REPORTS_SUCCESS: type('[User] getReports success'),
  GET_REPORTS_FAIL: type('[User] getReports fail'),

  CREATE_REPORTS: type('[User] createReports'),
  CREATE_REPORTS_SUCCESS: type('[User] createReports success'),
  CREATE_REPORTS_FAIL: type('[User] createReports fail'),

  DELETE_REPORTS: type('[User] deleteReports'),
  DELETE_REPORTS_SUCCESS: type('[User] deleteReports success'),
  DELETE_REPORTS_FAIL: type('[User] deleteReports fail'),

  GET_SHOPPINGCART: type('[User] getShoppingCart'),
  GET_SHOPPINGCART_SUCCESS: type('[User] getShoppingCart success'),
  GET_SHOPPINGCART_FAIL: type('[User] getShoppingCart fail'),

  GET_WISHLIST: type('[User] getWishList'),
  GET_WISHLIST_SUCCESS: type('[User] getWishList success'),
  GET_WISHLIST_FAIL: type('[User] getWishList fail'),

  GET_REVIEWS: type('[User] getReviews'),
  GET_REVIEWS_SUCCESS: type('[User] getReviews success'),
  GET_REVIEWS_FAIL: type('[User] getReviews fail'),

  CREATE_REVIEWS: type('[User] createReviews'),
  CREATE_REVIEWS_SUCCESS: type('[User] createReviews success'),
  CREATE_REVIEWS_FAIL: type('[User] createReviews fail'),

  DELETE_REVIEWS: type('[User] deleteReviews'),
  DELETE_REVIEWS_SUCCESS: type('[User] deleteReviews success'),
  DELETE_REVIEWS_FAIL: type('[User] deleteReviews fail'),

  GET_OAUTHCLIENTAPPLICATIONS: type('[User] getOAuthClientApplications'),
  GET_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] getOAuthClientApplications success'),
  GET_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] getOAuthClientApplications fail'),

  CREATE_OAUTHCLIENTAPPLICATIONS: type('[User] createOAuthClientApplications'),
  CREATE_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] createOAuthClientApplications success'),
  CREATE_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] createOAuthClientApplications fail'),

  DELETE_OAUTHCLIENTAPPLICATIONS: type('[User] deleteOAuthClientApplications'),
  DELETE_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] deleteOAuthClientApplications success'),
  DELETE_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] deleteOAuthClientApplications fail'),

  LOGIN: type('[User] login'),
  LOGIN_SUCCESS: type('[User] login success'),
  LOGIN_FAIL: type('[User] login fail'),

  LOGOUT: type('[User] logout'),
  LOGOUT_SUCCESS: type('[User] logout success'),
  LOGOUT_FAIL: type('[User] logout fail'),

  VERIFY: type('[User] verify'),
  VERIFY_SUCCESS: type('[User] verify success'),
  VERIFY_FAIL: type('[User] verify fail'),

  CONFIRM: type('[User] confirm'),
  CONFIRM_SUCCESS: type('[User] confirm success'),
  CONFIRM_FAIL: type('[User] confirm fail'),

  RESET_PASSWORD: type('[User] resetPassword'),
  RESET_PASSWORD_SUCCESS: type('[User] resetPassword success'),
  RESET_PASSWORD_FAIL: type('[User] resetPassword fail'),

  CHANGE_PASSWORD: type('[User] changePassword'),
  CHANGE_PASSWORD_SUCCESS: type('[User] changePassword success'),
  CHANGE_PASSWORD_FAIL: type('[User] changePassword fail'),

  SET_PASSWORD: type('[User] setPassword'),
  SET_PASSWORD_SUCCESS: type('[User] setPassword success'),
  SET_PASSWORD_FAIL: type('[User] setPassword fail'),

  SET_PRIMARY_EMAIL: type('[User] setPrimaryEmail'),
  SET_PRIMARY_EMAIL_SUCCESS: type('[User] setPrimaryEmail success'),
  SET_PRIMARY_EMAIL_FAIL: type('[User] setPrimaryEmail fail'),

  SET_PRIMARY_PHONE: type('[User] setPrimaryPhone'),
  SET_PRIMARY_PHONE_SUCCESS: type('[User] setPrimaryPhone success'),
  SET_PRIMARY_PHONE_FAIL: type('[User] setPrimaryPhone fail'),

  S3_P_U_T_SIGNED_URL: type('[User] s3PUTSignedUrl'),
  S3_P_U_T_SIGNED_URL_SUCCESS: type('[User] s3PUTSignedUrl success'),
  S3_P_U_T_SIGNED_URL_FAIL: type('[User] s3PUTSignedUrl fail'),

  S3_G_E_T_SIGNED_URL: type('[User] s3GETSignedUrl'),
  S3_G_E_T_SIGNED_URL_SUCCESS: type('[User] s3GETSignedUrl success'),
  S3_G_E_T_SIGNED_URL_FAIL: type('[User] s3GETSignedUrl fail'),

  ACTIVATE: type('[User] activate'),
  ACTIVATE_SUCCESS: type('[User] activate success'),
  ACTIVATE_FAIL: type('[User] activate fail'),

  ADMIN_INVITE: type('[User] adminInvite'),
  ADMIN_INVITE_SUCCESS: type('[User] adminInvite success'),
  ADMIN_INVITE_FAIL: type('[User] adminInvite fail'),

  CREATE_MANY_STRIPECUSTOMER: type('[User] createManyStripeCustomer'),
  CREATE_MANY_STRIPECUSTOMER_SUCCESS: type('[User] createManyStripeCustomer success'),
  CREATE_MANY_STRIPECUSTOMER_FAIL: type('[User] createManyStripeCustomer fail'),

  CREATE_MANY_S3PHOTO: type('[User] createManyS3Photo'),
  CREATE_MANY_S3PHOTO_SUCCESS: type('[User] createManyS3Photo success'),
  CREATE_MANY_S3PHOTO_FAIL: type('[User] createManyS3Photo fail'),

  CREATE_MANY_TWOFACTORAUTHENTICATION: type('[User] createManyTwoFactorAuthentication'),
  CREATE_MANY_TWOFACTORAUTHENTICATION_SUCCESS: type('[User] createManyTwoFactorAuthentication success'),
  CREATE_MANY_TWOFACTORAUTHENTICATION_FAIL: type('[User] createManyTwoFactorAuthentication fail'),

  CREATE_MANY_EMAILS: type('[User] createManyEmails'),
  CREATE_MANY_EMAILS_SUCCESS: type('[User] createManyEmails success'),
  CREATE_MANY_EMAILS_FAIL: type('[User] createManyEmails fail'),

  CREATE_MANY_PHONES: type('[User] createManyPhones'),
  CREATE_MANY_PHONES_SUCCESS: type('[User] createManyPhones success'),
  CREATE_MANY_PHONES_FAIL: type('[User] createManyPhones fail'),

  CREATE_MANY_STRIPESOURCES: type('[User] createManyStripeSources'),
  CREATE_MANY_STRIPESOURCES_SUCCESS: type('[User] createManyStripeSources success'),
  CREATE_MANY_STRIPESOURCES_FAIL: type('[User] createManyStripeSources fail'),

  CREATE_MANY_STRIPECHARGES: type('[User] createManyStripeCharges'),
  CREATE_MANY_STRIPECHARGES_SUCCESS: type('[User] createManyStripeCharges success'),
  CREATE_MANY_STRIPECHARGES_FAIL: type('[User] createManyStripeCharges fail'),

  CREATE_MANY_IDENTITIES: type('[User] createManyIdentities'),
  CREATE_MANY_IDENTITIES_SUCCESS: type('[User] createManyIdentities success'),
  CREATE_MANY_IDENTITIES_FAIL: type('[User] createManyIdentities fail'),

  CREATE_MANY_CREDENTIALS: type('[User] createManyCredentials'),
  CREATE_MANY_CREDENTIALS_SUCCESS: type('[User] createManyCredentials success'),
  CREATE_MANY_CREDENTIALS_FAIL: type('[User] createManyCredentials fail'),

  CREATE_MANY_ACCESSTOKENS: type('[User] createManyAccessTokens'),
  CREATE_MANY_ACCESSTOKENS_SUCCESS: type('[User] createManyAccessTokens success'),
  CREATE_MANY_ACCESSTOKENS_FAIL: type('[User] createManyAccessTokens fail'),

  CREATE_MANY_DEVICES: type('[User] createManyDevices'),
  CREATE_MANY_DEVICES_SUCCESS: type('[User] createManyDevices success'),
  CREATE_MANY_DEVICES_FAIL: type('[User] createManyDevices fail'),

  CREATE_MANY_NOTIFICATIONS: type('[User] createManyNotifications'),
  CREATE_MANY_NOTIFICATIONS_SUCCESS: type('[User] createManyNotifications success'),
  CREATE_MANY_NOTIFICATIONS_FAIL: type('[User] createManyNotifications fail'),

  CREATE_MANY_ROLES: type('[User] createManyRoles'),
  CREATE_MANY_ROLES_SUCCESS: type('[User] createManyRoles success'),
  CREATE_MANY_ROLES_FAIL: type('[User] createManyRoles fail'),

  CREATE_MANY_ORGANIZATIONS: type('[User] createManyOrganizations'),
  CREATE_MANY_ORGANIZATIONS_SUCCESS: type('[User] createManyOrganizations success'),
  CREATE_MANY_ORGANIZATIONS_FAIL: type('[User] createManyOrganizations fail'),

  CREATE_MANY_SUPPORTTICKETS: type('[User] createManySupportTickets'),
  CREATE_MANY_SUPPORTTICKETS_SUCCESS: type('[User] createManySupportTickets success'),
  CREATE_MANY_SUPPORTTICKETS_FAIL: type('[User] createManySupportTickets fail'),

  CREATE_MANY_INVITES: type('[User] createManyInvites'),
  CREATE_MANY_INVITES_SUCCESS: type('[User] createManyInvites success'),
  CREATE_MANY_INVITES_FAIL: type('[User] createManyInvites fail'),

  CREATE_MANY_POSTS: type('[User] createManyPosts'),
  CREATE_MANY_POSTS_SUCCESS: type('[User] createManyPosts success'),
  CREATE_MANY_POSTS_FAIL: type('[User] createManyPosts fail'),

  CREATE_MANY_REPORTS: type('[User] createManyReports'),
  CREATE_MANY_REPORTS_SUCCESS: type('[User] createManyReports success'),
  CREATE_MANY_REPORTS_FAIL: type('[User] createManyReports fail'),

  CREATE_MANY_REVIEWS: type('[User] createManyReviews'),
  CREATE_MANY_REVIEWS_SUCCESS: type('[User] createManyReviews success'),
  CREATE_MANY_REVIEWS_FAIL: type('[User] createManyReviews fail'),

  CREATE_MANY_OAUTHCLIENTAPPLICATIONS: type('[User] createManyOAuthClientApplications'),
  CREATE_MANY_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] createManyOAuthClientApplications success'),
  CREATE_MANY_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] createManyOAuthClientApplications fail'),

}, {
  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * User specific action types
   */
  SIGNUP: type('[User] Signup'),
  SIGNUP_SUCCESS: type('[User] Signup success'),
  SIGNUP_FAIL: type('[User] Signup fail'),
});
export const UserActions =
Object.assign(BaseLoopbackActionsFactory<User>(UserActionTypes), {

  /**
   * sendVerificationCode Action.
   * Trigger user's email or phone verification with
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   *  - `data` – `{object}` - email or phone id
   * @param {any} meta (optional).
   * 
   */
  sendVerificationCode: class implements Action {
    public readonly type = UserActionTypes.SEND_VERIFICATION_CODE;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * sendVerificationCodeSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  sendVerificationCodeSuccess: class implements Action {
    public readonly type = UserActionTypes.SEND_VERIFICATION_CODE_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * sendVerificationCodeFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  sendVerificationCodeFail: class implements Action {
    public readonly type = UserActionTypes.SEND_VERIFICATION_CODE_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * isAdmin Action.
   * Check if user is Admin
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  isAdmin: class implements Action {
    public readonly type = UserActionTypes.IS_ADMIN;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * isAdminSuccess Action.
   * 
   * @param {any} id 
   * Data properties:
   *
   *  - `isAdmin` – `{boolean}` - 
   * @param {any} meta (optional).
   * 
   */
  isAdminSuccess: class implements Action {
    public readonly type = UserActionTypes.IS_ADMIN_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * isAdminFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  isAdminFail: class implements Action {
    public readonly type = UserActionTypes.IS_ADMIN_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * verifyTwoFactorAuthentication Action.
   * Verify a two-factor-authentication token
   *
   * @param {any} id user id
   * @param {string} token 
   * @param {any} meta (optional).
   * 
   */
  verifyTwoFactorAuthentication: class implements Action {
    public readonly type = UserActionTypes.VERIFY_TWO_FACTOR_AUTHENTICATION;
      public payload: {id: any, token: any};

    constructor(id: any, token: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, token};
    }
  },
  /**
   * verifyTwoFactorAuthenticationSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  verifyTwoFactorAuthenticationSuccess: class implements Action {
    public readonly type = UserActionTypes.VERIFY_TWO_FACTOR_AUTHENTICATION_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * verifyTwoFactorAuthenticationFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  verifyTwoFactorAuthenticationFail: class implements Action {
    public readonly type = UserActionTypes.VERIFY_TWO_FACTOR_AUTHENTICATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdEmails Action.
   * Find a related item by id for emails.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for emails
   * @param {any} meta (optional).
   * 
   */
  findByIdEmails: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_EMAILS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdEmailsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdEmailsSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_EMAILS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdEmailsFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdEmails Action.
   * Delete a related item by id for emails.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for emails
   * @param {any} meta (optional).
   * 
   */
  destroyByIdEmails: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_EMAILS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdEmailsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdEmailsSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_EMAILS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdEmailsFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdEmails Action.
   * Update a related item by id for emails.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for emails
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdEmails: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_EMAILS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdEmailsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdEmailsSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_EMAILS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdEmailsFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdPhones Action.
   * Find a related item by id for phones.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for phones
   * @param {any} meta (optional).
   * 
   */
  findByIdPhones: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_PHONES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdPhonesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdPhonesSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_PHONES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdPhonesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdPhonesFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_PHONES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdPhones Action.
   * Delete a related item by id for phones.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for phones
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPhones: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_PHONES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdPhonesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPhonesSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_PHONES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdPhonesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPhonesFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_PHONES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdPhones Action.
   * Update a related item by id for phones.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for phones
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdPhones: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_PHONES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdPhonesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdPhonesSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_PHONES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdPhonesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdPhonesFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_PHONES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getStripeCustomer Action.
   * Fetches hasOne relation stripeCustomer.
   *
   * @param {any} id user id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getStripeCustomer: class implements Action {
    public readonly type = UserActionTypes.GET_STRIPECUSTOMER;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getStripeCustomerSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getStripeCustomerSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_STRIPECUSTOMER_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getStripeCustomerFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getStripeCustomerFail: class implements Action {
    public readonly type = UserActionTypes.GET_STRIPECUSTOMER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createStripeCustomer Action.
   * Creates a new instance in stripeCustomer of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createStripeCustomer: class implements Action {
    public readonly type = UserActionTypes.CREATE_STRIPECUSTOMER;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createStripeCustomerSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createStripeCustomerSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_STRIPECUSTOMER_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createStripeCustomerFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createStripeCustomerFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_STRIPECUSTOMER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateStripeCustomer Action.
   * Update stripeCustomer of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateStripeCustomer: class implements Action {
    public readonly type = UserActionTypes.UPDATE_STRIPECUSTOMER;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateStripeCustomerSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateStripeCustomerSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_STRIPECUSTOMER_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateStripeCustomerFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateStripeCustomerFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_STRIPECUSTOMER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyStripeCustomer Action.
   * Deletes stripeCustomer of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  destroyStripeCustomer: class implements Action {
    public readonly type = UserActionTypes.DESTROY_STRIPECUSTOMER;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * destroyStripeCustomerSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyStripeCustomerSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_STRIPECUSTOMER_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyStripeCustomerFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyStripeCustomerFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_STRIPECUSTOMER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdStripeSources Action.
   * Find a related item by id for stripeSources.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for stripeSources
   * @param {any} meta (optional).
   * 
   */
  findByIdStripeSources: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_STRIPESOURCES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdStripeSourcesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdStripeSourcesSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_STRIPESOURCES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdStripeSourcesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdStripeSourcesFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_STRIPESOURCES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdStripeSources Action.
   * Delete a related item by id for stripeSources.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for stripeSources
   * @param {any} meta (optional).
   * 
   */
  destroyByIdStripeSources: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_STRIPESOURCES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdStripeSourcesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdStripeSourcesSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_STRIPESOURCES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdStripeSourcesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdStripeSourcesFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_STRIPESOURCES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdStripeSources Action.
   * Update a related item by id for stripeSources.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for stripeSources
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdStripeSources: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_STRIPESOURCES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdStripeSourcesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdStripeSourcesSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_STRIPESOURCES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdStripeSourcesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdStripeSourcesFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_STRIPESOURCES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdStripeCharges Action.
   * Find a related item by id for stripeCharges.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for stripeCharges
   * @param {any} meta (optional).
   * 
   */
  findByIdStripeCharges: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_STRIPECHARGES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdStripeChargesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdStripeChargesSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_STRIPECHARGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdStripeChargesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdStripeChargesFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_STRIPECHARGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdStripeCharges Action.
   * Delete a related item by id for stripeCharges.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for stripeCharges
   * @param {any} meta (optional).
   * 
   */
  destroyByIdStripeCharges: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_STRIPECHARGES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdStripeChargesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdStripeChargesSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_STRIPECHARGES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdStripeChargesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdStripeChargesFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_STRIPECHARGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdStripeCharges Action.
   * Update a related item by id for stripeCharges.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for stripeCharges
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdStripeCharges: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_STRIPECHARGES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdStripeChargesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdStripeChargesSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_STRIPECHARGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdStripeChargesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdStripeChargesFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_STRIPECHARGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdIdentities Action.
   * Find a related item by id for identities.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for identities
   * @param {any} meta (optional).
   * 
   */
  findByIdIdentities: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_IDENTITIES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdIdentitiesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdIdentitiesSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_IDENTITIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdIdentitiesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdIdentitiesFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_IDENTITIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdIdentities Action.
   * Delete a related item by id for identities.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for identities
   * @param {any} meta (optional).
   * 
   */
  destroyByIdIdentities: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_IDENTITIES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdIdentitiesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdIdentitiesSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_IDENTITIES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdIdentitiesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdIdentitiesFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_IDENTITIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdIdentities Action.
   * Update a related item by id for identities.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for identities
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdIdentities: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_IDENTITIES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdIdentitiesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdIdentitiesSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_IDENTITIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdIdentitiesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdIdentitiesFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_IDENTITIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdCredentials Action.
   * Find a related item by id for credentials.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for credentials
   * @param {any} meta (optional).
   * 
   */
  findByIdCredentials: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_CREDENTIALS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdCredentialsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdCredentialsSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_CREDENTIALS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdCredentialsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdCredentialsFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_CREDENTIALS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdCredentials Action.
   * Delete a related item by id for credentials.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for credentials
   * @param {any} meta (optional).
   * 
   */
  destroyByIdCredentials: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_CREDENTIALS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdCredentialsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdCredentialsSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_CREDENTIALS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdCredentialsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdCredentialsFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_CREDENTIALS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdCredentials Action.
   * Update a related item by id for credentials.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for credentials
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdCredentials: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_CREDENTIALS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdCredentialsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdCredentialsSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_CREDENTIALS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdCredentialsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdCredentialsFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_CREDENTIALS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdAccessTokens Action.
   * Find a related item by id for accessTokens.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for accessTokens
   * @param {any} meta (optional).
   * 
   */
  findByIdAccessTokens: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ACCESSTOKENS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdAccessTokensSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdAccessTokensSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ACCESSTOKENS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdAccessTokensFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdAccessTokensFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ACCESSTOKENS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdAccessTokens Action.
   * Delete a related item by id for accessTokens.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for accessTokens
   * @param {any} meta (optional).
   * 
   */
  destroyByIdAccessTokens: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ACCESSTOKENS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdAccessTokensSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdAccessTokensSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ACCESSTOKENS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdAccessTokensFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdAccessTokensFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ACCESSTOKENS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdAccessTokens Action.
   * Update a related item by id for accessTokens.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for accessTokens
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdAccessTokens: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ACCESSTOKENS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdAccessTokensSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdAccessTokensSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ACCESSTOKENS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdAccessTokensFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdAccessTokensFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ACCESSTOKENS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdDevices Action.
   * Find a related item by id for devices.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for devices
   * @param {any} meta (optional).
   * 
   */
  findByIdDevices: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_DEVICES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdDevicesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdDevicesSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_DEVICES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdDevicesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdDevicesFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_DEVICES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdDevices Action.
   * Delete a related item by id for devices.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for devices
   * @param {any} meta (optional).
   * 
   */
  destroyByIdDevices: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_DEVICES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdDevicesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdDevicesSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_DEVICES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdDevicesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdDevicesFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_DEVICES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdDevices Action.
   * Update a related item by id for devices.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for devices
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdDevices: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_DEVICES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdDevicesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdDevicesSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_DEVICES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdDevicesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdDevicesFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_DEVICES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdNotifications Action.
   * Find a related item by id for notifications.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for notifications
   * @param {any} meta (optional).
   * 
   */
  findByIdNotifications: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_NOTIFICATIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdNotificationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdNotificationsSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_NOTIFICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdNotificationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdNotificationsFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_NOTIFICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdNotifications Action.
   * Delete a related item by id for notifications.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for notifications
   * @param {any} meta (optional).
   * 
   */
  destroyByIdNotifications: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_NOTIFICATIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdNotificationsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdNotificationsSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_NOTIFICATIONS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdNotificationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdNotificationsFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_NOTIFICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdNotifications Action.
   * Update a related item by id for notifications.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for notifications
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdNotifications: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_NOTIFICATIONS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdNotificationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdNotificationsSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_NOTIFICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdNotificationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdNotificationsFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_NOTIFICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdRoles Action.
   * Find a related item by id for roles.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for roles
   * @param {any} meta (optional).
   * 
   */
  findByIdRoles: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ROLES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdRolesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdRolesSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ROLES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdRolesFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdRoles Action.
   * Delete a related item by id for roles.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for roles
   * @param {any} meta (optional).
   * 
   */
  destroyByIdRoles: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ROLES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdRolesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdRolesSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ROLES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdRolesFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdRoles Action.
   * Update a related item by id for roles.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for roles
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdRoles: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ROLES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdRolesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdRolesSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ROLES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdRolesFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getS3Photo Action.
   * Fetches hasOne relation s3Photo.
   *
   * @param {any} id user id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getS3Photo: class implements Action {
    public readonly type = UserActionTypes.GET_S3PHOTO;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getS3PhotoSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getS3PhotoSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_S3PHOTO_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getS3PhotoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getS3PhotoFail: class implements Action {
    public readonly type = UserActionTypes.GET_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createS3Photo Action.
   * Creates a new instance in s3Photo of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createS3Photo: class implements Action {
    public readonly type = UserActionTypes.CREATE_S3PHOTO;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createS3PhotoSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createS3PhotoSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_S3PHOTO_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createS3PhotoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createS3PhotoFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateS3Photo Action.
   * Update s3Photo of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateS3Photo: class implements Action {
    public readonly type = UserActionTypes.UPDATE_S3PHOTO;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateS3PhotoSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateS3PhotoSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_S3PHOTO_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateS3PhotoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateS3PhotoFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyS3Photo Action.
   * Deletes s3Photo of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  destroyS3Photo: class implements Action {
    public readonly type = UserActionTypes.DESTROY_S3PHOTO;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * destroyS3PhotoSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyS3PhotoSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_S3PHOTO_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyS3PhotoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyS3PhotoFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdOrganizations Action.
   * Find a related item by id for organizations.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for organizations
   * @param {any} meta (optional).
   * 
   */
  findByIdOrganizations: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ORGANIZATIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ORGANIZATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdOrganizations Action.
   * Delete a related item by id for organizations.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for organizations
   * @param {any} meta (optional).
   * 
   */
  destroyByIdOrganizations: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ORGANIZATIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ORGANIZATIONS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdOrganizations Action.
   * Update a related item by id for organizations.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for organizations
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdOrganizations: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ORGANIZATIONS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ORGANIZATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * linkOrganizations Action.
   * Add a related item by id for organizations.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for organizations
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  linkOrganizations: class implements Action {
    public readonly type = UserActionTypes.LINK_ORGANIZATIONS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * linkOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  linkOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.LINK_ORGANIZATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * linkOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  linkOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.LINK_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * unlinkOrganizations Action.
   * Remove the organizations relation to an item by id.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for organizations
   * @param {any} meta (optional).
   * 
   */
  unlinkOrganizations: class implements Action {
    public readonly type = UserActionTypes.UNLINK_ORGANIZATIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  unlinkOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.UNLINK_ORGANIZATIONS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  unlinkOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.UNLINK_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getTwoFactorAuthentication Action.
   * Fetches hasOne relation twoFactorAuthentication.
   *
   * @param {any} id user id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getTwoFactorAuthentication: class implements Action {
    public readonly type = UserActionTypes.GET_TWOFACTORAUTHENTICATION;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getTwoFactorAuthenticationSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getTwoFactorAuthenticationSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_TWOFACTORAUTHENTICATION_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getTwoFactorAuthenticationFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getTwoFactorAuthenticationFail: class implements Action {
    public readonly type = UserActionTypes.GET_TWOFACTORAUTHENTICATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createTwoFactorAuthentication Action.
   * Creates a new instance in twoFactorAuthentication of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createTwoFactorAuthentication: class implements Action {
    public readonly type = UserActionTypes.CREATE_TWOFACTORAUTHENTICATION;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createTwoFactorAuthenticationSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createTwoFactorAuthenticationSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_TWOFACTORAUTHENTICATION_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createTwoFactorAuthenticationFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createTwoFactorAuthenticationFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_TWOFACTORAUTHENTICATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateTwoFactorAuthentication Action.
   * Update twoFactorAuthentication of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateTwoFactorAuthentication: class implements Action {
    public readonly type = UserActionTypes.UPDATE_TWOFACTORAUTHENTICATION;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateTwoFactorAuthenticationSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateTwoFactorAuthenticationSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_TWOFACTORAUTHENTICATION_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateTwoFactorAuthenticationFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateTwoFactorAuthenticationFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_TWOFACTORAUTHENTICATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyTwoFactorAuthentication Action.
   * Deletes twoFactorAuthentication of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  destroyTwoFactorAuthentication: class implements Action {
    public readonly type = UserActionTypes.DESTROY_TWOFACTORAUTHENTICATION;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * destroyTwoFactorAuthenticationSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyTwoFactorAuthenticationSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_TWOFACTORAUTHENTICATION_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyTwoFactorAuthenticationFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyTwoFactorAuthenticationFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_TWOFACTORAUTHENTICATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdSupportTickets Action.
   * Find a related item by id for supportTickets.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for supportTickets
   * @param {any} meta (optional).
   * 
   */
  findByIdSupportTickets: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_SUPPORTTICKETS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdSupportTicketsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdSupportTicketsSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_SUPPORTTICKETS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdSupportTicketsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdSupportTicketsFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_SUPPORTTICKETS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdSupportTickets Action.
   * Delete a related item by id for supportTickets.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for supportTickets
   * @param {any} meta (optional).
   * 
   */
  destroyByIdSupportTickets: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_SUPPORTTICKETS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdSupportTicketsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdSupportTicketsSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_SUPPORTTICKETS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdSupportTicketsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdSupportTicketsFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_SUPPORTTICKETS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdSupportTickets Action.
   * Update a related item by id for supportTickets.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for supportTickets
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdSupportTickets: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_SUPPORTTICKETS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdSupportTicketsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdSupportTicketsSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_SUPPORTTICKETS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdSupportTicketsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdSupportTicketsFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_SUPPORTTICKETS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdInvites Action.
   * Find a related item by id for invites.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for invites
   * @param {any} meta (optional).
   * 
   */
  findByIdInvites: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_INVITES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdInvitesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdInvitesSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_INVITES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdInvitesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdInvitesFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_INVITES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdFollowers Action.
   * Find a related item by id for followers.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for followers
   * @param {any} meta (optional).
   * 
   */
  findByIdFollowers: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_FOLLOWERS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdFollowersSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdFollowersSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_FOLLOWERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdFollowersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdFollowersFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_FOLLOWERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * linkFollowers Action.
   * Add a related item by id for followers.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for followers
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  linkFollowers: class implements Action {
    public readonly type = UserActionTypes.LINK_FOLLOWERS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * linkFollowersSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  linkFollowersSuccess: class implements Action {
    public readonly type = UserActionTypes.LINK_FOLLOWERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * linkFollowersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  linkFollowersFail: class implements Action {
    public readonly type = UserActionTypes.LINK_FOLLOWERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * unlinkFollowers Action.
   * Remove the followers relation to an item by id.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for followers
   * @param {any} meta (optional).
   * 
   */
  unlinkFollowers: class implements Action {
    public readonly type = UserActionTypes.UNLINK_FOLLOWERS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkFollowersSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  unlinkFollowersSuccess: class implements Action {
    public readonly type = UserActionTypes.UNLINK_FOLLOWERS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkFollowersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  unlinkFollowersFail: class implements Action {
    public readonly type = UserActionTypes.UNLINK_FOLLOWERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdFollowing Action.
   * Find a related item by id for following.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for following
   * @param {any} meta (optional).
   * 
   */
  findByIdFollowing: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_FOLLOWING;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdFollowingSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdFollowingSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_FOLLOWING_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdFollowingFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdFollowingFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_FOLLOWING_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * linkFollowing Action.
   * Add a related item by id for following.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for following
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  linkFollowing: class implements Action {
    public readonly type = UserActionTypes.LINK_FOLLOWING;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * linkFollowingSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  linkFollowingSuccess: class implements Action {
    public readonly type = UserActionTypes.LINK_FOLLOWING_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * linkFollowingFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  linkFollowingFail: class implements Action {
    public readonly type = UserActionTypes.LINK_FOLLOWING_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * unlinkFollowing Action.
   * Remove the following relation to an item by id.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for following
   * @param {any} meta (optional).
   * 
   */
  unlinkFollowing: class implements Action {
    public readonly type = UserActionTypes.UNLINK_FOLLOWING;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkFollowingSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  unlinkFollowingSuccess: class implements Action {
    public readonly type = UserActionTypes.UNLINK_FOLLOWING_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkFollowingFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  unlinkFollowingFail: class implements Action {
    public readonly type = UserActionTypes.UNLINK_FOLLOWING_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdPosts Action.
   * Find a related item by id for posts.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for posts
   * @param {any} meta (optional).
   * 
   */
  findByIdPosts: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_POSTS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdPostsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdPostsSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_POSTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdPostsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdPostsFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_POSTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdPosts Action.
   * Delete a related item by id for posts.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for posts
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPosts: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_POSTS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdPostsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPostsSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_POSTS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdPostsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPostsFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_POSTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdPosts Action.
   * Update a related item by id for posts.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for posts
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdPosts: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_POSTS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdPostsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdPostsSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_POSTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdPostsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdPostsFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_POSTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdShares Action.
   * Find a related item by id for shares.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for shares
   * @param {any} meta (optional).
   * 
   */
  findByIdShares: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_SHARES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdSharesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdSharesSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_SHARES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdSharesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdSharesFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_SHARES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * linkShares Action.
   * Add a related item by id for shares.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for shares
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  linkShares: class implements Action {
    public readonly type = UserActionTypes.LINK_SHARES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * linkSharesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  linkSharesSuccess: class implements Action {
    public readonly type = UserActionTypes.LINK_SHARES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * linkSharesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  linkSharesFail: class implements Action {
    public readonly type = UserActionTypes.LINK_SHARES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * unlinkShares Action.
   * Remove the shares relation to an item by id.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for shares
   * @param {any} meta (optional).
   * 
   */
  unlinkShares: class implements Action {
    public readonly type = UserActionTypes.UNLINK_SHARES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkSharesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  unlinkSharesSuccess: class implements Action {
    public readonly type = UserActionTypes.UNLINK_SHARES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkSharesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  unlinkSharesFail: class implements Action {
    public readonly type = UserActionTypes.UNLINK_SHARES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdReports Action.
   * Find a related item by id for reports.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for reports
   * @param {any} meta (optional).
   * 
   */
  findByIdReports: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_REPORTS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdReportsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdReportsSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_REPORTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdReportsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdReportsFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdReports Action.
   * Delete a related item by id for reports.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for reports
   * @param {any} meta (optional).
   * 
   */
  destroyByIdReports: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_REPORTS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdReportsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdReportsSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_REPORTS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdReportsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdReportsFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdReports Action.
   * Update a related item by id for reports.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for reports
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdReports: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_REPORTS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdReportsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdReportsSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_REPORTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdReportsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdReportsFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdShoppingCart Action.
   * Find a related item by id for shoppingCart.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for shoppingCart
   * @param {any} meta (optional).
   * 
   */
  findByIdShoppingCart: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_SHOPPINGCART;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdShoppingCartSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdShoppingCartSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_SHOPPINGCART_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdShoppingCartFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdShoppingCartFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_SHOPPINGCART_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * linkShoppingCart Action.
   * Add a related item by id for shoppingCart.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for shoppingCart
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  linkShoppingCart: class implements Action {
    public readonly type = UserActionTypes.LINK_SHOPPINGCART;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * linkShoppingCartSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  linkShoppingCartSuccess: class implements Action {
    public readonly type = UserActionTypes.LINK_SHOPPINGCART_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * linkShoppingCartFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  linkShoppingCartFail: class implements Action {
    public readonly type = UserActionTypes.LINK_SHOPPINGCART_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * unlinkShoppingCart Action.
   * Remove the shoppingCart relation to an item by id.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for shoppingCart
   * @param {any} meta (optional).
   * 
   */
  unlinkShoppingCart: class implements Action {
    public readonly type = UserActionTypes.UNLINK_SHOPPINGCART;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkShoppingCartSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  unlinkShoppingCartSuccess: class implements Action {
    public readonly type = UserActionTypes.UNLINK_SHOPPINGCART_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkShoppingCartFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  unlinkShoppingCartFail: class implements Action {
    public readonly type = UserActionTypes.UNLINK_SHOPPINGCART_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdWishList Action.
   * Find a related item by id for wishList.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for wishList
   * @param {any} meta (optional).
   * 
   */
  findByIdWishList: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_WISHLIST;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdWishListSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdWishListSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_WISHLIST_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdWishListFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdWishListFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_WISHLIST_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * linkWishList Action.
   * Add a related item by id for wishList.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for wishList
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  linkWishList: class implements Action {
    public readonly type = UserActionTypes.LINK_WISHLIST;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * linkWishListSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  linkWishListSuccess: class implements Action {
    public readonly type = UserActionTypes.LINK_WISHLIST_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * linkWishListFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  linkWishListFail: class implements Action {
    public readonly type = UserActionTypes.LINK_WISHLIST_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * unlinkWishList Action.
   * Remove the wishList relation to an item by id.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for wishList
   * @param {any} meta (optional).
   * 
   */
  unlinkWishList: class implements Action {
    public readonly type = UserActionTypes.UNLINK_WISHLIST;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkWishListSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  unlinkWishListSuccess: class implements Action {
    public readonly type = UserActionTypes.UNLINK_WISHLIST_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkWishListFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  unlinkWishListFail: class implements Action {
    public readonly type = UserActionTypes.UNLINK_WISHLIST_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdReviews Action.
   * Find a related item by id for reviews.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for reviews
   * @param {any} meta (optional).
   * 
   */
  findByIdReviews: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_REVIEWS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdReviewsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdReviewsSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_REVIEWS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdReviewsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdReviewsFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_REVIEWS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdReviews Action.
   * Delete a related item by id for reviews.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for reviews
   * @param {any} meta (optional).
   * 
   */
  destroyByIdReviews: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_REVIEWS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdReviewsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdReviewsSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_REVIEWS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdReviewsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdReviewsFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_REVIEWS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdReviews Action.
   * Update a related item by id for reviews.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for reviews
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdReviews: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_REVIEWS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdReviewsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdReviewsSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_REVIEWS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdReviewsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdReviewsFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_REVIEWS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdOAuthClientApplications Action.
   * Find a related item by id for oAuthClientApplications.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for oAuthClientApplications
   * @param {any} meta (optional).
   * 
   */
  findByIdOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdOAuthClientApplicationsFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdOAuthClientApplications Action.
   * Delete a related item by id for oAuthClientApplications.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for oAuthClientApplications
   * @param {any} meta (optional).
   * 
   */
  destroyByIdOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdOAuthClientApplicationsFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdOAuthClientApplications Action.
   * Update a related item by id for oAuthClientApplications.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for oAuthClientApplications
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdOAuthClientApplicationsFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getEmails Action.
   * Queries emails of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getEmails: class implements Action {
    public readonly type = UserActionTypes.GET_EMAILS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getEmailsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getEmailsSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_EMAILS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getEmailsFail: class implements Action {
    public readonly type = UserActionTypes.GET_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createEmails Action.
   * Creates a new instance in emails of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createEmails: class implements Action {
    public readonly type = UserActionTypes.CREATE_EMAILS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createEmailsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createEmailsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_EMAILS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createEmailsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteEmails Action.
   * Deletes all emails of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteEmails: class implements Action {
    public readonly type = UserActionTypes.DELETE_EMAILS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteEmailsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteEmailsSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_EMAILS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteEmailsFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getPhones Action.
   * Queries phones of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getPhones: class implements Action {
    public readonly type = UserActionTypes.GET_PHONES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getPhonesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getPhonesSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_PHONES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getPhonesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getPhonesFail: class implements Action {
    public readonly type = UserActionTypes.GET_PHONES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createPhones Action.
   * Creates a new instance in phones of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createPhones: class implements Action {
    public readonly type = UserActionTypes.CREATE_PHONES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createPhonesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createPhonesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_PHONES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createPhonesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createPhonesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_PHONES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deletePhones Action.
   * Deletes all phones of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deletePhones: class implements Action {
    public readonly type = UserActionTypes.DELETE_PHONES;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deletePhonesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deletePhonesSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_PHONES_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deletePhonesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deletePhonesFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_PHONES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getStripeSources Action.
   * Queries stripeSources of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getStripeSources: class implements Action {
    public readonly type = UserActionTypes.GET_STRIPESOURCES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getStripeSourcesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getStripeSourcesSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_STRIPESOURCES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getStripeSourcesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getStripeSourcesFail: class implements Action {
    public readonly type = UserActionTypes.GET_STRIPESOURCES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createStripeSources Action.
   * Creates a new instance in stripeSources of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createStripeSources: class implements Action {
    public readonly type = UserActionTypes.CREATE_STRIPESOURCES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createStripeSourcesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createStripeSourcesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_STRIPESOURCES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createStripeSourcesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createStripeSourcesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_STRIPESOURCES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteStripeSources Action.
   * Deletes all stripeSources of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteStripeSources: class implements Action {
    public readonly type = UserActionTypes.DELETE_STRIPESOURCES;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteStripeSourcesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteStripeSourcesSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_STRIPESOURCES_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteStripeSourcesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteStripeSourcesFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_STRIPESOURCES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getStripeCharges Action.
   * Queries stripeCharges of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getStripeCharges: class implements Action {
    public readonly type = UserActionTypes.GET_STRIPECHARGES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getStripeChargesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getStripeChargesSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_STRIPECHARGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getStripeChargesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getStripeChargesFail: class implements Action {
    public readonly type = UserActionTypes.GET_STRIPECHARGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createStripeCharges Action.
   * Creates a new instance in stripeCharges of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createStripeCharges: class implements Action {
    public readonly type = UserActionTypes.CREATE_STRIPECHARGES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createStripeChargesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createStripeChargesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_STRIPECHARGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createStripeChargesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createStripeChargesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_STRIPECHARGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteStripeCharges Action.
   * Deletes all stripeCharges of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteStripeCharges: class implements Action {
    public readonly type = UserActionTypes.DELETE_STRIPECHARGES;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteStripeChargesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteStripeChargesSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_STRIPECHARGES_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteStripeChargesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteStripeChargesFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_STRIPECHARGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getIdentities Action.
   * Queries identities of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getIdentities: class implements Action {
    public readonly type = UserActionTypes.GET_IDENTITIES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getIdentitiesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getIdentitiesSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_IDENTITIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getIdentitiesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getIdentitiesFail: class implements Action {
    public readonly type = UserActionTypes.GET_IDENTITIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createIdentities Action.
   * Creates a new instance in identities of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createIdentities: class implements Action {
    public readonly type = UserActionTypes.CREATE_IDENTITIES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createIdentitiesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createIdentitiesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_IDENTITIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createIdentitiesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createIdentitiesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_IDENTITIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteIdentities Action.
   * Deletes all identities of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteIdentities: class implements Action {
    public readonly type = UserActionTypes.DELETE_IDENTITIES;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteIdentitiesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteIdentitiesSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_IDENTITIES_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteIdentitiesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteIdentitiesFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_IDENTITIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getCredentials Action.
   * Queries credentials of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getCredentials: class implements Action {
    public readonly type = UserActionTypes.GET_CREDENTIALS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getCredentialsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getCredentialsSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_CREDENTIALS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getCredentialsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getCredentialsFail: class implements Action {
    public readonly type = UserActionTypes.GET_CREDENTIALS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createCredentials Action.
   * Creates a new instance in credentials of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createCredentials: class implements Action {
    public readonly type = UserActionTypes.CREATE_CREDENTIALS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createCredentialsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createCredentialsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_CREDENTIALS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createCredentialsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createCredentialsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_CREDENTIALS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteCredentials Action.
   * Deletes all credentials of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteCredentials: class implements Action {
    public readonly type = UserActionTypes.DELETE_CREDENTIALS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteCredentialsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteCredentialsSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_CREDENTIALS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteCredentialsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteCredentialsFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_CREDENTIALS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getAccessTokens Action.
   * Queries accessTokens of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getAccessTokens: class implements Action {
    public readonly type = UserActionTypes.GET_ACCESSTOKENS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getAccessTokensSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getAccessTokensSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_ACCESSTOKENS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getAccessTokensFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getAccessTokensFail: class implements Action {
    public readonly type = UserActionTypes.GET_ACCESSTOKENS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createAccessTokens Action.
   * Creates a new instance in accessTokens of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createAccessTokens: class implements Action {
    public readonly type = UserActionTypes.CREATE_ACCESSTOKENS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createAccessTokensSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createAccessTokensSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_ACCESSTOKENS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createAccessTokensFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createAccessTokensFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_ACCESSTOKENS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteAccessTokens Action.
   * Deletes all accessTokens of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteAccessTokens: class implements Action {
    public readonly type = UserActionTypes.DELETE_ACCESSTOKENS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteAccessTokensSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteAccessTokensSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_ACCESSTOKENS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteAccessTokensFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteAccessTokensFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_ACCESSTOKENS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getDevices Action.
   * Queries devices of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getDevices: class implements Action {
    public readonly type = UserActionTypes.GET_DEVICES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getDevicesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getDevicesSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_DEVICES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getDevicesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getDevicesFail: class implements Action {
    public readonly type = UserActionTypes.GET_DEVICES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createDevices Action.
   * Creates a new instance in devices of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createDevices: class implements Action {
    public readonly type = UserActionTypes.CREATE_DEVICES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createDevicesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createDevicesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_DEVICES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createDevicesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createDevicesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_DEVICES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteDevices Action.
   * Deletes all devices of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteDevices: class implements Action {
    public readonly type = UserActionTypes.DELETE_DEVICES;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteDevicesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteDevicesSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_DEVICES_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteDevicesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteDevicesFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_DEVICES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getNotifications Action.
   * Queries notifications of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getNotifications: class implements Action {
    public readonly type = UserActionTypes.GET_NOTIFICATIONS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getNotificationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getNotificationsSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_NOTIFICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getNotificationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getNotificationsFail: class implements Action {
    public readonly type = UserActionTypes.GET_NOTIFICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createNotifications Action.
   * Creates a new instance in notifications of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createNotifications: class implements Action {
    public readonly type = UserActionTypes.CREATE_NOTIFICATIONS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createNotificationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createNotificationsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_NOTIFICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createNotificationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createNotificationsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_NOTIFICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteNotifications Action.
   * Deletes all notifications of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteNotifications: class implements Action {
    public readonly type = UserActionTypes.DELETE_NOTIFICATIONS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteNotificationsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteNotificationsSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_NOTIFICATIONS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteNotificationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteNotificationsFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_NOTIFICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getRoles Action.
   * Queries roles of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getRoles: class implements Action {
    public readonly type = UserActionTypes.GET_ROLES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getRolesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getRolesSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_ROLES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getRolesFail: class implements Action {
    public readonly type = UserActionTypes.GET_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createRoles Action.
   * Creates a new instance in roles of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createRoles: class implements Action {
    public readonly type = UserActionTypes.CREATE_ROLES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createRolesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createRolesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_ROLES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createRolesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteRoles Action.
   * Deletes all roles of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteRoles: class implements Action {
    public readonly type = UserActionTypes.DELETE_ROLES;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteRolesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteRolesSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_ROLES_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteRolesFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getOrganizations Action.
   * Queries organizations of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getOrganizations: class implements Action {
    public readonly type = UserActionTypes.GET_ORGANIZATIONS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_ORGANIZATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.GET_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createOrganizations Action.
   * Creates a new instance in organizations of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createOrganizations: class implements Action {
    public readonly type = UserActionTypes.CREATE_ORGANIZATIONS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_ORGANIZATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteOrganizations Action.
   * Deletes all organizations of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteOrganizations: class implements Action {
    public readonly type = UserActionTypes.DELETE_ORGANIZATIONS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_ORGANIZATIONS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getSupportTickets Action.
   * Queries supportTickets of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getSupportTickets: class implements Action {
    public readonly type = UserActionTypes.GET_SUPPORTTICKETS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getSupportTicketsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getSupportTicketsSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_SUPPORTTICKETS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getSupportTicketsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getSupportTicketsFail: class implements Action {
    public readonly type = UserActionTypes.GET_SUPPORTTICKETS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createSupportTickets Action.
   * Creates a new instance in supportTickets of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createSupportTickets: class implements Action {
    public readonly type = UserActionTypes.CREATE_SUPPORTTICKETS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createSupportTicketsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createSupportTicketsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_SUPPORTTICKETS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createSupportTicketsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createSupportTicketsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_SUPPORTTICKETS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteSupportTickets Action.
   * Deletes all supportTickets of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteSupportTickets: class implements Action {
    public readonly type = UserActionTypes.DELETE_SUPPORTTICKETS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteSupportTicketsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteSupportTicketsSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_SUPPORTTICKETS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteSupportTicketsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteSupportTicketsFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_SUPPORTTICKETS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getInvites Action.
   * Queries invites of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getInvites: class implements Action {
    public readonly type = UserActionTypes.GET_INVITES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getInvitesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getInvitesSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_INVITES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getInvitesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getInvitesFail: class implements Action {
    public readonly type = UserActionTypes.GET_INVITES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createInvites Action.
   * Creates a new instance in invites of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createInvites: class implements Action {
    public readonly type = UserActionTypes.CREATE_INVITES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createInvitesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createInvitesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_INVITES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createInvitesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createInvitesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_INVITES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getFollowers Action.
   * Queries followers of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getFollowers: class implements Action {
    public readonly type = UserActionTypes.GET_FOLLOWERS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getFollowersSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getFollowersSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_FOLLOWERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getFollowersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getFollowersFail: class implements Action {
    public readonly type = UserActionTypes.GET_FOLLOWERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getFollowing Action.
   * Queries following of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getFollowing: class implements Action {
    public readonly type = UserActionTypes.GET_FOLLOWING;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getFollowingSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getFollowingSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_FOLLOWING_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getFollowingFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getFollowingFail: class implements Action {
    public readonly type = UserActionTypes.GET_FOLLOWING_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getPosts Action.
   * Queries posts of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getPosts: class implements Action {
    public readonly type = UserActionTypes.GET_POSTS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getPostsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getPostsSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_POSTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getPostsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getPostsFail: class implements Action {
    public readonly type = UserActionTypes.GET_POSTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createPosts Action.
   * Creates a new instance in posts of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createPosts: class implements Action {
    public readonly type = UserActionTypes.CREATE_POSTS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createPostsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createPostsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_POSTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createPostsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createPostsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_POSTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deletePosts Action.
   * Deletes all posts of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deletePosts: class implements Action {
    public readonly type = UserActionTypes.DELETE_POSTS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deletePostsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deletePostsSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_POSTS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deletePostsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deletePostsFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_POSTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getShares Action.
   * Queries shares of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getShares: class implements Action {
    public readonly type = UserActionTypes.GET_SHARES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getSharesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getSharesSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_SHARES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getSharesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getSharesFail: class implements Action {
    public readonly type = UserActionTypes.GET_SHARES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getReports Action.
   * Queries reports of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getReports: class implements Action {
    public readonly type = UserActionTypes.GET_REPORTS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getReportsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getReportsSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_REPORTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getReportsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getReportsFail: class implements Action {
    public readonly type = UserActionTypes.GET_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createReports Action.
   * Creates a new instance in reports of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createReports: class implements Action {
    public readonly type = UserActionTypes.CREATE_REPORTS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createReportsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createReportsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_REPORTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createReportsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createReportsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteReports Action.
   * Deletes all reports of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteReports: class implements Action {
    public readonly type = UserActionTypes.DELETE_REPORTS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteReportsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteReportsSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_REPORTS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteReportsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteReportsFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getShoppingCart Action.
   * Queries shoppingCart of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getShoppingCart: class implements Action {
    public readonly type = UserActionTypes.GET_SHOPPINGCART;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getShoppingCartSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getShoppingCartSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_SHOPPINGCART_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getShoppingCartFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getShoppingCartFail: class implements Action {
    public readonly type = UserActionTypes.GET_SHOPPINGCART_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getWishList Action.
   * Queries wishList of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getWishList: class implements Action {
    public readonly type = UserActionTypes.GET_WISHLIST;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getWishListSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getWishListSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_WISHLIST_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getWishListFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getWishListFail: class implements Action {
    public readonly type = UserActionTypes.GET_WISHLIST_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getReviews Action.
   * Queries reviews of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getReviews: class implements Action {
    public readonly type = UserActionTypes.GET_REVIEWS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getReviewsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getReviewsSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_REVIEWS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getReviewsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getReviewsFail: class implements Action {
    public readonly type = UserActionTypes.GET_REVIEWS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createReviews Action.
   * Creates a new instance in reviews of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createReviews: class implements Action {
    public readonly type = UserActionTypes.CREATE_REVIEWS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createReviewsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createReviewsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_REVIEWS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createReviewsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createReviewsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_REVIEWS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteReviews Action.
   * Deletes all reviews of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteReviews: class implements Action {
    public readonly type = UserActionTypes.DELETE_REVIEWS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteReviewsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteReviewsSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_REVIEWS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteReviewsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteReviewsFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_REVIEWS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getOAuthClientApplications Action.
   * Queries oAuthClientApplications of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.GET_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getOAuthClientApplicationsFail: class implements Action {
    public readonly type = UserActionTypes.GET_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createOAuthClientApplications Action.
   * Creates a new instance in oAuthClientApplications of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createOAuthClientApplicationsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteOAuthClientApplications Action.
   * Deletes all oAuthClientApplications of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteOAuthClientApplicationsFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * login Action.
   * Login a user with username/email and password.
   *
   * @param {string} include Related objects to include in the response. See the description of return value for more details.
   *   Default value: `user`.
   *  - `rememberMe` - `boolean` - Whether the authentication credentials
   *     should be remembered in localStorage across app/browser restarts.
   *     Default: `true`.
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  login: class implements Action {
    public readonly type = UserActionTypes.LOGIN;
      public payload: {credentials: any, include: any};

    constructor(credentials: any, include: any = 'user', rememberMe: boolean = true, customHeaders?: Function, public meta?: any) {
      this.payload = {credentials, include};
    }
  },
  /**
   * loginSuccess Action.
   * 
   * @param {any} id 
   * The response body contains properties of the AccessToken created on login.
   * Depending on the value of `include` parameter, the body may contain additional properties:
   * 
   *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
   * 
   *
   * @param {any} meta (optional).
   * 
   */
  loginSuccess: class implements Action {
    public readonly type = UserActionTypes.LOGIN_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * loginFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  loginFail: class implements Action {
    public readonly type = UserActionTypes.LOGIN_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * logout Action.
   * Logout a user with access token.
   *
   * @param {object} data Request data.
   *
   * This method does not accept any data. Supply an empty object.
   * @param {any} meta (optional).
   * 
   */
  logout: class implements Action {
    public readonly type = UserActionTypes.LOGOUT;
      
    constructor(public meta?: any) {}
  },
  /**
   * logoutSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  logoutSuccess: class implements Action {
    public readonly type = UserActionTypes.LOGOUT_SUCCESS;
  
    constructor(public meta?: any) {}
  },
  /**
   * logoutFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  logoutFail: class implements Action {
    public readonly type = UserActionTypes.LOGOUT_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * verify Action.
   * Trigger user's identity verification with configured verifyOptions
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method does not accept any data. Supply an empty object.
   * @param {any} meta (optional).
   * 
   */
  verify: class implements Action {
    public readonly type = UserActionTypes.VERIFY;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * verifySuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  verifySuccess: class implements Action {
    public readonly type = UserActionTypes.VERIFY_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * verifyFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  verifyFail: class implements Action {
    public readonly type = UserActionTypes.VERIFY_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * confirm Action.
   * Confirm a user registration with identity verification token.
   *
   * @param {string} uid 
   * @param {string} token 
   * @param {string} redirect 
   * @param {any} meta (optional).
   * 
   */
  confirm: class implements Action {
    public readonly type = UserActionTypes.CONFIRM;
      public payload: {uid: any, token: any, redirect: any};

    constructor(uid: any, token: any, redirect: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {uid, token, redirect};
    }
  },
  /**
   * confirmSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  confirmSuccess: class implements Action {
    public readonly type = UserActionTypes.CONFIRM_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * confirmFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  confirmFail: class implements Action {
    public readonly type = UserActionTypes.CONFIRM_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * resetPassword Action.
   * Reset password for a user with email.
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  resetPassword: class implements Action {
    public readonly type = UserActionTypes.RESET_PASSWORD;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * resetPasswordSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  resetPasswordSuccess: class implements Action {
    public readonly type = UserActionTypes.RESET_PASSWORD_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * resetPasswordFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  resetPasswordFail: class implements Action {
    public readonly type = UserActionTypes.RESET_PASSWORD_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * changePassword Action.
   * Change a user's password.
   *
   * @param {object} data Request data.
   *
   *  - `oldPassword` – `{string}` - 
   *
   *  - `newPassword` – `{string}` - 
   * @param {any} meta (optional).
   * 
   */
  changePassword: class implements Action {
    public readonly type = UserActionTypes.CHANGE_PASSWORD;
      public payload: {oldPassword: any, newPassword: any};

    constructor(oldPassword: any, newPassword: any, customHeaders?: Function, public meta?: any) {
      this.payload = {oldPassword, newPassword};
    }
  },
  /**
   * changePasswordSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  changePasswordSuccess: class implements Action {
    public readonly type = UserActionTypes.CHANGE_PASSWORD_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * changePasswordFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  changePasswordFail: class implements Action {
    public readonly type = UserActionTypes.CHANGE_PASSWORD_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * setPassword Action.
   * Reset user's password via a password-reset token.
   *
   * @param {object} data Request data.
   *
   *  - `newPassword` – `{string}` - 
   * @param {any} meta (optional).
   * 
   */
  setPassword: class implements Action {
    public readonly type = UserActionTypes.SET_PASSWORD;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * setPasswordSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  setPasswordSuccess: class implements Action {
    public readonly type = UserActionTypes.SET_PASSWORD_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * setPasswordFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  setPasswordFail: class implements Action {
    public readonly type = UserActionTypes.SET_PASSWORD_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * setPrimaryEmail Action.
   * Set the primary email address
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for emailAddress
   * @param {object} data Request data.
   *
   * This method does not accept any data. Supply an empty object.
   * @param {any} meta (optional).
   * 
   */
  setPrimaryEmail: class implements Action {
    public readonly type = UserActionTypes.SET_PRIMARY_EMAIL;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * setPrimaryEmailSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  setPrimaryEmailSuccess: class implements Action {
    public readonly type = UserActionTypes.SET_PRIMARY_EMAIL_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * setPrimaryEmailFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  setPrimaryEmailFail: class implements Action {
    public readonly type = UserActionTypes.SET_PRIMARY_EMAIL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * setPrimaryPhone Action.
   * Set the primary phone number
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for phoneNumber
   * @param {object} data Request data.
   *
   * This method does not accept any data. Supply an empty object.
   * @param {any} meta (optional).
   * 
   */
  setPrimaryPhone: class implements Action {
    public readonly type = UserActionTypes.SET_PRIMARY_PHONE;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * setPrimaryPhoneSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  setPrimaryPhoneSuccess: class implements Action {
    public readonly type = UserActionTypes.SET_PRIMARY_PHONE_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * setPrimaryPhoneFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  setPrimaryPhoneFail: class implements Action {
    public readonly type = UserActionTypes.SET_PRIMARY_PHONE_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3PUTSignedUrl Action.
   * Get a S3 Signed URL for direct file uploads.
   *
   * @param {any} id user id
   * @param {string} key 
   * @param {object} options 
   * @param {any} meta (optional).
   * 
   */
  s3PUTSignedUrl: class implements Action {
    public readonly type = UserActionTypes.S3_P_U_T_SIGNED_URL;
      public payload: {id: any, key: any, options: any};

    constructor(id: any, key: any = {}, options: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, key, options};
    }
  },
  /**
   * s3PUTSignedUrlSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  s3PUTSignedUrlSuccess: class implements Action {
    public readonly type = UserActionTypes.S3_P_U_T_SIGNED_URL_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * s3PUTSignedUrlFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  s3PUTSignedUrlFail: class implements Action {
    public readonly type = UserActionTypes.S3_P_U_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3GETSignedUrl Action.
   * Get a S3 Signed URL for direct file access.
   *
   * @param {any} id user id
   * @param {string} key 
   * @param {any} meta (optional).
   * 
   */
  s3GETSignedUrl: class implements Action {
    public readonly type = UserActionTypes.S3_G_E_T_SIGNED_URL;
      public payload: {id: any, key: any};

    constructor(id: any, key: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, key};
    }
  },
  /**
   * s3GETSignedUrlSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  s3GETSignedUrlSuccess: class implements Action {
    public readonly type = UserActionTypes.S3_G_E_T_SIGNED_URL_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * s3GETSignedUrlFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  s3GETSignedUrlFail: class implements Action {
    public readonly type = UserActionTypes.S3_G_E_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * activate Action.
   * Activate a user registration with invite token.
   *
   * @param {string} uid 
   * @param {string} token 
   * @param {string} redirect 
   * @param {any} meta (optional).
   * 
   */
  activate: class implements Action {
    public readonly type = UserActionTypes.ACTIVATE;
      public payload: {uid: any, token: any, redirect: any};

    constructor(uid: any, token: any, redirect: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {uid, token, redirect};
    }
  },
  /**
   * activateSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  activateSuccess: class implements Action {
    public readonly type = UserActionTypes.ACTIVATE_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * activateFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  activateFail: class implements Action {
    public readonly type = UserActionTypes.ACTIVATE_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * adminInvite Action.
   * Send multiple invites
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   *  - `data` – `{object}` - csv
   * @param {any} meta (optional).
   * 
   */
  adminInvite: class implements Action {
    public readonly type = UserActionTypes.ADMIN_INVITE;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * adminInviteSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  adminInviteSuccess: class implements Action {
    public readonly type = UserActionTypes.ADMIN_INVITE_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * adminInviteFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  adminInviteFail: class implements Action {
    public readonly type = UserActionTypes.ADMIN_INVITE_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyStripeCustomer Action.
   * Creates a new instance in stripeCustomer of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyStripeCustomer: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_STRIPECUSTOMER;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyStripeCustomerSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyStripeCustomerSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_STRIPECUSTOMER_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyStripeCustomerFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyStripeCustomerFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_STRIPECUSTOMER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyS3Photo Action.
   * Creates a new instance in s3Photo of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyS3Photo: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_S3PHOTO;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyS3PhotoSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyS3PhotoSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_S3PHOTO_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyS3PhotoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyS3PhotoFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyTwoFactorAuthentication Action.
   * Creates a new instance in twoFactorAuthentication of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyTwoFactorAuthentication: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_TWOFACTORAUTHENTICATION;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyTwoFactorAuthenticationSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyTwoFactorAuthenticationSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_TWOFACTORAUTHENTICATION_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyTwoFactorAuthenticationFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyTwoFactorAuthenticationFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_TWOFACTORAUTHENTICATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyEmails Action.
   * Creates a new instance in emails of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyEmails: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_EMAILS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyEmailsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyEmailsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_EMAILS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyEmailsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyPhones Action.
   * Creates a new instance in phones of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyPhones: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_PHONES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyPhonesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyPhonesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_PHONES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyPhonesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyPhonesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_PHONES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyStripeSources Action.
   * Creates a new instance in stripeSources of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyStripeSources: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_STRIPESOURCES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyStripeSourcesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyStripeSourcesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_STRIPESOURCES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyStripeSourcesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyStripeSourcesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_STRIPESOURCES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyStripeCharges Action.
   * Creates a new instance in stripeCharges of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyStripeCharges: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_STRIPECHARGES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyStripeChargesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyStripeChargesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_STRIPECHARGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyStripeChargesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyStripeChargesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_STRIPECHARGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyIdentities Action.
   * Creates a new instance in identities of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyIdentities: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_IDENTITIES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyIdentitiesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyIdentitiesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_IDENTITIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyIdentitiesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyIdentitiesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_IDENTITIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyCredentials Action.
   * Creates a new instance in credentials of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyCredentials: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_CREDENTIALS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyCredentialsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyCredentialsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_CREDENTIALS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyCredentialsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyCredentialsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_CREDENTIALS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyAccessTokens Action.
   * Creates a new instance in accessTokens of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyAccessTokens: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ACCESSTOKENS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyAccessTokensSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyAccessTokensSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ACCESSTOKENS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyAccessTokensFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyAccessTokensFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ACCESSTOKENS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyDevices Action.
   * Creates a new instance in devices of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyDevices: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_DEVICES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyDevicesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyDevicesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_DEVICES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyDevicesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyDevicesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_DEVICES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyNotifications Action.
   * Creates a new instance in notifications of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyNotifications: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_NOTIFICATIONS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyNotificationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyNotificationsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_NOTIFICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyNotificationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyNotificationsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_NOTIFICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyRoles Action.
   * Creates a new instance in roles of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyRoles: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ROLES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyRolesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyRolesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ROLES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyRolesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyOrganizations Action.
   * Creates a new instance in organizations of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyOrganizations: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ORGANIZATIONS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ORGANIZATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManySupportTickets Action.
   * Creates a new instance in supportTickets of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManySupportTickets: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_SUPPORTTICKETS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManySupportTicketsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManySupportTicketsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_SUPPORTTICKETS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManySupportTicketsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManySupportTicketsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_SUPPORTTICKETS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyInvites Action.
   * Creates a new instance in invites of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyInvites: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_INVITES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyInvitesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyInvitesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_INVITES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyInvitesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyInvitesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_INVITES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyPosts Action.
   * Creates a new instance in posts of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyPosts: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_POSTS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyPostsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyPostsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_POSTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyPostsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyPostsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_POSTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyReports Action.
   * Creates a new instance in reports of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyReports: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_REPORTS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyReportsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyReportsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_REPORTS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyReportsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyReportsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_REPORTS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyReviews Action.
   * Creates a new instance in reviews of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyReviews: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_REVIEWS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyReviewsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyReviewsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_REVIEWS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyReviewsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyReviewsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_REVIEWS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyOAuthClientApplications Action.
   * Creates a new instance in oAuthClientApplications of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyOAuthClientApplicationsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
}, {
  /**
   * User specific actions
   */
  signup: class implements Action {
    public readonly type = UserActionTypes.SIGNUP;

    constructor(public payload: any, public meta?: any) { }
  },

  signupSuccess: class implements Action {
    public readonly type = UserActionTypes.SIGNUP_SUCCESS;
    public payload: {credentials: any, data: any};

    constructor(credentials: any, data: any, public meta?: any) {
      this.payload = {credentials, data};
    }
  },

  signupFail: class implements Action {
    public readonly type = UserActionTypes.SIGNUP_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});