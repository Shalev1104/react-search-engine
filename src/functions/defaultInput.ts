
export function defaultInput(type: HTMLInputElement['type']) {
    switch (type) {
        
        case 'text':
        case 'search':
        case 'date':
        case 'month':
        case 'week':
        case 'time':
        case 'datetime-local':
            return String();

        case 'number':
        case 'range':
            return Number();
        
        case 'radio':
        case 'checkbox':
            return Boolean();
        
        case 'select':
            return undefined;

        default:
            throw new Error(`Unsupported input type: ${type}`);
    }
}