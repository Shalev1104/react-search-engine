import { Reducer } from "react";
import type { ReducerState, ReducerAction, FilterAction, ResetAction } from "../types/reducer";
import { SearchActions } from "../types/reducer";

const matchInput = (inputType: FilterAction['payload']['inputType'], value: FilterAction['payload']['value']) => {
    switch (inputType) {

        case 'select':
        case 'number':
            return Number(value);

        case 'text':
            return value;

        default:
            throw new Error(`Unknown input type: ${inputType}`);
    }
}

export const searchReducer: Reducer<ReducerState, ReducerAction> = (state, {type, payload}) => {
    
    switch (type) {

        case SearchActions.CHANGE_FILTER:
            const { inputType, value, key } = payload as FilterAction['payload'];
            return {
                    ...state, 
                    [key]: matchInput(inputType, value)
            };
            
        case SearchActions.RESET:
            const { initialState } = payload as ResetAction['payload'];
            return initialState;

        default:
            return state;
    }
}