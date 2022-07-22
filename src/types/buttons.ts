import type { StyleElements } from './style';

type Reset = Partial<{
    text: string;
    onReset: () => void;
}> & StyleElements;

type Search = Partial<{
    text: string;
    onSearch: () => void;
}> & StyleElements;

export type { Reset, Search };