/* tslint:disable */
import { EntityAdapter } from '@ngrx/entity';
import { LoopbackAction } from '../models/BaseModels';
import * as filterNodes from 'loopback-filters';

/**
* @module BaseReducerFactory
* @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
* @license MIT
* @description
* Factory function that will be implemented in every custom reducer automatically built
* by the sdk builder.
* It provides the core reducer methods for each model to interact with API
**/
export function BaseReducerFactory<S, T>(actionTypes: any, adapter: EntityAdapter<T>): any {
  let cases = {};

  cases[actionTypes.CREATE_SUCCESS] =
  cases[actionTypes.REPLACE_OR_CREATE_SUCCESS] =
  cases[actionTypes.UPDATE_ATTRIBUTES_SUCCESS] =
  cases[actionTypes.UPSERT_SUCCESS] =
  cases[actionTypes.UPSERT_WITH_WHERE_SUCCESS] =
  cases[actionTypes.REPLACE_BY_ID_SUCCESS] =
  cases[actionTypes.PATCH_OR_CREATE_SUCCESS] =
  cases[actionTypes.PATCH_ATTRIBUTES_SUCCESS] =
  cases[actionTypes.FIND_BY_ID_SUCCESS] =
  cases[actionTypes.FIND_ONE_SUCCESS] =
  (state: any, action: LoopbackAction) => {
    if (action.meta && action.meta.resetStore) {
      state = adapter.removeAll({ ...state });
    }

    if (Array.isArray(action.payload)) {
      let newIds = [...state.ids];
      let newEntities = Object.assign({}, state.entities);
      for (let value of action.payload) {
        newIds = [ ...newIds, value.id ];
        newEntities[value.id] = Object.assign({}, newEntities[value.id], value);
      }

      return Object.assign({}, state, {
        ids: Array.from(new Set(newIds)),
        entities: Object.assign({}, newEntities)
      });
    } else {
      return Object.assign({}, state, {
        ids: Array.from(new Set([ ...state.ids, action.payload.id ])),
        entities: Object.assign({}, state.entities, {
          [action.payload.id]: Object.assign({}, state.entities[action.payload.id], action.payload)
        })
      });
    }
  };

  cases[actionTypes.CREATE_MANY_SUCCESS] =
  cases[actionTypes.FIND_SUCCESS] =
  (state: any, action: LoopbackAction) => {
    if (action.meta && action.meta.resetStore) {
      state = adapter.removeAll({ ...state });
    }

    let newIds = [...state.ids];
    let newEntities = Object.assign({}, state.entities);
    for (let value of action.payload) {
      newIds = [ ...newIds, value.id ];
      newEntities[value.id] = Object.assign({}, newEntities[value.id], value);
    }

    return Object.assign({}, state, {
      ids: Array.from(new Set(newIds)),
      entities: Object.assign({}, newEntities)
    });
  };

  cases[actionTypes.UPDATE_ALL_SUCCESS] =
  (state: any, action: any) => {
    if (action.meta && action.meta.resetStore) {
      return adapter.removeAll({ ...state });
    }

    const idsToUpdate = filterNodes(
      state.ids.map((id: any) => (state.entities as any)[id]), {
      where: action.where
    });
    let newEntities = Object.assign({}, state.entities);
    for (let id of idsToUpdate) {
      newEntities[id] = Object.assign({}, newEntities[id], action.data);
    }

    return Object.assign({}, state, {
      ids: Array.from(new Set([...state.ids])),
      entities: Object.assign({}, newEntities)
    });
  };

  cases[actionTypes.DELETE_BY_ID_SUCCESS] =
  (state: any, action: LoopbackAction) => {
    if (action.meta && action.meta.resetStore) {
      return adapter.removeAll({ ...state });
    }
    return adapter.removeOne(action.payload, state);
  };

  cases[actionTypes.RESET_STATE] =
  (state: any, action: LoopbackAction) => {
    return adapter.removeAll({ ...state });
  };

  return cases;
}
