import React, { useMemo } from 'react';
import { Check } from './Addons';
import { useSelect } from '../../contexts/Select';

type OptionProps = {
    value: React.ReactText
    label: React.ReactText
}

const Option: React.FC<OptionProps> = ({ label, value }) => {
    const {onChange, multiple, values} = useSelect();
    const selected = useMemo(() => values.includes(value), [values, value]);

    return (
        <li
            key={label}
            data-value={value}
            className={`option ${selected ? 'selected' : ''}`}
            onClick={e => onChange(e.currentTarget.dataset.value, selected) }>
            { multiple && (
                <span className="checkbox">
                    { selected && <Check /> }
                </span>
            )}
            {label}
        </li>
    )
}

export default Option;