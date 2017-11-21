/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { Review, ReviewInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { ReviewActionTypes } from '../actions';

export interface ReviewsState extends EntityState<Review | ReviewInterface> {};

export const ReviewAdapter: EntityAdapter<Review | ReviewInterface> = createEntityAdapter<Review | ReviewInterface>();

const initialState: ReviewsState = ReviewAdapter.getInitialState({});

const cases = BaseReducerFactory<ReviewsState, Review | ReviewInterface>(ReviewActionTypes, ReviewAdapter);

/**
 * @module ReviewsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible Review reducer.
 */
export function ReviewsReducer(state = initialState, action: LoopbackAction): ReviewsState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getReviewsState = (state: any) => state.Reviews;
export const getReviewsEntities = (state: any) => state.Reviews.entities;
export const getReviewsIds = (state: any) => state.Reviews.ids;

export const getReviews =
  createSelector(getReviewsEntities, getReviewsIds, (entities, ids) => ids.map((id) => entities[id]));

export function getReviewById(id: string) {
  return (state: any) => state.Reviews.entities[id];
}

export function getReviewsById(ids: string[]) {
  return createSelector(getReviewsEntities, (entities) => ids.map((id) => entities[id]));
}
