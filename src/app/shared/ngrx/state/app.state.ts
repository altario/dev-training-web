import { environment } from 'environment';
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { InjectionToken } from '@angular/core';
import { RouterStateUrl, CustomRouterStateSerializer } from '../util';
import * as fromRouter from '@ngrx/router-store';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import {
  LoopbackStateInterface,
  LoopbackReducer,
  LoopbackEffects
} from 'shared/sdk/index';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface IAppState extends LoopbackStateInterface {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const effects = [...LoopbackEffects];

export const reducers: ActionReducerMap<
  IAppState
> = Object.assign(LoopbackReducer, {
  router: fromRouter.routerReducer
});

export const reducerToken = new InjectionToken<ActionReducerMap<IAppState>>(
  'Reducers'
);

export function getReducers() {
  return reducers;
}

export const reducerProvider = [
  { provide: reducerToken, useFactory: getReducers }
];

export function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state: any, action: any) {
    if (action.type === 'SET_ROOT_STATE') {
      return action.payload;
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? [stateSetter, storeFreeze]
  : [];
