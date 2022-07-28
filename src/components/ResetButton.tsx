import React from "react";
import { useSearch } from "../contexts/SearchEngine";
import type { Reset } from "../types/buttons";

export default function ResetButton({ text = 'Reset', onReset, ...style }: Reset) {
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