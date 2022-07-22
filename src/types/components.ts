import type { SelectInput, NumberInput, TextInput } from './inputs';
import type { StyleElements } from './style';

type SearchProvider = {
    children: React.ReactNode;
    onFilter?: (filtered: any) => void
} & StyleElements;

type SearchBarField = {
    id: string;
    label: string;
} & StyleElements & (SelectInput | TextInput | NumberInput);

export type { SearchProvider, SearchBarField };