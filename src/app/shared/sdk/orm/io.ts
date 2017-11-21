/* tslint:disable */
import { map, takeUntil, finalize } from 'rxjs/operators'
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Store } from '@ngrx/store';

import { RealTime } from '../services';
import { resolver } from '../effects/resolver';

import * as models from '../models';
import { LoopBackFilter, FireLoopRef } from '../models';

export function createIO(
  filter: LoopBackFilter,
  store: Store<any>,
  destroyStream$: AsyncSubject<any>,
  model: any,
  realTime: RealTime,
  meta?: any
): void {
  let refs = Object.assign({
    root: {
      ref: realTime.FireLoop.ref<any>(model)
    }
  }, includeReferences(filter, 'root', model, realTime));

  refs.root.ref.on('change', filter).pipe(
      map((data: any) => {
        if (!Array.isArray(data)) {
          data = [data];
        }

        const resolved = resolver({data, meta}, model.getModelName(), 'findSuccess');
        for (const item of resolved) {
          store.dispatch(item);
        }
        return data;
      }),
      finalize(() => {
        for (let key in refs) {
          if (refs.hasOwnProperty(key)) {
            if (refs[key].hasOwnProperty('on')) {
              refs[key].on.unsubscribe();
            }

            if (refs[key].hasOwnProperty('ref')) {
              refs[key].ref.dispose();
            }
          }
        }

        refs = null;
      }),
      takeUntil(destroyStream$)
    ).subscribe((data: any) => {
      if (!filter.include) {
        return;
      }

      const ids = [];

      for (const item of data) {
        ids.push(item[model.getModelDefinition().idName]);
      }

      if (refs['root'].ids &&
        !asChanged(refs['root'].ids, ids)) {
        return;
      }
      
      refs['root'].ids = ids;

      for (const include of normalizeInclude(filter.include)) {
        let relationSchema: any;
        if (isPlainObject(include)) {
          relationSchema = model.getModelDefinition().relations[include.relation];
        } else {
          relationSchema = model.getModelDefinition().relations[include];
        }

        if (refs['root.' + include.relation] && refs['root.' + include.relation].on) {
          refs['root.' + include.relation].on.unsubscribe();
        }

        const newFilter: LoopBackFilter = Object.assign({}, include.scope);
        if (!newFilter.where) {
          newFilter.where = {};
        }
        newFilter.where[relationSchema.keyTo] = {inq: ids};

        includeOns('root.' + include.relation, refs, newFilter, store, model, relationSchema, meta);
      }
    });
}

function includeReferences(
  filter: LoopBackFilter,
  rootRefName: string,
  model: any,
  realTime: RealTime
) {
  if (!filter.include) {
    return;
  }

  let refs: any = {};

  for (const include of normalizeInclude(filter.include)) {
    let relationSchema: any;
    if (isPlainObject(include)) {
      relationSchema = model.getModelDefinition().relations[include.relation];
    } else {
      relationSchema = model.getModelDefinition().relations[include];
    }

    refs[rootRefName + '.' + include.relation] = {
      ref: realTime.FireLoop.ref<any>(models[relationSchema.model])
    };

    refs = Object.assign({}, refs, includeReferences(include.scope || include, rootRefName + '.' + include.relation, models[relationSchema.model], realTime));
  }

  return refs;
}

function includeOns(
  refName: string,
  refs: any,
  filter: LoopBackFilter,
  store: Store<any>,
  model: any,
  relationSchema: any,
  meta?: any
) {
  refs[refName].on = refs[refName].ref.on('change', filter).pipe(
      map((data: any) => {
        if (!Array.isArray(data)) {
          data = [data];
        }

        const resolved = resolver({data, meta}, models[relationSchema.model].getModelName(), 'findSuccess');
        for (const item of resolved) {
          store.dispatch(item);
        }
        return data;
      })
    ).subscribe((data: any) => {
      // console.log(refName, data);
      if (!filter.include) {
        return;
      }

      const ids = [];

      for (const item of data) {
        ids.push(item[model.getModelDefinition().idName]);
      }

      if (refs[refName].ids &&
        !asChanged(refs[refName].ids, ids)) {
        return;
      }
      
      refs[refName].ids = ids;

      for (const include of normalizeInclude(filter.include)) {
        let relSchema: any;
        if (isPlainObject(include)) {
          relSchema = model.getModelDefinition().relations[include.relation];
        } else {
          relSchema = model.getModelDefinition().relations[include];
        }

        if (refs[refName + '.' + include.relation] && refs[refName + '.' + include.relation].on) {
          refs[refName + '.' + include.relation].on.unsubscribe();
        }

        const newFilter: LoopBackFilter = Object.assign({}, include.scope);
        if (!newFilter.where) {
          newFilter.where = {};
        }
        newFilter.where[relSchema.keyTo] = {inq: ids};

        includeOns(refName + '.' + include.relation, refs, newFilter, store, model, relSchema, meta);
      }
    });
}

/*!
 * Normalize the include to be an array
 * @param include
 * @returns {*}
 */
function normalizeInclude(include) {
  let newInclude;
  if (typeof include === 'string') {
    return [include];
  } else if (isPlainObject(include)) {
    return [include];
  } else if (Array.isArray(include)) {
    newInclude = [];
    let i: number;
    let n: number;
    for (i = 0, n = include.length; i < n; i++) {
      const subIncludes = normalizeInclude(include[i]);
      newInclude = newInclude.concat(subIncludes);
    }
    return newInclude;
  } else {
    return include;
  }
}

function isPlainObject(obj: any): boolean {
  return (typeof obj === 'object') && (obj !== null) &&
    (obj.constructor === Object);
}

function asChanged(original: string[], latest: string[]): boolean {
  return (original.length !== latest.length) && !original.every((element, index) => {
    return element === latest[index]; 
  });
}
