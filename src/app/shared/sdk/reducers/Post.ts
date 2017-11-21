/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { Post, PostInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { PostActionTypes } from '../actions';

export interface PostsState extends EntityState<Post | PostInterface> {};

export const PostAdapter: EntityAdapter<Post | PostInterface> = createEntityAdapter<Post | PostInterface>();

const initialState: PostsState = PostAdapter.getInitialState({});

const cases = BaseReducerFactory<PostsState, Post | PostInterface>(PostActionTypes, PostAdapter);

/**
 * @module PostsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible Post reducer.
 */
export function PostsReducer(state = initialState, action: LoopbackAction): PostsState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getPostsState = (state: any) => state.Posts;
export const getPostsEntities = (state: any) => state.Posts.entities;
export const getPostsIds = (state: any) => state.Posts.ids;

export const getPosts =
  createSelector(getPostsEntities, getPostsIds, (entities, ids) => ids.map((id) => entities[id]));

export function getPostById(id: string) {
  return (state: any) => state.Posts.entities[id];
}

export function getPostsById(ids: string[]) {
  return createSelector(getPostsEntities, (entities) => ids.map((id) => entities[id]));
}
