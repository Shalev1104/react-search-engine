import { SearchBarField } from "./components";

export enum SearchActions {
    CHANGE_FILTER,
    RESET
}

type Action<Type, Payload> = {
    type: Type;
    payload: Payload;
}

type FilterAction = Action<SearchActions.CHANGE_FILTER, {
    key: SearchBarField['id'],
    value: SearchBarField['value'],
    inputType: SearchBarField['inputType']
}>;

type ResetAction = Action<SearchActions.RESET, {
    initialState: ReducerState
}>;

type ReducerState = Record<SearchBarField['id'], SearchBarField['value']>;
type ReducerAction = FilterAction | ResetAction;

export type { ReducerState, ReducerAction, FilterAction, ResetAction };