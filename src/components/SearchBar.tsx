import React from "react";
import type { SearchBarField } from "../types/components";
import { useSearch } from "../contexts/SearchEngine";
import { matchInput } from '../functions/matchInput';

export default function SearchBar({ id, label, className, style, ...rest }: SearchBarField) {

    const { filters, onChange } = useSearch();
    
    const handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const inputType = target.getAttribute('type');
        const { value, checked } = target as HTMLInputElement;

        onChange({ 
            id, 
            value: matchInput (
                inputType === 'checkbox' ? checked : value,
                inputType
            )
        });
    }

    const attributes = <T,> (x: T) => {
        return {
            id,
            name: id,
            onChange: handleChange,
            
            ...typeof x === 'boolean' ? 
            { checked: x } : { value: x },

            ...'placeholder' in rest && { placeholder: rest.placeholder },
            
            ...'min' && 'max' in rest && { min: rest.min, max: rest.max },
        }
    }

    return (
        <div className={className} style={style}>

            { label && <label htmlFor={id}> {label} </label> }

            { 'options' in rest ?

                <select {...attributes(filters[id])}>

                    { Object.entries(rest.options).map(([key, value]) =>
                            <option key={key} value={value}>{key}</option> )}

                </select>
                :
                <input type={rest.inputType} {...attributes(filters[id])}/>
            }
        </div>
    );
}