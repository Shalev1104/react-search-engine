import React, { useEffect } from "react";
import { useSearch } from "../contexts/SearchEngine";
import type { Reset } from "../types/buttons";

export const ResetButton: React.FC<Reset> = ({ text, onReset, ...style }) => {
    const { reset } = useSearch();

    useEffect(() => onReset?.(), [reset]);

    return (
        <button {...style} onClick={reset}>
            {text}
        </button>
    )
}