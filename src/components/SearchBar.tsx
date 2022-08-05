import React from "react";
import type { SearchBarField } from "../types/components";
import { useSearch } from "../contexts/SearchEngine";
import { matchInput } from '../functions/matchInput';

export default function SearchBar({ name, label, className, style, ...rest }: SearchBarField) {

    const { filters, onChange } = useSearch();
    
    const handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const inputType = target.getAttribute('type');
        const { value, checked } = target as HTMLInputElement;

        onChange({ 
            name, 
            value: matchInput (
                inputType === 'checkbox' ? checked : value,
                inputType
            )
        });
    }

    const attributes = <T,> (x: T) => {
        return {
            onChange: handleChange,
            name,
            id: name,

            ...typeof x === 'boolean' ? 
            { checked: x } : { value: x },

            ...rest
        }
    }

    return (
        <div className={className} style={style}>

            { label && <label htmlFor={name}> {label} </label> }

            { 'options' in rest ?

                <select {...attributes(filters[name])}>

                    { Object.entries(rest.options).map(([key, value]) =>
                            <option key={key} value={value}>{key}</option> )}

                </select>
                :
                <input type={rest.inputType} {...attributes(filters[name])}/>
            }
        </div>
    );
}