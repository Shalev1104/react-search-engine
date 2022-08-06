import React from "react";
import type { SearchBarField } from "../types/components";
import { useSearch } from "../contexts/SearchEngine";
import { matchInput } from '../functions/matchInput';

export default function SearchBar({ type, name, label, className, style, ...rest }: SearchBarField) {

    const { filters, onChange } = useSearch();
    
    const handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { value, checked } = target as HTMLInputElement;

        onChange({ 
            name, 
            value: matchInput (
                type === 'checkbox' ? checked : value,
                type
            )
        });
    }

    const isDropdown = 'options' in rest;

    const attributes = <T,> (x: T) => {
        return {
            onChange: handleChange,
            name,
            id: name,
            ...rest,
            options: undefined,
            
            ...typeof x === 'boolean' ? 
            { checked: x } : { value: x },
            
            ...!isDropdown && { type },
        }
    }

    const renderOptions = () => {
        if (!('options' in rest)) return undefined;

        return (
            Object.entries(rest.options)
                .map(([key, value]) => rest.options instanceof Array ? 
                    [value, value] : [key, value])
                .filter(([key]) => isNaN(Number(key)))
                .map(([key, value]) => 
                    <option key={key} value={value}>{key}</option> )
        )
    }

    return (
        <div className={className} style={style}>

            { label && <label htmlFor={name}> {label} </label> }

            { isDropdown ?

                <select {...attributes(filters[name])}>
                    {renderOptions()}
                </select>
                :
                <input {...attributes(filters[name])}/>
            }
        </div>
    );
}