/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, ProductCategory } from '../models';

export const ProductCategoryActionTypes = Object.assign(BaseLoopbackActionTypesFactory('ProductCategory'));

export const ProductCategoryActions = Object.assign(BaseLoopbackActionsFactory<ProductCategory>(ProductCategoryActionTypes));
