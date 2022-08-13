import React from "react";
import type { SearchBarField } from "../types/components";
import { useSearch } from "../contexts/SearchEngine";
import { matchInput } from '../functions/matchInput';

export default function SearchBar({ type, name, label, value, className, style, ...rest }: SearchBarField) {

    const { filters, onChange } = useSearch();
    
    const handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { value, checked } = target as HTMLInputElement;

        onChange({ 
            name, 
            value: matchInput (
                type === 'checkbox' || type === 'radio' ? checked : value,
                type
            )
        });
    }

    const isDropdown = 'options' in rest;

    const attributes = {
        onChange: handleChange,
        name,
        id: name,
        ...rest,
        
        [typeof filters[name] === 'boolean' ? 'checked' : 'value']: filters[name],
        ...isDropdown ? {options: undefined} : {type},
    }

    const renderOptions = () => {
        if (!('options' in rest)) return null;
        const { options } = rest;

        return (
            Object.entries(options)
                .map(([key, value]) => options instanceof Array ? 
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

                <select {...attributes} >
                    {renderOptions()}
                </select>
                :
                <input {...attributes} />
            }
        </div>
    );
}