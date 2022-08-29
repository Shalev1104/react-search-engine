
type Type = HTMLInputElement['type'] | null;

export function matchInput(value: any, type: Type) {
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
            return value

        default:
            throw new Error(`Unsupported input type: ${type}`);
    }
}