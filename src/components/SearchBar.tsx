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

    const attributes = <T,> (x: T) => {
        return {
            onChange: handleChange,
            name,
            id: name,
            ...rest,
            
            ...typeof x === 'boolean' ? 
            { checked: x } : { value: x },
            
            ...type !== 'select' && { type },
        }
    }

    return (
        <div className={className} style={style}>

            { label && <label htmlFor={name}> {label} </label> }

            { 'options' in rest ?

                <select {...attributes(filters[name])}>

                    { Object.entries(rest.options)
                    .map(([key, value]) => rest.options instanceof Array ? 
                        [value, value] : [key, value])
                    .filter(([key]) => isNaN(Number(key)))
                    .map(([key, value]) => 
                        <option key={key} value={value}>{key}</option> )}

                </select>
                :
                <input {...attributes(filters[name])}/>
            }
        </div>
    );
}