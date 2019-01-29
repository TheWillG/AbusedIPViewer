import * as blacklistActions from '../actions/blacklist';


export interface State {
  blacklist: any;
}

const initialState: State = {
  blacklist: {},
};

export function reducer(state = initialState, action: blacklistActions.Actions): State {
  switch (action.type) {
    case blacklistActions.NEW_BLACKLIST: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}


export const blacklist = (state: State) => state.blacklist;
