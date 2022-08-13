
type Value = HTMLInputElement['value'] | HTMLInputElement['checked'];
type Type = HTMLInputElement['type'] | null;

export function matchInput(value: Value, type: Type) {
    const parsedNumber = Number(value);
    
    switch (type) {
        
        case 'number':
        case 'range':
            return parsedNumber;
        
        case 'text':
        case 'search':
        case 'checkbox':
        case 'radio':
        case 'date':
        case 'month':
        case 'week':
        case 'time':
        case 'datetime-local':
            return value;
            
        case 'select':
            return isNaN(parsedNumber) ? value : parsedNumber;

        default:
            throw new Error(`Unsupported input type: ${type}`);
    }
}