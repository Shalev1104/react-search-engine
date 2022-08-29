import React from "react";
import type { Search } from "../types/buttons";

export default function SearchButton({ text = 'Search', onSearch, className, style }: Search) {

    return (
        <button onClick={onSearch} style={style} className={`search-button ${className}`}>
            {text}
        </button>
    )
}