import React, { useMemo } from "react";
import type { SearchBarField } from "../types/components";
import { useSearch } from "../contexts/SearchEngine";
import { matchInput } from '../functions/matchInput';
import Input from './Input';
import Select from '../contexts/Select';

export default function SearchBar({ label, className, style, ...attributes }: SearchBarField) {

    const { filters, onChange } = useSearch();
    const { name, type } = attributes;
    
    const value = useMemo(() => filters[name], [filters, name]);

    const handleChange = (changed: typeof value) => {
        onChange({ 
            name,
            value: matchInput(changed, type)
        });
    }

    // const isDropdown = () => 'options' in attributes;

    const renderLabel = () => {
        if (!label) return null;

        return (
            <label htmlFor={name}>{label}</label>
        )
    }

    return (

        <div className={`search-bar${className? ' ' + className: ''}`} style={style}>

            {renderLabel()}
            
            { 'options' in attributes ?
                
                <Select 
                    {...attributes}
                    options={Object.entries(attributes.options)}
                    onChange={handleChange}
                    values={value as string[]}
                />
                :
                <Input 
                    {...attributes} 
                    onChange={handleChange} 
                    value={value as string | number | boolean}
                />
            }
        </div>
    );
}