import React, { useState } from 'react';
import Options from '../components/Select/Options';
import { ChevronUp, ChevronDown, X } from '../components/Select/Addons';
import Values from '../components/Select/Values';

type SelectProps<T = React.ReactText> = { 
    options: [string, T][]
    values: T[]
    onChange: Function
} & Partial<{
    placeholder: string;
    autoComplete: string
    autoFocus: boolean
    multiple: boolean
    height: number
    width: number
}>
const SelectContext = React.createContext<SelectProps>(null as any);

export const useSelect = () => React.useContext(SelectContext);

const Select: React.FC<SelectProps> = ({ values = [], placeholder = "Pick an option", ...rest }) => {
    const { multiple, onChange, width, height } = rest;

    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen(!open);
    
    const handleChange = (value: React.ReactText, checked = false) => {
        const selectValue = () => multiple? [...values, value]: [value]
        const deleteValue = () => [...values.filter(val => val !== value)]

        onChange(checked? deleteValue(): selectValue());
        
        if (!multiple)  toggleOpen();
    }

    const clearValues = () => onChange([]);

    return (
        <SelectContext.Provider value={{...rest, values, placeholder, onChange: handleChange}}>
            <div tabIndex={0} onBlur={() => open && toggleOpen()}>
                <div className="select" onClick={toggleOpen} style={{width, height}}>
                    <Values />
                    
                    <span className="indicators">
                        <span className="indicator" onClick={clearValues}>
                            <X />
                        </span>
                        <span className="separator" />
                        <span className="indicator">
                            { open ? <ChevronUp /> : <ChevronDown /> }
                        </span>
                    </span>
                
                </div>
                {open && <Options /> }
            </div>
        </SelectContext.Provider>
    )
}

export default Select;