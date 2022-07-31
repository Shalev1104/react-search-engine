import { SearchBarField } from "./components";

export enum SearchActions {
    CHANGE_FILTER,
    RESET
}

type Action<Type, Payload> = {
    type: Type;
    payload: Payload;
}

type FilterAction = Action<SearchActions.CHANGE_FILTER, Pick<SearchBarField, 'id' | 'value'>>

type ResetAction = Action<SearchActions.RESET, {
    initialState: ReducerState
}>;

type ReducerState = Record<SearchBarField['id'], SearchBarField['value']>;
type ReducerAction = FilterAction | ResetAction;

export type { ReducerState, ReducerAction, FilterAction, ResetAction };