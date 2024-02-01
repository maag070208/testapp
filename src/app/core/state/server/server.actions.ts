import { Action } from '@ngrx/store';
import { type } from '../../types/util';
import { IServerState } from './server.state';

export const ServerActionTypes = {
  SET_SERVER_ACTION: type('[Server] SetServerAction'),
};

export class SetServerAction implements Action {
  readonly type = ServerActionTypes.SET_SERVER_ACTION;
  constructor(public payload: IServerState) {}
}

export type ServerAction = SetServerAction;
