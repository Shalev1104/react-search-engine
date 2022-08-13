
import React from 'react';
import type { Inputs } from './inputs'
import type { StyleElements } from './style';
import type { ReducerState } from './reducer';

type SearchProvider = {
    children: React.ReactNode;
    onFilter?: (filtered: ReducerState) => void
} & StyleElements;

type SearchBarField = Inputs

export type { SearchProvider, SearchBarField };