import { ServerActionTypes, ServerAction } from './server.actions';
import { initialServerState } from './server.state';

export const ServerReducer = (
  state = initialServerState,
  action: ServerAction
) => {
  switch (action.type) {
    case ServerActionTypes.SET_SERVER_ACTION:
      return { ...state, ip: action.payload.ip};
    default:
      return state;
  }
};
