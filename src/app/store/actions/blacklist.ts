import { Action } from '@ngrx/store';

export const NEW_BLACKLIST = '[Blacklists] New Blacklist';

export class NewBlacklistAction implements Action {
  readonly type = NEW_BLACKLIST;

  constructor(public payload: any) { }
}

export type Actions
  =  NewBlacklistAction;
