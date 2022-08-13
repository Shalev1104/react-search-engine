
type Type = HTMLInputElement['type'];

export function defaultInput(type: Type) {
    switch (type) {
        
        case 'text':
        case 'search':
        case 'date':
        case 'month':
        case 'week':
        case 'time':
        case 'datetime-local':
        case 'select':
            return String();

        case 'number':
        case 'range':
            return Number();
        
        case 'radio':
        case 'checkbox':
            return Boolean();
        
        default:
            throw new Error(`Unsupported input type: ${type}`);
    }
}