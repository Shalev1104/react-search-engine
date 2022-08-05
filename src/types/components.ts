
import React from 'react';
import type { Inputs } from './inputs'
import type { StyleElements } from './style';

type SearchProvider = {
    children: React.ReactNode;
    onFilter?: (filtered: any) => void
} & StyleElements;

type SearchBarField = {
    name: string;
    label?: string;
} & StyleElements & Inputs;

export type { SearchProvider, SearchBarField };