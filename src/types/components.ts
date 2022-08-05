
import React from 'react';
import type { Inputs } from './inputs'
import type { StyleElements } from './style';

type SearchProvider = {
    children: React.ReactNode;
    onFilter?: (filtered: any) => void
} & StyleElements;

type SearchBarField = Inputs & StyleElements;

export type { SearchProvider, SearchBarField };