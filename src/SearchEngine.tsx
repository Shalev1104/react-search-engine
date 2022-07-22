import React, { useEffect, useReducer } from "react";
import type { SearchBarField, SearchProvider } from "./types/components";
import { searchReducer } from "./SearchReducer";
import { FilterAction, SearchActions } from "./types/reducer";

type Context = {
    filters: Parameters<typeof searchReducer>[0];
    onChange: ({...params}: FilterAction['payload']) => void;
    reset: () => void;
}

const SearchContext = React.createContext<Context>(null as any);

export const useSearch = () => React.useContext(SearchContext);

export const SearchEngine: React.FC<SearchProvider> = ({ children, onFilter, ...style }) => {
    
    const initialState = Object.fromEntries(React.Children
        .toArray(children)
        .map<SearchBarField>(child => (child as React.ReactElement).props)
        .map(({ id, value }) => [id, value]));
    
    const [state, dispatch] = useReducer(searchReducer, initialState);

    const onChange: Context['onChange'] = ({key, inputType, value}) =>  
        dispatch({
            type: SearchActions.CHANGE_FILTER, 
            payload: {key, value, inputType} 
        });

    const reset: Context['reset'] = () => { 
        dispatch({
            type: SearchActions.RESET,
            payload: { initialState } });
        };

    useEffect(() => onFilter?.(state), [onChange]);
    
    return (
        <SearchContext.Provider value={{filters: state, onChange, reset}}>
            <div {...style}>
                {children}
            </div>
        </SearchContext.Provider>
    )
}