import { Action } from '@ngrx/store';
import { User as UserModel  }        from '../models/user.model'

export const USERLIST = 'USERLIST';
export const USER     = 'USER';


export class UserList implements Action {
  readonly type = USERLIST;
  /// user a constructor to send a payload with the action
   constructor(public payload: { items: UserModel[] }) {}
}

export class User implements Action {
  readonly type = USER;
  constructor(public payload:{ item: UserModel }) { }
}


export type All
  = User
  | UserList;