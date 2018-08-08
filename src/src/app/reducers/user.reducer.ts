import * as UserActions from '../actions/user.action';
import { User }         from '../models/user.model'

export type Action = UserActions.All;

/// Default app state
const defaultState: User = {
  items: [],
  item: {}
}

/// new state object
const newState = (state, newData) => {
  return Object.assign({}, state, newData)
}
/// Reducer function
export function userReducer(state: User = defaultState, action: Action) {

	switch (action.type) {
  		case UserActions.USERLIST:
  			return newState(state, { items: action.payload });

  		case UserActions.USER:
  			return newState(state, { item: action.payload });

  		default:
  			return state;

	}
}