import React from "react";
import type { SearchBarField } from "../types/components";
import { useSearch } from "../contexts/SearchEngine";

export default function SearchBar({ id, label, className, style, ...rest }: SearchBarField) {
    
    const { filters, onChange } = useSearch();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) =>
        onChange({key: id, inputType:rest.inputType, value: e.target.value});

    return (
        <div className={className} style={style}>
    
            <label htmlFor={id}>{label}</label>
            { (rest.inputType === 'select' && rest.options) ?
                <select
                    id={id}
                    name={id}
                    value={filters[id]}
                    onChange={handleChange}>
                        { Object.keys(rest.options).map(option =>
                            <option key={option} value={rest.options[option]}>{option}</option>) }
                </select>
            :
                <input 
                    type={rest.inputType}
                    id={id} 
                    name={id}
                    value={filters[id]}
                    onChange={handleChange}
                    {...rest.inputType === 'text' && { placeholder: rest.placeholder }}
                />
            }
        </div>
    )
}