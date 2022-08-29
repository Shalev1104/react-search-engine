import React from 'react';
import { SearchBarField } from '../types/components';

type InputTypes = (
    Omit<SearchBarField, 'label' | 'className' | 'style'> & 
    { onChange: (value: SearchBarField['value']) => void }
);

const Input: React.FC<InputTypes> = ({value, onChange, ...rest}) => {
    const { name, type, width, height } = rest;
    
    const attributes = {
        id: name,
        [typeof value === 'boolean' ? 'checked' : 'value']: value,

        ...rest,
    }

    return (
        <input 
            {...attributes} 
            style={{width, height}}
            onChange={e => onChange((type === 'checkbox' || type === 'radio') ? 
                e.target.checked : e.target.value)}
        />
    )
}

export default Input;