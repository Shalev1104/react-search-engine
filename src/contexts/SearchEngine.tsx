import React, { useEffect, useReducer } from "react";
import { SearchProvider, SearchBarField } from "../types/components";
import { searchReducer } from "../reducers/SearchReducer";
import { FilterAction, SearchActions } from "../types/reducer";
import SearchBar from '../components/SearchBar';
import { defaultInput } from '../functions/defaultInput';

type Context = {
    filters: Parameters<typeof searchReducer>[0];
    onChange: ({...params}: FilterAction['payload']) => void;
    reset: () => void;
}

const SearchContext = React.createContext<Context>(null as any);

export const useSearch = () => React.useContext(SearchContext);

export default function SearchEngine({ children, onFilter, ...style }: SearchProvider) {
    
    const initialState = Object.fromEntries(React.Children
        .toArray(children)
        .filter(child => React.isValidElement(child))
        .filter(childElement => (childElement as JSX.Element).type === SearchBar)
        .map<SearchBarField>(relevantChilds => (relevantChilds as JSX.Element).props)
        .map(({ id, value, inputType }) => [id, value || defaultInput(inputType) ]));

    const [state, dispatch] = useReducer(searchReducer, initialState);

    const onChange: Context['onChange'] = ({ id, value }) =>
        dispatch({
            type: SearchActions.CHANGE_FILTER, 
            payload: { id, value } 
        });

    const reset: Context['reset'] = () => { 
        dispatch({
            type: SearchActions.RESET,
            payload: { initialState } });
        };

    useEffect(() => onFilter?.(state), [onChange]);
    
    return (
        <SearchContext.Provider value={{ filters: state, onChange, reset }}>
            <div {...style}>
                {children}
            </div>
        </SearchContext.Provider>
    )
}