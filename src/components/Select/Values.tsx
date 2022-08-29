import React from 'react';
import { X } from './Addons';
import { useSelect } from '../../contexts/Select';

const Values: React.FC = () => {

    const { values, placeholder, multiple, onChange } = useSelect();

    if (values.length === 0)
        return <div className="placeholder">{placeholder}</div>

    if (multiple)
        return (
            <div className="values">
                {values.map((value, index) => (
                    <span key={index} className="multiple value" onClick={e => e.stopPropagation()}>
                        <span>{value}</span>
                        <span className="delete" data-value={value} onClick={e => onChange(e.currentTarget.dataset.value, true)}>
                            <X />
                        </span>
                    </span>
                ))}
            </div>
        )
    
    return (
        <div className="value">
            {values[0]}
        </div>
    )
}

export default Values;