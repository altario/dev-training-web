/* tslint:disable */

import { map, finalize } from 'rxjs/operators'
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { RealTime } from '../../services';
import { createIO } from '../io';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { OrmBase } from '../base';
import { applyFilter, toArray, filterById } from '../filter';

import * as models from '../../models';
import { StripeSource, StripeSourceInterface, LoopBackFilter } from '../../models';
import { StripeSourceActions } from '../../actions';

export class OrmStripeSource extends OrmBase<StripeSource | StripeSourceInterface> {
  constructor(protected store: Store<StripeSource>, protected realTime?: RealTime) {
    super(store, StripeSource, StripeSourceActions, realTime);
  }
}
