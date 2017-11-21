/* tslint:disable */
import { map, catchError, mergeMap } from 'rxjs/operators'
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';
import { Injectable, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { LoopbackAction } from '../models/BaseModels';
import { BaseLoopbackEffects } from './base';
import { resolver } from './resolver';

import * as actions from '../actions';
import { PostActionTypes, PostActions } from '../actions/Post';
import { LoopbackErrorActions } from '../actions/error';
import { PostApi } from '../services/index';

@Injectable()
export class PostEffects extends BaseLoopbackEffects {
  @Effect()
  public getUser$ = this.actions$
    .ofType(PostActionTypes.GET_USER).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.getUser(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
            of(new PostActions.getUserSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new PostActions.getUserFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getOrganization$ = this.actions$
    .ofType(PostActionTypes.GET_ORGANIZATION).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.getOrganization(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Organization', 'findSuccess'),
            of(new PostActions.getOrganizationSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new PostActions.getOrganizationFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdVotes$ = this.actions$
    .ofType(PostActionTypes.FIND_BY_ID_VOTES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.findByIdVotes(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Vote', 'findByIdSuccess'),
            of(new PostActions.findByIdVotesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new PostActions.findByIdVotesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdS3Images$ = this.actions$
    .ofType(PostActionTypes.FIND_BY_ID_S3IMAGES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.findByIdS3Images(action.payload.id, action.payload.fk).pipe(
          map((response: any) => new PostActions.findByIdS3ImagesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new PostActions.findByIdS3ImagesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdS3Images$ = this.actions$
    .ofType(PostActionTypes.DESTROY_BY_ID_S3IMAGES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.destroyByIdS3Images(action.payload.id, action.payload.fk).pipe(
          map((response: any) => new PostActions.destroyByIdS3ImagesSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new PostActions.destroyByIdS3ImagesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdS3Images$ = this.actions$
    .ofType(PostActionTypes.UPDATE_BY_ID_S3IMAGES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.updateByIdS3Images(action.payload.id, action.payload.fk, action.payload.data).pipe(
          map((response: any) => new PostActions.updateByIdS3ImagesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new PostActions.updateByIdS3ImagesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdReplies$ = this.actions$
    .ofType(PostActionTypes.FIND_BY_ID_REPLIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.findByIdReplies(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Post', 'findByIdSuccess'),
            of(new PostActions.findByIdRepliesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new PostActions.findByIdRepliesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public linkReplies$ = this.actions$
    .ofType(PostActionTypes.LINK_REPLIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.linkReplies(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
          of(new actions['ReplyActions'].createSuccess(response, action.meta)),
          of(new PostActions.linkRepliesSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new PostActions.linkRepliesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public unlinkReplies$ = this.actions$
    .ofType(PostActionTypes.UNLINK_REPLIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.unlinkReplies(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
          of(new actions['ReplyActions'].deleteByIdSuccess(response.id, action.meta)),
          of(new PostActions.unlinkRepliesSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new PostActions.unlinkRepliesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getReplying$ = this.actions$
    .ofType(PostActionTypes.GET_REPLYING).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.getReplying(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
            of(new PostActions.getReplyingSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new PostActions.getReplyingFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateReplying$ = this.actions$
    .ofType(PostActionTypes.UPDATE_REPLYING).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.updateReplying(action.payload.id, action.payload.data).pipe(
          map((response: any) => new PostActions.updateReplyingSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new PostActions.updateReplyingFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyReplying$ = this.actions$
    .ofType(PostActionTypes.DESTROY_REPLYING).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.destroyReplying(action.payload.id).pipe(
          map((response: any) => new PostActions.destroyReplyingSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new PostActions.destroyReplyingFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdShared$ = this.actions$
    .ofType(PostActionTypes.FIND_BY_ID_SHARED).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.findByIdShared(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'User', 'findByIdSuccess'),
            of(new PostActions.findByIdSharedSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new PostActions.findByIdSharedFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public linkShared$ = this.actions$
    .ofType(PostActionTypes.LINK_SHARED).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.linkShared(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
          of(new actions['ShareActions'].createSuccess(response, action.meta)),
          of(new PostActions.linkSharedSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new PostActions.linkSharedFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public unlinkShared$ = this.actions$
    .ofType(PostActionTypes.UNLINK_SHARED).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.unlinkShared(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
          of(new actions['ShareActions'].deleteByIdSuccess(response.id, action.meta)),
          of(new PostActions.unlinkSharedSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new PostActions.unlinkSharedFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdReports$ = this.actions$
    .ofType(PostActionTypes.FIND_BY_ID_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.findByIdReports(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Report', 'findByIdSuccess'),
            of(new PostActions.findByIdReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new PostActions.findByIdReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdReports$ = this.actions$
    .ofType(PostActionTypes.DESTROY_BY_ID_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.destroyByIdReports(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'deleteByIdSuccess'),
            of(new PostActions.destroyByIdReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new PostActions.destroyByIdReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdReports$ = this.actions$
    .ofType(PostActionTypes.UPDATE_BY_ID_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.updateByIdReports(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Report', 'findByIdSuccess'),
            of(new PostActions.updateByIdReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new PostActions.updateByIdReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getVotes$ = this.actions$
    .ofType(PostActionTypes.GET_VOTES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.getVotes(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Vote', 'findSuccess'),
            of(new PostActions.getVotesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new PostActions.getVotesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getS3Images$ = this.actions$
    .ofType(PostActionTypes.GET_S3IMAGES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.getS3Images(action.payload.id, action.payload.filter).pipe(
          map((response: any) => new PostActions.getS3ImagesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new PostActions.getS3ImagesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createS3Images$ = this.actions$
    .ofType(PostActionTypes.CREATE_S3IMAGES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.createS3Images(action.payload.id, action.payload.data).pipe(
          map((response: any) => new PostActions.createS3ImagesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new PostActions.createS3ImagesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteS3Images$ = this.actions$
    .ofType(PostActionTypes.DELETE_S3IMAGES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.deleteS3Images(action.payload.id).pipe(
          map((response: any) => new PostActions.deleteS3ImagesSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new PostActions.deleteS3ImagesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getReplies$ = this.actions$
    .ofType(PostActionTypes.GET_REPLIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.getReplies(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
            of(new PostActions.getRepliesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new PostActions.getRepliesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getShared$ = this.actions$
    .ofType(PostActionTypes.GET_SHARED).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.getShared(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
            of(new PostActions.getSharedSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new PostActions.getSharedFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getReports$ = this.actions$
    .ofType(PostActionTypes.GET_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.getReports(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'findSuccess'),
            of(new PostActions.getReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new PostActions.getReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createReports$ = this.actions$
    .ofType(PostActionTypes.CREATE_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.createReports(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'findSuccess'),
            of(new PostActions.createReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new PostActions.createReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteReports$ = this.actions$
    .ofType(PostActionTypes.DELETE_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.deleteReports(action.payload.id).pipe(
          map((response: any) => new PostActions.deleteReportsSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new PostActions.deleteReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public s3PUTSignedUrl$ = this.actions$
    .ofType(PostActionTypes.S3_P_U_T_SIGNED_URL).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.s3PUTSignedUrl(action.payload.id, action.payload.key, action.payload.options).pipe(
          map((response: any) => new PostActions.s3PUTSignedUrlSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new PostActions.s3PUTSignedUrlFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public s3GETSignedUrl$ = this.actions$
    .ofType(PostActionTypes.S3_G_E_T_SIGNED_URL).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.s3GETSignedUrl(action.payload.id, action.payload.key).pipe(
          map((response: any) => new PostActions.s3GETSignedUrlSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new PostActions.s3GETSignedUrlFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyS3Images$ = this.actions$
    .ofType(PostActionTypes.CREATE_MANY_S3IMAGES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.createManyS3Images(action.payload.id, action.payload.data).pipe(
          map((response: any) => new PostActions.createManyS3ImagesSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new PostActions.createManyS3ImagesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyReports$ = this.actions$
    .ofType(PostActionTypes.CREATE_MANY_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.post.createManyReports(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'findSuccess'),
            of(new PostActions.createManyReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new PostActions.createManyReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

    /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Decorate base effects metadata
   */
  @Effect() public create$;
  @Effect() public createMany$;
  @Effect() public findById$;
  @Effect() public find$;
  @Effect() public findOne$;
  @Effect() public updateAll$;
  @Effect() public deleteById$;
  @Effect() public updateAttributes$;
  @Effect() public upsert$;
  @Effect() public upsertWithWhere$;
  @Effect() public replaceOrCreate$;
  @Effect() public replaceById$;
  @Effect() public patchOrCreate$;
  @Effect() public patchAttributes$;

  constructor(
    @Inject(Actions) public actions$: Actions,
    @Inject(PostApi) public post: PostApi
  ) {
    super(actions$, post, 'Post', PostActionTypes, PostActions);
  }
}
