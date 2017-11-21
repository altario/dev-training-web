/* tslint:disable */
import { SDKToken, LoopbackAction } from '../models/BaseModels';
import { LoopbackAuthActionTypes } from '../actions/auth';
import { UserActionTypes } from '../actions/User';

const initialState: SDKToken = {
  id: null,
  ttl: null,
  scopes: null,
  created: null,
  userId: null,
  user: null,
  rememberMe: null
};

/**
 * @module LoopbackAuthReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible authentication reducer.
 */
export function LoopbackAuthReducer(state = initialState, action: LoopbackAction): SDKToken {
  switch (action.type) {
    case UserActionTypes.LOGIN_SUCCESS:
    case LoopbackAuthActionTypes.SET_TOKEN:
    case LoopbackAuthActionTypes.LOAD_TOKEN_SUCCESS: {
      const token: SDKToken = action.payload;

      return Object.assign({}, token);
    }

    case LoopbackAuthActionTypes.SET_USER: {
      const user: any = action.payload;
      let updateState = Object.assign({}, state);

      updateState.user = user;
      updateState.userId = user.id;

      return updateState;
    }

    case UserActionTypes.LOGOUT_SUCCESS:
    case UserActionTypes.LOGOUT_FAIL: {
      return Object.assign({}, initialState);
    }

    case LoopbackAuthActionTypes.UPDATE_USER_PROPERTIES_SUCCESS:
    case LoopbackAuthActionTypes.UPDATE_USER_STATE_SUCCESS: {
      const userProperties: any = action.payload;
      let updateState = Object.assign({}, state);

      updateState.user = Object.assign({}, updateState.user, userProperties);

      return updateState;
    }

    default: {
      return state;
    }
  }
}

export const getLoopbackAuthState = (state: any) => state.LoopbackAuth;
export const getLoopbackAuthToken = (state: any) => state.LoopbackAuth;
export const getLoopbackAuthAccount = (state: any) => state.LoopbackAuth.user;
export const getLoopbackAuthAccountId = (state: any) => state.LoopbackAuth.userId;
