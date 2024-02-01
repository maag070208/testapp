import { MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store";
import { IServerState } from "./server.state";

const getServerIp = ({ ip }: IServerState) => ip;

export const selectServerState: MemoizedSelector<object, IServerState> = createFeatureSelector<IServerState>('server');

export const selectServerIp: MemoizedSelector<object, string> = createSelector(selectServerState, getServerIp);
