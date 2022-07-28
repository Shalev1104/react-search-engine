import React from "react";
import { useSearch } from "../contexts/SearchEngine";
import type { Reset } from "../types/buttons";

export const ResetButton: React.FC<Reset> = ({ text = 'Reset', onReset, ...style }) => {
    const { reset } = useSearch();

    const handleReset = () => {
        reset();
        onReset?.();
    }

    return (
        <button {...style} onClick={handleReset}>
            {text}
        </button>
    )
}