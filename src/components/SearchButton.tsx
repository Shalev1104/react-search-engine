import React from "react";
import type { Search } from "../types/buttons";

export const SearchButton: React.FC<Search> = ({ text, onSearch, ...style }) => {

    return (
        <button {...style} onClick={onSearch}>
            {text}
        </button>
    )
}