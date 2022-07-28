import React from "react";
import type { Search } from "../types/buttons";

export default function SearchButton({ text = 'Search', onSearch, ...style }: Search) {

    return (
        <button {...style} onClick={onSearch}>
            {text}
        </button>
    )
}