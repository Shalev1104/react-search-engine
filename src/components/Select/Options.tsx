import React, { useMemo } from 'react';
import Option from './Option';
import {useSelect} from '../../contexts/Select';

const Options: React.FC = () => {
    const { options } = useSelect();

    const adjustedOptions = useMemo(() => options
            .map(([key, value]) => options instanceof Array ? [value, value] : [key, value])
            .filter(([key]) => isNaN(Number(key)))
        , [options]);
    
    return (
        <ul className="options">
            {adjustedOptions.map(([key, value], index) => 
                    <Option key={index} label={key} value={value} />)}
        </ul>
    )
}

export default Options;