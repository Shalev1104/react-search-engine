import { Reducer } from "react";
import type { ReducerState, ReducerAction, FilterAction, ResetAction } from "../types/reducer";
import { SearchActions } from "../types/reducer";

export const searchReducer: Reducer<ReducerState, ReducerAction> = (state, {type, payload}) => {
    
    switch (type) {

        case SearchActions.CHANGE_FILTER:
            const { value, name } = payload as FilterAction['payload'];
            return {
                    ...state, 
                    [name]: value
            };
            
        case SearchActions.RESET:
            const { initialState } = payload as ResetAction['payload'];
            return initialState;

        default:
            return state;
    }
}